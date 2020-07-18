import React, {Component} from "react"
import axios from "axios"
import {URL} from "../asset/asset"
import { AddToCart } from "../reducer/Action"
import { connect } from "react-redux"
import { GetProduct } from "../reducer/ProductReducer"
import {Alert} from "reactstrap"


const MapStateToProps = (state)=>{
    return state
}

const MapDispatchToProps = (dispatch) => ({
    AddToCart: (product_id) => {
        dispatch(AddToCart(product_id))

    }

})


class Men extends Component{
    constructor(){
        super()
        this.state = {
            men : [],
            show : "",
            

        }
    }
   //componentDidMount
    componentDidMount(){
        GetProduct()
        axios.get(URL+ "/men/")
        .then((resp)=>{
            this.setState({
                men : resp.data
            })
        })
    }
    handleToCart(product_id, name, price) {
        this.props.AddToCart(product_id)
        this.setState({show: true}, ()=>{
     window.setTimeout(()=>{
         this.setState({ show : false})
     },2000)
    })
     }


    

    render(){
        let men = this.state.men
        return (
          <div>
           

            <div className="container men ">
              <p className=""> Men's Wear </p>
              <Alert color="info" isOpen={this.state.show}>
                Item Added To Cart
            </Alert>
              <div className="product-row">
                {men.map((item, key) => (
                  <div
                    key={key}
                    className="product-col"
                   
                  >
                    <span className="card card-body">
                      <img
                        className="image "
                        src={URL + item.image}
                        alt={item.image}
                      />
                      <span className=" addTocart  btn-info" onClick={() => this.handleToCart(item.product_id)}> + </span>
                      &#8358;{ item.product_price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
    
} 


export default connect(MapStateToProps, MapDispatchToProps)(Men)