import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";

function ToggleFilterGroup({ setFilter, counter }) {
  return (
    <div className="toogle-filter-group">
      <ToggleButtonGroup type="radio" name="filter" defaultValue="all">
        <ToggleButton
          id="tbg-radio-3"
          value="all"
          variant="outline-secondary"
          onClick={(e) => {
            setFilter("all");
          }}
        >
          Show all
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-4"
          value="done"
          variant="outline-secondary"
          onClick={(e) => {
            setFilter("done");
          }}
        >
          Show done <span className="counter">({counter.done})</span>
        </ToggleButton>
        <ToggleButton
          id="tbg-radio-5"
          value="in-progress"
          variant="outline-secondary"
          onClick={(e) => {
            setFilter("in-progress");
          }}
        >
          Show in progress
          <span className="counter">({counter.inProgress})</span>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ToggleFilterGroup;
