-- Supplemental tables for flowspace_db: workspaces and their members.
-- Run after schema.sql with: psql -U postgres -d flowspace_db -f workspaces.sql

-- Workspaces: the dedicated environment a team sets up before creating projects.
CREATE TABLE workspaces (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(100) NOT NULL UNIQUE,
    owner_email     VARCHAR(150) NOT NULL,
    plan            VARCHAR(20) NOT NULL DEFAULT 'free'
                        CHECK (plan IN ('free', 'team', 'business', 'enterprise')),
    created_at      TIMESTAMP NOT NULL DEFAULT NOW()
);

-- Users: members invited into a workspace, from any platform/technology.
CREATE TABLE users (
    id              SERIAL PRIMARY KEY,
    workspace_id    INTEGER NOT NULL REFERENCES workspaces(id) ON DELETE CASCADE,
    full_name       VARCHAR(120) NOT NULL,
    email           VARCHAR(150) NOT NULL UNIQUE,
    role            VARCHAR(20) NOT NULL DEFAULT 'member'
                        CHECK (role IN ('owner', 'admin', 'member', 'viewer')),
    joined_at       TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_users_workspace_id ON users(workspace_id);
