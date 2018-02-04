/*
模板字符串
es6语法会自动替换字符串中的变量
let name = '小明'
let age = 22
let message = `${name},你今年${age},了吧！`
console.log(message);

es5语法
var name = '张三'
var age  =  23
var message = name + '你今年' + age + '了吧！'
console.log(message)
*/

/*
for循环的控制条件：
i=1 这是初始条件，将变量i置为1；
i<=10000 这是判断条件，满足时就继续循环，不满足就退出循环；
i++ 这是每次循环后的递增条件，由于每次循环后变量i都会加1，因此它终将在若干次循环后不满足判断条件i<=10000而退出循环。
var x = 0;
var i;
for(i=1;i<=10000;i++){
    x = x+i
};
console.log(x); //50005000
*/

/*
Map是一组键值对的结构，有极快的查找速度
Set和Map类似，也是一组key的集合，但不存储value。由于key不能重复，所以，在Set中，没有重复的key。

var sum = [1,2,3,4,5,6,7]
sum.name = 'add'
for(var i of sum){
    console.log(i);
}
//1 2 3 4 5 6 7

var sum = [1,2,3,4,5,6,7]
sum.name = 'add'
for(var i in sum){
    console.log(i);
}
//0 1 2 3 4 5 6 name
*/

/*
迭代
var sum = [[1,'a'],[2,'b'],[3,'c']]
sum.forEach(function(element,index,array){
    // element: 指向当前元素的值
    // index: 指向当前索引
    // array: 指向Array对象本身
    console.log(array);
})

rest参数只能写在最后，前面用...标识，从运行结果可知，传入的参数先绑定a、b，多余的参数以数组形式交给变量rest，所以，不再需要arguments我们就获取了全部参数。
function box(...rest){
    var sum = 0
    for(var i = 0; i<rest.length;i++)
    sum += rest[i]
    return sum
}
console.log(box(123,123));

*/

/*
全局变量会绑定到window上，不同的JavaScript文件如果使用了相同的全局变量，或者定义了相同名字的顶层函数，都会造成命名冲突，并且很难被发现。减少冲突的一个方法是把自己的所有变量和函数全部绑定到一个全局变量中。例如

命名空间
//唯一的全局变量：
var MYAPP = {};

//其他变量：
MYAPP.name = 'zhenghui';
MYAPP.root = 123;

//其他函数：
MYAPP.foo = function(){
    return 'foo'
};

为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量：
局部作用域

*/


// window.onload = function(){
//     var setBtr = document.getElementById('setBox');
//     var setBtg = setBtr.getElementsByTagName('input');
//     console.log(setBtg);

// };

/* var myBrthid = {
    name: 'xiaoming',
    year: 1995,
    age: function () {
        var that = this; //用that变量先获取this
        function setAge() {
            var y = new Date().getFullYear()
            return y - myBrthid.year //用that获取myBrthid.year
        }
       return setAge();
    }
};
var box = '你今年' + myBrthid.age() + '岁咯！'
console.log(box);
 */



/*  var myBrthid = {
     name:'xiaoming',
     year: 1995,
     age:function(){
         var k =  new Date().getFullYear();
         return k - this.year
     }
 };

console.log(myBrthid.age())
 */

/* 
function age() {
    var y = new Date().getFullYear();
    return y - this.birth
}

var xiaoming = {
    name: '小明',
    birth: 1995,
    age: age
};
console.log(age.call(xiaoming,[]));
console.log(age.apply(xiaoming,[]));

apply()把参数打包成Array再传入；
call()把参数按顺序传入 */


//高阶函数能让一个函数里能接收另外一个函数
/* 
在function 设置一个变量，通过这个变量来调用函数本身。
function add(x,y,f){
    return f(x) + f(y);
}
var z = add(-5 , 5 , Math.abs)
console.log(z);
console.log(Math.abs);//绝对值

 */

/* function sum(x){
    return  x * x
}

var pre = [1,2,3,4,5,6,7,8,9];
var soure = pre.map(sum)
console.log(soure); */


/* var obj = {
    birth:1990,
    getAge:function(){
        var b = this.birth;
        var fn = function(){
            return new Date().getFullYear() - this.birth;
        }
        return fn();
    }
};
console.log(obj.getAge());

var att = {
    birth:1990,
    getName:function(){
        var d = this.birth;
        var fx = () => new Date().getFullYear() - this.birth
        return fx()
    }
};
console.log(att.getName());
 */


/*  var xiaoming = {
     name : 'zhenghui',
     birth : 1995,
     height : 175,
     weight : '70kg',
     love : ['java','css','vue','gits'],
     tel : 18171493587,
     toJSON : function(){//只输出name和age，并且改变了key：
         return{
             'NAME' : this.name,
             'BIRTH' : this.birth
         };
     }
 };
/*  function convert(value,key){
     if(typeof key === 'string'){
         return key.toUpperCase() //把所有属性变成大写。
     }else {
         return key
     }
 } 
 var sum = JSON.stringify(xiaoming,null,' ')
 var sox = JSON.stringify(xiaoming)
 var sir = JSON.stringify(xiaoming,['love',]) //第二个参数用于控制如何筛选对象的键值，如果我们只想输出指定的属性，可以传入Array：
 //var fun = JSON.stringify(xiaoming,convert, ' ')//传入一个函数，这样对象的每个键值对都会被函数先处理
 var tos = JSON.stringify(xiaoming)
//console.log(sum);
//console.log(sox);
//console.log(sir);//{"love":["音乐","电影","技术","前端"]}
//console.log(fun);
console.log(tos);
 */


/*
//创建对象 
var Student = {
    name : 'xiaoming',
    age : 22,
    run : function(){
        console.log(this.name + ' is runing!');
    }
};

//基于Student原型创建一个新的对象
function setAge(name){
    var s = Object.create(Student);
//初始化对象
    s.name = name
    return s;
}

var xiaoming = setAge('xiaoming')
//xiaoming is runing!
xiaoming.run()
//true
console.log(xiaoming.__proto__ === Student);
*/


//构造函数

/* function Student(name){
    this.name = name;
    this.age = function(){
        console.log(this.name + '飞走了！');   
    }
}
var xiaoming = new Student('小明')
xiaoming.age()
 */

//class继承

/* class Student {
    constructor(name){
        this.name = name
    }
    run(){
        console.log(this.name + '飞走了。。。'); 
    }
}
var xiaoming = new Student('小明')
xiaoming.run() */


