var ZigZagDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="zigzagDancer"></span>');

  this.setPosition();
  this.step();
};
ZigZagDancer.prototype = Object.create(Dancer.prototype);
ZigZagDancer.prototype.constructor = ZigZagDancer;
ZigZagDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.$node.css('border-width', Math.floor(Math.random() * 15) );
};