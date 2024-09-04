import './App.css'
import {useDispatch, useSelector} from "react-redux"
import DarkMode from './DarkMode';

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cashReducer.cash)
  const isDark = useSelector(state => state.darkModeReducer.isDark)

  const addCash = (amount) => {
    dispatch({type: "ADD_CASH", payload: amount });
  }
  const getCash = () => {
    dispatch({type: "GET_CASH", payload: 50 });
  }

  return (
    <div className={isDark ? "dark_mode" : ""}>
      <DarkMode/>
      <h2>Денег на счету: {cash}</h2>
      <button onClick={() => addCash(+prompt("Введите количество дененг, которые нужно положить"))}>Положить на счет</button>
      <button onClick={getCash}>Снять со счета</button>

    </div>
  )
}

export default App
