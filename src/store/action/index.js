
// import Firebase from '../../config/firebase'
// import firebase from 'firebase';

const set_data=()=>{
    return (dispatch)=>{

        console.log("hello")
    }
}

const facebook_login = () =>{
    console.log("sahi he");
    return (dispatch)=>{
        // var provider = new firebase.auth.FacebookAuthProvider();
        // firebase.auth().signInWithPopup(provider).then(function(result) {
        //     // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        //     var token = result.credential.accessToken;
        //     // The signed-in user info.
        //     var user = result.user;

        //     console.log("user==>", user);

        // }).catch(function(error) {
        //     // Handle Errors here.
        //     var errorCode = error.code;
        //     var errorMessage = error.message;
            
        //     console.log("error==>", errorMessage);

        //   });
    }
}
export {
    set_data,
    facebook_login
}