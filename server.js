function register(event) {
    event.preventDefault();
    // alert("function called")
    var name = document.getElementById("username").value
    // console.log(name, "name here")
    var email = document.getElementById("useremail").value
    // console.log(email);
    var password = document.getElementById("userpassword").value
    // console.log(password)
    var confirmpassword = document.getElementById("userpassword").value
    // console.log(confirmpassword);

    if (name && email && password && confirmpassword) {
        if (password >= 8 && confirmpassword >= 8) {

            if (password == confirmpassword) {
                var userdata = {
                    userName: name,
                    userEmail: email,
                    userPassword: password,
                    userConfirmPassword: confirmpassword
                }
                //now store data in ls
                localStorage.setItem("Users", JSON.stringify(userdata))
                // JSON.stringify;          convert object into json
                // JSON.parse();            convert json into object
                // localStorage.setItem(key,value)    to save into ls
                // localStorage.getItem(key)       to get data from ls
                // localStorage.removeItem(key)    to remove data from storage
                // console.log(userdata);
            } else {
                console.log("password not match");
            }

        } else {
            console.log("password should  include 8 or more characters");
        }


    } else {
        console.log("please fill all fields");
    }

}

// function getdata(){
//    //    var txt = localStorage.getItem(Users)
//     console.log(window.localStorage.getItem("Users"));
// }

function getinfo(){
    var get_data=
    JSON.parse(localStorage.getItem("Users"));
    console.log(get_data);
}
