export default {
  expo: {
    name: "ais-viewer-mobile",
    slug: "ais-viewer-mobile",
    version: "0.0.1",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.evrimfeyyaz.ais-viewer-mobile",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.evrimfeyyaz.aisviewermobile",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    plugins: [
      [
        "@rnmapbox/maps",
        {
          RNMapboxMapsDownloadToken: process.env.EXPO_PUBLIC_MAPBOX_ACCESS_TOKEN,
        },
      ],
    ],
  },
};
