import User from '../src/User';

class UserRepository {
  constructor(allUserData) {
    this.data = allUserData;
  }

  getUserDataBasedOnId(id) {
    const singleUser = this.data.find(wholeUser =>
      wholeUser.id === id
    );
    const user = new User(singleUser);
    return user;
  }

  getAveStepGoalOfAllUsers() {
    let totalStepGoal = this.data.reduce((totalSteps, currentUser) => {
      totalSteps += currentUser.dailyStepGoal;
      return totalSteps;
    }, 0);
    let averageStepGoal = totalStepGoal / this.data.length;
    return Math.round(averageStepGoal);
  }
}

export default UserRepository;
