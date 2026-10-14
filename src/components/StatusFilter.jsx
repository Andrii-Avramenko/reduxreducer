import { useDispatch, useSelector } from "react-redux";
import { Button } from "./Button";
import { statusFilters } from "../redux/constants";
import { getStatusFilter } from "../redux/selectors";
import { updateFilter } from "../redux/actions";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch()
  const handleFilterChange = (value) => dispatch(updateFilter(value));
  return (
    <div>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange("plain click")}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Acitve
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
