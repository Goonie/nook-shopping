import firebase from 'firebase/app';
import 'firebase/firestore';

import configuration from 'configuration/firebase.json';

firebase.initializeApp(configuration);

export const firestore = firebase.firestore();
