import {
  CognitoUserPool,
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
    userPool.signUp(Email, Password, attributeList, [], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
};
