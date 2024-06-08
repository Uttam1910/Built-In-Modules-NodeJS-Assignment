const os = require('os');

// Get OS type (name)
const osName = os.type();

// Get OS release version
const osRelease = os.release();

// Print the OS name and release version to the console
console.log(`Operating System Name: ${osName}`);
console.log(`OS Release Version: ${osRelease}`);
