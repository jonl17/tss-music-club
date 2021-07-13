import React, { useEffect, useState } from 'react'
import { PortalSVG } from '@cmp/SVGS'

const Portal = () => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if (active) {
      const rings = document.querySelectorAll('.the-portal__ring')
      Array.from(rings).forEach((ring, i) => {
        setTimeout(() => {
          ring.classList.add('the-portal__ring--animate-in')
        }, 25 * i)
      })
    }
  }, [active])

  const activateThePortal = () => {
    setActive(true)
    setTimeout(() => {
      setActive(false)
    }, 3000)
  }

  return (
    <div className='d-flex justify-content-center'>
      <PortalSVG portalActive={active} />
      <button
        className='the-portal__button'
        disabled={active}
        onClick={() => activateThePortal()}
      >
        ACTIVATE
      </button>
    </div>
  )
}

export default Portal
