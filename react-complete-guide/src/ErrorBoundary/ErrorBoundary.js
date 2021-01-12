import React, { Component} from 'react'


class ErrorBoundary extends Component{
    state={
        hasErroe: false,
        errorMessage: ''
    }
    componentDidCatch= (error, info)=>{
        this.setState({ hasError: true, errorMassage: error})
    }
    render(){
        if(this.state.hasError){
        return <h1>this.state.errorMessage</h1>
        }else{
            return this.props.children;
        }

    }
} 


export default ErrorBoundary;