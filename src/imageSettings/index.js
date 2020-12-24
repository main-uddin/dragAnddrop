import { useState } from 'react'
import { connect } from 'react-redux'
import ImageFilter from './ImageFilter'
import ImageChange from './ImageChange'
import './ImageCustomize.css'

const ImageSettings = props => {
  const [show, setShow] = useState('image')

  const setImage = () => setShow('image')
  const setFilter = () => setShow('filter')

  return (
    <div className='image-customize__container'>
      <div className='image-customize__headers'>
        <div
          className={
            show === 'image'
              ? 'image-filter__click--active image-change__click'
              : 'image-change__click'
          }
          onClick={setImage}
        >
          Image
        </div>
        <div
          className={
            show === 'filter'
              ? 'image-filter__click--active image-filter__click'
              : 'image-filter__click'
          }
          onClick={setFilter}
        >
          Filter
        </div>
      </div>
      <hr />
      {show === 'image' ? <ImageChange id={props.id} /> : <ImageFilter />}
    </div>
  )
}

const mapStateToProps = state => ({
  getChangeId: state.imageCustomizeReducer.changeId,
  editImage: state.imageCustomizeReducer.editImage
})


export default connect(mapStateToProps, null)(ImageSettings)
