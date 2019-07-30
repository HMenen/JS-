import Filter from '../container/FilterLink'
import { VisibilityFilters } from '../action/index'
import React from 'react'

const Footer = () => (
  <div>
    <Filter filter={VisibilityFilters.SHOW_ALL} >All</Filter>
    <Filter filter={VisibilityFilters.SHOW_ACTIVE} >ACTIVE</Filter>
    <Filter filter={VisibilityFilters.SHOW_COMPLETED} >COMPLETED</Filter>
  </div>
)

export default Footer;