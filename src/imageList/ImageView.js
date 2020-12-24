import { connect } from 'react-redux'
import ImageSettings from '../imageSettings'
import ImageCustomizeBtn from '../imageSettings/ImageCustomizeBtn'

import './imageList.css'
import { useState } from 'react'

import { isSettings } from '../imageSettings/imageCustomizeAction'
import { isDraggingAction } from '../dropZone/dropAction'

const ImageView = props => {
  const [hover, setHover] = useState(false)
  const filterCss = () => {
    return {
      filter: `contrast(${props.constrast}%) saturate(${props.saturate}%) brightness(${props.brightness}%) grayscale(${props.dmp}%)`,
      zIndex: '10'
    }
  }
  const handleMouseLeave = () => {
    setHover(false)
  }

  const handleClick = () => {
    props.isDragAct(true)
  }

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleClick}
      className='img-view__root'
      style={
        props.images.char_id === props.editImage.char_id ? { zIndex: 100 } : {}
      }
    >
      <img
        className={
          props.snapshot?.isDragging === true ? 'dragging__img' : 'root-img'
        }
        src={props.images.img}
        alt=''
        style={
          props.images.char_id === props.editImage.char_id &&
          props.droppableId !== 'droppable'
            ? filterCss()
            : {}
        }
      />
      {props.droppableId ? (
        ''
      ) : hover ||
        (props.isSet && props.images.char_id === props.editImage.char_id) ? (
        <ImageCustomizeBtn images={props.images} id={props.id} />
      ) : (
        ''
      )}
      {props.images.char_id === props.editImage.char_id && props.isSet && (
        <ImageSettings id={props.id} />
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  brightness: state.imageCustomizeReducer.brightness,
  constrast: state.imageCustomizeReducer.constrast,
  saturate: state.imageCustomizeReducer.saturate,
  dmp: state.imageCustomizeReducer.dmp,
  isSet: state.imageCustomizeReducer.isSettings,
  editImage: state.imageCustomizeReducer.editImage,
  state: state
})
const mapDispatchToProps = {
  isDragAct: isDraggingAction,
  isSettings
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageView)
