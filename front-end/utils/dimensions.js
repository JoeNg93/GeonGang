import { Dimensions, PixelRatio } from 'react-native';

export const screenHeight = Dimensions.get('window').height;
export const screenWidth = Dimensions.get('window').width;

export const heightPercentage = percentage => percentage * screenHeight / 100;
export const widthPercentage = percentage => percentage * screenWidth / 100;
