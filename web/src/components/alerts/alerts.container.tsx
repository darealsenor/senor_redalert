import React from 'react'

import './alerts.container.css'
import AlertsList from './alerts.list'

export default function AlertsContainer() {
  return (
    <div className='alerts-container'>
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
