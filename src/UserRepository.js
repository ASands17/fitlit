class UserRepository {
    constructor(allUserData) {
        this.data = allUserData;
        //allUserData is an array
    }
    getUserDataBasedOnId(allUserData) {
        allUserData.find((wholeUser) => {
            wholeUser.id === allUserData.id
            console.log(wholeUser.id)
        })
        
        // const user = new User();
        //make instance of user that finds user based on id property
    }
    getAveStepGoalOfAllUsers() {
        //this.data.reduce()
        //.toFixed() to round down to 2 decimals
    }
}
// holds onto all of User objects
// data parameter is user data

export default UserRepository;