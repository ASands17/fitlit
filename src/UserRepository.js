import User from '../src/User';

class UserRepository {
    constructor(allUserData) {
        this.data = allUserData;
        //allUserData is an array
    }
<<<<<<< HEAD
    getUserDataBasedOnId(allUserData) {
        allUserData.find((wholeUser) => {
            wholeUser.id === allUserData.id
            console.log(wholeUser.id)
            return wholeUser
        })
        
        // const user = new User();
        //make instance of user that finds user based on id property
=======
    getUserDataBasedOnId(id) {
      // this can be used on login to display user data
      const singleUser = this.data.find(wholeUser => {
        if (wholeUser.id === id) {
          return wholeUser
        }
      })
      const user = new User(singleUser);
      return user
>>>>>>> 668528f80a543d1ced43c011f97191901f8f1094
    }
    getAveStepGoalOfAllUsers() {
        //this.data.reduce()
        //.toFixed() to round down to 2 decimals
    }
}
// holds onto all of User objects
// data parameter is user data

export default UserRepository;
