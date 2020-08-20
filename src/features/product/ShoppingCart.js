import React, { Component } from 'react';
import {connect} from 'react-redux';

class ShoppingCart extends Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }
    render(){
        return (
            <div>
                {
                    this.props.cartItem.
                }
            </div>
        )
    }
}

export default connect(
    (state)=> ({
        cartItem : state.cart.items
    })
    
    ,
    {  }
)(ShoppingCart);