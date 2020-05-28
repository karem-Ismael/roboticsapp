import React, { Component } from 'react'

 class ErrorBoundry extends Component {
     constructor(props){
         super(props)
         this.state={
             hasErorr:false
         }
     }
     componentDidCatch(error,info){
         this.setState({
             hasErorr:true
         })
     }
    render() {
        if(this.state.hasErorr){
            return <h1>oooh it's not good</h1>
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

export default ErrorBoundry
