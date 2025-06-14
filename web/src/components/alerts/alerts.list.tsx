import React, { useEffect, useRef, useState } from 'react'

import './alerts.list.css'
import { useNuiEvent } from '../../hooks/useNuiEvent';
import Alert from './alert';
import { useAtom } from 'jotai';
import { alertsAtom } from '../../stores/alerts.store';
import { settingsAtom } from '../../stores/settings.store';
import { useSound } from '../../hooks/useSound';
import { debugData } from '../../utils/debugData';
import NoAlerts from './no_alerts';
import { fetchNui } from '../../utils/fetchNui';

export interface IAlert {
    id: number;
    date: number;
    area: string;
    threat: string;
}

debugData([
    {
        action: 'setAlerts',
        data: [
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
    }
])

export default function AlertsList() {
    const [alerts, setAlerts] = useAtom(alertsAtom)
    const [settings] = useAtom(settingsAtom)
    const { play } = useSound('/alert.wav', { volume: settings.volume })
    const timeoutRef = useRef<NodeJS.Timeout>()
    const listRef = useRef<HTMLDivElement>(null)
    const scrollRef = useRef({
        direction: 1,
        interval: null as NodeJS.Timeout | null,
        isScrolling: false
    })

    useEffect(() => {
        if (!listRef.current || alerts.length === 0 || !settings.autoScroll) return

        const list = listRef.current
        const scroll = scrollRef.current

        const scrollContent = () => {
            if (!list) return

            const { scrollTop, scrollHeight, clientHeight } = list
            const maxScroll = scrollHeight - clientHeight

            if (scrollTop >= maxScroll) {
                scroll.direction = -1
            }
            else if (scrollTop <= 0) {
                scroll.direction = 1
            }

            list.scrollTop += scroll.direction * settings.scrollSpeed
        }

        const startScrolling = () => {
            if (scroll.isScrolling) return
            scroll.isScrolling = true
            scroll.interval = setInterval(scrollContent, 30)
        }

        const stopScrolling = () => {
            if (!scroll.isScrolling) return
            scroll.isScrolling = false
            if (scroll.interval) {
                clearInterval(scroll.interval)
                scroll.interval = null
            }
        }

        list.addEventListener('mouseleave', startScrolling)
        list.addEventListener('mouseenter', stopScrolling)

        startScrolling()

        return () => {
            stopScrolling()
            list.removeEventListener('mouseleave', startScrolling)
            list.removeEventListener('mouseenter', stopScrolling)
        }
    }, [alerts, settings.autoScroll, settings.scrollSpeed])

    useNuiEvent('setAlerts', (alerts: IAlert[]) => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
            timeoutRef.current = undefined
        }

        setAlerts(alerts)
        if (settings.soundEnabled) {
            play()
        }
    })

    useEffect(() => {
        if (alerts.length > 0) {
            timeoutRef.current = setTimeout(() => {
                setAlerts([])
                fetchNui('hideFrame')
                timeoutRef.current = undefined
            }, settings.duration * 1000)
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
                timeoutRef.current = undefined
            }
        }
    }, [alerts, settings.duration])

    return (
        <div className='alerts-list' ref={listRef}>
            {alerts.length > 0 && alerts.map((alert) => (
                <Alert key={alert.id} alert={alert} />
            ))}
            {alerts.length === 0 && <NoAlerts />}
        </div>
    )
}
