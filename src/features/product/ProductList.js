import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './productSlice';
import { addProductToCart } from './cartSlice';

class ProductList extends Component {
    constructor(props){
        super(props);

        this.state = {
            isLoading: false
        }

    
    }
    componentWillMount(){
        this.setState({
            isLoading: true
        })
        // reducer-action 을 호출.
        this.props.fetchProducts()
        .then(()=>{
            this.setState({
                isLoading: false
            })
        })
    }
    buttonclick = (m) => {
        console.log(m)
    }
    render(){
        return (
            <div>
                <h1>List</h1>
                {
                    this.state.isLoading && <img src='https://i.imgur.com/JfPpwOA.gif'  /> 
                }
                <ul>
                {
                    this.props.products.map(m => 
                    <li key={m.id}> {m.title} 
                    <button onClick={()=>{this.props.addProductToCart(m)}}>Add to Cart</button>
                    </li>)
                 }
                </ul>
            </div>
        )
    }
}

export default connect(
    ({product}) => ({
        products : product.products
      }), 
    { fetchProducts, addProductToCart }
)(ProductList);