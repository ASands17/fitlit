import { expect } from 'chai';
import Hydration from '../src/Hydration';
import hydrationData from '../test-data/Hydration-data'

describe('Hydration', () => {
  let hydration;
  let waterData1, waterData2;

  beforeEach(() => {
    hydration = new Hydration(hydrationData);
    waterData1 = hydration.obtainHydrationDataById(1);
    waterData2 = hydration.obtainHydrationDataById(2);
  });

  it('should be a function', () => {
    expect(Hydration).to.be.a('function');
  });

  it('should be an instance of Hydration', () => {
    expect(hydrationData).to.be.an('array');
    expect(hydration).to.be.an.instanceof(Hydration);
  });

  it('should be able to take in user hydration data', () => {
    expect(hydration.data).to.be.an('array');
    expect(hydration.data).to.deep.equal(hydrationData);
  });

  it('should be able to test whether the id is valid and also return a message if it not', () => {
    expect(hydration.obtainHydrationDataById(77)).to.equal('Invalid ID!')
  });

  it('should be able to obtain hydration data based on id', () => {
    expect(hydration.obtainHydrationDataById(1)).to.be.an('array');
    expect(hydration.obtainHydrationDataById(1)).to.deep.equal(
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
    expect(hydration.obtainHydrationDataById(2)).to.deep.equal(
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
    expect(hydration.obtainAverageDailyOunces(waterData1)).to.be.a('number');
    expect(hydration.obtainAverageDailyOunces(waterData1)).to.equal(60.1);
    expect(hydration.obtainAverageDailyOunces(waterData2)).to.be.a('number');
    expect(hydration.obtainAverageDailyOunces(waterData2)).to.equal(39.7);
  });

  it('should be able to obtain ounces for most recent day', () => {
    let ounces1 = hydration.obtainTodaysOunces(waterData1);
    expect(ounces1).to.equal(63);

    let ounces2 = hydration.obtainTodaysOunces(waterData2);
    expect(ounces2).to.equal(45);
  });

  it('should be able to obtain ounces for most recent week', () => {
    let ounces1 = hydration.obtainWeeklyOunces(waterData1);
    expect(ounces1).to.deep.equal( [
      {
        "2019/06/15": 31
      },
      {
        "2019/06/16": 68
      },
      {
        "2019/06/17": 92
      },
      {
        "2019/06/18": 45
      },
      {
        "2019/06/19": 33
      },
      {
        "2019/06/20": 89
      },
      {
        "2019/06/21": 63
      }
    ]);

    let ounces2 = hydration.obtainWeeklyOunces(waterData2);
    expect(ounces2).to.deep.equal([
      {
        "2019/06/16": 55
      },
      {
        "2019/06/17": 67
      },
      {
        "2019/07/18": 47
      },
      {
        "2019/08/19": 21
      },
      {
        "2019/09/20": 29
      },
      {
        "2019/10/21": 14
      },
      {
        "2020/06/15": 45
      }
    ]);
  });
});
