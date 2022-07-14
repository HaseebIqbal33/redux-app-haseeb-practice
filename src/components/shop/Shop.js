import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state/index";
import "./shop.css";

function Shop() {
  const [amountBalance, setAmountBalance] = useState(0);
  const dispatch = useDispatch();
  const { withdrawMoney, despoitMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );

  return (
    <div className="container p-4">
      <h2>Deposit/Withdraw Money</h2>
      <button
        className="btn btn-primary mx-2"
        // onClick={() => dispatch(actionCreators.withdrawMoney(amountBalance))}
        onClick={() => withdrawMoney(amountBalance)}
      >
        -
      </button>
      <input
        type="number"
        min="0"
        placeholder="Enter Amount"
        value={amountBalance}
        onChange={(e) => setAmountBalance(e.target.value)}
      />
      Update Balance by Rs. {amountBalance}/-
      <button
        className="btn btn-primary mx-2"
        // onClick={() => dispatch(actionCreators.despoitMoney(amountBalance))}
        onClick={() => despoitMoney(amountBalance)}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
