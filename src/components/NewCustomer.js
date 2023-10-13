// Here We are Creating BLL as Customer Class for BackEnd and
// also Creating a CustomerForm Component for UI Design in React.
import React from "react";

class Customer {
    static arr_cus=[];
  constructor(id, name, address, mobileNo) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.mobileNo = mobileNo;
  }
  addCustomer(){
   Customer.arr_cus.push(this);
  }

  searchCustomer(id){
     for(var c of Customer.arr_cus){
        if(c.id===id){
            this.id=c.id;
            this.name=c.name;
            this.address=c.address;
            this.mobileNo=c.mobileNo;
        }
     }
  }
}



export class DisplayData extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>

      </>
    )
  }
}

export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", cusname: "", address: "", mobileNo: "" };
    this.idOnChange = this.idOnChange.bind(this);
    this.nameOnChange = this.nameOnChange.bind(this);
    this.addressOnChange = this.addressOnChange.bind(this);
    this.mobileNoOnChange = this.mobileNoOnChange.bind(this);
    this.addClickHandler = this.addClickHandler.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }
  idOnChange(event) {
    this.setState({ id: event.target.value });
  }
  nameOnChange(event) {
    this.setState({ cusname: event.target.value });
  }
  addressOnChange(event) {
    this.setState({ address: event.target.value });
  }
  mobileNoOnChange(event) {
    this.setState({ mobileNo: event.target.value });
  }
  addClickHandler(event) {
    var cus=new Customer();
    cus.id=this.state.id;
    cus.name=this.state.cusname;
    cus.address=this.state.address;
    cus.mobileNo=this.state.mobileNo;
    cus.addCustomer();
    alert('Customer Added Sucessfully')
  }
  searchClickHandler(event) {
    var cus=new Customer();
    cus.searchCustomer(this.state.id);
    this.setState({id:cus.id,cusname:cus.name,address:cus.address,mobileNo:cus.mobileNo})
  }

  render() {
    return (
      <>
        <form>
          <div className="mb-3">
            <label htmlFor="txtid" className="form-label">
              Customer Id
            </label>
            <input
              type="text"
              className="form-control"
              id="txtid"
              placeholder="Enter Customer Id"
              value={this.state.id}
              onChange={this.idOnChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="txtname" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="txtname"
              placeholder="Enter Customer Name"
              value={this.state.cusname}
              onChange={this.nameOnChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="txtaddress" className="form-label">
              Customer Address
            </label>
            <input
              type="text"
              className="form-control"
              id="txtaddress"
              placeholder="Enter Customer Address"
              value={this.state.address}
              onChange={this.addressOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="txtname" className="form-label">
              Customer Mobile No
            </label>
            <input
              type="text"
              className="form-control"
              id="txtMobileNo"
              placeholder="Enter Customer Mobile No"
              value={this.state.mobileNo}
              onChange={this.mobileNoOnChange}
            />
          </div>

          <button
            type="button"
            onClick={this.addClickHandler}
            className="btn btn-primary"
          >
            Add Customer
          </button>
          <button
            onClick={this.searchClickHandler}
            type="button"
            className="btn btn-primary"
          >
            Search Customer
          </button>
        </form>
      </>
    );
  }
}
