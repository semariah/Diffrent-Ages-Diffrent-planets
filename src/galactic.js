export class galacticYear{
  constructor(age){
    this.age = age;
    this.day1 = new Date();
    this.day2 = new Date();
  }

  ageInSeconds(){
    let secondsInYear = (this.age * 31536000);
    return secondsInYear;
  }

  diffrenceInSeconds(day1, day2){
    let clock = this.day1.getTime();
    let day = this.day2.getTime();
    let difference = (day1 - day2)/(24*3600*1000);
    // let secondDiffernce = Math.abs(diffrence);
    return difference;
  }


}
