export const IMG__CONSTRAST = 'IMG__CONSTRAST'
export const IMG__BRIGHTNESS = 'IMG__BRIGHTNESS'
export const IMG__SATURATE = 'IMG__SATURATE'
export const RESET__SETTING = 'RESET__SETTING'
export const IMG__DMP = 'IMG__DMP'
export const EDITING__IMG = 'EDITING__IMG'
export const IS__SETTINGS = 'IS__SETTINGS'
export const DELETE__IMG__FROM__FIRST = 'DELETE__IMG__FROM__FIRST'
export const DELETE__IMG__FROM__SECOND = 'DELETE__IMG__FROM__SECOND'
export const DELETE__IMG__FROM__THIRD = 'DELETE__IMG__FROM__THIRD'
export const CHANGE__ID = 'CHANGE__ID'
export const CHANGE__IMG__FROM__FIRST = 'CHANGE__IMG__FROM__FIRST'
export const CHANGE__IMG__FROM__SECOND = 'CHANGE__IMG__FROM__SECOND'
export const CHANGE__IMG__FROM__THIRD = 'CHANGE__IMG__FROM__THIRD'

export const constrastAction = data => ({
  type: IMG__CONSTRAST,
  payload: data
})

export const brightnessAction = data => ({
  type: IMG__BRIGHTNESS,
  payload: data
})

export const saturateAction = data => ({
  type: IMG__SATURATE,
  payload: data
})

export const dmpAction = data => ({
  type: IMG__DMP,
  payload: data
})

export const resetSetting = () => ({
  type: RESET__SETTING
})

export const editingImage = data => ({
  type: EDITING__IMG,
  payload: data
})

export const isSettings = data => ({
  type: IS__SETTINGS,
  payload: data
})
export const changeId = data => ({
  type: CHANGE__ID,
  payload: data
})
export const deleteImg = (data, id) => dispatch => {
  if (id === 'droppable1') {
    dispatch({
      type: DELETE__IMG__FROM__FIRST,
      payload: data.char_id
    })
  }

  if (id === 'droppable2') {
    dispatch({
      type: DELETE__IMG__FROM__SECOND,
      payload: data.char_id
    })
  }

  if (id === 'droppable3') {
    dispatch({
      type: DELETE__IMG__FROM__THIRD,
      payload: data.char_id
    })
  }
}

export const changeImage = (data, id) => dispatch => {
  if (id === 'droppable1') {
    dispatch({
      type: CHANGE__IMG__FROM__FIRST,
      payload: data
    })
  }

  if (id === 'droppable2') {
    dispatch({
      type: CHANGE__IMG__FROM__SECOND,
      payload: data
    })
  }

  if (id === 'droppable3') {
    dispatch({
      type: CHANGE__IMG__FROM__THIRD,
      payload: data
    })
  }
}
