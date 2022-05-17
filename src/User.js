class User {
  constructor(userDataObject) {
    this.id = userDataObject.id;
    this.name = userDataObject.name;
    this.address = userDataObject.address;
    this.email = userDataObject.email;
    this.strideLength = userDataObject.strideLength;
    this.dailyStepGoal = userDataObject.dailyStepGoal;
    this.friends = userDataObject.friends;
  }

  returnUserFirstName() {
    return this.name.split(" ")[0];
  }
}

export default User;
