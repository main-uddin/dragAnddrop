import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { getImageAction } from './imageAction'
import { changeImage, isSettings } from '../imageSettings/imageCustomizeAction'
import ImageView from './ImageView'

import './imageList.css'

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  // background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  // background: isDraggingOver ? 'lightblue' : '#fff'
})

const ImageList = props => {
  useEffect(() => {
    props.getData()
    props.isSettings(false)
  }, [])
  const handleConfirm = () => {
    props.changeImg(props.editImage, props.getChangeId)
    props.isSettings(false)
  }
  const handleCancel = () => {
    props.isSettings(false)
  }

  return (
    <div className='media-panel'>
      <div className='media_panel-hader'>Media Panel</div>
      <Droppable droppableId='droppable'>
        {(provided, snapshot) => (
          <div
            className='imageList--container'
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {[].map.call(props.images, (data, index) => (
              <Draggable
                key={data.char_id}
                draggableId={data.char_id.toString() + 'hello'}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <ImageView
                      images={data}
                      droppableId='droppable'
                      snapshot={snapshot.isDragging}
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      {props.isSet && (
        <div className='btn__container'>
          <button className='confirm__btn' onClick={handleConfirm}>
            Confirm
          </button>
          <button className='cancel__btn' onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  images: state.imageReducer.imageList,
  getChangeId: state.imageCustomizeReducer.changeId,
  editImage: state.imageCustomizeReducer.editImage,
  isSet: state.imageCustomizeReducer.isSettings
})

const mapDispatchToProps = {
  getData: getImageAction,
  isSettings: isSettings,
  changeImg: changeImage
  // isDragAct: isDraggingAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageList)
