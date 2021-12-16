import { createStore } from 'redux'

const initialState = {
  newslist: "[]",
  predict_price: "",
  predict_trend: "",
  realtime_price: "[]",
}

const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(changeState)
export default store
