/* eslint-disable global-require */

const images = {
  Clear: require('../assets/clear.jpg'),
  Hail: require('../assets/hail.jpg'),
  'Heavy Cloud': require('../assets/heavy-cloud.jpg'),
  'Light Cloud': require('../assets/light-cloud.jpg'),
  'Heavy Rain': require('../assets/heavy-rain.jpg'),
  'Light Rain': require('../assets/light-rain.jpg'),
  Showers: require('../assets/showers.jpg'),
  Sleet: require('../assets/sleet.png'),
  Snow: require('../assets/snow.jpg'),
  Thunder: require('../assets/thunder.jpg'),
};

export default weather => images[weather];
