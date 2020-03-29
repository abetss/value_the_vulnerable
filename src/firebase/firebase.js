import * as firebase from 'firebase/app'
import 'firebase/firestore'

import { config } from './firebase-api'

firebase.initializeApp(config);

export const db = firebase.firestore();
export const firestore = firebase.firestore;
