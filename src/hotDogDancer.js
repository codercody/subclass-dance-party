var hotDogDancers = 0;

var HotDogDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $('<img class="hotDogDancer" src="avatar.png"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.setPosition();

  this.step();
};

HotDogDancer.prototype = Object.create(Dancer.prototype);
HotDogDancer.prototype.constructor = HotDogDancer;

HotDogDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};

HotDogDancer.prototype.lineUp = function() {
  hotDogDancers++;

  var left = 200;
  var top = 45 * hotDogDancers;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
