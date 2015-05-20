var miceDancers = 0;

var MouseDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img src="mouse.png" class="mouseDancer"></img>');
  this.setPosition();

  this.$node.on('mouseover', function(ev){
    var currentOffset = $(this).position();

    $(this).animate({
      top: top + ( (Math.random() < 0.5 ? -1 : 1) * $('body').height()/8 ),
      left: left + ( (Math.random() < 0.5 ? -1 : 1) * $('body').width()/8 )
    }, 100, function(){
      $(this).animate({
        top: currentOffset.top,
        left: currentOffset.left
      }, 400);
    });
  });
};
MouseDancer.prototype = Object.create(Dancer.prototype);
MouseDancer.prototype.constructor = MouseDancer;
MouseDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  if (!posOrNeg) {
    var posOrNeg = Math.random() < 0.5 ? 1 : -1;
  } else {
    posOrNeg = posOrNeg < 0 ? 1 : -1;
  }

  this.$node.css('transform', "scaleX(" + posOrNeg + ')');
};
MouseDancer.prototype.lineUp = function() {
  miceDancers++;

  var left = 20;
  var top = 45 * miceDancers;

  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};