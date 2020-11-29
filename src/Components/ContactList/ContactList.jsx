import React from "react"
import PropTypes from "prop-types"
import style from './ContactList.module.css'
import shortid from "short-id"

export default function ContactList({ array, deleteItem }) {

  return (
    <ul className={style.list}>
      {array.map((item) => (
        <li key={shortid.generate()} className={style.listItem}>
           <span className={style.deskription}>name:{item.name}, phone:{item.number}</span>
          <button type="button" onClick={() => deleteItem(item.id)} className={style.btn}>
            <span className={style.btnText}>Delete</span>
          </button>
        </li>
      ))}
    </ul>
  )
}

ContactList.propTypes = {
  array: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteItem: PropTypes.func.isRequired,
};