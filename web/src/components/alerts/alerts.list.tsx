import React, { useState } from 'react'

import './alerts.list.css'
import { useNuiEvent } from '../../hooks/useNuiEvent';
import { debugData } from '../../utils/debugData';
import Alert from './alert';

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
    const [alerts, setAlerts] = useState<IAlert[]>([])

    useNuiEvent('setAlerts', (alerts: IAlert[]) => {
        setAlerts(alerts)
    })

    return (
        <div className='alerts-list'>
            {alerts.map((alert) => (
                <Alert key={alert.id} alert={alert} />
            ))}
        </div>
    )
}
