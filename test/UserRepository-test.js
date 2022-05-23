import { expect } from 'chai';
import UserRepository from '../src/UserRepository';
import User from '../src/User';

describe('User Repository', () => {
  let testUserData;
  let userRepository1;
  let user3;
  let testSingleUser;

  beforeEach(() => {
    testUserData = [
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
    testSingleUser = {
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
    };
    userRepository1 = new UserRepository(testUserData);
    user3 = new User(testSingleUser);
  });

  it('should be a function', () => {
    expect(UserRepository).to.be.a('function');
  });

  it('should be an instance of UserRepository', () => {
    expect(testUserData).to.be.an('array');
    expect(userRepository1).to.be.an.instanceof(UserRepository);
  });

  it('should be able to take in user data', () => {
    expect(userRepository1.data).to.equal(testUserData);
  });

  it('should be able to create a new user instance', () => {
    expect(user3).to.be.an.instanceof(User);
    expect(userRepository1.getUserDataBasedOnId(3)).to.deep.equal(user3);
  });

  it('should be able to calculate average step goal of all users', () => {
    expect(userRepository1.getAveStepGoalOfAllUsers()).to.equal(6667);
    expect(userRepository1.getAveStepGoalOfAllUsers()).to.be.a('number');
  });
});
