import { applyMiddleware } from 'redux'
import { createStore, combineReducers } from 'redux'
import ProductReducer from './ProductReducer'

const store = combineReducers({
    product: ProductReducer
})

const asyncMiddleware = store => next => action => {
    if (typeof action === 'function') {
        return action(next)
    }
    return next(action)
}
export default createStore(
    store, applyMiddleware(asyncMiddleware)
)