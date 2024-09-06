import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DarkMode from './DarkMode'
import { addCashAction, getCashAction } from './store/cashReducer'
import {removeCustomerAction, addCustomerAction} from "./store/customerReducer"
import { fetchCustomers } from './thunks/customer'
import { useCustomer } from "./hooks/useCustomer.js"

export default function App() {
  const dispatch= useDispatch()
  const cash = useSelector(state => state.cashReducer.cash)
  const isDark = useSelector(state => state.darkModeReducer.isDark)
  const inputValue = useSelector(state => state.inputReducer.text)
  const customer = useSelector(state => state.customerReducer.customers)
  const selectList = useSelector(state => state.customerReducer.select_list)

  // const sortedCustomers = useCustomer(customer, selectList)

  const addCash = (amount) =>{
    dispatch(addCashAction(amount))
  }
  const getCash = (amount) =>{
    dispatch(getCashAction(amount))
  }
  const changeValue = (text) =>{
    dispatch({type:"CHANGE_VALUE", payload: text})
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    };
    dispatch(addCustomerAction(customer));
  }

  const removeCustomer = (id) => {
    dispatch(removeCustomerAction(id));
  }

  return (
    <div className={isDark? 'dark_mode' :''}>
      <DarkMode></DarkMode>
      <h2>Денег на счету: {cash}</h2>
      <button onClick={()=>addCash(+prompt("Введите количество денег"))}>Положить на счет деньги</button>
      <button onClick={()=>getCash(+prompt("Введите количество денег"))}>Снять деньги</button>

      <input type="text" onChange={(e) => changeValue(e.target.value)}/>

      <span>{inputValue}</span>


      <hr/>
      <h2 style={{margin: "0.8rem"}}>Клиенты</h2>
      <button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
      
      <button onClick={() => dispatch(fetchCustomers())}>Получить из базы</button>
      <select>
        {selectList.map((option, index) =>
         <option key={index} value={option.value}>{option.text}</option>
        )}
      </select>

      {
        customer.length > 0 ? (
          customer.map((customer, id) => 
            <div key={id}>
              <p>{customer.id}</p>
              <p>{customer.name}</p>
              <button onClick={() => removeCustomer(customer.id)}>Удалить клиента</button>
            </div>
        )) : "Нет ни одного клиента"
      }
    </div>
  )
}
