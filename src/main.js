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
    $("#test2-output").hide();
  });
});

$('document').ready(function(){
  $("#galactic-form").submit(function(event){
    event.preventDefault();
    let diffrenceResult1 = parseInt($("input#date1").val());
    let diffrenceResult2 = parseInt($("input#date2").val());
    let diffrentSeconds = new galacticYear(diffrenceResult1, diffrenceResult2);
    let secondDiffernce = diffrentSeconds.diffrenceInSeconds();
    $(".second2-year").text(secondDiffernce);
    $("#test2-output").show();
    $("#test1-output").hide();
  });
});
