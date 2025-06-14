
import './settings.enable.css'
import { ISettings } from 'src/stores/settings.store'

export default function SettingsEnable({ settings, updateSetting }: { settings: ISettings, updateSetting: (key: keyof ISettings, value: any) => void }) {
    return (
        <div className="settings-group settings-enable">
            <div className="settings-enable__row settings-flex settings-flex-between settings-items-center settings-text-left">
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