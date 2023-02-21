require('dotenv').config()

const watch = require('node-watch');

const syncOutDir = process.env.SYNC_OUT_DIR;

console.log(syncOutDir);

watch(syncOutDir, { recursive: false }, (evt, name) => {
  console.log('%s changed.', name);
});