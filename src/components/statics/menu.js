import React, { Component } from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from  "../login/Login"
import Reg from "../login/Reg";
import Home from "../home/Home"
import Cart from "../cart/Cart"
import Payment from "../payment/Payment"
import PayInput from "../payment/payInput"
import Addproduct from "../cart/addproduct"
import Men from "../Category/men"
import Women from "../Category/women"
import SuccessPage from "../payment/success"
import { connect}  from "react-redux"
import { Logout_action} from "../reducer/Action"

const MapStateToProps = (state)=>({
  cart : state.cart,
  user_id : state.user.user_id,
})

const MapDispatchToProps = (dispatch) => ({
  Logout_action: (user) => {
    dispatch(Logout_action(user));
  }
})

class Login_out extends Component{
  constructor() {
    super()
    this.state = {
      user: [],
      isLogin: false,
    }
  }
  componentDidMount(){
    console.log(()=>{
      setTimeout(()=> {
        this.props.Logout_action(this.state.user)
        
      },10000 );
    })
    //this.props.Logout_action(this.state.user)
    this.props.history.push("/login")



  }

render(){
  return(
    <div>
      <p> Logout </p>
    </div>
  )
}

}





class Menu extends Component {
    constructor() {
        super()
        this.state = {
            user: [],
            isLogin : false,
        }
    }
    





    render() {
        //const user  = this.state.user.first_name
        let number_of_item_in_cart = this.props.cart.length;
        let user_id = this.props.user_id
        return (
          <Router className="container text-center">
            <div className="menu">
              <nav className="navbar menu navbar-expand-lg navbar-light ">
                <Link className="navbar-brand fa fa-home" to={"/"}> </Link>
                <button
                  type="button"
                  className="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#dropDrown"
                >
                  <span className="navbar-toggler-icon"> </span>
                </button>
                <div className="collapse navbar-collapse" id="dropDrown">
                  <ul className="navbar-nav ">
                    <li className="nav-item text-left">
                      <Link to={"/women"} className="nav-link">
                        Women' Wear
                      </Link>
                    </li>
                    <li className="nav-item text-left">
                      <Link to={"/men"} className="nav-link">
                        Men's Wear
                      </Link>
                    </li>
                    <li className="nav-item text-left">
                      <Link to={"/pay"} className="nav-link">
                        Fund Your Wallet
                      </Link>
                      
                    </li>
                    <li className="nav-item text-left">
                      {!user_id ?
                      <Link to={"/login"} className="nav-link">
                        Login
                      </Link>
                      :
                        <Link to={"logout"} className="nav-link">
                        Logout
                      </Link>
                      }
                    </li>
                    <li className="nav-item cart-menu">
                      <Link to={"/cart"} className="nav-link fa fa-cart-plus">
                        Cart
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            <div className="name">
              <Link to={"/cart"}>
                <div className="cart-menu-item">
                  <i>
                    {number_of_item_in_cart}
                  </i>
                </div>

              </Link>
            </div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/payment" component={Payment} />
              <Route path="/pay" component={PayInput} />
              <Route path="/product" component={Addproduct} />
              <Route path="/men" component={Men} />
              <Route path="/women" component={Women} />
              <Route path="/login" component={Login} />
              <Route path="/logout" component={Login_out} />
              <Route path="/reg" component={Reg} />
              <Route path="/success" component={SuccessPage} />
            </Switch>
          </Router>
        );
    }
}

export default connect(MapStateToProps, MapDispatchToProps) (Menu);
