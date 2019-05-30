import { galacticYear } from './galactic.js';
import './styles.css';
import $ from 'jquery';
import 'bootstrap';

$('document').ready(function(){
  $("#galactic-form").submit(function(event){
    event.preventDefault();
    let ageResult = parseInt($("input#age-input").val());
    let output = new galacticYear(ageResult);
    let result = output.ageInSeconds();
    $(".second-year").text(result);
    $("#test-output").show();
  });
});
