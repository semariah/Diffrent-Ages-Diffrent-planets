import { galacticYear } from './galactic.js';
import './styles.css';
import $ from 'jquery':
import $ 'bootstrap':

$('document').ready(function(){
  $("#galactic-form").submit(function(event){
    event.preventDefault();
    var ageResult = parseInt($("input#age-input").val());
    var output = new galacticYear(ageResult);
    var result = output.ageInSeconds();
    $(".second-year").text(result);
    $("#test-output").show();
  });
});
