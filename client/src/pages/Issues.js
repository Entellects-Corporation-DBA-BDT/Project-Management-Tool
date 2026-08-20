import { issues } from "../data/mockWorkspace";

const Issues = () => {
  return (
    <section className="page">
      <h1>Issues & backlog</h1>
      <p className="page__lede">
        Bugs, stories, tasks, and epics. Create/edit and comments are next.
      </p>
      <table className="issue-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Title</th>
            <th>Status</th>
            <th>Priority</th>
            <th>Assignee</th>
            <th>Epic</th>
          </tr>
        </thead>
        <tbody>
          {issues.map((issue) => (
            <tr key={issue.id}>
              <td>{issue.id}</td>
              <td>
                <span className={`pill pill--${issue.type}`}>{issue.type}</span>
              </td>
              <td>{issue.title}</td>
              <td>
                <span className={`pill pill--${issue.status}`}>{issue.status.replace("_", " ")}</span>
              </td>
              <td>
                <span className={`pill pill--${issue.priority}`}>{issue.priority}</span>
              </td>
              <td>{issue.assignee}</td>
              <td>{issue.epic}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default Issues;
