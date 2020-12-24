import { connect } from 'react-redux'
import { DragDropContext } from 'react-beautiful-dnd'
import DropZone from './dropZone'
import ImageList from './imageList'

import { dragAction } from './imageList/imageAction'
import {
  firstDragAction,
  secondDragAction,
  thirdDragAction
} from './dropZone/dropAction'

import { move, reorder } from './utls'

import './App.css'

function App(props) {
  const id2List = {
    droppable: props.images,
    droppable1: props.firstColumn,
    droppable2: props.secondColumn,
    droppable3: props.thirdColumn,
    droppable4: props.firstColumn
  }

  const getList = id => id2List[id]

  const onDragEnd = result => {
    const { source, destination } = result

    if (!result.destination) {
      return
    }

    if (source.droppableId === destination.droppableId) {
      const items = reorder(
        getList(source.droppableId),
        result.source.index,
        result.destination.index
      )

      source.droppableId === 'droppable' && props.getDragData(items)
      source.droppableId === 'droppable1' && props.firstDrag(items)
      source.droppableId === 'droppable2' && props.secondDrag(items)
      source.droppableId === 'droppable3' && props.thirdDrag(items)
    } else {
      const result = move(
        getList(source.droppableId),
        getList(destination.droppableId),
        source,
        destination
      )
      if (source.droppableId === 'droppable') {
        if (destination.droppableId === 'droppable1') {
          props.firstDrag(result.droppable1)
          props.getDragData(result.droppable)
        }
        if (destination.droppableId === 'droppable2') {
          props.secondDrag(result.droppable2)
          props.getDragData(result.droppable)
        }
        if (destination.droppableId === 'droppable3') {
          props.thirdDrag(result.droppable3)
          props.getDragData(result.droppable)
        }
        if (destination.droppableId === 'droppable4') {
          props.thirdDrag(result.droppable1)
          props.getDragData(result.droppable)
        }
      }

      if (source.droppableId === 'droppable1') {
        if (destination.droppableId === 'droppable') {
          props.firstDrag(result.droppable1)
          props.getDragData(result.droppable)
        }
        if (destination.droppableId === 'droppable2') {
          props.secondDrag(result.droppable2)
          props.firstDrag(result.droppable1)
        }
        if (destination.droppableId === 'droppable3') {
          props.thirdDrag(result.droppable3)
          props.firstDrag(result.droppable1)
        }
      }

      if (source.droppableId === 'droppable2') {
        if (destination.droppableId === 'droppable') {
          props.secondDrag(result.droppable2)
          props.getDragData(result.droppable)
        }
        if (destination.droppableId === 'droppable1') {
          props.secondDrag(result.droppable2)
          props.firstDrag(result.droppable1)
        }
        if (destination.droppableId === 'droppable3') {
          props.thirdDrag(result.droppable3)
          props.secondDrag(result.droppable2)
        }
      }

      if (source.droppableId === 'droppable3') {
        if (destination.droppableId === 'droppable') {
          props.thirdDrag(result.droppable3)
          props.getDragData(result.droppable)
        }
        if (destination.droppableId === 'droppable2') {
          props.secondDrag(result.droppable2)
          props.thirdDrag(result.droppable3)
        }
        if (destination.droppableId === 'droppable1') {
          props.thirdDrag(result.droppable3)
          props.firstDrag(result.droppable1)
        }
      }
    }
  }

  return (
    <div className='app'>
      <DragDropContext onDragEnd={onDragEnd}>
        <ImageList />
        <DropZone />
        {props.isSettings && <div className='drop-zone__layer'></div>}
      </DragDropContext>
    </div>
  )
}
const mapStateToProps = state => ({
  images: state.imageReducer.imageList,
  firstColumn: state.dropReducer.firstColumn,
  secondColumn: state.dropReducer.secondColumn,
  thirdColumn: state.dropReducer.thirdColumn,
  isSettings: state.imageCustomizeReducer.isSettings
})
const mapDispatchToProps = {
  getDragData: dragAction,
  firstDrag: firstDragAction,
  secondDrag: secondDragAction,
  thirdDrag: thirdDragAction
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
