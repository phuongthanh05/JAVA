$(document).ready(function(){
    // CHECK NAME
    function validateName() {
        let nameRegex = /^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*)$/;
        if($('#name').val()===''){
            $('#name').addClass('border-danger');
            $('#errname').text("Bắt buộc nhập!!");
            return false;
        }
        if(nameRegex.test($('#name').val())){
            $('#name').addClass('border-success');
            $('#errname').text('(*)')
            return true;
        }
        else {
            $('#name').addClass('border-danger');
            $('#errname').text('Tên không hợp lệ!!')
            return false;
        }
    }
    $('#name').blur(validateName);

    $('#name').on('input', function () {
        $('#name').removeClass('border-danger');
        $('#name').removeClass('border-success');
        $('#errname').text("(*)");
    });

    // CHECK PHONE
    function validatePhone()
    {
        let phoneRegex= /^[0]{1}[0-9]{9,10}$/;
        if($('#sdt').val()==="")
        {
            $('#sdt').addClass('border-danger');
            $('#errsdt').text('Bắt buộc nhập!!');
            return false;
        }
        if(phoneRegex.test($('#sdt').val())){
            $('#sdt').addClass('border-success');
            $('#errsdt').text('(*)');
            return true;
        }
        else{
            $('#sdt').addClass('border-danger');
            $('#errsdt').text('Số điện thoại không hợp lệ');
            return false;
        }

    }

    $('#sdt').blur(validatePhone);
    $('#sdt').on('input', function () {
        $('#sdt').removeClass('border-danger');
        $('#sdt').removeClass('border-success');
        $('#errsdt').text("(*)");
    });

// CHECK DIACHI
    function validateDiachi() {
        if($('#diachi').val()===''){
            $('#diachi').addClass('border-danger');
            $('#errdiachi').text("Bắt buộc nhập!!");
            return false;
        }
        else{
            $('#diachi').addClass('border-success');
            $('#errdiachi').text('(*)')
            return true;
        }
    }
    $('#diachi').blur(validateDiachi);
    $('#diachi').on('input', function () {
        $('#diachi').removeClass('border-danger');
        $('#diachi').removeClass('border-success');
        $('#errdiachi').text("(*)");
    });

    // CHECK EMAIL
    function validateEmail() {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if($('#email').val()===''){
            $('#email').addClass('border-danger');
            $('#erremail').text("Bắt buộc nhập!!");
            return false;
        }
        if(emailRegex.test($('#email').val())){
            $('#email').addClass('border-success');
            $('#erremail').text('(*)')
            return true;
        }
        else {
            $('#email').addClass('border-danger');
            $('#erremail').text('Email không hợp lệ!!')
            return false;
        }
    }
    $('#email').blur(validateEmail);

    $('#email').on('input', function () {
        $('#email').removeClass('border-danger');
        $('#email').removeClass('border-success');
        $('#erremail').text("(*)");
    });

    // CHECK PASSWORD
    function validatePassword() {
        if ($('#password').val() === '') {
            $('#password').addClass('border-danger');
            $('#errpassword').text("Bắt buộc nhập!!");

            return false;
        }

        if ($('#password').val().length >= 6) {
            $('#password').addClass('border-success');
            return true;
        } else {
            $('#password').addClass('border-danger');
            $('#errpassword').text('Mật khẩu tối đa phải có 6 kí tự!!')  
            return false;
        }
    }

    $('#password').blur(validatePassword);
    $('#password').on('input', function () {
        $('#password').removeClass('border-danger');
        $('#password').removeClass('border-success');
        $('#errpassword').text("(*)");
    });


    $('#dangky').click(function(event){
        event.preventDefault()
        if (validateName() && validatePhone() && validateEmail() && validateDiachi() && validatePassword()) {
            window.location = '../signin.html';
        }
    })
})