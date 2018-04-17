import { START_SCANNING_ANIMATION, STOP_SCANNING_ANIMATION } from './types';

export const startScanningAnimation = () => ({
  type: START_SCANNING_ANIMATION
});

export const stopScanningAnimation = () => ({ type: STOP_SCANNING_ANIMATION });
