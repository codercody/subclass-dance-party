$(document).ready(function(){
  window.dancers = [];

  // Create audio
  // var audio = document.createElement('audio');
  // audio.setAttribute('src', 'getlucky.mp3');
  // audio.setAttribute('autoplay', 'autoplay');
  // audio.setAttribute('loop', true);

  // audio.addEventListener("load", function() {
  //   audio.play();
  // }, true); 

  // Line up buttons
  $('.lineUp').on('click', function(event) {
    window.dancers.forEach(function(dancer){
      dancer.lineUp();
    });
    miceDancers = 0;
    colorDancers = 0;
    hotDogDancers = 0;
    growingDancers = 0;
    blinkyDancers = 0;
  });


  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );

    $('body').append(dancer.$node);

    // Iterate over dancers, find closest neighbor
    window.dancers.forEach(function(object) {
      var top = object.top;
      var left = object.left;

      if (dancer.top - top < 40 && dancer.top - top > -40  &&
          dancer.left - left < 40 && dancer.left - left > -40 ) {
        var repeatSwitch = function() {
          dancer.$node.animate({
            top: top,
            left: left
          }, 1000);
          object.$node.animate({
            top: dancer.top,
            left: dancer.left
          }, 1000);

          setTimeout(repeatSwitch, 500);
        };
        repeatSwitch();
      }

    });
    window.dancers.push(dancer);
  });
});

