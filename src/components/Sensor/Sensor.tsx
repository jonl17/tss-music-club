import React from 'react'
import cn from 'classnames'
import { useGymnist } from '@src/context/StopMotion/Gymnist'

export type SensorType = 'xy' | 'x'

interface Props {
  count: number
  type: SensorType
}

const Stika = ({ count, type = 'xy' }: Props) => {
  const { updateChosenImageId } = useGymnist()
  return (
    <>
      <div className='sensor'>
        <div
          className={cn({
            'sensor__grid--medium': type === 'xy',
          })}
        >
          {Array.from(Array(count)).map((_, i) => (
            <div onMouseEnter={() => updateChosenImageId(i + 1)} />
          ))}
        </div>
      </div>
    </>
  )
}

export default Stika
