import { atomWithStorage } from "jotai/utils"

export interface ISettings {
    enabled: boolean
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center-right' | 'center-left' | 'bottom-center' | 'top-center'
    soundEnabled: boolean
    volume: number
    duration: number
    opacity: number
}

const defaultSettings: ISettings = {
    enabled: true,
    position: 'top-right',
    soundEnabled: true,
    volume: 0.6,
    duration: 30,
    opacity: 1.0,
}

export const settingsAtom = atomWithStorage<ISettings>('RedAlert:Settings', defaultSettings)

