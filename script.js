function parseJson(){
    let jsonInput = document.getElementById("jsonInput").value;
    try {
        document.getElementById("demo").innerHTML ="";
        let obj = JSON.parse(jsonInput);
        let beautifuljson = JSON.stringify(obj,undefined,4);
        //displayInPage(beautifuljson);
        let highlightedJson = getHighlightedJson(beautifuljson);
        displayInPage(highlightedJson);

    }
    catch(err) {
        document.getElementById("demo").innerHTML = err.message;
    }    
    
}

function displayInPage(json){
    document.getElementById("demo").appendChild(document.createElement('pre')).innerHTML = json;
}

//ref: https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript 
function getHighlightedJson(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}
