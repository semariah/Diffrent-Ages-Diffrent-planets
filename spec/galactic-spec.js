import { galacticYear } from './../src/galactic.js';

describe('galacticYear', function(){
  it('should calculate the age of a person in seconds', function(){
    let galactic = new galacticYear();
    expect(galactic.ageInSeconds(12)).toEqual(378432000);
  });
});
