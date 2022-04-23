# SPA Dynamic Pre-rendering

-   Clone this repository
-   `yarn install`

## Deploying steps:

1.  Deploy pre-renderer:

    We need at least 1 pre-renderer endpoint, we also can use 1 common pre-renderer endpoint for multiple sites:

        Run: `yarn deploy`

    Copy endpoint info and update it into `src/edge/originResponse.js` file:

        const PRERENDERER_ENDPOINT = "<Your pre-renderer endpoint>"; // Update your pre-renderer endpoint

2.  Deploy Lambda@Edge functions and attach to Cloudfront distribution:

    Update Cloudfront distributionID into `serverless.edge.yml` file for all 4 functions `viewer-request`, `origin-request`, `origin-response`, `viewer-response`:

        distributionID: <Your CloudFront distributionID>

    Run deploy command

        Run: `yarn deploy:edge`

3.  Make a cup of coffee and wait until everything is done! ☕️

## Libraries

-   [chrome-aws-lambda](https://github.com/alixaxel/chrome-aws-lambda)
-   [puppeteer-core](https://github.com/puppeteer/puppeteer)
-   [serverless](https://www.serverless.com/)
-   [serverless-plugin-existing-cloudfront-lambda-edge](https://github.com/geoffdutton/serverless-plugin-existing-cloudfront-lambda-edge#readme)
