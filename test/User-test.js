import { expect } from 'chai';
import User from '../src/User';


describe('User', () => {
    let user1, user2, user3, testUser1Data, testUser2Data, testUser3Data;

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
    })
  
  it('should be a function', function () {
    expect(User).to.be.a('function');
  });

  it('should be an instance of User', () => {
    expect(testUser1Data).to.be.an('object');  
    expect(user1).to.be.an.instanceof(User);
    expect(user2).to.be.an.instanceof(User);
    expect(user3).to.be.an.instanceof(User);
  }); 

  it('should be able to return user\s first name', function () {
    expect(user1.returnUserFirstName()).to.equal('Luisa');
    expect(user2.returnUserFirstName()).to.equal('Jarvis');
    expect(user3.returnUserFirstName()).to.equal('Herminia');
  });
});