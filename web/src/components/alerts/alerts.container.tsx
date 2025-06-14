import React from 'react'

import './alerts.container.css'
import AlertsList from './alerts.list'
import { getPositionStyle } from '../../utils/alertPosition'
import { useAtom } from 'jotai'
import { settingsAtom } from '../../stores/settings.store'

export default function AlertsContainer() {
  const [settings] = useAtom(settingsAtom)

  if (!settings.enabled) return null

  return (
    <div className='alerts-container' style={{ ...getPositionStyle(settings.position), opacity: settings.opacity }}>
      <div className='alerts-container__header'>
        <div className='alerts-container__header--title'>
          <h1>התרעות פיקוד העורף</h1>
        </div>
        <div className='alerts-container__header--logo'>
          <img src={`./pikud.svg`} alt='logo' />
        </div>
      </div>

      <div className='alerts-container__content'>
        <AlertsList />
      </div>
    </div>
  )
}
