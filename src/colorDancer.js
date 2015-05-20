colorDancers = 0;

var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="colorDancer"></span>');
  this.setPosition();
  this.step();
};
ColorDancer.prototype = Object.create(Dancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.getRandColor = function() {
  var r = Math.floor(Math.random() * 255) ;
  var g = Math.floor(Math.random() * 255) ;
  var b = Math.floor(Math.random() * 255) ;
  var rgb = 'rgb(' + r + ',' + g + ',' + b + ')';
  return rgb;
};
ColorDancer.prototype.step = function() {
  
  Dancer.prototype.step.call(this);

  this.$node.css('borderColor', this.getRandColor()) ;
};
ColorDancer.prototype.lineUp = function() {
  colorDancers++;

  var left = 120;
  var top = 40 * colorDancers;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};
