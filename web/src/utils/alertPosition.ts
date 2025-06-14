import { ISettings } from "src/stores/settings.store";

export const getPositionStyle = (position: ISettings['position']): React.CSSProperties => {
    switch (position) {
        case 'top-left':
            return { position: 'fixed', top: 20, left: 20, zIndex: 9999 };
        case 'top-right':
            return { position: 'fixed', top: 20, right: 20, zIndex: 9999 };
        case 'bottom-left':
            return { position: 'fixed', bottom: 20, left: 20, zIndex: 9999 };
        case 'bottom-right':
            return { position: 'fixed', bottom: 20, right: 20, zIndex: 9999 };
        case 'center-right':
            return { position: 'fixed', top: '50%', right: 20, transform: 'translateY(-50%)', zIndex: 9999 };
        case 'center-left':
            return { position: 'fixed', top: '50%', left: 20, transform: 'translateY(-50%)', zIndex: 9999 };
        case 'bottom-center':
            return { position: 'fixed', bottom: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 };
        case 'top-center':
            return { position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 9999 };
        default:
            return { position: 'fixed', top: 20, right: 20, zIndex: 9999 };
    }
};