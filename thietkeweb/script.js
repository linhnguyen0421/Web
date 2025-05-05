var regexName = /^[A-Za-z\s]+$/;
var regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
var regexPhone = /^[0-9\(\)\-]+$/;
var check = Array(4).fill(false);

function CheckUserName() {
    let username = document.getElementById("UserName").value;
    if (!regexName.test(username)) {
        check[0] = false;
        alert("Vui lòng nhập đúng định dạng cho tên đăng nhập!");
    }else{
        check[0] = true;
    }
}

function CheckPassword(){
    let password = document.getElementById("Password").value;
    if(!regexPassword.test(password)){
        check[1] = false;
        alert("Vui lòng nhập đúng định dạng cho mật khẩu!");
    }else{
        check[1] = true;
    }
}

function CheckPassword_Repeat(){
    let password1 = document.getElementById("Password").value;
    let password2 = document.getElementById("Password_repeat").value;
    if(password1 !== password2){
        check[2] = false;
        alert("Vui lòng xác nhận lại mật khẩu!");
    }else{
        check[2] = true;
    }
}

function CheckPhone(){
    let phone = document.getElementById("SDT").value;
    if(!regexPhone.test(phone)){
        check[3] = false;
        alert("Vui lòng nhập đúng định dạng cho số điện thoại!");
    }else{
        check[3] = true;
    }
}

function KT(){
    if(check[0] && check[1] && check[2] && check[3]){
        alert("Đăng kí thành công!")
    }else{
        alert("Đăng kí không thành công!");
    }
}

