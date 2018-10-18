import { combineReducers } from 'redux'

import productList from './productList'

//genera el store general
const rootReducer = combineReducers({
  productList,
})

export default rootReducer
