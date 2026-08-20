import { dashboardStats, notifications } from "../data/mockWorkspace";

const Dashboard = () => {
  return (
    <section className="page">
      <h1>Project status</h1>
      <p className="page__lede">
        Live dashboards will read from Postgres with RLS. This view uses fixture
        data for the current sprint.
      </p>
      <div className="stats">
        {dashboardStats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <span>{stat.label}</span>
            <strong>{stat.value}</strong>
          </div>
        ))}
      </div>
      <div className="panel">
        <h2>Activity</h2>
        <ul className="risk-list">
          {notifications.map((item) => (
            <li key={item.id}>
              {item.text} · {item.time}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Dashboard;
