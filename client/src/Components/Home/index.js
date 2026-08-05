import Navbar from "../Navbar";
import Footer from "../Footer";
import GanttChart from "../GanttChart";
import { coreTools, workspaceSteps, valueProps } from "../../data/features";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />

      <section className="hero">
        <h1>
          Any technology. Any platform. Anywhere in the world.
          <br />
          Brought together in <span>one virtual workspace</span>.
        </h1>
        <p>
          Our project management tool fetches everything your team relies on -
          Gantt charts, workload management, dashboards, automations, and
          integrations - and brings it into a single, connected place.
        </p>
        <button className="hero__cta">Set Up Your Workspace</button>
      </section>

      <section id="tools" className="tools">
        <h2>Everything your team needs, in one place</h2>
        <div className="tools__grid">
          {coreTools.map((tool) => (
            <div className="tool-card" key={tool.id}>
              <div className="tool-card__icon">{tool.icon}</div>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workspace" className="workspace">
        <h2>Set up your dedicated workspace in minutes</h2>
        <p className="section-lede">
          It's important to have a well set up environment so work can be
          managed in a productive, intuitive manner. Setting it up takes only
          a couple of minutes.
        </p>
        <div className="workspace__steps">
          {workspaceSteps.map((item) => (
            <div className="workspace-step" key={item.step}>
              <div className="workspace-step__number">{item.step}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="tasks" className="tasks">
        <div className="tasks__text">
          <h2>Get work done, in context</h2>
          <p>
            We take a wide view over projects - from building a portfolio,
            through planning and tracking a single project, and into task
            management. Task management is all about short-term execution:
            the moment a longer-term plan turns into work your team can pick
            up today.
          </p>
        </div>
        <div className="tasks__hierarchy">
          <div className="hierarchy-node">Portfolio</div>
          <div className="hierarchy-arrow">→</div>
          <div className="hierarchy-node">Project</div>
          <div className="hierarchy-arrow">→</div>
          <div className="hierarchy-node hierarchy-node--active">Tasks</div>
        </div>
      </section>

      <section className="value-props">
        {valueProps.map((item, index) => (
          <div
            className={`value-prop ${index % 2 === 1 ? "value-prop--reverse" : ""}`}
            key={item.id}
          >
            <div className="value-prop__text">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
            <div className="value-prop__visual">
              <div className={`visual-card visual-card--${item.id}`} />
            </div>
          </div>
        ))}
      </section>

      <section id="gantt" className="gantt-section">
        <h2>Manage your projects with a visual Gantt chart</h2>
        <p className="section-lede">
          As tasks progress, all changes are automatically reflected on your
          Gantt chart - taking the tedious work off of you and your team's
          plate.
        </p>
        <GanttChart />
      </section>

      <Footer />
    </div>
  );
};

export default Home;
