import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
  CognitoUserSession,
} from "amazon-cognito-identity-js";

export const USER_POOL_ID = "eu-west-2_gXHC3464g";
export const CLIENT_ID = "5pg9389eldcjjrvhdiuas3evhj";

export const signUpUser = async (userData: {
  Password: string;
  FirstName: string;
  LastName: string;
  Email: string;
}): Promise<void> => {
  const { FirstName, LastName, Email, Password } = userData;

  const userPool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID,
  });

  const attributeList = [
    new CognitoUserAttribute({ Name: "email", Value: Email }),
    new CognitoUserAttribute({ Name: "given_name", Value: FirstName }),
    new CognitoUserAttribute({ Name: "family_name", Value: LastName }),
  ];

  return new Promise((resolve, reject) => {
    userPool.signUp(Email, Password, attributeList, [], (err, result) => {
      if (err) {
        console.error("Sign-up error:", err);
        reject(err);
      } else {
        console.log("Sign-up result:", result);
        resolve();
      }
    });
  });
};

export const signInUser = async (userData: {
  Email: string;
  Password: string;
}): Promise<string> => {
  const { Email, Password } = userData;

  const userPool = new CognitoUserPool({
    UserPoolId: USER_POOL_ID,
    ClientId: CLIENT_ID,
  });

  const authenticationDetails = new AuthenticationDetails({
    Username: Email,
    Password,
  });

  const cognitoUser = new CognitoUser({
    Username: Email,
    Pool: userPool,
  });

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (session) => {
        const idToken = session.getIdToken().getJwtToken(); // Get the ID token
        console.log("Sign-in success:", session);
        resolve(idToken); // Resolve with the ID token
      },
      onFailure: (err) => {
        console.error("Sign-in error:", err);
        reject(err);
      },
    });
  });
};

export const getIdentityToken = async (): Promise<string> => {
  return new Promise((resolve, reject) => {
    const userPool = new CognitoUserPool({
      UserPoolId: USER_POOL_ID,
      ClientId: CLIENT_ID,
    });
    const user = userPool.getCurrentUser();
    if (!user) return reject(new Error("No User"));

    user?.getSession(async (e: Error, res: CognitoUserSession | null) => {
      if (e) return reject(e);
      const IDtoken = res?.getIdToken().getJwtToken();
      if (!IDtoken) return reject(new Error("Unable to retrieve JWT"));

      resolve(IDtoken);
    });
  });
};
