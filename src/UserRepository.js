class UserRepository {
    constructor(allUserData) {
        this.data = allUserData;
        //allUserData is an array
    }
    getUserDataBasedOnId(allUserData) {
        // allUserData.find((userId) => userId === allUserData.id {
        //     console.log(userId)
        // })
        // const user = new User()
        //make instance of user that finds user based on id property
        //.find()
        //allUserData.id
    }
    getAveStepGoalOfAllUsers() {
        //this.data.reduce()
        //.toFixed() to round down to 2 decimals
    }
}
// holds onto all of User objects
// data parameter is user data

export default UserRepository;