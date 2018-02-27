var cart = {}; //моя корзина

//$('document').ready(function(){
//    loadGoods();
//    checkCart();
//    showMiniCart();
//});

function loadGoods() {
    // по сути ты получаешь тоже самое что jQuery.getJSON но именно чистым JS

    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'phones.json'
    xhr.open('GET', 'glasses.json', false);

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

        for (var i = 0; i < base.length; i++) {
            var wrapperForGlasses = doc.getElementsByClassName("items"),
                elements = doc.createElement("a"),
                head = doc.createElement("h5"),
                price = doc.createElement("p"),
                image = doc.createElement("img"),
                description = doc.createElement("p"),
                butt = doc.createElement("button");

            function aceOfBase() {

                    head.classList.add("items-glasses-name");
                    price.classList.add("items-glasses-price");
                    image.classList.add("items-glasses-image");
                    description.classList.add("items-glasses-description");
                    butt.classList.add("add-to-cart");
                    elements.classList.add("items-glasses");

                    head.innerHTML = base[i].name;
                    price.innerHTML = 'Ціна: ' + base[i].price;
                    image.src = base[i].foto_1;
                    description.innerHTML = 'Опис: ' + base[i].descript;
                    elements.appendChild(head);
                    elements.appendChild(price);
                    elements.appendChild(image);
                    elements.appendChild(description);
                    wrapperForGlasses[0].appendChild(elements);
                    console.log(elements);
                    console.log(wrapperForGlasses);

            }

            if (base[i].type === 'оправа' && loc === 'http://192.168.0.109/other/rims.html' ) {
                aceOfBase();
            } else if (base[i].type === 'сонцезахисні' && loc === '../other/all_sunglasses.html') {
                aceOfBase();
            } else if (base[i].name === 'Alexander McQueen' && loc === '../designer/alexanderMcQueen.html') {
                aceOfBase();
            } else if (base[i].name === 'Blumarine' && loc === '../designer/blumarine.html') {
                aceOfBase();
            }  else if (base[i].name === 'Bottega Veneta' && loc === '../designer/bottegaVeneta.html') {
                aceOfBase();
            } else if (base[i].name === 'Carolina Herrera' && loc === '../designer/carolinaHerrera.html') {
                aceOfBase();
            } else if (base[i].name === 'Chopard' && loc === '../designer/chopard.html') {
                aceOfBase();
            } else if (base[i].name === 'Dunhill' && loc === '../designer/dunhill.html') {
                aceOfBase();
            } else if (base[i].name === 'Escada' && loc === '../designer/escada.html') {
                aceOfBase();
            } else if (base[i].name === 'Furla' && loc === '../designer/furla.html') {
                aceOfBase();
            } else if (base[i].name === 'Lanvin' && loc === '../designer/lanvin.html') {
                aceOfBase();
            } else if (base[i].name === 'Momodesign' && loc === '../designer/momoDesign.html') {
                aceOfBase();
            } else if (base[i].name === 'Roberto Cavalli' && loc === '../designer/robertoCavalli.html') {
                aceOfBase();
            } else if (base[i].name == 'Tom Ford' && loc === '../designer/tomFord.html') {
                aceOfBase();
            } else if (base[i].name === 'Trussardi' && loc === '../designer/trussardi.html') {
                aceOfBase();
            } else if (base[i].name === 'Zegna' && loc === '../designer/zegna.html') {
                aceOfBase();
            } else if (base[i].sex === 'чоловічі' && loc === '../designer/men.html') {
                aceOfBase();
            } else if (base[i].sex === 'жіночі' && loc === '../designer/women.html') {
                aceOfBase();
            }
        };
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






