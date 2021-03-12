/*navbar script*/

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

//slide up script

$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop: 0});
});


/*navbar toggling*/
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

//typing animation using typedjs// 

var typed = new Typed(".typing",{
    strings: ["Developer", "Coder", "Designer", "Editor", "Gamer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-1",{
    strings: ["Developer", "Coder", "Designer", "Editor", "Gamer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// owl carousel script //

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

//firebase

var firebaseConfig = {
    apiKey: "AIzaSyDf6Ow9DVoMLDArsjDBNtVN9wnggg4mzyU",
    authDomain: "portfolio-contact-data.firebaseapp.com",
    databaseURL: "https://portfolio-contact-data-default-rtdb.firebaseio.com",
    projectId: "portfolio-contact-data",
    storageBucket: "portfolio-contact-data.appspot.com",
    messagingSenderId: "240241685152",
    appId: "1:240241685152:web:0d39584a154bb624b60fc5",
    measurementId: "G-24S1LCNKFS"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactform').addEventListener('submit', submitform);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var email = getInputVal('email');
  var subject = getInputVal('subject');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    company:company,
    email:email,
    phone:phone,
    message:message
  });
}