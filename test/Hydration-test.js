import { expect } from 'chai';
import Hydration from '../src/Hydration';


describe('Hydration', () => {
  let hydration;
  let testUserData;

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
    hydration = new Hydration(testUserData);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(testUserData).to.be.an('array');
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to take in user hydration data', () => {
    expect(hydration.data).to.equal(testUserData);
  });

  it('should be able to obtain hydration data based on id', () => {
    expect(hydration.obtainHydrationDataBasedOnId(1)).to.deep.equal(
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
    expect(hydration.obtainHydrationDataBasedOnId(2)).to.deep.equal([
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
    expect(hydration.obtainHydrationDataBasedOnId()).to.be.an('array');
  });

  it('should be able to obtain average daily ounces consumed', () => {
    let waterData1 = hydration.obtainHydrationDataBasedOnId(1);

    expect(hydration.obtainAveOuncesConsumedPerDay(waterData1)).to.be.a('number');
    expect(hydration.obtainAveOuncesConsumedPerDay(waterData1)).to.equal(63.67);

    let waterData2 = hydration.obtainHydrationDataBasedOnId(2);

    expect(hydration.obtainAveOuncesConsumedPerDay(waterData2)).to.be.a('number');
    expect(hydration.obtainAveOuncesConsumedPerDay(waterData2)).to.equal(33.33);
  });

  it('should obtain ounces for most recent day', () => {

    expect(hydration.obtainOuncesForMostRecentDay())
  })

  it('should obtain ounces for most recent week', () => {


    expect(hydration.obtainOuncesPerDayOverAWeek())
  })

});
