var cart = {}; //моя корзина

//$('document').ready(function(){
//    loadGoods();
//    checkCart();
//    showMiniCart();
//});

function aceOfBase(obj) {
    if (doc.querySelector('#jsonItems')) {
        var wrapperForGlasses = doc.querySelector("#jsonItems"),
            elements = doc.createElement("a"),
            head = doc.createElement("h5"),
            price = doc.createElement("p"),
            image = doc.createElement("img"),
            description = doc.createElement("p"),
            butt = doc.createElement("button");

        head.classList.add("items-glasses-name");
        price.classList.add("items-glasses-price");
        image.classList.add("items-glasses-image");
        description.classList.add("items-glasses-description");
        butt.classList.add("add-to-cart");
        elements.classList.add("items-glasses");

        head.innerHTML = obj.name;
        price.innerHTML = 'Ціна: ' + obj.price;
        image.src = obj.foto_1;
        description.innerHTML = 'Опис: ' + obj.descript;
        elements.appendChild(head);
        elements.appendChild(price);
        elements.appendChild(image);
        elements.appendChild(description);
        wrapperForGlasses.appendChild(elements);
        console.log(elements);
        console.log(wrapperForGlasses);
    }

}


function loadGoods() {
    // по сути ты получаешь тоже самое что jQuery.getJSON но именно чистым JS

    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: POST-запрос на URL 'glasses.json'
    xhr.open('POST', 'glasses.json', false);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status !== 200)
        console.error(xhr.responseText);
    else
//        console.log(`type of response: ${typeof xhr.response} ${xhr.response}`);

        var base = JSON.parse(xhr.response),
            doc = document,
            loc = location.href;
    console.log(typeof loc);

    var links = [];

    if (doc.querySelector('#jsonItems')) {
        var items = doc.querySelector('#jsonItems');

        for (var i = 0; i < base.length; i++) {
            var isType = false,
                isBrand = false,
                isSex = false;

            if (items.getAttribute('data-type').length > 0 && items.getAttribute('data-type') === base[i].type)
                isType = true;
            else if (items.getAttribute('data-type').length === 0)
                isType = true;
            // if (!isType) continue;


            if (items.getAttribute('data-name').length > 0 && items.getAttribute('data-name') === base[i].name)
                isBrand = true;
            else if (items.getAttribute('data-name').length === 0)
                isBrand = true;





            if (isType && isBrand && isSex)
                aceOfBase(base[i]);

        }
    }

    ;
};
loadGoods();


//function addToCart() {
//    //добавляем товар в корзину
//    var articul = $(this).attr('data-art');
//    if (cart[articul]!=undefined) {
//        cart[articul]++;
//    }
//    else {
//        cart[articul] = 1;
//    }
//    localStorage.setItem('cart', JSON.stringify(cart) );
//    //console.log(cart);
//    showMiniCart();
//}
//
//function checkCart(){
//    //проверяю наличие корзины в localStorage;
//    if ( localStorage.getItem('cart') != null) {
//        cart = JSON.parse (localStorage.getItem('cart'));
//    }
//}
//
//function showMiniCart(){
//    //показываю содержимое корзины
//    var out ='';
//    for (var w in cart){
//        out += w + ' --- '+cart[w]+'<br>';
//    }
//    $('#mini-cart').html(out);
//}






