import React from 'react'
import { useAtom } from 'jotai'
import { alertsAtom } from '../../stores/alerts.store'
import { defaultAlerts } from '../../stores/alerts.store'
import { fetchNui } from '../../utils/fetchNui'
import { isEnvBrowser } from '../../utils/misc'
import './settings.controls.css'
import { debugData } from '../../utils/debugData'

export default function SettingsControls() {
    const [, setAlerts] = useAtom(alertsAtom)

    const clearAlerts = () => {
        setAlerts([])
        fetchNui('hideFrame')
    }

    const testAlerts = () => {
        debugData([
            {
                action: 'setAlerts',
                data: defaultAlerts.slice(0, 3)
            }
        ])
    }

    return (
        <div className="settings-card">
            <h3 className="settings-group-title">Alert Controls</h3>
            <div className="settings-group">
                <button
                    onClick={clearAlerts}
                    className="settings-button settings-button--clear"
                >
                    Clear All Alerts
                </button>
                {isEnvBrowser() && (
                    <button
                        onClick={testAlerts}
                        className="settings-button settings-button--test"
                    >
                        Test Alerts
                    </button>
                )}
            </div>
        </div>
    )
} 