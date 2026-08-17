-- Reporting queries against flowspace_db, for dashboards and workload views.
-- Run with: psql -U postgres -d flowspace_db -f queries.sql

-- Workload management: open task count and average progress per assignee.
SELECT
    assignee,
    COUNT(*) AS open_tasks,
    ROUND(AVG(progress), 1) AS avg_progress
FROM tasks
WHERE progress < 100
GROUP BY assignee
ORDER BY open_tasks DESC;

-- Dashboards: project counts by status per workspace.
SELECT
    w.name AS workspace_name,
    p.status,
    COUNT(*) AS project_count
FROM projects p
JOIN workspaces w ON w.id = p.workspace_id
GROUP BY w.name, p.status
ORDER BY w.name, p.status;

-- Gantt chart: upcoming milestones in the next 30 days, most urgent first.
SELECT
    p.name AS project_name,
    m.name AS milestone_name,
    m.due_date,
    (m.due_date - CURRENT_DATE) AS days_remaining
FROM milestones m
JOIN projects p ON p.id = m.project_id
WHERE m.is_complete = FALSE
  AND m.due_date BETWEEN CURRENT_DATE AND CURRENT_DATE + INTERVAL '30 days'
ORDER BY m.due_date ASC;
