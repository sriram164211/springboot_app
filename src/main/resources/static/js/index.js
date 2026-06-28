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

var img = document.getElementById("user-image");
var gender = document.getElementById("user-gender");
var name = document.getElementById("user-name");

function displayUser(userJson) {
    name.innerText = userJson.Name;
    gender.innerText = userJson.Gender;
    img.src = userJson.Image;
}
