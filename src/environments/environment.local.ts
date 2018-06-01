// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    apiBaseUrl: 'http://192.168.0.171:8080',
    assetBaseUrl: 'http://localhost:4200',
    /**
     * Test user which will be used for substitution when token is set in URL
     * Need for browser stack and similar type of test access
     */
    allowTestLogin: true,
    applicationInsightsInstrumentationKey: 'ac61706c-5fca-4ec2-b763-0a94902537dd'
};
