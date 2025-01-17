import { expect } from 'chai';
import User from '../src/User';

describe('User', () => {
  let user1, user2, user3;
  let testUser1Data, testUser2Data, testUser3Data;

  beforeEach(() => {
    testUser1Data = {
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
    };
    testUser2Data = {
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
    };
    testUser3Data = {
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
    user1 = new User(testUser1Data);
    user2 = new User(testUser2Data);
    user3 = new User(testUser3Data);
  });

  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(testUser1Data).to.be.an('object');
    expect(user1).to.be.an.instanceof(User);
    expect(user2).to.be.an.instanceof(User);
    expect(user3).to.be.an.instanceof(User);
  });

  it('should be able to return user\'s first name', function () {
    expect(user1.returnUserFirstName()).to.equal('Luisa');
    expect(user2.returnUserFirstName()).to.equal('Jarvis');
    expect(user3.returnUserFirstName()).to.equal('Herminia');
  });

  it('should be able to store user\'s id', () => {
    expect(user1.id).to.be.a('number');
    expect(user1.id).to.equal(1);

    expect(user2.id).to.be.a('number');
    expect(user2.id).to.equal(2);

    expect(user3.id).to.be.a('number');
    expect(user3.id).to.equal(3);
  });

  it('should be able to store user\'s name', () => {
    expect(user1.name).to.be.a('string');
    expect(user1.name).to.equal('Luisa Hane');

    expect(user2.name).to.be.a('string');
    expect(user2.name).to.equal('Jarvis Considine');

    expect(user3.name).to.be.a('string');
    expect(user3.name).to.equal('Herminia Witting');
  });

  it('should be able to store user\'s address', () => {
    expect(user1.address).to.be.a('string');
    expect(user1.address).to.equal("15195 Nakia Tunnel, Erdmanport VA 19901-1697");

    expect(user2.address).to.be.a('string');
    expect(user2.address).to.equal("30086 Kathryn Port, Ciceroland NE 07273");

    expect(user3.address).to.be.a('string');
    expect(user3.address).to.equal("85823 Bosco Fork, East Oscarstad MI 85126-5660");
  });

  it('should be able to store user\'s e-mail', () => {
    expect(user1.email).to.be.a('string');
    expect(user1.email).to.equal("Diana.Hayes1@hotmail.com");

    expect(user2.email).to.be.a('string');
    expect(user2.email).to.equal("Dimitri.Bechtelar11@gmail.com");

    expect(user3.email).to.be.a('string');
    expect(user3.email).to.equal("Elwin.Tromp@yahoo.com");
  });

  it('should be able to store user\'s stride length', () => {
    expect(user1.strideLength).to.be.a('number');
    expect(user1.strideLength).to.equal(4.3);

    expect(user2.strideLength).to.be.a('number');
    expect(user2.strideLength).to.equal(4.5);

    expect(user3.strideLength).to.be.a('number');
    expect(user3.strideLength).to.equal(4.4);
  });

  it('should be able to store user\'s daily step goal', () => {
    expect(user1.dailyStepGoal).to.be.a('number');
    expect(user1.dailyStepGoal).to.equal(10000);

    expect(user2.dailyStepGoal).to.be.a('number');
    expect(user2.dailyStepGoal).to.equal(5000);

    expect(user3.dailyStepGoal).to.be.a('number');
    expect(user3.dailyStepGoal).to.equal(5000);
  });

  it('should be able to store user\'s friends', () => {
    expect(user1.friends).to.be.an('array');
    expect(user1.friends).to.deep.equal([
      16,
      4,
      8
    ]);

    expect(user2.friends).to.be.an('array');
    expect(user2.friends).to.deep.equal([
      9,
      18,
      24,
      19
    ]);

    expect(user3.friends).to.be.an('array');
    expect(user3.friends).to.deep.equal([
      19,
      11,
      42,
      33
    ]);
  });
});
