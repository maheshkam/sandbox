function reverseString(string) {
    var reversed = '';

    for (var i = string.length - 1; i >= 0; i--) {
        reversed += string[i];

    }
    var reversed = parseInt(reversed);

    if (reversed < 0) {
        var reversed = Math.abs(reversed);
        return reversed;
    } else {
        return reversed;
    }

}
var submit = document.getElementById('submit').addEventListener('click', function (e) {
    var string = document.getElementById('inputString').value;
    var output = reverseString(string);
    console.log(output);
    e.preventDefault();
});
