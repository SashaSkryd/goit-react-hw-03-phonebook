import React from "react"
import PropTypes from "prop-types"
import style from './Filter.module.css'

export default function Filter({ filter, filterRender }) {
  return (
    <label>
      <h2 className={style.title}>Filter</h2>
      <input type="text" name="filter" placeholder="Finder" value={filter} onChange={(e) => filterRender(e.target.value)} className={style.input} />
    </label>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  filterRender : PropTypes.func.isRequired,
};
