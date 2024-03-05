import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

function ToggleStatusGroup({ setNewTask, newTask }) {
  return (
    <div className="toogle-status-group">
      <span className="status-title"> Status: </span>

      <ToggleButtonGroup type="radio" name="status" value={newTask.done}>
        <ToggleButton
          id="tbg-radio-1"
          value={false}
          variant="outline-secondary"
          onClick={() => {
            setNewTask((prev) => (prev = { ...prev, done: false }));
          }}
        >
          In progress
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-2"
          value={true}
          variant="outline-success"
          onClick={() => {
            setNewTask((prev) => (prev = { ...prev, done: true }));
          }}
        >
          Done
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ToggleStatusGroup;
