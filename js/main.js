
let allMovies

// Slider

$(document).ready(function(){
    let firstSlide = $(".first-slide").outerWidth();
    $(".second-slide").animate({left : `0`} , 0);
    $(".head").animate({marginLeft: `-${firstSlide}`} , 0);
    $("nav a").animate({opacity : "0" , paddingTop : "500px"},500);
})

$(`#Btn`).click(function() {

    let firstSlide = $(".first-slide").outerWidth();
    if ($(".head").css("marginLeft") == "0px") {
       
        $(".head").animate({marginLeft: `-${firstSlide}`} , 1000);
        $(".second-slide").animate({left : `0`} , 1000);
        $(".toggle").toggleClass("fa-times");
        $("nav a").animate({opacity : "0" , paddingTop : "500px"},500);
    }
    else
    {
        $(".second-slide").animate({left : `${firstSlide}`} , 1000);
        $(".head").animate({marginLeft: `0`} , 1000);
        $(".toggle").addClass("fa-times");

        $("nav .item1").animate({opacity : "1" , paddingTop : "13px"},800);
        $("nav .item2").animate({opacity : "1" , paddingTop : "13px"},1000);
        $("nav .item3").animate({opacity : "1" , paddingTop : "13px"},1200);
        $("nav .item4").animate({opacity : "1" , paddingTop : "13px"},1400);
        $("nav .item5").animate({opacity : "1" , paddingTop : "13px"},1600);
        $("nav .item6").animate({opacity : "1" , paddingTop : "13px"},1800);
    }
})


// Items
$(".item1").click(function() {
    let myHttpItem1 = new XMLHttpRequest();
    myHttpItem1.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem1.send(),
    myHttpItem1.addEventListener("readystatechange",function() {
        if (myHttpItem1.readyState == 4 && myHttpItem1.status == 200) {
            allMovies = JSON.parse(myHttpItem1.response).results;
            displayMovies()   
        }
    })
})

