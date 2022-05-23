import { expect } from 'chai';
import Hydration from '../src/Hydration';

describe('Hydration', () => {
  let hydration;
  let testUserData;
  let waterData1, waterData2;

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
        "userID": 1,
        "date": "2019/06/18",
        "numOunces": 45
      },
      {
        "userID": 1,
        "date": "2019/06/19",
        "numOunces": 33
      },
      {
        "userID": 1,
        "date": "2019/06/20",
        "numOunces": 89
      },
      {
        "userID": 1,
        "date": "2019/06/21",
        "numOunces": 63
      },
      {
        "userID": 2,
        "date": "2019/06/16",
        "numOunces": 55
      },
      {
        "userID": 2,
        "date": "2019/06/17",
        "numOunces": 67
      },
      {
        "userID": 2,
        "date": "2019/07/18",
        "numOunces": 47
      },
      {
        "userID": 2,
        "date": "2019/08/19",
        "numOunces": 21
      },
      {
        "userID": 2,
        "date": "2019/09/20",
        "numOunces": 29
      },
      {
        "userID": 2,
        "date": "2019/10/21",
        "numOunces": 14
      },
      {
        "userID": 2,
        "date": "2020/06/15",
        "numOunces": 45
      }
    ];
    hydration = new Hydration(testUserData);
    waterData1 = hydration.obtainHydrationDataBasedOnId(1);
    waterData2 = hydration.obtainHydrationDataBasedOnId(2);
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
    expect(hydration.obtainHydrationDataBasedOnId()).to.be.an('array');
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
        },
        {
          "userID": 1,
          "date": "2019/06/18",
          "numOunces": 45
        },
        {
          "userID": 1,
          "date": "2019/06/19",
          "numOunces": 33
        },
        {
          "userID": 1,
          "date": "2019/06/20",
          "numOunces": 89
        },
        {
          "userID": 1,
          "date": "2019/06/21",
          "numOunces": 63
        },
      ]);
    expect(hydration.obtainHydrationDataBasedOnId(2)).to.deep.equal(
      [
        {
          "userID": 2,
          "date": "2019/06/16",
          "numOunces": 55
        },
        {
          "userID": 2,
          "date": "2019/06/17",
          "numOunces": 67
        },
        {
          "userID": 2,
          "date": "2019/07/18",
          "numOunces": 47
        },
        {
          "userID": 2,
          "date": "2019/08/19",
          "numOunces": 21
        },
        {
          "userID": 2,
          "date": "2019/09/20",
          "numOunces": 29
        },
        {
          "userID": 2,
          "date": "2019/10/21",
          "numOunces": 14
        },
        {
          "userID": 2,
          "date": "2020/06/15",
          "numOunces": 45
        }
      ]);
    
  });

  it('should be able to obtain average daily ounces consumed', () => {
    expect(hydration.obtainAveOuncesConsumedPerDay(waterData1)).to.be.a('number');
    expect(hydration.obtainAveOuncesConsumedPerDay(waterData1)).to.equal(60.1);
    expect(hydration.obtainAveOuncesConsumedPerDay(waterData2)).to.be.a('number');
    expect(hydration.obtainAveOuncesConsumedPerDay(waterData2)).to.equal(39.7);
  });

  it('should be able to obtain ounces for most recent day', () => {
    let ounces1 = hydration.obtainOuncesForMostRecentDay(waterData1);
    expect(ounces1).to.equal(63);

    let ounces2 = hydration.obtainOuncesForMostRecentDay(waterData2);
    expect(ounces2).to.equal(45);
  });

  it('should be able to obtain ounces for most recent week', () => {
    let ounces1 = hydration.obtainOuncesPerDayOverAWeek(waterData1);
    expect(ounces1).to.deep.equal([
      "2019/06/15:31",
      "2019/06/16:68",
      "2019/06/17:92",
      "2019/06/18:45",
      "2019/06/19:33",
      "2019/06/20:89",
      "2019/06/21:63"
    ]);
    
    let ounces2 = hydration.obtainOuncesPerDayOverAWeek(waterData2);
    expect(ounces2).to.deep.equal([
      "2019/06/16:55",
      "2019/06/17:67",
      "2019/07/18:47",
      "2019/08/19:21",
      "2019/09/20:29",
      "2019/10/21:14",
      "2020/06/15:45"
    ]);
  });
});
