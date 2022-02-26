process.env.NODE_ENV = 'production';
process.chdir(__dirname);
const NextServer = require('next/dist/server/next-server').default;
const https = require('https');
const http = require('http');
const path = require('path');
const fs = require('fs');

let handler;

const options = {
  key: fs.readFileSync('./certs/ssl.key'),
  cert: fs.readFileSync('./certs/ssl.crt'),
};
const serverHttp = http.createServer(async (req, res) => {
  try {
    await handler(req, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('internal http server error');
  }
});

const serverHttps = https.createServer(options, async (req, res) => {
  try {
    await handler(req, res);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
    res.end('internal https server error');
  }
});

const currentPortHttp = parseInt(process.env.PORT_HTTP, 10) || 3000;
const currentPortHttps = parseInt(process.env.PORT_HTTPS, 10) || 443;
const currentApiUrl = process.env.API_URL || '';

serverHttp.listen(currentPortHttp, (err) => {
  if (err) {
    console.error('Failed to start serverHttp', err);
    process.exit(1);
  }
  const addr = serverHttp.address();
  const nextServer = new NextServer({
    hostname: '0.0.0.0',
    port: currentPortHttp,
    dir: path.join(__dirname),
    dev: false,
    conf: {
      env: { API_URL: currentApiUrl },
      webpack: null,
      webpackDevMiddleware: null,
      eslint: { ignoreDuringBuilds: false },
      typescript: { ignoreBuildErrors: false, tsconfigPath: 'tsconfig.json' },
      distDir: './.next',
      cleanDistDir: true,
      assetPrefix: '',
      configOrigin: 'next.config.js',
      useFileSystemPublicRoutes: true,
      generateEtags: true,
      pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
      target: 'server',
      poweredByHeader: true,
      compress: false,
      analyticsId: '',
      images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        domains: [],
        disableStaticImages: false,
        minimumCacheTTL: 60,
        formats: ['image/webp']
      },
      devIndicators: { buildActivity: true, buildActivityPosition: 'bottom-right' },
      onDemandEntries: { maxInactiveAge: 15000, pagesBufferLength: 2 },
      amp: { canonicalBase: '' },
      basePath: '',
      sassOptions: {},
      trailingSlash: false,
      i18n: null,
      productionBrowserSourceMaps: false,
      optimizeFonts: true,
      excludeDefaultMomentLocales: true,
      serverRuntimeConfig: {},
      publicRuntimeConfig: {},
      reactStrictMode: false,
      httpAgentOptions: { keepAlive: true },
      outputFileTracing: true,
      staticPageGenerationTimeout: 60,
      swcMinify: false,
      experimental: {
        cpus: 15,
        sharedPool: true,
        plugins: false,
        profiling: false,
        isrFlushToDisk: true,
        workerThreads: false,
        pageEnv: false,
        optimizeImages: false,
        optimizeCss: false,
        scrollRestoration: false,
        externalDir: false,
        reactRoot: false,
        disableOptimizedLoading: false,
        gzipSize: true,
        swcFileReading: true,
        craCompat: false,
        esmExternals: true,
        isrMemoryCacheSize: 52428800,
        concurrentFeatures: false,
        serverComponents: false,
        fullySpecified: false,
        outputFileTracingRoot: '',
        outputStandalone: true
      },
      configFileName: 'next.config.js'
    }
  });
  handler = nextServer.getRequestHandler();

  console.log('Listening on port', currentPortHttp);
});

serverHttps.listen(currentPortHttps, (err) => {
  if (err) {
    console.error('Failed to start serverHttps', err);
    process.exit(1);
  }
  const addr = serverHttps.address();
  const nextServer = new NextServer({
    hostname: '0.0.0.0',
    port: currentPortHttps,
    dir: path.join(__dirname),
    dev: false,
    conf: {
      env: { API_URL: currentApiUrl },
      webpack: null,
      webpackDevMiddleware: null,
      eslint: { ignoreDuringBuilds: false },
      typescript: { ignoreBuildErrors: false, tsconfigPath: 'tsconfig.json' },
      distDir: './.next',
      cleanDistDir: true,
      assetPrefix: '',
      configOrigin: 'next.config.js',
      useFileSystemPublicRoutes: true,
      generateEtags: true,
      pageExtensions: ['tsx', 'ts', 'jsx', 'js'],
      target: 'server',
      poweredByHeader: true,
      compress: false,
      analyticsId: '',
      images: {
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        path: '/_next/image',
        loader: 'default',
        domains: [],
        disableStaticImages: false,
        minimumCacheTTL: 60,
        formats: ['image/webp']
      },
      devIndicators: { buildActivity: true, buildActivityPosition: 'bottom-right' },
      onDemandEntries: { maxInactiveAge: 15000, pagesBufferLength: 2 },
      amp: { canonicalBase: '' },
      basePath: '',
      sassOptions: {},
      trailingSlash: false,
      i18n: null,
      productionBrowserSourceMaps: false,
      optimizeFonts: true,
      excludeDefaultMomentLocales: true,
      serverRuntimeConfig: {},
      publicRuntimeConfig: {},
      reactStrictMode: false,
      httpAgentOptions: { keepAlive: true },
      outputFileTracing: true,
      staticPageGenerationTimeout: 60,
      swcMinify: false,
      experimental: {
        cpus: 15,
        sharedPool: true,
        plugins: false,
        profiling: false,
        isrFlushToDisk: true,
        workerThreads: false,
        pageEnv: false,
        optimizeImages: false,
        optimizeCss: false,
        scrollRestoration: false,
        externalDir: false,
        reactRoot: false,
        disableOptimizedLoading: false,
        gzipSize: true,
        swcFileReading: true,
        craCompat: false,
        esmExternals: true,
        isrMemoryCacheSize: 52428800,
        concurrentFeatures: false,
        serverComponents: false,
        fullySpecified: false,
        outputFileTracingRoot: '',
        outputStandalone: true
      },
      configFileName: 'next.config.js'
    }
  });
  handler = nextServer.getRequestHandler();

  console.log('Listening on port', currentPortHttps);
});