$(".item2").click(function() {
    let myHttpItem2 = new XMLHttpRequest();
    myHttpItem2.open("GET","https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem2.send(),
    myHttpItem2.addEventListener("readystatechange",function() {
        if (myHttpItem2.readyState == 4 && myHttpItem2.status == 200) {
            allMovies = JSON.parse(myHttpItem2.response).results;
            displayMovies()   
        }
    })
})

$(".item3").click(function() {
    let myHttpItem3 = new XMLHttpRequest();
    myHttpItem3.open("GET","https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem3.send(),
    myHttpItem3.addEventListener("readystatechange",function() {
        if (myHttpItem3.readyState == 4 && myHttpItem3.status == 200) {
            allMovies = JSON.parse(myHttpItem3.response).results;
            displayMovies()   
        }
    })
})


$(".item4").click(function() {
    let myHttpItem4 = new XMLHttpRequest();
    myHttpItem4.open("GET","https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem4.send(),
    myHttpItem4.addEventListener("readystatechange",function() {
        if (myHttpItem4.readyState == 4 && myHttpItem4.status == 200) {
            allMovies = JSON.parse(myHttpItem4.response).results;
            displayMovies()   
        }
    })
})

$(".item5").click(function() {
    let myHttpItem5 = new XMLHttpRequest();
    myHttpItem5.open("GET","https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44");
    myHttpItem5.send(),
    myHttpItem5.addEventListener("readystatechange",function() {
        if (myHttpItem5.readyState == 4 && myHttpItem5.status == 200) {
            allMovies = JSON.parse(myHttpItem5.response).results;
            displayMovies()   
        }
    })
})
// End Items

// End Slider

// Home
function getMovies() {
    
    let myHttp = new XMLHttpRequest();
    myHttp.open("GET","https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR32Px4_3ZTHYF-tjdSOdkN82Esd5XSCl7c0ueF0LR8urOnlJBZ4TJJdf_k");
    myHttp.send(),
    myHttp.addEventListener("readystatechange",function() {
        if (myHttp.readyState == 4 && myHttp.status == 200) {
            allMovies = JSON.parse(myHttp.response).results;
            console.log(allMovies);
            displayMovies()   
        }
    })
}
getMovies();

function displayMovies() {
    let cartona = ``;

    for (let i = 0; i < allMovies.length; i++) {
        cartona +=`<div class="col-md-6 col-lg-4 my-3  shadow">
        <div class="movie shadow rounded position-relative overflow-hidden">
          <div class="post">
            <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" class="img-fluid rounded"/>
            <div class="layer d-flex align-items-center">
              <div class="info p-0">
                <h2>' +${allMovies[i].original_title } + "</h2>
                <p>" +${allMovies[i].overview}  + "</p>
                <p>rate: " +${allMovies[i].vote_average}  + "</p>
                <p>" +${ allMovies[i].release_date} + "</p>
              </div>
            </div>
          </div>
        </div>
      </div>`   
    }
$("#rowData").html(cartona);
}

// Search input
let searchInput = document.getElementById("search");
searchInput.onkeyup = function () {
    cartonaa=``
    let term = searchInput.value;
    for (var i = 0; i < allMovies.length; i++){
        if (allMovies[i].original_title.toLowerCase().includes(term.toLowerCase()) == true){

         cartonaa +=`<div class="col-md-6 col-lg-4 my-3  shadow">
        <div class="movie shadow rounded position-relative overflow-hidden">
          <div class="post">
            <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}"
              class="img-fluid rounded"/>
            <div class="layer d-flex align-items-center">
              <div class="info p-0">
                <h2>' +${allMovies[i].original_title } + "</h2>
                <p>" +${allMovies[i].overview}  + "</p>
                <p>rate: " +${allMovies[i].vote_average}  + "</p>
                <p>" +${ allMovies[i].release_date} + "</p>
              </div>
            </div>
          </div>
        </div>
      </div>`
        }
    }
    document.getElementById("row").innerHTML = cartonaa;
  };
// End Search input


let getMovieWord = document.getElementById("getMovieWord");
  function getMoviesByWord(e) {
    var myHttp1 = new XMLHttpRequest();
        myHttp1.open("get","https://api.themoviedb.org/3/search/movie?query="+e+"&api_key=eba8b9a7199efdcb0ca1f96879b83c44&language=en-US&include_adult=false");
        myHttp1.send();
        myHttp1.addEventListener("readystatechange" , function(){
            if(myHttp1.readyState && 200 == myHttp1.status)
            {
                allMovies = JSON.parse(myHttp1.response).results;
                console.log(allMovies)
                displayMovies()
            }
      });
  }
  getMovieWord.onkeyup = function(){
    getMoviesByWord(getMovieWord.value);
  }
// End Home



// Contact US

var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var ageInput = document.getElementById("age");
var passwordInput = document.getElementById("password");
var RePasswordInput = document.getElementById("RePassword");



nameInput.onkeyup = function () { 
    var nameregex = /^[a-z]{2,8}$/
    if (!nameregex.test(nameInput.value)) {

        nameInput.classList.add("is-invalid");
        nameInput.classList.remove("is-valid");
        document.getElementById("validationName").innerHTML = `<div class="validation validationName">
        your Name is not valid
      </div>`;
    }
    else 
    {
        nameInput.classList.add("is-valid");
        nameInput.classList.remove("is-invalid"); 
        document.getElementById("validationName").innerHTML = ``; 
        
    }
}


emailInput.onkeyup = function () { 
    var nameregex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    if (!nameregex.test(emailInput.value)) {

        emailInput.classList.add("is-invalid");
        emailInput.classList.remove("is-valid");
        document.getElementById("validationEmail").innerHTML = `<div class="validation validationEmail">
        Your Email is not valid
      </div>`;
    }
    else 
    {
        emailInput.classList.add("is-valid");
        emailInput.classList.remove("is-invalid"); 
        document.getElementById("validationEmail").innerHTML = ``; 
        
    }
}

phoneInput.onkeyup = function () { 
    var nameregex = /^01[0125][0-9]{8}$/
    if (!nameregex.test(phoneInput.value)) {

        phoneInput.classList.add("is-invalid");
        phoneInput.classList.remove("is-valid");
        document.getElementById("validationPhone").innerHTML = `<div class="validation validationPhone">
        Your Phone is not valid
      </div>`;
    }
    else 
    {
        phoneInput.classList.add("is-valid");
        phoneInput.classList.remove("is-invalid"); 
        document.getElementById("validationPhone").innerHTML = ``; 

    }
}


ageInput.onkeyup = function () { 
    var nameregex = /^([1-7][0-9]|80)$/
    if (!nameregex.test(ageInput.value)) {

        ageInput.classList.add("is-invalid");
        ageInput.classList.remove("is-valid");
        document.getElementById("ageInput").innerHTML = `<div class="validation validationAge">
        Your Age is not valid
      </div>`;
    }
    else 
    {
        ageInput.classList.add("is-valid");
        ageInput.classList.remove("is-invalid"); 
        document.getElementById("ageInput").innerHTML = ``; 

    }
}

passwordInput.onkeyup = function () { 
    var nameregex = /^(?=.*[a-z])(?=.*[0-9])(?=.{8,})/
    if (!nameregex.test(passwordInput.value)) {

        passwordInput.classList.add("is-invalid");
        passwordInput.classList.remove("is-valid");
        document.getElementById("validationPassword").innerHTML = `<div class="validation validationPassword">
        Your Password is not valid
      </div>`;
    }
    else 
    {
        passwordInput.classList.add("is-valid");
        passwordInput.classList.remove("is-invalid"); 
        document.getElementById("validationPassword").innerHTML = ``; 

    }
}

RePasswordInput.onkeyup = function () { 
    if (passwordInput.value == RePasswordInput.value) {
        RePasswordInput.classList.add("is-valid");
        RePasswordInput.classList.remove("is-invalid"); 
        document.getElementById("validationRePassword").innerHTML = ``; 
        
    }
    else 
    {
        RePasswordInput.classList.add("is-invalid");
        RePasswordInput.classList.remove("is-valid");
        document.getElementById("validationRePassword").innerHTML = `<div class="validation validationPassword">
        Your RePassword is not valid
      </div>`;
    }
}
// End Contact Us

