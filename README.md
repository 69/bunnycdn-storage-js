# bunnycdn-storage
![GitHub](https://img.shields.io/github/license/69/bunnycdn-storage-js?style=flat-square) ![npm](https://img.shields.io/npm/v/bunnycdn-storage?style=flat-square)
a small wrapper for the [bunnycdn](https://bunnycdn.com) storage api

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
```
# Disclaimer
Note that this project and the maintainer(s) of this repository are in no way, shape or form affiliated with BunnyCDN.
