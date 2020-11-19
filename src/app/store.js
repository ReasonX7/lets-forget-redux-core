import { createStore } from 'redux-dynamic-reducer'
import { applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

const store = createStore(state => state, applyMiddleware(thunk, logger))

export default store
