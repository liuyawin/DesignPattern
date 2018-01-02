//结合代理模式
var ProxySingleton = (function(){
    var result;

    return function(name, age){
        return result || (result = new People(name, age));
    }
})();

function People(name, age){
    this.name = name;
    this.age = age;
}

var p1 = new ProxySingleton('Jim', 20);
var p2 = new ProxySingleton('Lily', 20);

console.log(p1);
console.log(p2);

//另一种写法
function getSingle(fn){
    var result;
    return function(){
        return result || (result = fn.apply(this, arguments));
    }
}

function createPeople(name, age){
    return new People(name, age);
}

var createSingletonPeople = getSingle(createPeople);

var haha = createSingletonPeople('haha', 1);
var hihi = createSingletonPeople('hihi', 2);

console.log(haha);
console.log(hihi);