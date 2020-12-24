import { connect } from 'react-redux'

import { editingImage, changeId, resetSetting } from '../imageSettings/imageCustomizeAction'
const ImageChange = props => {
  const handleImageChange = e => {
    e.preventDefault()
    props.resetSet()
    props.changeId(props.id)
    let reader = new FileReader()
    let file = e.target?.files[0]
    reader.readAsDataURL(file)

    reader.onloadend = () => {
      props.editingImage({ ...props.editImage, img: reader.result })
    }
  }

  return (
    <div className='img-change__container'>
      <img className='img-change' src={props.editImage.img} alt='not found' />
      <label className='custom-file-upload'>
        <input type='file' onChange={handleImageChange} />
        Change Photo
      </label>
    </div>
  )
}

const mapStateToProps = state => ({
  editImage: state.imageCustomizeReducer.editImage
})

const mapDispatchToProps = {
  resetSet: resetSetting,
  editingImage,
  changeId
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageChange)
