var event = {
    clientList: [],
    listen: function (key, fn) {
        if (!this.clientList[key]) {
            this.clientList[key] = [];
        }
        this.clientList[key].push(fn);
    },
    trigger: function () {
        var key = Array.prototype.shift.call(arguments),
            fns = this.clientList[key];

        if (!fns || fns.length === 0) {
            return false;
        }

        for (var i = 0, fn; fn = fns[i++];) {
            fn.apply(this, arguments);
        }
    },
    remove: function (key, fn) {
        var fns = this.clientList[key];

        if (!fns) {
            return false;
        }
        if (!fn) {
            fn && (fn.length = 0)
        } else {
            for (var i = fns.length - 1; i >= 0; i--) {
                var _fn = fns[i];
                if (_fn == fn) {
                    fns.splice(i, 1);
                }
            }
        }
    }
}

var installEvent = function(obj){
    for (var i in event) {
        obj[i] = event[i];
    }
}

//test
var saclesOffice = {};
installEvent(saclesOffice);

saclesOffice.listen('squareMeter88', fn1 = function(price){
    console.log('squareMeter88 price is ' + price);
});

saclesOffice.listen('squareMeter100', fn2 = function(price){
    console.log('squareMeter100 price is ' + price);
});

saclesOffice.trigger('squareMeter88', 10000);
saclesOffice.trigger('squareMeter100', 12000);

console.log('-------执行取消绑定-------');
saclesOffice.remove('squareMeter88', fn1);

saclesOffice.trigger('squareMeter88', 10000);
saclesOffice.trigger('squareMeter100', 12000);