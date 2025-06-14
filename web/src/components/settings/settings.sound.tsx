import React from 'react'
import { Settings } from './settings.container'
import './settings.sound.css'
import { ISettings } from 'src/stores/settings.store'

export default function SettingsSound({ settings, updateSetting }: { settings: ISettings, updateSetting: (key: keyof ISettings, value: any) => void }) {
    return (
        <div className="settings-card settings-sound">
            <div className="settings-sound__row">
                <div>
                    <label className="settings-label">Sound Alerts</label>
                    <p className="settings-description">Configure alert sound settings</p>
                </div>
                <button
                    onClick={() => updateSetting('soundEnabled', !settings.soundEnabled)}
                    className={`settings-toggle ${settings.soundEnabled ? 'enabled' : 'disabled'}`}
                >
                    <span className="settings-toggle-thumb" />
                </button>
            </div>

            {settings.soundEnabled && (
                <div className="settings-group">
                    <label className="settings-label">Volume</label>
                    <div className="settings-range-container">
                        <input
                            type="range"
                            min="0"
                            max="1"
                            step="0.1"
                            value={settings.volume}
                            onChange={(e) => updateSetting('volume', parseFloat(e.target.value))}
                            className="settings-range"
                        />
                        <span className="settings-range-value">
                            {Math.round(settings.volume * 100)}%
                        </span>
                    </div>
                </div>
            )}
        </div>
    )
}