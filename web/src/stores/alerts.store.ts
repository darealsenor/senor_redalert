import { atom } from "jotai"
import { IAlert } from "../components/alerts/alerts.list"
import { isEnvBrowser } from "../utils/misc"

export const defaultAlerts: IAlert[] = [
    {
        id: 1,
        date: 1718342400,
        area: 'זמרת ושובה',
        threat: 'זמרת'
    },
    {
        id: 2,
        date: 1718342400,
        area: 'נתיבות',
        threat: 'נתיבות'
    },
    {
        id: 3,
        date: 1718342400,
        area: 'סעד',
        threat: 'סעד'
    },
    {
        id: 4,
        date: 1718342400,
        area: 'תקומה',
        threat: 'תקומה'
    },
    {
        id: 5,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 6,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 7,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 8,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 9,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 10,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 11,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 12,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 13,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
    {
        id: 14,
        date: 1718342400,
        area: 'תקומה ותחנות יזרעם',
        threat: 'תקומה ותחנות יזרעם'
    },
]

export const alertsAtom = atom<IAlert[]>(isEnvBrowser() ? defaultAlerts : [])
