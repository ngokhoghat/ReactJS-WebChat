import * as firebase from 'firebase';


export function firebaseFirestore() {
    try {
        // firebase.auth().signInWithEmailAndPassword("ngocdinh@gmail.com", "8832310").then(res => {
        //     console.log(res);

        // }).catch(error => {
        //     console.log(error);

        // })
        // firebase.auth().createUserWithEmailAndPassword("a@gmail.com", "3000").catch(function (error) {
        //     // Handle Errors here.
        //     console.log("False");
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
            
        //     // ...
        // });
    } catch (error) {
        console.log("False");

    }

    return firebase.firestore()
}

export function firebaseRealTime() {
    return firebase.database()
}
