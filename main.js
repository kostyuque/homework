'use strict'

var ar1 = ['n1', 'n2', 'n3'];
var ar2 = ['m1', 'm2', 'm3'];

var res = ar1 +','+ ar2;

function render(data, id) {



    var container = document.querySelector(id);

    var html = '';

    for (var ar of data.split(',')) {
        html += '<li>' + ar + '</li>';
    }

    container.innerHTML = html;

}

render(res,"#list");