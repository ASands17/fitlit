import User from '../src/User';

class UserRepository {
    constructor(allUserData) {
        this.data = allUserData;
        //allUserData is an array
    }
    getUserDataBasedOnId(id) {
      // this can be used on login to display user data
      const singleUser = this.data.find(wholeUser => {
        if (wholeUser.id === id) {
          return wholeUser
        }
      })
      const user = new User(singleUser);
      return user
    }
    getAveStepGoalOfAllUsers() {
        //this.data.reduce()
        //.toFixed() to round down to 2 decimals
    }
}
// holds onto all of User objects
// data parameter is user data

export default UserRepository;
