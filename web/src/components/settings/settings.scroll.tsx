import React from 'react'
import { ISettings } from 'src/stores/settings.store'
import './settings.scroll.css'

const SPEED_OPTIONS = [
    { value: 1.0, label: 'Slow' },
    { value: 1.5, label: 'Normal' },
    { value: 2.5, label: 'Fast' }
]

export default function SettingsScroll({ settings, updateSetting }: { settings: ISettings, updateSetting: (key: keyof ISettings, value: any) => void }) {
    return (
        <div className="settings-card settings-scroll">
            <div className="settings-scroll__row">
                <div>
                    <label className="settings-label">Auto Scroll</label>
                    <p className="settings-description">Automatically scroll through alerts</p>
                </div>
                <button
                    onClick={() => updateSetting('autoScroll', !settings.autoScroll)}
                    className={`settings-toggle ${settings.autoScroll ? 'enabled' : 'disabled'}`}
                >
                    <span className="settings-toggle-thumb" />
                </button>
            </div>

            {settings.autoScroll && (
                <div className="settings-scroll__speed">
                    <label className="settings-label">Scroll Speed</label>
                    <div className="settings-scroll__speed-buttons">
                        {SPEED_OPTIONS.map(({ value, label }) => (
                            <button
                                key={value}
                                onClick={() => updateSetting('scrollSpeed', value)}
                                className={`settings-scroll__speed-button ${settings.scrollSpeed === value ? 'active' : ''}`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}