$(document).ready(function() {

    function kiemTraTen(txt, tb, regex, error) {
        if (txt.val() === '') {
            txt.addClass('border-danger');
            tb.text('bắt buộc nhập');
            return false;
        }
        if (regex.test(txt.val())) {
            txt.addClass('border-success');
            return true;
        } else {
            tb.text(error);
            txt.addClass('border-danger');
            return false;
        }
        return true;
    }

    function boKiemTraTen(txt, tb) {
        txt.removeClass('border-danger');
        txt.removeClass('border-success');
        tb.text("");
    }

    // kiểm tra tên
    var txtTen = $('#txtTen');
    var tbTen = $('#tbTen');
    var regexTen = /^[A-Z]{1}[a-z]{1,10}$/;
    var errorTen = 'Ten Khong Hop le';
    txtTen.blur(function() {
        kiemTraTen(txtTen, tbTen, regexTen, errorTen);
    });
    txtTen.on('input', boKiemTraTen(txtTen, tbTen));


    // kiểm tra họ
    var txtHo = $('#txtHo');
    var tbHo = $('#tbHo');
    var errorHo = 'Ho Khong Hop le';
    var regexHo = /^[A-Z]{1}[a-z]{1,10}$/;
    txtHo.blur(function() {
        kiemTraTen(txtHo, tbHo, regexHo, errorHo);
    });
    txtHo.on('input', function () {
        boKiemTraTen(txtHo, tbHo)
    });

    // kiểm tra TK
    var txtTK = $('#txtTK');
    var tbTK = $('#tbTK');
    var errorTK = 'User Name Khong Hop le';
    var regexTK = /^[a-z]{1,10}$/;
    txtTK.blur(function() {
        kiemTraTen(txtTK, tbTK, regexTK, errorTK);
    });
    txtTK.on('input', function () {
        boKiemTraTen(txtTK, tbTK)
    });

    // kiểm tra email
    var txtEmail = $('#txtEmail');
    var tbEmail = $('#tbEmail');
    var errorEmail = 'Email Khong Hop le';
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    txtEmail.blur(function() {
        kiemTraTen(txtEmail, tbEmail, regexEmail, errorEmail);
    });
    txtEmail.on('input', function() {
        boKiemTraTen(txtEmail, tbEmail);
    });

    // kiểm tra địa chỉ 
    var txtDC = $('#txtDC');
    var tbDC = $('#tbDC');
    txtDC.blur(function() {
        kiemTraTen(txtDC, tbDC);
    });
    txtDC.on('input', function() {
        boKiemTraTen(txtDC, tbDC);
    });

    // kiểm tra zipcode
    var txtZip = $('#txtZip');
    var tbZip = $('#tbZip');
    var errorZip = 'Zip Code Khong Hop le';
    var regexZip = /^[0-9]{5}$/;
    txtZip.blur(function() {
        kiemTraTen(txtZip, tbZip, regexZip, errorZip);
    });
    txtZip.on('input', function() {
        boKiemTraTen(txtZip, tbZip);
    });

    // kiểm tra Tên card
    var txtCard = $('#txtCard');
    var tbCard = $('#tbCard');
    var errorCard = 'ten Card Khong Hop le';
    var regexCard = /^([A-Z]{1}[a-z]*\s)+([A-Z]{1}[a-z]*)$/;
    txtCard.blur(function() {
        kiemTraTen(txtCard, tbCard, regexCard, errorCard);
    });
    txtCard.on('input', function() {
        boKiemTraTen(txtZip, tbZip);
    });


    // kiểm tra số series 
    var txtSr = $('#txtSr');
    var tbSr = $('#tbSr');
    var errorSr = 'So Series Card Khong Hop le';
    var regexSr = /^[0-9]{15,19}$/;
    txtSr.blur(function() {
        kiemTraTen(txtSr, tbSr, regexSr, errorSr);
    });
    txtSr.on('input', function() {
        boKiemTraTen(txtSr, tbSr);
    });
})