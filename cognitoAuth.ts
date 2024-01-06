import {
  CognitoUserPool,
  CognitoUser,
  AuthenticationDetails,
  CognitoUserAttribute,
} from 'amazon-cognito-identity-js';
import axios from 'axios';

const USER_POOL_ID = 'eu-west-2_gXHC3464g';
const CLIENT_ID = '5pg9389eldcjjrvhdiuas3evhj';

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
        console.log('Sign-in success:', session);
        resolve(idToken); // Resolve with the ID token
      },
      onFailure: (err) => {
        console.error('Sign-in error:', err);
        reject(err);
      },
    });
  });
};

const getTasks = async () => {
  try {
    // Sign in the user and obtain the ID token
    const idToken = await signInUser({
      Email: 'example@email.com',
      Password: 'password',
    });

    // Make a GET request to fetch tasks using the ID token in the header
    const response = await axios.get(
      'https://9mdink4tu2.execute-api.eu-west-2.amazonaws.com/Prod',
      {
        headers: {
          Authorization: `Bearer ${idToken}`, // Include the ID token in the Authorization header
        },
      }
    );

    // Process the tasks retrieved from the response
    const tasks = response.data;
    console.log('Tasks:', tasks);
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    throw error;
  }
};

getTasks()
  .then((tasks) => {
    // Handle the retrieved tasks here
    console.log('Retrieved tasks:', tasks);
  })
  .catch((error) => {
    // Handle errors if any
    console.error('Error getting tasks:', error);
  });