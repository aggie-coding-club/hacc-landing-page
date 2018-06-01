$(function(){
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight){
        panel.style.maxHeight = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
    }

    $( ".accordion" ).click(function() {
        if (  $(this).children('.accordion-icon').css("transform") == 'none' ){
            $(this).children('.accordion-icon').css("transform","rotate(180deg)");
        } else {
            $(this).children('.accordion-icon').css("transform","" );
        }
    });
})