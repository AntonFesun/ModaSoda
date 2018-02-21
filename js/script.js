var cart = {}; //моя корзина

$('document').ready(function(){
    loadGoods();
    checkCart();
    showMiniCart();
});

function loadGoods() {
    $.getJSON('glasses.json', function (data) {
        var out = '';
        for (var key in data) {
            if (data[key] = "lala") {
                for (var element in data[key]) {
                    out+='<a href="#" class="items-glasses">';
                    out+='<h5 class="items-glasses-name">'+data[key]['name']+'</h3>';
                    out+='<p class="items-glasses-price">Ціна: '+data[key]['cost']+'</p>';
                    out+='<img src="'+data[key].image+'" class="items-glasses-image">';
                    out+='<p class="items-glasses-description">Опис:'+data[key]['description']+'</p>';
                    out+='<button class="add-to-cart" data-art="'+key+'">Купить</button>';
                    out+='</div>';
                    console.log(data[key])
                }
            }
        }
        $('.items').html(out);
        $('button.add-to-cart').on('click', addToCart);
    });
}

function addToCart() {
    //добавляем товар в корзину
    var articul = $(this).attr('data-art');
    if (cart[articul]!=undefined) {
        cart[articul]++;
    }
    else {
        cart[articul] = 1;
    }
    localStorage.setItem('cart', JSON.stringify(cart) );
    //console.log(cart);
    showMiniCart();
}

function checkCart(){
    //проверяю наличие корзины в localStorage;
    if ( localStorage.getItem('cart') != null) {
        cart = JSON.parse (localStorage.getItem('cart'));
    }
}

function showMiniCart(){
    //показываю содержимое корзины
    var out ='';
    for (var w in cart){
        out += w + ' --- '+cart[w]+'<br>';
    }
    $('#mini-cart').html(out);
}






