import React, {useState, useEffect} from 'react';
import type {Node} from 'react';

// Imports Amplify
import Amplify, {Auth} from 'aws-amplify';
import {DataStore} from '@aws-amplify/datastore';
import API from '@aws-amplify/api'

import Config from 'react-native-config';
import awsconfig from './'
import {Provider} from 'react-redux';
import 'react-native-gesture-handler';

import {store} from './src/store';
import {Navigation} from './src/infrastructure/navigation';
import { LoginScreen } from './src/features/account/screens/LoginScreen';
import { RegisterScreen } from './src/features/account/screens/RegisterScreen';
import { CodeScreen } from './src/features/account/screens/CodeScreen';

const awsmobile = {
    "aws_project_region": `${Config.REGION}`,
    "aws_appsync_graphqlEndpoint": `${Config.APPSYNC_GRAPHQL_ENDPOINT}`,
    "aws_appsync_region": `${Config.REGION}`,
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": `${Config.APPSYNC_API}`,
    "aws_cognito_identity_pool_id": `${Config.IDENTITY_POOL_ID}`,
    "aws_cognito_region": `${Config.REGION}`,
    "aws_user_pools_id": `${Config.USER_POOL_ID}`,
    "aws_user_pools_web_client_id": `${Config.USER_POOL_WEB_CLIENT_ID}`,
    "oauth": {},
    "aws_cognito_username_attributes": [
        "EMAIL"
    ],
    "aws_cognito_social_providers": [],
    "aws_cognito_signup_attributes": [
        "EMAIL"
    ],
    "aws_cognito_mfa_configuration": "OFF",
    "aws_cognito_mfa_types": [
        "SMS"
    ],
    "aws_cognito_password_protection_settings": {
        "passwordPolicyMinLength": 8,
        "passwordPolicyCharacters": []
    },
    "aws_cognito_verification_mechanisms": [
        "EMAIL"
    ]
};

Amplify.configure(awsmobile);

const App: () => Node = () => {
  Config.GOOGLE_MAPS_API_KEY; // 'abcdefgh'
  // Upload fonts with expo library
  // const [isReady, setIsReady] = useState(false)

  // useEffect(() => {
  //   bootstrap().then(() => setIsReady(true))
  // }, []);

  // if (!isReady) {
  //   return <AppLoading />
  // }
 
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
  
    
  
};

export default App;
