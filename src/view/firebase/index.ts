import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

import { firebaseConfig } from './config/firebase.config';

firebase.initializeApp(firebaseConfig);
export default firebase;