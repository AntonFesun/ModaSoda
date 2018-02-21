function loadJSON(path, success, error)
{
    var xhr = new XMLHttpRequest();
    xhr.onReadystatechange = function() {
        if ( xhr.readyState === XMLHttpRequest.DONE ) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            } else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}



loadJSON('glasses.json', function(data) { console.log(data); }, function(xhr) { console.error(xhr); });