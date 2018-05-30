$(function(){
    var waypoint = new Waypoint({
        element: document.getElementById('about'),
        handler: function(direction) {
        console.log('Scrolled to waypoint!')
        },
        offset: '105%'
    })
});