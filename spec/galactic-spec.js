import { galacticYear } from './../src/galactic.js';

describe('galacticYear', function(){
  it('should calculate the age of a person in seconds', function(){
    //debugger;
    let galactic = new galacticYear();
    expect(galactic.ageInSeconds(1)).toEqual(31536000);
  });

  it('should calculate two dates diffrences in seconds', function(){
    let diffrence = new galacticYear();
    expect (diffrence.diffrenceInSeconds("june 4, 2019 20:21:11", "june 4, 2018 20:21:11")).toEqual(31536000000);

  });

  it('should calculate the earth age into mercury age', function(){
    let mercuryYearAge = new galacticYear();
    expect(mercuryYearAge.mercuryYear(20)).toEqual(83);
  });

  it('should calculate venus year in earth year', function(){
    let venusYearAge = new galacticYear();
    expect(venusYearAge.venusYear(20)).toEqual(32);
  })
});
