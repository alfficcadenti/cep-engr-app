// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice

var myDetails = new Object();

var myDetails = {
  firstName : "Alfredo",
  lastName : "Ficcadenti",
  jobTitle : "Risk Analyst",
  homeOffice : "London",
  tellmemore : "<p>I have an academic background in quantitative Finance but I've always been attracted by software programming. During my first work experience I worked on a web application development project for risk management where I had the chance to learn and practice some programming languages (php, javascript, bash). Later my career was more focused on data analysis but I was always willing to learn more and apply in a professional environment. I'm a Linux user and from time to time I write code for personal projects. Currently I'm also self-learning Python. Ah yes, I'm also a hobbist beekeeper!</p>"
};
// using jQuery and the object above, display the information as the appropriate button is clicked

$(document).ready(function(){
      $(".nav-button").click(function(){

      var getPropertyValue = (function (property) {
                                  var results = myDetails[property]
                                  return results;}
                              );

      var detailToShow = getPropertyValue(this.value)
      $("#main-display").html(detailToShow);

      });
});
