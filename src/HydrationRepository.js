class HydrationRepository {
  constructor(hydrationData) {
    this.data = hydrationData;
  }

  obtainHydrationDataBasedOnId(id) {
    //returns single user's dataset for hydration for entire year
    const singlePerson = this.data.find(wholePersonObject => {
      if (wholePersonObject.userID === id) {
        return wholePersonObject;
      }
    });
    const newUserHydration = new UserHydration(singlePerson);
    return newUserHydration;
  }

  obtainAveOuncesConsumedPerDay() {
    
  }
}

export default HydrationRepository;