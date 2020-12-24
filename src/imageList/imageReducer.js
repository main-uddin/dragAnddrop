import { SUCCESS, FAILED, DRAG__LIST } from './imageAction'
const imageReducer = (state = { imageList: [] }, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        ...state,
        imageList: action.payload
      }
    case FAILED:
      return {
        ...state,
        imageList: action.payload
      }
      case DRAG__LIST:
        return {
          ...state,
          imageList: action.payload
        }
    default:
      return state
  }
}

export default imageReducer
