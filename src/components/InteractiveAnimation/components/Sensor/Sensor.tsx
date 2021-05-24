import React from 'react'
import cn from 'classnames'
import { useStopMotion } from '../..'

export type SensorType = 'xy' | 'x'

interface Props {
  count: number
  type: SensorType
}

const Stika = ({ count, type = 'xy' }: Props) => {
  const { updateChosenImageId } = useStopMotion()
  return (
    <>
      <div className='sensor'>
        <div
          className={cn({
            'sensor__grid--medium': type === 'xy',
          })}
        >
          {Array.from(Array(count)).map((_, i) => (
            <div key={i} onMouseEnter={() => updateChosenImageId(i + 1)} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Stika
