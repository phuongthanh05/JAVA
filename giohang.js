$(document).ready(function () {
    const SHOPPINGCARTS_STORAGE_KEYS = 'SHOPPINGCARTS';
    const TOTALMONEY_STORAGE_KEYS = 'TOTALMONEY';

    function getShoppingCarts() {
        return JSON.parse(localStorage.getItem(SHOPPINGCARTS_STORAGE_KEYS)) || [];
    }

    function setShoppingCarts(shoppingCarts) {
        localStorage.setItem(SHOPPINGCARTS_STORAGE_KEYS, JSON.stringify(shoppingCarts));
    }

    function getTotalMoney() {
        return JSON.parse(localStorage.getItem(TOTALMONEY_STORAGE_KEYS)) || { 
            discountPrice: 0, 
            initPrice: 0, 
            payment: 0,
            discountPriceTag: '0',
            priceTag: '0' 
        };
    }

    function setTotalMoney(totalMoney) {
        localStorage.setItem(TOTALMONEY_STORAGE_KEYS, JSON.stringify(totalMoney));
    }

    function html([first, ...strings], ...values) {
        return values.reduce((acc, curr) => acc.concat(curr, strings.shift()), [first])
            .filter(x => x && x !== true || x === 0)
            .join('');
    }

    let MoneyFormat = new Intl.NumberFormat().format;

    let shoppingCarts = getShoppingCarts();
    
    // if (shoppingCarts.length) 
    //     $('.cart__amount').text(shoppingCarts.reduce((acc, product) => acc += product.amount, 0));

    let totalMoney = getTotalMoney();
    jQuery.getJSON('../js/db.json').done(function (db) {
        $('.product__cart').click(function () {
            let productBrand = $(this).attr('data-productbrand');
            let productIndex = parseInt($(this).attr('data-productindex'));

            let currentProductPrice = db[productBrand][productIndex].price;

            totalMoney.initPrice += currentProductPrice;
            totalMoney.discountPrice = 0;
            totalMoney.discountPriceTag = MoneyFormat(0);
            totalMoney.payment = totalMoney.initPrice;
            totalMoney.priceTag = MoneyFormat(totalMoney.payment);
            setTotalMoney(totalMoney);

            $('.cart__amount').text(shoppingCarts.reduce((acc, product) => acc += product.amount, 0));
            $('.toast__increasecart').toast('show');

            if (shoppingCarts.length) {
                for (let x of shoppingCarts) {
                    if (x.productBrand === productBrand && x.productIndex === productIndex) {
                        x.amount += 1;
                        x.price += currentProductPrice;
                        x.priceTag = MoneyFormat(x.price);

                        setShoppingCarts(shoppingCarts)
                        return;
                    }
                }
            } 

            shoppingCarts.push({ 
                amount: 1, productBrand, productIndex, 
                price: currentProductPrice,
                priceTag: MoneyFormat(currentProductPrice)
            })

            setShoppingCarts(shoppingCarts)
        });

        $('.donhang__list').append(html`
            ${shoppingCarts.map(product => html`
                <li class="list-group-item d-flex justify-content-between lh-sm">
                    <div>
                        <h6 class="my-0">${db[product.productBrand][product.productIndex].name} <span class="text-danger">x${product.amount}</span></h6>
                        <small class="text-muted">Chính hãng, VNA</small>
                    </div>
                    <span class="text-muted">${db[product.productBrand][product.productIndex].priceTags.actualPrice}đ</span>
                </li>
            `)}
        `)

        $('.cart__item').append(html`
            ${shoppingCarts.map(product => html`
                <div class="cart-row">
                    <div class="cart-item cart-column">
                        <img class="cart-item-image"
                            src="${db[product.productBrand][product.productIndex].img}"
                            width="100" height="100">
                        <span class="cart-item-title">
                            ${db[product.productBrand][product.productIndex].name}
                        </span>
                    </div>
                    <span class="cart-price cart-column">${db[product.productBrand][product.productIndex].priceTags.actualPrice}đ</span>
                    <div class="cart-quantity cart-column">
                        <input 
                            class="cart-quantity-input" type="number"
                            value="${product.amount}"
                            min="1"
                            max="10"
                        >
                        <button 
                            class="btn btn-danger" type="button"
                        >
                            Xóa
                        </button>
                    </div>
                </div>
            `)}
        `)

        $('.cart__total__price').text(totalMoney.priceTag + ' VNĐ');
    })
}) 