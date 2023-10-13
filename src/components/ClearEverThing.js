import React from 'react'
export default class ClearText extends React.Component {
    constructor() {
     super()
     this.state={text:"write here"}
     this.onChangeHandler=this.onChangeHandler.bind(this)
     this.onClickHandler=this.onClickHandler.bind(this);
    }
    onChangeHandler(e) {
        // alert("sssjdh")
        this.setState({text:e.target.value})
    }

    onClickHandler() {
        this.setState({text:''});
    }

    render() {
        return (
            <>
                <h1>Clear all text right in the box</h1>
                <div className="container">
                <textarea onChange={this.onChangeHandler} name="" id="" cols="100" rows="10" value={this.state.text}></textarea>
                </div>
                <div className="btn btn-primary" onClick={this.onClickHandler}>Clear TEXT</div>
            </>
        )
    }
}