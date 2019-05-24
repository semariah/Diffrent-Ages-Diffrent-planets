import { galacticYear } from './galactic.js';

$('document').ready(function(){
  $('#galactic-form').submit(function(event){
    event.preventDefault();
    var ageResult = ("#age-input").val();
    var output = new galacticYear(ageResult);
    var result = output.ageInSeconds();
  })
})
