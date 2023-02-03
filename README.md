# chatApp-Firebase

Quick Start:

    git clone
    cd react-firebase-chatApp
    Add your firebase configuration to firebase.js file on /src
    npm install
    npm start

Additional Configuration :

    Create Firestore Database
    On firebase console navigate to Firestore Database -> Rules -> Edit Rules replace the entire code to this:
      
      
      rules_version = '2';
      service cloud.firestore {
      match /databases/{database}/documents {
      match /{document=**} {
      allow read, write: if request.auth != null;
      }
      }
      }


