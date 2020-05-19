import React, { Component } from "react";
import {fetchProducts} from '../api/Products';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { search } from "../actions";
import { DropdownButton, Dropdown,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            products: [],
            error: null
        };
    }

    componentDidMount() {
        const { fetchProducts } = this.props;
        fetchProducts();
    }
    handleSearchChange(e) {
        this.setState({ searchText: e });
    };
    handleSubmit = () => {
        console.log(this.state.searchText);
        this.props.search(this.state.searchText);
    }

    sortPriceByAsc = () => {
        console.log("in asc");
    }

    sortPriceByDesc = () => {
        console.log("in desc");
    }

    addProductToCart = () => {
        // if(cart.length>0 && cart.filter(e => e.product.id === product.id).length>0){
        //     let item = cart.find(item => item.product.id ===  product.id);
        //     dispatch(updateCartQuantity(product.id,item.quantity+1));
        //     console.log("in update")
        // }else{
        //     console.log("add")
        //     dispatch(addToCart(product));
        // }
    }


    render() {
        return (
            <div className="container mw5">
                <div className="row">
                    <div className="col ml-4">
                        <div className="form-inline my-2 my-lg-0" >
                            <input className="form-control mr-lg-2" type="text" onChange={(e) => this.handleSearchChange(e.target.value)} />
                            <Button onClick={this.handleSubmit} type="button">Search</Button>
                        </div>
                    </div>
                    <div className="col">
                        <DropdownButton id="dropdown-item-button" title="Sort By Price">
                            <Dropdown.Item as="button" onClick={this.sortPriceByAsc}>Ascending</Dropdown.Item>
                            <Dropdown.Item as="button" onClick={this.sortPriceByDesc}>Descending</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                {this.props.products.map(product => {
                    return (
                        <div className="col-md-3 mt-4" key={product.id}>
                            <div className="profile-sidebar">
                                <div className="profile-userpic">
                                    <img src="data:image/png;base64,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" className="img-responsive" alt="" />
                                </div>
                                <div className="profile-usertitle">
                                    <div className="profile-usertitle-name">
                                        {product.name}
                                    </div>
                                    <div className="profile-usertitle-name">
                                        Rs. {product.price}
                                    </div>
                                </div>
                                <div className="profile-userbuttons">
                                    <Link to={{pathname:`/products/${product.id}`,product:{product}}}><button type="button" className="btn btn-primary btn-sm mr-2">View</button></Link>
                                    <Link><button type="button" className="btn btn-success btn-sm" onClick={this.addProductToCart}>Add to Cart</button></Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
    return {
        error: state.products.error,
        products: state.products.products,
    };
};


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchProducts, search }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductList);