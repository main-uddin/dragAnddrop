import {
  CHANGE__IMG__FROM__FIRST,
  CHANGE__IMG__FROM__SECOND,
  CHANGE__IMG__FROM__THIRD,
  DELETE__IMG__FROM__FIRST,
  DELETE__IMG__FROM__SECOND,
  DELETE__IMG__FROM__THIRD
} from '../imageSettings/imageCustomizeAction'
import {
  FIRST__COLUMN,
  SECOND__COLUMN,
  THIRD__COLUMN,
  IS__DRAGGING
} from './dropAction'
const dropReducer = (
  state = {
    firstColumn: [],
    secondColumn: [],
    thirdColumn: [],
    isDragging: false
  },
  action
) => {
  switch (action.type) {
    case FIRST__COLUMN:
      return {
        ...state,
        firstColumn: action.payload
      }
    case SECOND__COLUMN:
      return {
        ...state,
        secondColumn: action.payload
      }
    case THIRD__COLUMN:
      return {
        ...state,
        thirdColumn: action.payload
      }
    case DELETE__IMG__FROM__FIRST:
      return {
        ...state,
        firstColumn: state.firstColumn.filter(e => e.char_id !== action.payload)
      }
    case DELETE__IMG__FROM__SECOND:
      return {
        ...state,
        secondColumn: state.secondColumn.filter(
          e => e.char_id !== action.payload
        )
      }
    case DELETE__IMG__FROM__THIRD:
      return {
        ...state,
        thirdColumn: state.thirdColumn.filter(e => e.char_id !== action.payload)
      }
    case CHANGE__IMG__FROM__FIRST:
      return {
        ...state,
        firstColumn: [
          ...state.firstColumn.filter(
            data => data.char_id !== action.payload.char_id
          ),
          action.payload
        ]
      }
    case CHANGE__IMG__FROM__SECOND:
      return {
        ...state,
        secondColumn: [
          ...state.secondColumn.filter(
            data => data.char_id !== action.payload.char_id
          ),
          action.payload
        ]
      }
    case CHANGE__IMG__FROM__THIRD:
      return {
        ...state,
        thirdColumn: [
          ...state.thirdColumn.filter(
            data => data.char_id !== action.payload.char_id
          ),
          action.payload
        ]
      }
    case IS__DRAGGING:
      return {
        ...state,
        isDragging: action.payload
      }
    default:
      return state
  }
}

export default dropReducer
