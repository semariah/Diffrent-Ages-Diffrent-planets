export class galacticYear{
  constructor(age){
    this.age = age;
  }

  ageInSeconds(){
    let secondsInYear = (this.age * 31536000);
    return secondsInYear;
  }


}
