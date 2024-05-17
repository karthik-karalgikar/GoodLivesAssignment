const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
    const config = await createExpoWebpackConfigAsync(env, argv);
    config.resolve.fallback = {
        ...config.resolve.fallback,
        crypto: require.resolve('expo-crypto'),
        fs: false, // fs is not available in the browser
        util: require.resolve('util'), // Redirect util to the util polyfill
        // path: require.resolve('path-browserify'),
        // zlib: require.resolve('browserify-zlib'),
        stream: require.resolve('stream-browserify'),
        path: false,
        zlib: require.resolve('browserify-zlib'),
        assert: false
        
    };
    return config;
};