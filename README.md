# bunnycdn-storage
a small wrapper for the bunnycdn storage api

# Building
install dependencies with npm/yarn and then run `npm build` or `yarn build`

# Usage
```js
const BunnyStorage = require('bunnycdn-storage').default;
const bunnyStorage = new BunnyStorage('API-KEY', 'STORAGE-ZONE-NAME');


// list all files in zone / path
const files = await bunnyStorage.list();
const filesInDir = await bunnyStorage.list('/images');

// upload a file from buffer or filename
bunnyStorage.upload('/tmp/bunny.jpg');
bunnyStorage.upload(fs.readFileSync('/tmp/bunny.jpg'), 'bunny.jpg')

// download a file from the servers
bunnyStorage.download('bunny.jpg'); // Buffer (default)
bunnyStorage.download('bunny.jpg', 'arraybuffer'); // Buffer
bunnyStorage.download('bunny.jpg', 'stream'); // ReadableStream

// delete a file
bunnyStorage.delete('bunny.jpg');
