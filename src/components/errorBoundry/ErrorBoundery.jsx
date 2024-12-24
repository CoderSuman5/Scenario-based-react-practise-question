import React, { Component } from "react";

class ErrorBoundery extends Component {
    constructor(props) {
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error , info){
        console.error("errorBoundery caught an error" , error , info)
    }

    render(){
        if(this.state.hasError){
           return <h3>somthing went wrong pls try again after some time</h3>
        }
        return this.props.children
    }
}

export default ErrorBoundery;
