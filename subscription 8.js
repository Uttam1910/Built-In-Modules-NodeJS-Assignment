const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Define the 'subscribe' event listener
eventEmitter.on('subscribe', (channelName) => {
  console.log(`Thanks For Subscribing to ${channelName}`);
});

// Emit the 'subscribe' event
eventEmitter.emit('subscribe', 'College Wallah');
