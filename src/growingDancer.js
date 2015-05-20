var growingDancers = 0;

var GrowingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="growingDancer"></span>');

  this.setPosition();
  this.step();
};
GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;
GrowingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css('border-width', Math.floor(Math.random() * 15) );
};
GrowingDancer.prototype.lineUp = function() {
  growingDancers++;

  var left = 300;
  var top = 45 * growingDancers;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};