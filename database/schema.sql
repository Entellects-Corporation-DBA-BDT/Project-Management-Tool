-- Mock database for the FlowSpace project management tool.
-- Run after workspaces.sql, since projects reference workspaces:
--   psql -U postgres -f workspaces.sql
--   psql -U postgres -d flowspace_db -f schema.sql

\c flowspace_db

-- Keeps updated_at columns current on every UPDATE, across any table that has one.
CREATE OR REPLACE FUNCTION set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Projects: the container for a team's work (portfolio -> project -> tasks).
CREATE TABLE projects (
    id              SERIAL PRIMARY KEY,
    workspace_id    INTEGER NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
    name            VARCHAR(150) NOT NULL,
    description     TEXT,
    status          VARCHAR(20) NOT NULL DEFAULT 'active'
                        CHECK (status IN ('active', 'on_hold', 'completed', 'archived')),
    start_date      DATE NOT NULL,
    end_date        DATE,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_projects_workspace_id ON projects(workspace_id);

CREATE TRIGGER trg_projects_updated_at
    BEFORE UPDATE ON projects
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();

-- Milestones: key dates on a project timeline, used to anchor the Gantt chart.
CREATE TABLE milestones (
    id              SERIAL PRIMARY KEY,
    project_id      INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    name            VARCHAR(150) NOT NULL,
    due_date        DATE NOT NULL,
    is_complete     BOOLEAN NOT NULL DEFAULT FALSE,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_milestones_project_id ON milestones(project_id);

-- Tasks: individual Gantt chart rows tied to a project.
CREATE TABLE tasks (
    id              SERIAL PRIMARY KEY,
    project_id      INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    milestone_id    INTEGER REFERENCES milestones(id) ON DELETE SET NULL,
    name            VARCHAR(200) NOT NULL,
    assignee        VARCHAR(100),
    priority        VARCHAR(10) NOT NULL DEFAULT 'medium'
                        CHECK (priority IN ('low', 'medium', 'high', 'urgent')),
    start_date      DATE NOT NULL,
    duration_days   INTEGER NOT NULL CHECK (duration_days > 0),
    progress        SMALLINT NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
    color           VARCHAR(7) DEFAULT '#6366f1',
    depends_on      INTEGER REFERENCES tasks(id) ON DELETE SET NULL,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_tasks_project_id ON tasks(project_id);
CREATE INDEX idx_tasks_milestone_id ON tasks(milestone_id);

CREATE TRIGGER trg_tasks_updated_at
    BEFORE UPDATE ON tasks
    FOR EACH ROW EXECUTE FUNCTION set_updated_at();
