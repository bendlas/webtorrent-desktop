// require('./build/main')

try {
    require('electron-reloader')(module);
} catch(e) {
    console.info("Not hot reloading", e);
}
require('./src/main')
