import { useDispatch, useSelector } from "react-redux";
import {
  addGoalCreator,
  deleteGoalCreator,
} from "../../redux/goals/goals.action";
import { GoalInput } from "./goals.input.component";
import { GoalItem } from "./goals.item.component";
export const GoalsList = () => {
  const goals = useSelector((state) => state.goals);
  const dispatch = useDispatch();
  const onDeleteGoal = (id) => {
    dispatch(deleteGoalCreator({ id }));
  };

  const onAddGoal = (text) => {
    const id = `goals-${new Date()}`;
    dispatch(
      addGoalCreator({
        id,
        text,
      })
    );
  };
  return (
    <div>
      <h3>My Goals List</h3>
      <GoalInput addGoal={onAddGoal} />
      <ul>
        {goals.map((goal) => {
          return (
            <li key={goal.id}>
              <GoalItem {...goal} deleteGoal={onDeleteGoal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
