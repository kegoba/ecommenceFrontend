import React from "react"
//import { Balance} from "../reducer/Action"
import { BALANCE } from "../reducer/cart-actions"
import { connect, useSelector, useDispatch} from "react-redux"
 import {usePaystackPayment} from "react-paystack";
import {Transaction_details } from "../reducer/Action"


const onSuccess = (reference) => {
  console.log(reference);
  
  window.location = "/success"
 

};


const onClose = () => {
  console.log('closed')
}

const PaymentButton = () => {
 const paymentDetail = useSelector((state) => state.paymentDetail);
  const initializePayment = usePaystackPayment(paymentDetail);
  return (
    <div>
      <button 
      className="btn btn-info"
        onClick={() => {
          initializePayment(onSuccess, onClose);
        }}
      >
        Proceed{">>"}
      </button>
    </div>
  );
};

function Payment() {
     const paymentDetail = useSelector((state) => state.paymentDetail);


  return (
    <div className="payment">
      <div className="container">
        <div className="row bg-info">
          <div className="col ">  {paymentDetail.email} </div>
          <div className="col"> {paymentDetail.reference}</div>
          <div className="col"> {paymentDetail.view_amount}</div>
        </div>
      </div>
      <PaymentButton  className="Pay"/>
    </div>
  );
}

export default Payment