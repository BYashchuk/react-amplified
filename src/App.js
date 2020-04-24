import React from 'react';
import logo from './logo.svg';
import './App.css';


// import { withAuthenticator } from 'aws-amplify-react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';

function App() {
  return (
    <div className="App">
       <div>
    <AmplifySignOut />
    My App
  </div>
    </div>
  );
}

export default withAuthenticator(App)
