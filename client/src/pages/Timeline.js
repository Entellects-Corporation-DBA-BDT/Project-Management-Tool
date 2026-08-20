import GanttChart from "../Components/GanttChart";

const Timeline = () => {
  return (
    <section className="page">
      <h1>Timeline</h1>
      <p className="page__lede">
        Gantt-style project view. Dependencies and live task dates will come
        from the tasks table.
      </p>
      <GanttChart />
    </section>
  );
};

export default Timeline;
