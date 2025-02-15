const fs = require('fs');

// Existing information about Node.js architecture
const nodejsInfo = `
Node.js is a platform that utilizes JavaScript and is primarily employed for developing web applications that are highly focused on input/output operations, including but not limited to chat applications and multimedia streaming websites. The platform is constructed using Google Chrome's V8 JavaScript engine. A web application is a type of software that executes on a server and is displayed by a client's browser that obtains all the application's resources over the internet.
`;

// Additional advantages of Node.js
const additionalInfo = `
Compared to other server-side languages, Node.js has distinct advantages. Its asynchronous model and non-blocking I/O operation improve the scalability and performance of web applications built on other frameworks. Node.js can easily handle multiple client requests without requiring multiple threads, consuming less memory and resources. Additionally, it is highly scalable and provides high performance. Node.js is also flexible with multiple frameworks and makes the development process easier.
`;

// Append additional information to the file
fs.appendFile('nodejs_architecture.txt', additionalInfo, (err) => {
    if (err) throw err;
    console.log('Additional information has been appended to nodejs_architecture.txt!');

    // Read and print the file content
    fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log('Updated content of nodejs_architecture.txt:');
        console.log(data);
    });
   // Delete the file
    fs.unlink('nodejs_architecture.txt', (err) => {
        if (err) throw err;
            console.log('File Deleted Successfully');
    });
});



