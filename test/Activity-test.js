import { expect } from 'chai';
import Activity from '../src/Activity';

describe('Activity', () => {
  let activity, activityData;
  let userData;

  beforeEach(() => {
    activityData = [
      {
        "userID": 1,
        "date": "2022/01/16",
        "numSteps": 7381,
        "minutesActive": 72,
        "flightsOfStairs": 29
      },
      {
        "userID": 1,
        "date": "2022/01/17",
        "numSteps": 5903,
        "minutesActive": 277,
        "flightsOfStairs": 44
      },
      {
        "userID": 1,
        "date": "2022/01/18",
        "numSteps": 6659,
        "minutesActive": 205,
        "flightsOfStairs": 0
      },
      {
        "userID": 1,
        "date": "2022/01/19",
        "numSteps": 8623,
        "minutesActive": 187,
        "flightsOfStairs": 50
      },
      {
        "userID": 1,
        "date": "2022/01/20",
        "numSteps": 5271,
        "minutesActive": 218,
        "flightsOfStairs": 46
      },
      {
        "userID": 1,
        "date": "2022/01/21",
        "numSteps": 0,
        "minutesActive": 70,
        "flightsOfStairs": 15
      },
      {
        "userID": 1,
        "date": "2022/01/22",
        "numSteps": 0,
        "minutesActive": 96,
        "flightsOfStairs": 31
      }
    ];

    userData = [
      {
        "id": 1,
        "name": "Luisa Hane",
        "address": "15195 Nakia Tunnel, Erdmanport VA 19901-1697",
        "email": "Diana.Hayes1@hotmail.com",
        "strideLength": 4.3,
        "dailyStepGoal": 10000,
        "friends": [
          16,
          4,
          8
        ]
      },
      {
        "id": 2,
        "name": "Jarvis Considine",
        "address": "30086 Kathryn Port, Ciceroland NE 07273",
        "email": "Dimitri.Bechtelar11@gmail.com",
        "strideLength": 4.5,
        "dailyStepGoal": 5000,
        "friends": [
          9,
          18,
          24,
          19
        ]
      },
      {
        "id": 3,
        "name": "Herminia Witting",
        "address": "85823 Bosco Fork, East Oscarstad MI 85126-5660",
        "email": "Elwin.Tromp@yahoo.com",
        "strideLength": 4.4,
        "dailyStepGoal": 5000,
        "friends": [
          19,
          11,
          42,
          33
        ]
      }
    ];
    activity = new Activity(activityData, userData);
  });

  it('should be a function', () => {
      expect(Activity).to.be.a('function');
    });

  it('should be an instance of Activity', () => {
    expect(activityData).to.be.an('array');
    expect(activity).to.be.an.instanceof(Activity);
  });

  it('should be able to take in user hydration data', () => {
    expect(activity.activityData).to.be.an('array');
    expect(activity.activityData).to.deep.equal(activityData);
  });

  it('should be able to take in user data', () => {
    expect(activity.userData).to.be.an('array');
    expect(activity.userData).to.deep.equal(userData);
  });

  it('should be able to get activity data based on id', () => {
    expect(activity.getActivityDataById(1)).to.be.an('array');
    expect(activity.getActivityDataById(1)).to.deep.equal([
      {
        "userID": 1,
        "date": "2022/01/16",
        "numSteps": 7381,
        "minutesActive": 72,
        "flightsOfStairs": 29
      },
      {
        "userID": 1,
        "date": "2022/01/17",
        "numSteps": 5903,
        "minutesActive": 277,
        "flightsOfStairs": 44
      },
      {
        "userID": 1,
        "date": "2022/01/18",
        "numSteps": 6659,
        "minutesActive": 205,
        "flightsOfStairs": 0
      },
      {
        "userID": 1,
        "date": "2022/01/19",
        "numSteps": 8623,
        "minutesActive": 187,
        "flightsOfStairs": 50
      },
      {
        "userID": 1,
        "date": "2022/01/20",
        "numSteps": 5271,
        "minutesActive": 218,
        "flightsOfStairs": 46
      },
      {
        "userID": 1,
        "date": "2022/01/21",
        "numSteps": 0,
        "minutesActive": 70,
        "flightsOfStairs": 15
      },
      {
        "userID": 1,
        "date": "2022/01/22",
        "numSteps": 0,
        "minutesActive": 96,
        "flightsOfStairs": 31
      }]);
  });

  it('should be able to get stride length of a user by id', () => {
    expect(activity.getStrideLengthById(1)).to.be.a('number');
    expect(activity.getStrideLengthById(1)).to.be.equal(4.3);
  });

  it('should be able to get the daily miles walked of a user', () => {
    expect(activity.getDailyMilesWalked("2022/01/18", 1)).to.be.a('string');
    expect(activity.getDailyMilesWalked("2022/01/18", 1)).to.equal('5.4');
  });

  it('should be able to get the daily minutes active of a user', () => {
    expect(activity.getDailyMinutesActive("2022/01/22", 1)).to.be.a('number');
    expect(activity.getDailyMinutesActive("2022/01/22", 1)).to.equal(96);
  });
});
