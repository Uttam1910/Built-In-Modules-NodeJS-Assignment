// Import the events module
const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

// Create an event handler function
const testHandler = () => {
  console.log('Event handler called');
};

// Assign the event handler to an event named 'testEvent'
eventEmitter.on('testEvent', testHandler);

// Call the 'testEvent'
eventEmitter.emit('testEvent'); // This will print "Event handler called"

// Remove the event handler
eventEmitter.removeListener('testEvent', testHandler);

// Try to call the 'testEvent' again
eventEmitter.emit('testEvent'); // Nothing will happen because the event handler has been removed
