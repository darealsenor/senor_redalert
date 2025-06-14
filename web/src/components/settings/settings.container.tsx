import React, { useState } from 'react'
import { useNuiEvent } from '../../hooks/useNuiEvent'
import { fetchNui } from '../../utils/fetchNui'
import './settings.css'
import SettingsHeader from './settings.header'
import SettingsEnable from './settings.enable'
import SettingsPosition from './settings.position'
import SettingsSound from './settings.sound'
import SettingsAppearance from './settings.appearance'

export interface Settings {
  enabled: boolean
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center'
  soundEnabled: boolean
  volume: number
  duration: number
  color: string
  size: 'small' | 'medium' | 'large'
  opacity: number
}

const defaultSettings: Settings = {
  enabled: true,
  position: 'top-right',
  soundEnabled: true,
  volume: 0.8,
  duration: 5,
  color: '#ff0000',
  size: 'medium',
  opacity: 0.9,
}

export default function SettingsContainer() {
  const [settings, setSettings] = useState<Settings>(defaultSettings)
  const [isOpen, setIsOpen] = useState(true)

  useNuiEvent('setSettings', (data: Settings) => {
    setSettings(data)
  })

  const updateSetting = (key: keyof Settings, value: any) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
  }

  return (
    <div className={`settings-panel ${isOpen ? 'open' : ''}`}>
      <SettingsHeader setIsOpen={setIsOpen} />
      <div className="settings-content">
        <SettingsEnable settings={settings} updateSetting={updateSetting} />
        <SettingsPosition settings={settings} updateSetting={updateSetting} />
        <SettingsSound settings={settings} updateSetting={updateSetting} />
        <SettingsAppearance settings={settings} updateSetting={updateSetting} />
      </div>
    </div>
  )
}