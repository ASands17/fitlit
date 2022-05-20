import UserHydration from '../src/UserHydration';

class HydrationRepository {
  constructor(hydrationData) {
    this.data = hydrationData;
  }

// hydrationData = [{id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}, {id1}, {id2}, {id3},...{id50}]
//                         6/15/19                |        6/16/19               |     6/17/19

  obtainHydrationDataBasedOnId(id) {
    let hydro = this.data.filter((waterData) => {
      // console.log("id", waterData.userID);
      return waterData.userID === id;
    })
    // console.log("hydro", hydro);
    return hydro;
  }

  obtainAveOuncesConsumedPerDay() {
    
  }

}

export default HydrationRepository;



    // //returns single user's dataset for hydration for entire year
    // const singlePerson = this.data.find(wholePersonObject => {
    //   if (wholePersonObject.userID === id) {
    //     return wholePersonObject;
    //   }
    // });
    // const userHydrationData = new UserHydration(singlePerson);
    // return newUserHydration;