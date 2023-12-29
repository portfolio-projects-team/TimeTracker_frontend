import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';

export const signUpUser = async (userData: {
  Password: string;
  FirstName: string;
  LastName: string;
  Email: string;
}): Promise<void> => {
  const { FirstName, LastName, Email, Password } = userData;

  const userPool = new CognitoUserPool({
    UserPoolId: 'eu-west-2_cLq8JoGcL',
    ClientId: 'dcul67egcvg5l4g7epd7lbos5',
  });

  const attributeList = [
    new CognitoUserAttribute({ Name: 'email', Value: Email }),
    new CognitoUserAttribute({ Name: 'given_name', Value: FirstName }),
    new CognitoUserAttribute({ Name: 'family_name', Value: LastName }),
  ];

  return new Promise((resolve, reject) => {
    userPool.signUp(Email, Password, attributeList, [], (err, result) => {
      if (err) {
        console.error('Sign-up error:', err);
        reject(err);
      } else {
        console.log('Sign-up result:', result);
        resolve();
      }
    });
  });
};

export const signInUser = async (userData: {
  Email: string;
  Password: string;
}): Promise<void> => {
  const { Email, Password } = userData;

  const userPool = new CognitoUserPool({
    UserPoolId: 'eu-west-2_cLq8JoGcL',
    ClientId: 'dcul67egcvg5l4g7epd7lbos5',
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
        console.log('Sign-in success:', session);
        resolve();
      },
      onFailure: (err) => {
        console.error('Sign-in error:', err);
        reject(err);
      },
    });
  });
};
