import { expect } from 'chai';
import HydrationRepository from '../src/HydrationRepository';
import UserHydration from '../src/UserHydration';


describe('Hydration Repository', () => {
  let hydrationRepository;
  let testUserData;

//two random days for 1 user
//random day for another user

  beforeEach(() => {
    testUserData = [
      {
        "userID": 1,
        "date": "2019/06/15",
        "numOunces": 30
      },
      {
        "userID": 1,
        "date": "2019/06/16",
        "numOunces": 60
      },
      {
        "userID": 1,
        "date": "2019/06/17",
        "numOunces": 90
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
    hydrationRepository = new HydrationRepository(testUserData);
  });

  it('should be a function', () => {
    expect(HydrationRepository).to.be.a('function');
  });

  it('should be an instance of HydrationRepository', () => {
    expect(testUserData).to.be.an('array');
    expect(hydrationRepository).to.be.an.instanceof(HydrationRepository);
  });

  it('should be able to take in user hydration data', () => {
    expect(hydrationRepository.data).to.equal(testUserData);
  });

  it('should be able to obtain hydration data based on id', () => {
    expect(hydrationRepository.obtainHydrationDataBasedOnId(1)).to.deep.equal(
      [
        {
          "userID": 1,
          "date": "2019/06/15",
          "numOunces": 30
        },
        {
          "userID": 1,
          "date": "2019/06/16",
          "numOunces": 60
        },
        {
          "userID": 1,
          "date": "2019/06/17",
          "numOunces": 90
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

});
