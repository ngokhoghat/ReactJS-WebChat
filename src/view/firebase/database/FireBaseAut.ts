import * as firebase from 'firebase';

interface User {
    u_name: string;
    u_pass: string;
}

export class FireBaseAut {
    constructor() {
    }

    public create = (payload: User) => {
        // firebase.auth().createUserWithEmailAndPassword(payload.u_name, payload.u_pass).then(res => {
        //     console.log(res);
        // }).catch(function (error) {
        //     console.log(error);
        // });
        firebase.auth().signInWithEmailAndPassword(payload.u_name, payload.u_pass).then(res => {
            console.log(res);
        }).catch(function (error) {
            console.log(error);
        });

    }

    // public 
}