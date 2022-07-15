import React, {Component}from "react";
export default class Counter extends Component{
    state={count:0};

    handleIncrement=()=>{
        this.setState({
            count:this.state.count+1
        });
    };
    handleDecrement=()=>{
        this.setState({
            count:this.state.count-1
        });
    };
    
    render(){
        return(
            <div>
                <button onClick={this.handleIncrement}>+</button>
                <h3><span>{this.state.count}</span></h3>
                <button onClick={this.handleDecrement}>-</button>
                
            </div>
        )
    }



}