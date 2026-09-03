import { issues, sprintColumns } from "../data/mockWorkspace";

const issueById = Object.fromEntries(issues.map((issue) => [issue.id, issue]));

const Sprints = () => {
  return (
    <section className="page">
      <h1>Sprint 12</h1>
      <p className="page__lede">
        Active sprint board grouped by workflow status. Select a card to view
        details or reassign work.
      </p>
      <div className="board">
        {sprintColumns.map((column) => (
          <div className="board__col" key={column.id}>
            <h3>
              {column.title} ({column.cards.length})
            </h3>
            {column.cards.map((id) => {
              const issue = issueById[id];
              return (
                <div className="board__card" key={id}>
                  {issue.title}
                  <small>
                    {id} · {issue.priority}
                  </small>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sprints;
