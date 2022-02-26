# M&M Dashboard

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t nextjs-docker .`.
1. Run your container: `docker run -p 443:443 -p 3000:3000 nextjs-docker`.

You can view your images created with `docker images`.

## Running Locally

First, run the development server:

```bash
yarn dev
```

Open [http://0.0.0.0:443](http://0.0.0.0:443) with your browser to see the app running in https.
Open [http://0.0.0.0:3000](http://0.0.0.0:3000) with your browser to see the app running in http.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://0.0.0.0:443/api/hello](http://0.0.0.0:443/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.
