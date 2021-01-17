import React, {Component} from 'react';
import NavbarList from "../navbar/Navbar-list";
import axios from "axios"
import Products from "../products/products";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import {withRouter} from "react-router-dom"


class App extends Component {

    state = {
        products: {
            count: 0 ,
            results:[],
        }
    }
    componentDidMount() {
        this.getProduct()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if(prevProps.location.search!==this.props.location.search) {
            this.getProduct()
        }
    }

    getProduct = () => {
       /* const params = new URLSearchParams()
        const page = params.get("page")||"1"*/

        const search = this.props.location.search||"?page=1&page_size=3"
        axios.get("https://ecommerce-7-api.itpark.edu.kg/api/products/"+ search).then((response)=>
        {this.setState({products:response.data})
        })
    }

    render() {
        const state = this.state
        return (
            <div>
            <NavbarList/>
            <Container>
            <Jumbotron>
                <Products products = {state.products}/>
            </Jumbotron>
            </Container>
            </div>
        );
    }
}

export default withRouter (App);