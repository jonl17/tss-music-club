import React from 'react'
import { Container } from './styled'
import Eining from './Eining'
import { SensorType } from '@src/types'
import cn from 'classnames'

interface Props {
  count: number
  type: SensorType
}

const Stika = ({ count, type = 'xy' }: Props) => {
  return (
    <>
      <div className='sensor'>
        <div
          className={cn({
            'sensor__grid--medium': type === 'xy',
          })}
        >
          {Array.from(Array(count)).map((_, i) => (
            <Eining identifier={i} key={i} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Stika
