function register() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name === "" || email === "" || password === "") {
        document.getElementById("msg").innerHTML =
            "Please fill the details";
        return;
    }

    document.getElementById("msg").innerHTML =
        "Name: " + name + "<br>Email: " + email +"<br> Password:" + password;

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";  
    document.getElementById("password").value = "";
}
function search() {
    let name = document.getElementById("search").value;

    if (name === "") {
        document.getElementById("msg").innerHTML = "Enter student name";
        return;
    }

    document.getElementById("msg").innerHTML =
        "Searching for: " + name;
}

