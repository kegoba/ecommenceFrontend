import React from "react"
import payment from "../asset/image/payment-method.png"
const Footer =()=>{
    const year = new Date()

    return (
        <div className=" footer-down">
            <div className="container ">
                <div class="row payment align-items-center">
                    <div class="col">
                        <div class="payment-method">
                            <b>We Accept:</b>
                            <img src={payment} alt="Payment Method" />
                        </div>
                    </div>

                </div>
                <div className="container">
                <div className="row ">
                    <div className="col  thin-foot">
                        <p className="">
                            <i className=" fa-footer fa fa-facebook" />
                            <i className=" fa-footer fa fa-twitter" />
                            <i className=" fa-footer fa fa-instagram" />
                            <i className=" fa-footer fa fa-linkedin " />
                            <a className="  fa-footer navlink fa fa-whatsapp" href={"https://wa.me/2347038034761"} > <i /> </a>
                        </p>
                    </div>
                </div>
                </div>
                <div className="copyright">
                    <p className="copyright"> Copyright @ {year.getFullYear()}; </p>
                </div>
            </div>
        </div>
    );
}


export default Footer;