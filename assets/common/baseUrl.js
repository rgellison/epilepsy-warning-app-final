import { Platform } from 'react-native';

// Connect with the cloud
let baseURL = 'https://backend-four.herokuapp.com/api/v1/';

//let baseURL = 'https://backend-musa.herokuapp.com/';
//Server local
// let baseURL = '';

// {Platform.OS == 'android'
// ? baseURL = 'http://10.0.2.2:3000/api/v1/'
// : baseURL = 'http://localhost:3000/api/v1/'
// }

export default baseURL;