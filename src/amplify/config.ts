export const currentConfig = {
  Auth: {
    Cognito: {
      userPoolId: "us-east-2_qclj1dv3j",
      userPoolClientId: "6iboodv1s4b370r6mt8asp64v6",
      identityPoolId: "us-east-2:dddd6c2a-77c8-447c-9152-09d38baac910",
    },
  },
};

export const previewConfig =  {
  Auth: {
    userPoolId: "us-east-2_VbrlcUOBl",
    userPoolWebClientId: "ai5379kcgfvj95qn4a2dbqast",
    identityPoolId: "us-east-2:73e5c9d5-9cf9-46cb-bc51-e9d51af1ca7d",
  },
  //authenticationFlowType: 'CUSTOM_AUTH',
};

// NEW CONFIG BY ENV

const REGION_DEFAULT = 'us-east-2';

export const awsConfig = {
  Auth: {
    userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_AWS_USER_POOL_WEB_CLIENT_ID,
    identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
    region: import.meta.env.VITE_AWS_COGNITO_REGION,
    mandatorySignIn: true,
  },
  API: {
    endpoints: [
      {
        name: "BROKERS",
        endpoint: import.meta.env.VITE_AWS_API,
        region: import.meta.env.VITE_AWS_PROJECT_REGION ?? REGION_DEFAULT,
      },
      {
        name: "SEGURIDAD",
        endpoint: import.meta.env.VITE_AWS_API_SECURITY,
        region: import.meta.env.VITE_AWS_PROJECT_REGION ?? REGION_DEFAULT,
      }
    ],
  },
};

export const awsConfigPublic = {
  ...awsConfig,
  Auth: {
    ...awsConfig.Auth,
    userPoolWebClientId: import.meta.env.VITE_AWS_USER_POOL_WEB_CLIENT_ID_PUBLIC,
  },
}

export const awsConfigPublicBrokers = {
  ...awsConfig,
  Auth: {
    identityPoolId: import.meta.env.VITE_BROKERS_AWS_COGNITO_POOL_IDENTITY_ID_PUBLIC,
    region: import.meta.env.VITE_BROKERS_AWS_REGION_PUBLIC,
    userPoolId: import.meta.env.VITE_BROKERS_AWS_POOLS_ID_PUBLIC,
    userPoolWebClientId: import.meta.env.VITE_BROKERS_AWS_POOLS_WEB_CLIENT_ID_PUBLIC,
    mandatorySignIn: true,
  },
}

export const apiPath = "https://uz99n3guu8.execute-api.us-east-2.amazonaws.com/TEST/api-seguridad-brokers/authentication/user/corredor/contrasena/recuperar"