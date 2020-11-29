import React, { Component } from "react"
import ContactForm from "../ContactForm/ContactForm.jsx"
import Filter from "../Filter/Filter.jsx"
import ContactList from "../ContactList/ContactList.jsx"
import style from './App.module.css'


export default class App extends Component {
  state = {
    contacts: [],
    filter: "",
  }

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('Contacts'))
    if (contacts) {
       this.setState({contacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
    localStorage.setItem('Contacts', JSON.stringify(this.state.contacts))
    };
  }
  

  addContact = (el) => {
    if (this.state.contacts.find((item) => item.name === el.name)) {
      alert(`${el.name} is already in contacts.`)
    } else {
      this.setState((prevState) => {
        const updateState = [...prevState.contacts, el]
        return { contacts: updateState }
      })
    }
  }

  getVisibleContact = () => {
    const { contacts, filter } = this.state
    return contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))
  }

  handleDelete = (id) => {
    const { contacts } = this.state
    const obj = contacts.find((el) => el.id === id)
    const index = contacts.indexOf(obj)
    this.setState((prevState) => ({
      contacts: [...prevState.contacts.slice(0, index), ...prevState.contacts.slice(index + 1)],
    }))
  }

  filterRender = (filter) => {
    this.setState({ filter })
  }

  render() {

    const { filter, contacts } = this.state
    const visibleContact = this.getVisibleContact()
    
    return (
      <>
        <div className={style.container}>
          <h1 className={style.title}>Phonebook</h1>
          <ContactForm addContact={this.addContact} />
          <h2 className={style.title}>Contacts</h2>
          {contacts.length > 1 && <Filter filter={filter} filterRender={this.filterRender} />}
          <ContactList array={visibleContact} deleteItem={this.handleDelete} />
        </div>
      </>
    )
  }
}
