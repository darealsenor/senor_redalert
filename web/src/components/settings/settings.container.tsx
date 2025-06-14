import React, { useState } from 'react'
import { useNuiEvent } from '../../hooks/useNuiEvent'
import './settings.css'
import SettingsHeader from './settings.header'
import SettingsEnable from './settings.enable'
import SettingsPosition from './settings.position'
import SettingsSound from './settings.sound'
import SettingsAppearance from './settings.appearance'
import SettingsControls from './settings.controls'
import { settingsAtom, type ISettings } from '../../stores/settings.store'
import { useAtom } from 'jotai'
import SettingsScroll from './settings.scroll'

export default function SettingsContainer() {
  const [settings, setSettings] = useAtom(settingsAtom)
  const [isOpen, setIsOpen] = useState(true)

  useNuiEvent('setSettings', (data: ISettings) => {
    setSettings(data)
  })

  const updateSetting = (key: keyof ISettings, value: any) => {
    const newSettings = { ...settings, [key]: value }
    setSettings(newSettings)
  }

  const getPanelPosition = () => {
    switch (settings.position) {
      case 'top-left':
      case 'bottom-left':
      case 'center-left':
        return { right: 0 }
      case 'top-right':
      case 'bottom-right':
      case 'center-right':
      case 'bottom-center':
      case 'top-center':
        return { left: 0 }
      default:
        return {}
    }
  }

  return (
    <div className={`settings-panel ${isOpen ? 'open' : ''}`} style={getPanelPosition()}>
      <SettingsHeader setIsOpen={setIsOpen} />
      <div className="settings-content">
        <SettingsEnable settings={settings} updateSetting={updateSetting} />
        <SettingsPosition settings={settings} updateSetting={updateSetting} />
        <SettingsSound settings={settings} updateSetting={updateSetting} />
        <SettingsAppearance settings={settings} updateSetting={updateSetting} />
        <SettingsControls />
        <SettingsScroll settings={settings} updateSetting={updateSetting} />
      </div>
    </div>
  )
}