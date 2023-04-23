function register(event) {
    event.preventDefault();

    var Name = document.getElementById("username").value
    var Email = document.getElementById("useremail").value
    var Password = document.getElementById("userpassword").value
    var ConfirmPassword = document.getElementById("userconfirmpassword").value

    if (Name && Email && Password && ConfirmPassword) {
        if (Password.length >= 8 && ConfirmPassword.length >= 8) {
            if (Password == ConfirmPassword) {

                var Ls = JSON.parse(localStorage.getItem("Users")) || []
                var flag = false;
                for (i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == Email) {
                        flag = true;
                    }
                } if (!flag) {
                    var userdata = {
                        userName: Name,
                        userEmail: Email,
                        userPassword: Password,
                        userConfirmPassword: ConfirmPassword
                    }
                    Ls.push(userdata);
                    localStorage.setItem("Users", JSON.stringify(Ls))
                    alert("Registration successfull")
                    window.location.href='./demo-login.html'
                    document.getElementById("username").value = ""
                    document.getElementById("useremail").value = ""
                    document.getElementById("userpassword").value = ""
                    document.getElementById("userconfirmpassword").value = ""

                } else {
                    alert("email alredy exist")
                }


            } else {
                alert("password not matched")
            }

        } else {
            alert("passwors should be 8 or mare characters")
        }

    } else {
        alert("please fill all the fields")
    }

}



//login page

function login(event) {
    event.preventDefault();

    var userEmail = document.getElementById("useremail").value
    var userPassword = document.getElementById("userpassword").value

    var Ls = JSON.parse(localStorage.getItem("Users"))

    var currentUser;
    var flag = false;
    for (i = 0; i < Ls.length; i++) {
        if (Ls[i].userEmail == userEmail && Ls[i].userPassword == userPassword) {
            flag = true;
            currentUser=Ls[i]
        }

    }
    if (flag == true) {
        localStorage.setItem("currentUser",JSON.stringify(currentUser))
        window.location.href='./demo-home.html'
        alert("login succefull")
    }
    else {
        alert("credintials not matched")
    }

}





























