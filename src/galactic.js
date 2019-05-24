export class galacticYear{
  constructor(age){
    this.age = age;
  }

ageInSeconds(){
  let secondsInYear = (age * 31536000);
  return secondsInYear;
}

}
