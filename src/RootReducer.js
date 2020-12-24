import { combineReducers } from 'redux'
import imageReducer from './imageList/imageReducer'
import dropReducer from './dropZone/dropReducer'
import imageCustomizeReducer from './imageSettings/imageCustomizeReducer'
export const rootReducer = combineReducers({
  imageReducer,
  dropReducer,
  imageCustomizeReducer
})
