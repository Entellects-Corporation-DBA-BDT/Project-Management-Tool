const Reports = () => {
  return (
    <section className="page">
      <h1>Reporting</h1>
      <p className="page__lede">
        Management reporting, audit history, and admin metrics. Charts and
        export are not implemented yet.
      </p>
      <div className="stats">
        <div className="stat-card">
          <span>Audit events (7d)</span>
          <strong>41</strong>
        </div>
        <div className="stat-card">
          <span>AI calls (preview)</span>
          <strong>0</strong>
        </div>
        <div className="stat-card">
          <span>Files in storage</span>
          <strong>6</strong>
        </div>
      </div>
      <div className="panel">
        <h2>Upcoming</h2>
        <ul className="risk-list">
          <li>Structured logs, traces, and error tracking</li>
          <li>AI usage and cost breakdown per workspace</li>
          <li>Role-based admin dashboard with entitlement controls</li>
        </ul>
      </div>
    </section>
  );
};

export default Reports;
