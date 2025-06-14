import React from 'react'
import { Settings } from './settings.container'
import './settings.position.css'
import { ISettings } from 'src/stores/settings.store'

export default function SettingsPosition({ settings, updateSetting }: { settings: ISettings, updateSetting: (key: keyof ISettings, value: any) => void }) {
    return (
        <div className="settings-group settings-position">
            <div className="settings-position__row ">
                <label className="settings-label">Alert Position</label>
                <select
                    value={settings.position}
                    onChange={(e) => updateSetting('position', e.target.value)}
                    className="settings-select"
                >
                    <option value="top-left">Top Left</option>
                    <option value="top-right">Top Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="bottom-right">Bottom Right</option>
                    <option value="center-right">Center Right</option>
                    <option value="center-left">Center Left</option>
                    <option value="bottom-center">Bottom Center</option>
                    <option value="top-center">Top Center</option>
                </select>
            </div>
        </div>
    )
}