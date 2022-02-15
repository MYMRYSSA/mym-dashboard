module.exports = {
    useFileSystemPublicRoutes: true,
    experimental: {
        outputStandalone: true
    },
    env: {
        API_URL: process.env.API_URL
    }
};
