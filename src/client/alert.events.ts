import { IAlert } from '../../types/alert';

onNet('alerts:server:update', (alerts: IAlert[]) => {
    console.log(alerts);
});