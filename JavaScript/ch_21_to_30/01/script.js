var num = parseFloat(prompt('Enter a float Number'));
num = Math.ceil(num);

var txt = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, autem!'
slicedtxt = txt.slice(0, num)

var txtarray = slicedtxt.split('')
console.log(txtarray);

var output = [];
while (txtarray.length) {
output.push(txtarray.pop());
}
ughh = output.toString()

var res = ughh.replace(/,/g,'');
alert(res);