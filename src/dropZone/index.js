import FirstColumn from './FirstColumn'
import SecondColumn from './SecondColumn'
import ThirdColumn from './ThirdColumn'

import fileImg from '../img/nofile.png'
import { connect } from 'react-redux'

const DropZone = props => {
  return (
    <div className='drop-zone-parent'>
      {!props.isDrag ? (
        <div className='box'>
          <div className='nofile'>
            <div className='nofile__img-contain'>
              <img src={fileImg} alt='hhh' />
            </div>
            <div className='nofile__text'>Drop an image from Media Panel</div>
          </div>
        </div>
      ) : (
        <>
          <FirstColumn />
          <SecondColumn />
          <ThirdColumn />
        </>
      )}
    </div>
  )
}
const mapStateToProps = state => ({
  isDrag: state.dropReducer.isDragging
})
export default connect(mapStateToProps, null)(DropZone)
