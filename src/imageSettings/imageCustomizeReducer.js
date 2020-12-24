import {
  IMG__SATURATE,
  IMG__BRIGHTNESS,
  IMG__CONSTRAST,
  IS__SETTINGS,
  EDITING__IMG,
  CHANGE__ID,
  CHANGE__IMG__FROM__FIRST,
  IMG__DMP,
  RESET__SETTING
} from './imageCustomizeAction'
const imageCustomizeReducer = (
  state = {
    brightness: 100,
    constrast: 100,
    saturate: 100,
    dmp: 0,
    isSettings: false,
    changeId: '',
    editImage: {}
  },
  action
) => {
  switch (action.type) {
    case IMG__BRIGHTNESS:
      return {
        ...state,
        brightness: action.payload
      }
    case IMG__CONSTRAST:
      return {
        ...state,
        constrast: action.payload
      }
    case IMG__SATURATE:
      return {
        ...state,
        saturate: action.payload
      }

    case IMG__DMP:
      return {
        ...state,
        dmp: action.payload
      }
    case RESET__SETTING:
      return {
        ...state,
        brightness: 100,
        constrast: 100,
        saturate: 100,
        dmp: 0
      }
    case IS__SETTINGS:
      return {
        ...state,
        isSettings: action.payload
      }
    case CHANGE__ID:
      return {
        ...state,
        changeId: action.payload
      }
    case EDITING__IMG:
      return {
        ...state,
        editImage: action.payload
      }
    default:
      return state
  }
}

export default imageCustomizeReducer
