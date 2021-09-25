// User model
export class User {

    uid: string;
    email: string;
    displayName: string;

    constructor(userObj) {
        this.uid = userObj.uid;
        this.email = userObj.email;
        this.displayName = userObj.displayName;
    }
}
