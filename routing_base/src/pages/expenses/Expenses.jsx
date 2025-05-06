import React from "react";
import ExpensesForm from "../expenses/ExpenseForm";
import ExpenseList from "../expenses/ExpenseList";

export default function Expenses() {
  return (
    <div>
     <ExpensesForm/>
     <ExpenseList/>
    </div>
  );
}
