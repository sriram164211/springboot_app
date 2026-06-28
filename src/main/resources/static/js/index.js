// alert("Hello from JS")
console.log("Hello from JS")
var users=[
    {
        "Name": "John Doe",
        "Gender": "Male",
        "Image": "/img/john.png"
    },
    {
        "Name": "Jane Doe",
        "Gender": " Female",
        "Image": "/img/jane.png"
    }
];
var currentUserId = 1;
var toggelButton = document.getElementById("btn-toggle");
toggelButton.addEventListener("click", function () {
    currentUserId = 1-currentUserId;
    displayUser(users[currentUserId]);
});


var nextUserButton= document.getElementById("btn-nextuser");
nextUserButton.addEventListener("click", function () {
    fetch('https://randomuser.me/api/')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var user = data.results[0];
        var userJson = {
            "Name": user.name.title+" "+user.name.first+" "+user.name.last,
            "Gender": user.gender,
            "Image": user.picture.large
        }
        displayUser(userJson);
    
    })
    .catch(function(err){
        console.log("Error: "+err);
    });
});


var myUserButton= document.getElementById("btn-myuser");
myUserButton.addEventListener("click", function () {
    fetch('/api/users/random')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var user = data;
        var userJson = {
            "Name": user.name,
            "Gender": user.gender,
            "Image": user.imgUrl
        }
        displayUser(userJson);
    })
    .catch(function(err){
        console.log("Error: "+err);
    });
});

var img = document.getElementById("user-image");
var gender = document.getElementById("user-gender");
var username = document.getElementById("user-name");

function displayUser(userJson) {
    username.innerText = userJson.Name;
    gender.innerText = userJson.Gender;
    img.src = userJson.Image;
}
