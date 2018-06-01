$(function(){
  const waypointDict = {'about': '.ml14', 'schedule': '.ml15', 'faq': '.ml16', 'sponsors': '.ml17', 'contact': '.ml18'};
  const movedDict = [];

  //Move through each element of waypoint to reduce redundancy
  for (let key of Object.keys(waypointDict)){
    new Waypoint({
      element: document.getElementById(key),
      handler: function(direction) {
        if (movedDict.indexOf(key) < 0) //checking if the element is already in the list
          moveLetters(waypointDict[key]);
        movedDict.push(key); //making sure that things only animated once, pushing them to list
      },
      offset: '100%'
    });
  }

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