import React from 'react'
import { BoogieManSVG } from '@cmp/SVGS'
import { useEffect } from 'react'
import { useState } from 'react'

const BoogieMan = () => {
  const [layers, setLayers] = useState<Element[]>()
  const [beardLimit, setBeardLimit] = useState('0')
  useEffect(() => {
    const result = document.querySelectorAll('.boogie-man__layer')
    setLayers(Array.from(result))
  }, [])

  useEffect(() => {
    if (layers) {
      layers.forEach(layer => {
        const no = layer.id.replace('Layer_', '')
        if (parseInt(no) < parseInt(beardLimit)) {
          layer.classList.add('boogie-man__layer--visible')
        } else {
          layer.classList.remove('boogie-man__layer--visible')
        }
      })
    }
  }, [beardLimit])

  return (
    <div className='container reel-with-options'>
      <div className='d-flex justify-content-center align-items-center'>
        <BoogieManSVG />
      </div>
      <div className='d-flex justify-content-center'>
        {layers && (
          <input
            onChange={e => setBeardLimit(e.target.value)}
            value={beardLimit}
            type='range'
            min='0'
            max={layers?.length}
          />
        )}
      </div>
    </div>
  )
}

export default BoogieMan
