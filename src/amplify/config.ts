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

export const awsConfig = {
  Auth: {
    userPoolId: import.meta.env.VITE_AWS_USER_POOL_ID,
    userPoolWebClientId: import.meta.env.VITE_AWS_USER_POOL_WEB_CLIENT_ID,
    identityPoolId: import.meta.env.VITE_AWS_COGNITO_IDENTITY_POOL_ID,
    region: import.meta.env.VITE_AWS_COGNITO_REGION,
    mandatorySignIn: true,
  },
};


export const apiPath = "https://uz99n3guu8.execute-api.us-east-2.amazonaws.com/TEST/api-seguridad-brokers/authentication/user/corredor/contrasena/recuperar"