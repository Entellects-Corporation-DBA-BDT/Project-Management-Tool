-- Mock database for the FlowSpace project management tool.
-- Run with: psql -U postgres -f schema.sql

CREATE DATABASE flowspace_db;

\c flowspace_db

-- Projects: the container for a team's work (portfolio -> project -> tasks).
CREATE TABLE projects (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(150) NOT NULL,
    description     TEXT,
    workspace_name  VARCHAR(100) NOT NULL,
    status          VARCHAR(20) NOT NULL DEFAULT 'active'
                        CHECK (status IN ('active', 'on_hold', 'completed', 'archived')),
    start_date      DATE NOT NULL,
    end_date        DATE,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Tasks: individual Gantt chart rows tied to a project.
CREATE TABLE tasks (
    id              SERIAL PRIMARY KEY,
    project_id      INTEGER NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    name            VARCHAR(200) NOT NULL,
    assignee        VARCHAR(100),
    start_date      DATE NOT NULL,
    duration_days   INTEGER NOT NULL CHECK (duration_days > 0),
    progress        SMALLINT NOT NULL DEFAULT 0 CHECK (progress BETWEEN 0 AND 100),
    color           VARCHAR(7) DEFAULT '#6366f1',
    depends_on      INTEGER REFERENCES tasks(id) ON DELETE SET NULL,
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_tasks_project_id ON tasks(project_id);
