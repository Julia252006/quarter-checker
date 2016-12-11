var output = "";

function print (data) {
    output = '<h2>' + data + '</h2>';
    document.getElementById('output').innerHTML = output;
}

function read (id) {
    return document.getElementById(id).value;
}

function send () {
    var x = read('x');
    var y = read('y');

    if (isNaN(x) || isNaN(y)) {
        print ('Some coordinate was passer with in correct value!');
    }
    if (x == '' || y == ''){
        print ('Point coordinate value is empty!');
    }
    if (x > 0 && y > 0) {
        print('Point is in the first QUARTER');
    }
    else if (x < 0 && y > 0) {
        print('Point is in the second QUARTER');
    }
    else if (x < 0 && y < 0) {
        print('Point is in the third QUARTER');
    }
    else if (x > 0 && y < 0) {
        print('Point is in the fourth QUARTER');
    }
    else if (x == 0 && y > 0) {
        print('Point is in the first and second QUARTER');
    }
    else if (x == 0 && y < 0) {
        print('Point is in the third and fourth QUARTER');
    }
    else if (x > 0 && y == 0) {
        print('Point is in the first and fourth QUARTER');
    }
    else if (x < 0 && y == 0) {
        print('Point is in the third and second QUARTER');
    }
    else if (x == 0 && y == 0) {
        print('Point is in all QUARTER');
    }
}