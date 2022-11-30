import React from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'

export default function Maps({ data }) {
  const defaultState = {
    center: [data?.latitude, data?.longitude],
    default: [41.311081, 69.240562],
    zoom: 10,
  }

  return (
    <YMaps>
      {/* query={{ apikey: 'afbb60c1-0761-48a5-b821-b566bf220d8b', lang: 'EN' }}  */}
      <Map
        style={{ width: '880px', height: '416px' }}
        defaultState={defaultState}
      >
        <Placemark geometry={defaultState?.center || defaultState.default} />
      </Map>
    </YMaps>
  )
}
