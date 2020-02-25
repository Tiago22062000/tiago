import firebase from 'firebase';

class Fire{
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                    apiKey: "AIzaSyCtwgfaVWflerCxJxGTJ4hNIkFER3y4O4Y",
                    authDomain: "chatdotiago.firebaseapp.com",
                    databaseURL: "https://chatdotiago.firebaseio.com",
                    projectId: "chatdotiago",
                    storageBucket: "chatdotiago.appspot.com",
                    messagingSenderId: "849155838320",
                    appId: "1:849155838320:web:bf95a4ad03e1f240147fb5",
                    measurementId: "G-4MESXR7LZ0" 
            });
        }
    };

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            };
            
            this.db.push(message);
        });
    };

    parse = message => {
        const {user, text, timestamp} = message.val();
        const {key: _id} = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off() {
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages");
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid;
    }
}

export default new Fire();