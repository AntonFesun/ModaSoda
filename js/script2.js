// function loadJSON() {
//     // по сути ты получаешь тоже самое что jQuery.getJSON но именно чистым JS
//
//     // 1. Создаём новый объект XMLHttpRequest
//     var xhr = new XMLHttpRequest();
//
//     // 2. Конфигурируем его: POST-запрос на URL 'glasses.json'
//     xhr.open('POST', 'glasses.json', false);
//
//     // 3. Отсылаем запрос
//     xhr.send();
//
//     // 4. Если код ответа сервера не 200, то это ошибка
//     if (xhr.status !== 200)
//         console.error(xhr.responseText);
//     else
// //        console.log(`type of response: ${typeof xhr.response} ${xhr.response}`);
//
//         var window.baseOfGlasses = JSON.parse(xhr.response);
// }
//
// loadJSON();