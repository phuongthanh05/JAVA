$(document).ready(function () {
    let priceNew = $(".product__actualprice");
    let priceOld = $(".product__initprice");
    let discountPrice = $(".product__discount");
    let discount;

    for (var i = 0; i < priceNew.length; ++i) {
        let firstPrice = parseInt(priceNew[i].innerHTML.replaceAll('.', ''));
        let secondPrice = parseInt(priceOld[i].innerHTML.replaceAll('.', ''));
        discount = 100 - (firstPrice / secondPrice) * 100;
        discountPrice[i].innerHTML = 'Giảm ' + Math.round(discount) + "%";
    }
})