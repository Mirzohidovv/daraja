let a =  +prompt('Keling sonlarni darajalarni xisoblaymiz: Son kiriting')

while (isNaN(a)) {
    a = +prompt('Siz son kiritmadingiz iltimos, son kiriting')
}

let b = +prompt('Darajasini kiritng')

while (isNaN(b)) {
    b = +prompt('Daraja no togri kiritildi')
}

alert( a + ' ning ' + b + '-darajasi ' + a**b + '  ga teng ')