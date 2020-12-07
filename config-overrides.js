const path = require('path');

module.exports = {
    paths: function (paths, env) {
        paths.appIndexJs = path.resolve(__dirname, 'src/main/resources/static/index.tsx');
        paths.appSrc = path.resolve(__dirname, 'src');
        return paths;
    },
}