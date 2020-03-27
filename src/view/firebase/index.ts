import * as firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

import { firebaseConfig } from './config/firebase.config';

const app = firebase.initializeApp(firebaseConfig);
export default app;