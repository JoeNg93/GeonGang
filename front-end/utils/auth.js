import { AsyncStorage } from 'react-native';

export const getAuthHeader = async () => {
  const authToken =
    (await AsyncStorage.getItem('authToken')) ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTIzMjU4MTM1fQ.EBdZkI2y9YoF6jy8O0QMC3BOR2LF0ikED42kAPePfRc';
  return {
    Authorization: `Bearer ${authToken}`
  };
};
