import { connect } from 'react-redux'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import { dragAction } from '../imageList/imageAction'
import ImageView from '../imageList/ImageView'

import './dropZone.css'

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: 'none',
  // background: isDragging ? 'lightgreen' : 'grey',
  ...draggableStyle
})

const getListStyle = isDraggingOver => ({
  // background: isDraggingOver ? 'lightblue' : '#fff'
})

const SecondColumn = props => {
  return (
    <div style={{ width: '333px', marginRight: '15px', marginLeft: '5px' }}>
      <Droppable droppableId='droppable2'>
        {(provided, snapshot) => (
          <div
            className='drop-zone--container'
            ref={provided.innerRef}
            style={getListStyle(snapshot.isDraggingOver)}
          >
            {[].map.call(props.secondColumn, (item, index) => (
              <Draggable
                key={item.char_id}
                draggableId={item.char_id.toString() + 'hello'}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    className='image--margin-top'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                      snapshot.isDragging,
                      provided.draggableProps.style
                    )}
                  >
                    <ImageView images={item} id='droppable2' />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  )
}

const mapStateToProps = state => ({
  secondColumn: state.dropReducer.secondColumn
})
const mapDispatchToProps = {
  getDragData: dragAction
}

export default connect(mapStateToProps, mapDispatchToProps)(SecondColumn)
