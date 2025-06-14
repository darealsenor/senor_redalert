import Locale from 'locale';
import fetch from 'node-fetch';
import { IAlert } from '../../types/alert';

export class Alert {
    static alerts_TxMessageOnAlert = GetConvarInt("alerts:txMessageOnAlert", 1);
    static alerts_TxMessageOnAlertContent = GetConvar("alerts:txMessageOnAlertContent", Locale("alerts:txMessageOnAlert"));
    static alerts_TxMessageOnAlertDuration = GetConvarInt("alerts:txMessageOnAlertDuration", 5_000);

    static alerts_debug = 1
    static alerts_interval_duration = Alert.alerts_debug ? 1500 : GetConvarInt("alerts:intervalDuration", 10_000);


    private static orefUrlFull = `https://redalert.me/alerts`;

    constructor() {
        console.log('Alert class initialized');
        // Credit to BarBaroNN
        setInterval(async () => {
            const alerts = Alert.alerts_debug ? Alert.generateDebugAlerts(10) : await Alert.handleAlerts();
            if (alerts.length === 0) return;
            Alert.broadcastAlerts(alerts);
        }, Alert.alerts_interval_duration);
    }

    private static CheckEnoughPlayers(): boolean {
        return GetNumPlayerIndices() > 0;
    }

    private static async fetchOrefAPI(): Promise<IAlert[]> {
        try {
            const response = await fetch(Alert.orefUrlFull);
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            const data = await response.json();
            if (!Array.isArray(data)) return [];
            return data;
        } catch (err) {
            console.error('[ALERT ERROR]', err);
            return [];
        }
    }

    private static async handleAlerts(): Promise<IAlert[]> {
        if (!Alert.CheckEnoughPlayers()) return [];

        const rawData = await Alert.fetchOrefAPI();
        if (!Array.isArray(rawData)) return [];
        if (rawData.length === 0) return [];

        const recentAlerts: IAlert[] = []

        for (const alert of rawData) {
            const match = alert.date.toString().match(/(\d+)-(\d+)-(\d+)\s+(\d+):(\d+):(\d+)/);
            if (!match) continue;

            const [_, year, month, day, hour, min, sec] = match.map(Number);
            const alertTime = new Date(year, month - 1, day, hour, min, sec).getTime();
            const now = Date.now();

            if (now - alertTime <= 2.5 * 60 * 1000) {
                recentAlerts.push(alert);
            }
        }
        return recentAlerts;
    }

    private static broadcastAlerts(alerts: IAlert[]): void {
        emitNet('alerts:server:update', -1, alerts);
    }

    private static generateDebugAlerts(numAlerts: number): IAlert[] {
        // id	66322
        // date	1749772816
        // area	"ברחבי הארץ"
        // threat	"unknown"
        const alerts: IAlert[] = [];
        for (let i = 0;i < numAlerts;i++) {
            alerts.push({
                id: Math.floor(Math.random() * 1000000),
                date: Date.now(),
                area: "ברחבי הארץ",
                threat: "unknown",
            });
        }
        return alerts;
    }

}
