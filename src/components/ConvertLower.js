import React from 'react'
export default class ConvertIntoLower extends React.Component {
    constructor(props) {
        super(props)
        this.state={text:"this is lowercase default text"};
        this.onChangeHandler=this.onChangeHandler.bind(this);
        this.onClickHandler=this.onClickHandler.bind(this)
    }

    onChangeHandler(e) {
        // alert("hgshgdhsgdhs")
        this.setState({text:e.target.value})
    }

    onClickHandler (e) {
    //   alert("jshdjshdjsh")
    this.setState({text:this.state.text.toLowerCase()})
    }



    render () {
        return(
            <>
                <h1>Write to code into lowercase</h1>
                <div className="container">
                    <textarea onChange={this.onChangeHandler} name="" id="" cols="100" rows="10" value={this.state.text}></textarea>
                </div>
                <div className="btn btn-primary" onClick={this.onClickHandler}>ConvertIntoLower</div>
            </>
        )
    }
}
