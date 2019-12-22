//var fs = require('fs');
/*
fs.readFile('./resources/MC_I.txt', function(err, data) {
    console.log(data);

});
*/
//var textByLine = fs.readFileSync('./resources/MC_I.txt').toString();
//console.log(textByLine);

var readline = require('readline');
var fs = require('fs');
let xAxis = [];
let yAxis = [];

async function processData(){
    //let xAxis = [];
    //let yAxis = [];
    var myInterface = readline.createInterface({
        input: fs.createReadStream('./resources/MC_I.txt')
    });
      
    var lineno = 0;
    myInterface.on('line', function (line) {
        lineno++;
        //console.log(line.indexOf('\t'));
        xAxis.push(line.slice(0, line.indexOf('\t')));
        yAxis.push(line.slice(line.lastIndexOf('\t')));
        //console.log('Line number ' + lineno + ': ' + line);
    });
    //let axisData = {xAxis: xAxis, yAxis: yAxis}
    //return axisData;

}

processData().then(showXYValues());

function showXYValues(){
    for(let i = 0; i < xAxis.length; i++){
        console.log('X: ' + xAxis[i] + '; ' +'Y: ' + yAxis[i]);
    };
}

