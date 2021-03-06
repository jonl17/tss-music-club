import React from 'react'
import { BoogieManSVG } from '@cmp/SVGS'
import { useEffect } from 'react'
import { useState } from 'react'

const BoogieMan = () => {
  const [layers, setLayers] = useState<Element[]>()
  const [beardLimit, setBeardLimit] = useState('1')
  useEffect(() => {
    const result = document.querySelectorAll('.boogieman__layer')
    setLayers(Array.from(result))
  }, [])

  useEffect(() => {
    if (layers) {
      layers.forEach(layer => {
        const no = layer.id.replace('Layer_', '')
        if (parseInt(no) < parseInt(beardLimit)) {
          layer.classList.add('boogieman__layer--visible')
        } else {
          layer.classList.remove('boogieman__layer--visible')
        }
      })
    }
  }, [beardLimit])

  return (
    <div className='reel-with-options bg-green'>
      <div className='d-flex h-100 w-100 justify-content-center align-items-center position-relative'>
        <BoogieManSVG />
      </div>
      <div className='d-flex flex-column justify-content-center container col-lg-6'>
        <h4>move this</h4>
        {layers && (
          <input
            onChange={e => setBeardLimit(e.target.value)}
            value={beardLimit}
            type='range'
            min='1'
            max={layers?.length}
          />
        )}
      </div>
    </div>
  )
}

export default BoogieMan
