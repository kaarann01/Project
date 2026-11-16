function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var closebtn = document.getElementById("close");
    var popup = document.getElementById("popup");
    var checkbox = document.getElementById("checkbox");


    if (!checkbox.checked) {
        checkbox.focus();
        return;

    }


    if (email === "karan@gmail.com" && password === "karan1234") {


        popup.style.display = 'flex';


        closebtn.onclick = function () {
            popup.style.display = 'none';
        };

        window.onclick = function (e) {
            if (e.target == popup) {
                popup.style.display = 'none'
            }

        }
        return;

    }
    if (password === "karan1234" && email !== "karan@gmail.com") {
        alert("Enter Valid email")
    }
    if (email === "karan@gmail.com" && password !== "karan1234") {
        alert("Password incorrect")
    }

    if (email === "" && password === "") {
        alert("Enter details")
    }

    else if (email !== "karan@gmail.com" && password !== "karan1234") {
        alert("wrong")
    }
}

