function register(event) {
    event.preventDefault();
    // alert("function called")
    var name = document.getElementById("username").value
    // console.log(name, "name here")
    var email = document.getElementById("useremail").value
    // console.log(email);
    var password = document.getElementById("userpassword").value
    // console.log(password)
    var confirmpassword = document.getElementById("userconfirmpassword").value
    // console.log(confirmpassword);

    if (name && email && password && confirmpassword) {
        if (password.length >= 8 && confirmpassword >= 8) {

            if (password == confirmpassword) {

                var Ls = JSON.parse(localStorage.getItem("Users")) || []
                var flag = false;
                for (var i = 0; i < Ls.length; i++) {
                    if (Ls[i].userEmail == email) {
                        flag = true;
                    }
                }
                if (!flag) {
                    var userdata = {
                        userName: name,
                        userEmail: email,
                        userPassword: password,
                        userConfirmPassword: confirmpassword
                    }
                    Ls.push(userdata);
                    localStorage.setItem("Users", JSON.stringify(Ls))
                    alert("Registration Successful")
                    document.getElementById("username").value = ""
                    document.getElementById("useremail").value = ""
                    document.getElementById("userpassword").value = ""
                    document.getElementById("userconfirmpassword").value = ""
                }
                else {
                    alert("Email aleready exist")
                }
            }
            else {
                console.log("password not match");
            }

        } else {
            console.log("password should  include 8 or more characters");
        }
    } else {
        console.log("please fill all fields");
    }

}

//     function getdata(){
//        //    var txt = localStorage.getItem(Users)
//         console.log(window.localStorage.getItem("Users"));
//     }

//     function getinfo(){
//         var get_data=
//         JSON.parse(localStorage.getItem("Users"));
//         console.log(get_data);
// }




                //now store data in ls
                // localStorage.setItem("Users", JSON.stringify(userdata))
                // JSON.stringify;           //  convert object into string
                // JSON.parse();            // convert json into object
                // localStorage.setItem(key,value)    // to save into ls
                // localStorage.getItem(key)       // to get data from lsm,x
                // console.log(userdata);

                    // var userdata = {
    //     userName: name,
    //     userEmail: email,
    //     userPassword: password,
    //     userConfirmPassword: confirmpassword
    // }

    // var Ls = JSON.parse(localStorage.getItem("Users")) || []
    // Ls.push(userdata);
    // console.log(Ls)
    // localStorage.setItem("Users", JSON.stringify(Ls))

    // var flag = false;
    // for (var i = 0; i < Ls.length; i++) {
    //     if (Ls[i].userEmail == email) {
    //         flag = true;
    //     }
    // }
    // if (!flag) {
    //     alert("good to go to register")
    // }
    // else {
    //     alert("email matched")
    // }