var blinkyDancers = 0;

var BlinkyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = timeBetweenSteps/ 1.5;

  this.$node = $('<span class="blinkyDancer"></span>');
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.step();
  this.setPosition();
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
};

BlinkyDancer.prototype.lineUp = function() {
  blinkyDancers++;

  var left = 400;
  var top = 45 * blinkyDancers;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};