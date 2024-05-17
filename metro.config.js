// const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

// /**
//  * Metro configuration
//  * https://facebook.github.io/metro/docs/configuration
//  *
//  * @type {import('metro-config').MetroConfig}
//  */
// const config = {};

// module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// const { getDefaultConfig } = require('metro-config');

// module.exports = (async () => {
//   const {
//     resolver: { sourceExts, assetExts }
//   } = await getDefaultConfig();

//   return {
//     transformer: {
//       getTransformOptions: async () => ({
//         transform: {
//           experimentalImportSupport: false,
//           inlineRequires: false,
//         },
//       }),
//     },
//     resolver: {
//       sourceExts,
//       assetExts,
//     },
//   };
// })();

// const path = require('path');
// const fs = require('expo-file-system');
// const { getDefaultConfig } = require('expo/metro-config');

// const config = getDefaultConfig(__dirname);

// const virtualPath = path.resolve(__dirname, 'node_modules/cache/virtual/virtual-metro-entry.js');

// // Create the virtual module in a generated directory
// fs.mkdirSync(path.dirname(virtualPath), { recursive: true });
// fs.writeFileSync(virtualPath, 'export default "Hello Metro";');

// config.resolver.resolveRequest = (context, moduleName, platform) => {
//   if (moduleName === './.expo/.virtual-metro-entry') {
//     return {
//       filePath: virtualPath,
//       type: 'sourceFile',
//     };
//   }

//   // Ensure you call the default resolver.
//   return context.resolveRequest(context, moduleName, platform);
// };

// module.exports = config;

const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const config = await getDefaultConfig(__dirname);

  config.resolver.extraNodeModules = {
    fs: require.resolve('expo-file-system'), // Use expo-file-system as a polyfill
    stream: require.resolve('stream-browserify'),
    util: require.resolve('util'),
    path: require.resolve('path-browserify'),
    zlib: require.resolve('browserify-zlib'),
    assert: require.resolve('assert')
  };

  return config;
})();
