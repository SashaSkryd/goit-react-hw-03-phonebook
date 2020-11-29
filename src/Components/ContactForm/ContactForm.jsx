import React, { Component } from "react"
import shortid from "short-id"
import style from "./ContactForm.module.css"

const INITIAL_STATE = {name: '', number: ''}

export default class ContactForm extends Component {
  state = {
    ...INITIAL_STATE
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addContact({...this.state, id: shortid.generate()})
  }
  
  render() {

    const { name, number } = this.state
    
    return (
      <form onSubmit={this.handleSubmit} className={style.form}>
          <label>
            <h2 className={style.title}>Your Name</h2>
            <input type="text" name="name" placeholder="Enter name" value={name} onChange={this.handleChange} className={style.input} />
          </label>
          <label>
            <h2 className={style.title}>Your Phone</h2>
          <input type="text" name="number" placeholder="Enter phone" value={number} onChange={this.handleChange} className={style.input} />
          </label>
        <button type="submit" className={style.btn}> <span className={style.btnText}>Submit</span></button>
        </form>
    )
  }
}
