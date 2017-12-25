var salesOffices = {};
salesOffices.clientList = [];

salesOffices.listen = function(fn){
    this.clientList.push(fn);
}

salesOffices.trigger = function(){
    for (var i = 0, fn; fn = this.clientList[i++]; ) {
        fn.apply(this, arguments);
    }
}

salesOffices.listen(function(price, squareMeter){
    console.log('Price: '+price+', SquareMeter: '+ squareMeter);
});

salesOffices.listen(function(price, squareMeter){
    console.log('Price: '+price+', SquareMeter: '+ squareMeter);
});

salesOffices.trigger(10000, 100);
salesOffices.trigger(13000, 98);