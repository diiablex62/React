import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ExpanseContext } from "../../context/ExpanseContext";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { expenses } = useContext(ExpanseContext); 
  const [expenseDetail, setExpenseDetail] = useState({});
  const [message, setMessage] = useState("");
  console.log(id);

  useEffect(() => {
    const detail = expenses.find((uneDepense) => uneDepense.id === Number(id));
    if (detail) {
      setExpenseDetail(detail);
    } else {
        navigate("/");
      setMessage("Oops cette donnée n'existe pas");
    }
  }, [id]);

  return (
    <div className='p-4'>
      {!message ? (
        <div>
          <h2 className='text-xl font-bold text-blue-600'>
            Dépense : {expenseDetail.description}
          </h2>
          <p className='text-gray-700'>Montant : {expenseDetail.amount} €</p>
          <p className='text-gray-700'>Date : {expenseDetail.date}</p>
        </div>
      ) : (
        <p className='text-red-500 font-semibold'>{message}</p>
      )}
    </div>
  );
}
