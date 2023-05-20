import Alert from "./components/Alert"
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";


const initialExpenses = [];

export default function App() {
    const [expenses, setExpenses] = useState(initialExpenses);
    const [charge, setCharge] = useState('');
    const [amount, setAmount] = useState('');
    const [alert, setAlert] = useState({show: false});
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0)

    const handleCharge = e =>{
        setCharge(e.target.value)
    }
    const handleAmount = e =>{
        setAmount(e.target.value)
    }
    const handleAlert = ({text}) =>{
        setAlert({show: true, text});
        setTimeout(() => {
            setAlert({show: false})
        }, 4000);

    }
    const handleSubmit = e =>{
        if(charge !== "" && amount > 0 && isNaN(charge)){
            e.preventDefault();
            if(edit){
                let Items = expenses.map(item => {
                    return item.id === id ? {...item, charge, amount} : item;
                });
                setExpenses(Items);
                console.log(Items)
            }else{
                const singleItem = {id: nanoid(), charge, amount}
                setExpenses([...expenses,singleItem]);
        
                handleAlert({text: 'Item Added'})
                     
                setCharge('')
                setAmount('')
            }
            
        }else{
            handleAlert({text: 'You have entered empty ChARGE and NULL AMOUNT'});
        }
    }
    const editItem = (id) =>{
        let item = expenses.find(item => item.id === id);
        console.log(item);
        let {charge, amount} = item;
        setCharge(charge);
        setAmount(amount);
        setEdit(false)
        setEdit(true)
        setId(id)
    }
    const handleDel = () =>{
        setExpenses([]);
        setCharge('')
        setAmount('')
        handleAlert({text: 'All Items Deleted Well'})
    }
    const delItem = (id) =>{
        const newItems = expenses.filter(expense => expense.id !== id)
        setExpenses(newItems);
        handleAlert({text: 'Item Deleted'})
    }
  return (
    <>
    <section>
        <h1 className="text-2xl text-center italic font-medium text-sky-300 shadow-lg">Budget Calculator</h1>
        {alert.show && <Alert text={alert.text}/>}
        <main>
        <ExpenseForm 
        handleAmount={handleAmount}
        handleCharge={handleCharge}
        handleSubmit={handleSubmit}
        charge={charge}
        amount={amount}
        edit={edit}
        />

        <ExpenseList 
        expenses={expenses}
        handleDel={handleDel}
        delItem={delItem}
        editItem={editItem}
        />
        </main>

        <div className="mt-9 flex justify-center">
        <h1>Total spending {expenses.reduce((acc, curr) => {
            return acc += parseInt(curr.amount)
        }, 0)}</h1>
        </div>
    </section>
    </>
  )
}

