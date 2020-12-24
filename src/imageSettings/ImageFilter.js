import { useEffect, useRef } from 'react'
import { connect } from 'react-redux'

import brightnessImg from '../img/brightness.svg'
import constrastImg from '../img/constrast.svg'
import saturateImg from '../img/saturate.svg'
import dmp from '../img/dmp.svg'

import {
  brightnessAction,
  constrastAction,
  saturateAction,
  dmpAction,
  isSettings
} from './imageCustomizeAction'

import './ImageCustomize.css'

const ImageFilter = props => {
  const handleContrast = e => {
    const data = parseInt(e.target.value)
    props.constrastAct(data)
  }

  const handleSaturate = e => {
    const data = parseInt(e.target.value)
    props.saturateAct(data)
  }
  const handleBrightness = e => {
    const data = parseInt(e.target.value)
    props.brightnessAct(data)
  }

  const handleDmp = e => {
    const data = parseInt(e.target.value)
    props.dmpAct(data)
  }

  let menuRef = useRef(null)
  useEffect(() => {
    document.addEventListener('mousedown', e => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        props.isSet(false)
      }
    })
  })

  return (
    <div className='img-filter__container' ref={menuRef}>
      <div className='img-filter-item__row'>
        <img className='img-filter__icon' src={dmp} alt='' />
        <div className='img-filter__input'>
          <input
            type='range'
            min={0}
            max={100}
            value={props.dmp}
            onChange={handleDmp}
          />
        </div>
        <div className='img-filter-parcent'>{props.dmp} dmp</div>
      </div>
      <div className='img-filter-item__row'>
        <img className='img-filter__icon' src={saturateImg} alt='' />
        <input
          type='range'
          min={0}
          max={200}
          value={props.saturate}
          onChange={handleSaturate}
        />
        <div className='img-filter-parcent'>{props.saturate}%</div>
      </div>
      <div className='img-filter-item__row'>
        <img className='img-filter__icon' src={brightnessImg} alt='' />
        <input
          type='range'
          min={0}
          max={200}
          value={props.brightness}
          onChange={handleBrightness}
        />
        <div className='img-filter-parcent'>{props.brightness}%</div>
      </div>
      <div className='img-filter-item__row last'>
        <img className='img-filter__icon' src={constrastImg} alt='' />
        <input
          type='range'
          min={0}
          max={300}
          value={props.constrast}
          onChange={handleContrast}
        />
        <div className='img-filter-parcent'>{props.constrast}%</div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  brightness: state.imageCustomizeReducer.brightness,
  constrast: state.imageCustomizeReducer.constrast,
  saturate: state.imageCustomizeReducer.saturate,
  dmp: state.imageCustomizeReducer.dmp
})
const mapDispatchToProps = {
  brightnessAct: brightnessAction,
  saturateAct: saturateAction,
  constrastAct: constrastAction,
  dmpAct: dmpAction,
  isSet: isSettings
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageFilter)
