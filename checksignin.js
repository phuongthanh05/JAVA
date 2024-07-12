$(document).ready(function(){
    function validateEmail() {
        let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if ($('.form__control__email').val() === '') {
            $('.form__control__email').addClass('border-danger');
               $('.form__control__email__message').text("Bắt buộc nhập!!");
            return false;
        }

        if (emailRegex.test($('.form__control__email').val())) {
            $('.form__control__email').addClass('border-success');

            return true;
        } else {
            $('.form__control__email').addClass('border-danger');
            $('.form__control__email__message').text('Email không hợp lệ!!')

            return false;
        }
    }
    $('.form__control__email').blur(validateEmail);
    $('.form__control__email').on('input', function () {
        $('.form__control__email').removeClass('border-danger');
        $('.form__control__email').removeClass('border-success');
        $('.form__control__email__message').text("");
    });


    function validatePassword() {
        if ($('.form__control__password').val() === '') {
            $('.form__control__password').addClass('border-danger');
            $('.form__control__password__message').text("Bắt buộc nhập!!");

            return false;
        }

        if ($('.form__control__password').val().length >= 6) {
            $('.form__control__password').addClass('border-success');

            return true;
        } else {
            $('.form__control__password').addClass('border-danger');
            $('.form__control__password__message').text('Mật khẩu tối đa phải có 6 kí tự!!')
            
            return false;
        }
    }
    $('.form__control__password').blur(validatePassword);
    $('.form__control__password').on('input', function () {
        $('.form__control__password').removeClass('border-danger');
        $('.form__control__password').removeClass('border-success');
        $('.form__control__password__message').text("");
    });

    $('.form__submit__signin').click(function(event){
        event.preventDefault()
        if (validateEmail() && validatePassword()) {
            window.location = 'index.html';
        }
    })
    
})