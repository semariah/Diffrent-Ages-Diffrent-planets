export class galacticYear{
  constructor(age, day1, day2){
    this.age = age;
    this.day1 = new Date();
    this.day2 = new Date('February 29, 1993');
  }

  ageInSeconds(){
    let secondsInYear = (this.age * 31536000);
    return secondsInYear;
  }

  diffrenceInSeconds(day1, day2){
    let clock = new Date();
    let day = new Date('February 29, 1993');
    let difference = (clock - day)/(24*3600*1000);
    alert(difference);
    // let secondDiffernce = Math.abs(diffrence);
    return difference;
  }


}
