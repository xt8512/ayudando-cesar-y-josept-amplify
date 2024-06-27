type Object = {  [key: string]: string  }

type Attributes = {
  sub: string;
  email: string;
  email_verified: boolean;
};

type Client = {
  endpoint: string;
  fetchOptions: { [key: string]: string };
};

export type AmplifyUser = {
  Session: null | string;
  attributes: Attributes;
  authenticationFlowType: string;
  client: Client;
  keyPrefix: string;
  pool: any;
  preferredMFA: string;
  signInUserSession: any;
  storage: any;
  userDataKey: string;
  username: string;
};
