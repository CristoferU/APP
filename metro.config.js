const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-reanimated/plugin'),
    },
    resolver: {
      sourceExts: [...sourceExts, 'cjs'],
    },
  };
})();