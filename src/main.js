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

$('document').ready(function(){
  $("#galactic-form").submit(function(event){
    event.preventDefault();
    let diffrenceResult1 = parseInt($("input#date1").val());
    let diffrenceResult2 = parseInt($("input#date2").val());
    let diffrentSeconds = new galacticYear(diffrenceResult1, diffrenceResult2);
    let secondDiffernce = diffrentSeconds.diffrenceInSeconds();
    $(".second-year").text(secondDiffernce);
    $("#test-output").show();
  });
});
