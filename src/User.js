class User {
    constructor(userDataObject) {
        this.userId = userDataObject.id;
        this.userName = userDataObject.name;
        this.userAddress = userDataObject.address;
        this.userEmail = userDataObject.email;
        this.userStrideLength = userDataObject.strideLength;
        this.userDailyStepGoal = userDataObject.dailyStepGoal;
        this.userFriends = userDataObject.friends;
    }
    returnUserFirstName() {
        return this.userName.split(" ")[0];
    }
}

export default User;