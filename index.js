var typed = new Typed(".gran", {
    strings: ["Lover", "Fighter", "Dancer", "Instructor", "Teacher","Friend"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


function toggle() {
    var sec= document.getElementById('sec');
    sec.classList.toggle('active');
    var navigation = document.getElementById("navigation");
    navigation.classList.toggle('active');

}