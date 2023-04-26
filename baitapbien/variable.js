// bài 1
let f = 20.5
let b = true
let s = 'Hà Nội'


document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)
// bài 2
let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)
// bài 3 
let a = prompt('nhập số a')
let c = prompt('nhập số b')
if(a % c=== 0){
    alert(`${a} là bội của ${c}`);
}else
{
    alert(`${a} không phải là bội của ${c}`);
}