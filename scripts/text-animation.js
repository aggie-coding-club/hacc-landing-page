$(function(){
  new Waypoint({
    element: document.getElementById('about'),
    handler: function(direction) {
      moveLetters('.ml14');
    },
    offset: '110%'
  });
  new Waypoint({
    element: document.getElementById('schedule'),
    handler: function(direction) {
      moveLetters('.ml15');
    },
    offset: '110%'
  });

});

const moveLetters = function(className){
  $(`${className} .letters`).each(function(){
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
  });
  
  anime.timeline({loop: false})
    .add({
      targets: `${className} .line`,
      scaleX: [0,1],
      opacity: [0.5,1],
      easing: "easeInOutExpo",
      duration: 1000
    }).add({
      targets: `${className} .letter`,
      opacity: [0,1],
      translateX: [40,0],
      translateZ: 0,
      scaleX: [0.3, 1],
      easing: "easeOutExpo",
      duration: 900,
      offset: '-=600',
      delay: function(el, i) {
        return 150 + 25 * i;
      }
    });
}