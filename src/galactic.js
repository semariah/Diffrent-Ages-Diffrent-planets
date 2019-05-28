export class galacticYear{
  constructor(age){
    this.age = age;
  }

  ageInSeconds(age){
    let secondsInYear = (age * 31536000);
    return secondsInYear;
  }
  console.log("seconds in year found")

}
