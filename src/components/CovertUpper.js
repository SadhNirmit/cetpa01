// import { render } from '@testing-library/react'
import React from 'react'
export default class ConvertIntoUpper extends React.Component {
    constructor(props) {
    super(props)
    this.state={text:"This is Default Text in TextArea"}
    this.changeHandler=this.changeHandler.bind(this);
    this.clickHandler=this.clickHandler.bind(this)
    }
    changeHandler(e) {
        // alert("again clicked")
        this.setState({text:e.target.value})
    }
    clickHandler(e) {
        // alert("clicked");
        this.setState({text:this.state.text.toUpperCase()})
    }
    clickHandler2(e) {
        this.state({text:this.text.state.text.toLowerCase()})
    }
    render() {
        return (
            <>
              <h1>Write code to convert into uppercase</h1>
              <div className="container text-center">
                <textarea name="" id="" cols="100" rows="10" value={this.state.text} onChange={this.changeHandler}></textarea>
              </div>
               <div className="btn btn-primary" onClick={this.clickHandler}>Convert Into UpperCase</div>
               {/* <div className="btn btn-primary" onClick={this.clickHandler2}>Convert Into LowerCase</div> */}
            </>
        )
    }
}

