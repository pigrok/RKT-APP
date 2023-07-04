import "./App.css";
import { addNumber, minusNumber } from "./redux/modules/counter";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  const onPlusButtonClick = () => {
    dispatch(addNumber(1));
  };

  const onMinusButtonClick = () => {
    dispatch(minusNumber(1));
  };

  return (
    <div>
      {number}
      <br />
      <button onClick={onPlusButtonClick}>+</button>
      <button onClick={onMinusButtonClick}>-</button>
    </div>
  );
}

export default App;
