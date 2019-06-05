export class galacticYear{
  constructor(age){
    this.age = age;
    this.day1 = new Date();
    this.day2 = new Date('June 4, 2018');
  }

  ageInSeconds(age){

    let secondsInYear = (age * 31536000);
    return secondsInYear;

  }

  diffrenceInSeconds(day1, day2){
    //debugger;
    let clock = new Date();
    let day = new Date('June 4, 2018 20:21:11');
    let difference = clock - day;
    let secondDifference = Math.floor(difference);
    return secondDifference;
  }

  mercuryYear(age){
    let mercuryAge = Math.floor(age/0.24);
    return mercuryAge;
  }

  venusYear(age){
    let venusAge = Math.floor(age/0.62);
    return venusAge;
  }


}
