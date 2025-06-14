import React from 'react'
import { Settings } from './settings.container'

import './settings.enable.css'

export default function SettingsEnable({ settings, updateSetting }: { settings: Settings, updateSetting: (key: keyof Settings, value: any) => void }) {
    return (
        <div className="settings-group settings-enable">
            <div className="settings-enable__row">
                <div className="settings-enable__info">
                    <label className="settings-label">Enable Alerts</label>
                    <p className="settings-description">Toggle the visibility of rocket alerts</p>
                </div>
                <button
                    onClick={() => updateSetting('enabled', !settings.enabled)}
                    className={`settings-toggle ${settings.enabled ? 'enabled' : 'disabled'} settings-enable__toggle`}
                >
                    <span className="settings-toggle-thumb" />
                </button>
            </div>
        </div>
    )
}