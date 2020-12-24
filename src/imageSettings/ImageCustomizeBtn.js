import del from '../img/delete.svg'
import setting from '../img/setting.png'
import arrow from '../img/arrow.png'
import { connect } from 'react-redux'
import { isSettings, editingImage, deleteImg } from './imageCustomizeAction'

const ImageCustomizeBtn = props => {
  const handleDelete = () => {
    props.del(props.images, props.id)
  }
  const handleSettings = () => {
    props.isSettings(true)
    props.editingImage(props.images)
  }
  return (
    <div className='tool'>
      <div className='img__settings' onClick={handleSettings}>
        <img src={setting} alt='' />
      </div>
      {props.isSet && (
        <div className='arrow_img'>
          <img src={arrow} alt='hmm' />
        </div>
      )}
      <div className='bar' />
      <div className='img__delete' onClick={handleDelete}>
        <img src={del} alt='' />
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isSet: state.imageCustomizeReducer.isSettings
})

const mapDispatchToProps = {
  isSettings,
  editingImage,
  del: deleteImg
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageCustomizeBtn)
