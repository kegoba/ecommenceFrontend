import React from "react"
import { connect, useSelector, useDispatch} from "react-redux"



const SuccessPage = ()=>{
    const paymentDetail = useSelector((state) => state.paymentDetail);

    return(
        <div className="constainer ">
            <div className="container sucess-page ">
            <div className="row">
                <div className="col">
                  <h4 className="bg-success success text-centre"> payment successfull  </h4>
                 </div>
             </div>

            </div>
           
        </div>
    )
}






export default SuccessPage;