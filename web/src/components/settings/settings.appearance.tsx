import React from 'react'
import { Settings } from './settings.container'

export default function SettingsAppearance({ settings, updateSetting }: { settings: Settings, updateSetting: (key: keyof Settings, value: any) => void }) {
    return (
        <div className="settings-card">
            <h3 className="settings-group-title">Alert Appearance</h3>

        <div className="settings-group">
            <label className="settings-label">Duration (seconds)</label>
            <input
                type="number"
                min="1"
                max="10"
                value={settings.duration}
                onChange={(e) => updateSetting('duration', parseInt(e.target.value))}
                className="settings-input"
            />
        </div>

        <div className="settings-group">
            <label className="settings-label">Size</label>
            <select
                value={settings.size}
                onChange={(e) => updateSetting('size', e.target.value)}
                className="settings-select"
            >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </div>

        <div className="settings-group">
            <label className="settings-label">Opacity</label>
            <div className="settings-range-container">
                <input
                    type="range"
                    min="0.1"
                    max="1"
                    step="0.1"
                    value={settings.opacity}
                    onChange={(e) => updateSetting('opacity', parseFloat(e.target.value))}
                    className="settings-range"
                />
                <span className="settings-range-value">
                    {Math.round(settings.opacity * 100)}%
                </span>
            </div>
        </div>
    </div>
)
}