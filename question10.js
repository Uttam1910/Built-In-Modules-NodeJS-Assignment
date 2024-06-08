// Import the events module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Determine the current maximum number of listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log(`The default maximum number of event listeners are: ${currentMaxListeners}`);

// Set the maximum number of listeners to 5
eventEmitter.setMaxListeners(5);

// Confirm the change
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log(`The updated maximum number of event listeners are: ${updatedMaxListeners}`);

