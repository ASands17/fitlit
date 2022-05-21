import { expect } from 'chai';
import Hydration from '../src/Hydration';

//before beforeEach
//dummydata
//set up variables


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
        "date": "2020/06/15",
        "numOunces": 45
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
      }
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
            "date": "2020/06/15",
            "numOunces": 45
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
        ]);

    expect(hydration.obtainHydrationDataBasedOnId()).to.be.an('array');
  });

  it('should be able to obtain average daily ounces consumed', () => {
    let waterData1 = hydration.obtainHydrationDataBasedOnId(1);

    expect(hydration.obtainAveOuncesConsumedPerDay(waterData1)).to.be.a('number');
    expect(hydration.obtainAveOuncesConsumedPerDay(waterData1)).to.equal(60.14);

    let waterData2 = hydration.obtainHydrationDataBasedOnId(2);

    expect(hydration.obtainAveOuncesConsumedPerDay(waterData2)).to.be.a('number');
    expect(hydration.obtainAveOuncesConsumedPerDay(waterData2)).to.equal(39.71);
  });

  it('should obtain ounces for most recent day', () => {
    let waterData1 = hydration.obtainHydrationDataBasedOnId(1);
    let ounces1 = hydration.obtainOuncesForMostRecentDay(waterData1);

    expect(ounces1).to.equal(63);

    let waterData2 = hydration.obtainHydrationDataBasedOnId(2);
    let ounces2 = hydration.obtainOuncesForMostRecentDay(waterData2);

    expect(ounces2).to.equal(45);
  })

  it('should obtain ounces for most recent week', () => {
    let waterData1 = hydration.obtainHydrationDataBasedOnId(1);
    let ounces1 = hydration.obtainOuncesPerDayOverAWeek(waterData1);

    expect(ounces1).to.deep.equal([31,68,92,45,33,89,63]);

    let waterData2 = hydration.obtainHydrationDataBasedOnId(2);
    let ounces2 = hydration.obtainOuncesPerDayOverAWeek(waterData2);

    expect(ounces2).to.deep.equal([55,67,47,21,29,14,45]);
  })

});