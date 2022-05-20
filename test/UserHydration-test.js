import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
import UserHydration from '../src/UserHydration';


describe('User Hydration', () => {
  let hydrationRepository;
  let testUserData;
  let userObject;
  let userHydration;

  beforeEach(() => {
    testUserData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 31
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 68
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 92
      },
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 50
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 40
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 10
      },
    ];

     userObject = {
      "userID": 2,
      "date": "2019/06/17",
      "numOunces": 10
      }

    hydrationRepository = new HydrationRepository(testUserData);
    userHydration = new UserHydration(userObject);
  });

  it('should be a function', () => {
    expect(UserHydration).to.be.a('function');
  });

  it('should obtain ounces for most recent day', () => {
    expect(userHydration.obtainOuncesForMostRecentDay())
  })

  it.skip('should be an instance of HydrationRepository', () => {
    //expect(testUserData).to.be.an('array');
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it.skip('should be able to take in user hydration data', () => {
    expect(hydrationRepository.data).to.equal(testUserData);
  });

  it.skip('should be able to obtain hydration data based on id', () => {
    expect(hydrationRepository.obtainHydrationDataBasedOnId(1)).to.deep.equal(
      [
        {
          "userID": 1,
          "date": "2019/06/15",
          "numOunces": 31
        },
        {
          "userID": 1,
          "date": "2019/06/16",
          "numOunces": 68
        },
        {
          "userID": 1,
          "date": "2019/06/17",
          "numOunces": 92
        }
      ]);
    expect(hydrationRepository.obtainHydrationDataBasedOnId(2)).to.deep.equal([
      {
        "userID": 2,
        "date": "2019/06/15",
        "numOunces": 50
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 40
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 10
      },
    ]);
    expect(hydrationRepository.obtainHydrationDataBasedOnId()).to.be.an('array');
  });

  it.skip('should be able to obtain average daily ounces consumed', () => {
    let waterData1 = hydrationRepository.obtainHydrationDataBasedOnId(1);

    expect(hydrationRepository.obtainAveOuncesConsumedPerDay(waterData1)).to.be.a('number');
    expect(hydrationRepository.obtainAveOuncesConsumedPerDay(waterData1)).to.equal(63.67);

    let waterData2 = hydrationRepository.obtainHydrationDataBasedOnId(2);

    expect(hydrationRepository.obtainAveOuncesConsumedPerDay(waterData2)).to.be.a('number');
    expect(hydrationRepository.obtainAveOuncesConsumedPerDay(waterData2)).to.equal(33.33);
  });

});
