// =========== core ===========

// ajQuery = function (selector, context) {
//     return new ajQuery.init(selector, context)
// };

// ajQuery.init = function(selector, context) {
//     this.ajQuery = true;
//     this.selector = selector;
// };

// window.$ = ajQuery;

// =========== make array ===========

// ajQuery = function (selector, context) {
//     return new ajQuery.init(selector, context)
// };

// ajQuery.init = function(selector, context) {
//     return ajQuery.makeArray( selector, this );
// };

// ajQuery.makeArray = function (selector, aj) {
//     // body...
//     aj.ajQuery = true;
//     aj.selector = selector;
//     return ajx
// }

// window.$ = ajQuery;

// =========== using fn ===========

// ajQuery = function (selector, context) {
//     return new ajQuery.fn.init(selector, context)
// };

// // here is the instance member
// ajQuery.fn = ajQuery.prototype = {
//     constructor: ajQuery,
//     foo: 'foo',
//     bar: function() {
//         console.log('hello jQuery :)');
//     }
// };

// ajQuery.fn.init = function(selector, context) {
//     return ajQuery.makeArray( selector, this );
// };

// ajQuery.fn.init.prototype = ajQuery.fn;

// // here is the jQuery's member
// ajQuery.makeArray = function (selector, aj) {
//     // body...
//     aj.ajQuery = true;
//     aj.selector = selector;
//     return aj;
// };

// =========== add extend ===========

ajQuery = function (selector, context) {
    return new ajQuery.fn.init(selector, context)
};

// here is the instance member
ajQuery.fn = ajQuery.prototype = {
    constructor: ajQuery,
    foo: 'foo',
    bar: function() {
        console.log('hello jQuery :)');
    }
}

ajQuery.fn.init = function(selector, context) {
    return ajQuery.makeArray( selector, this );
};

ajQuery.fn.init.prototype = ajQuery.fn;

// here is the jQuery's member
ajQuery.makeArray = function (selector, aj) {
    // body...
    aj.ajQuery = true;
    aj.selector = selector;
    return aj;
};

// extend function v1:
// ajQuery.fn.extend: add member to instance
// ajQuery.extend: add member to ajQuery itself
// ajQuery.extend = ajQuery.fn.extend = function() {
//     var target = this;
//     var ext = arguments[0];
//     for(key in ext) {
//         target[key] = ext[key];
//     }
//     return target;
// };

// extend function v2:
// ajQuery.fn.extend: add member to instance
// ajQuery.extend: add member to ajQuery itself
// if more then 2 args, merge other objects into the first one
ajQuery.extend = ajQuery.fn.extend = function() {
    var target = arguments[0];
    var i = 1;
    if (i == arguments.length) {
        target = this;
        i--;
    };
    for (; i < arguments.length; i++) {
        for(key in arguments[i]) {
            target[key] = arguments[i][key];
        }
    };
    return target;
};

window.$ = ajQuery;
