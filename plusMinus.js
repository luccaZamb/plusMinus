function processData(input) {
    //Separa o input e quebra uma linha para poder pegar o tamanho do array
    input = input.split("\n");
    var n = input.shift();
    input = input.shift().split(' ');
    var len = input.length;
    
    var neg = 0.0;
    var zero = 0.0;
    var pos = 0.0;
    
    input.forEach(function (num) {
        num = parseInt(num);
        if (num < 0) { neg++ }
        else if (num > 0) { pos++ }
        else { zero++ }
    });

    console.log((pos / len).toPrecision(6));
    console.log((neg / len).toPrecision(6));
    console.log((zero / len).toPrecision(6));
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});