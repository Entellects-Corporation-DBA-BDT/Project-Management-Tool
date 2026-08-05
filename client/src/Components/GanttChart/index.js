import { ganttTasks } from "../../data/features";
import "./GanttChart.css";

const TOTAL_WEEKS = 6;

const GanttChart = () => {
  return (
    <div className="gantt">
      <div className="gantt__scale">
        {Array.from({ length: TOTAL_WEEKS }).map((_, week) => (
          <div className="gantt__scale-cell" key={week}>
            Week {week + 1}
          </div>
        ))}
      </div>

      <div className="gantt__rows">
        {ganttTasks.map((task) => (
          <div className="gantt__row" key={task.id}>
            <div className="gantt__row-label">{task.name}</div>
            <div className="gantt__row-track">
              <div
                className="gantt__bar"
                style={{
                  left: `${(task.startWeek / TOTAL_WEEKS) * 100}%`,
                  width: `${(task.duration / TOTAL_WEEKS) * 100}%`,
                  backgroundColor: task.color,
                }}
              >
                <div
                  className="gantt__bar-progress"
                  style={{ width: `${100 - task.progress}%` }}
                />
                <span className="gantt__bar-label">{task.progress}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GanttChart;
