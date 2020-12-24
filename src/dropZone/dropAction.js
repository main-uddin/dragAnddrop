export const FIRST__COLUMN = 'FIRST__COLUMN'
export const SECOND__COLUMN = 'SECOND__COLUMN'
export const THIRD__COLUMN = 'THIRD__COLUMN'

export const IS__DRAGGING = 'IS__DRAGGING'

export const firstDragAction = data => ({
  type: FIRST__COLUMN,
  payload: data
})

export const secondDragAction = data => ({
  type: SECOND__COLUMN,
  payload: data
})

export const thirdDragAction = data => ({
  type: THIRD__COLUMN,
  payload: data
})

export const isDraggingAction = data => ({
  type: IS__DRAGGING,
  payload: data
})
