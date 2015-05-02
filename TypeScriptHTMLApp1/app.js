/*
* Inspired by "Encapsulation and SOLID" Pluralsight Course
* by Mark Seemann
*/
var Maybe = (function () {
    function Maybe(element) {
        var _zeroOrOneElement;
        if (element !== null && element !== undefined) {
            _zeroOrOneElement = [element];
        } else {
            _zeroOrOneElement = [];
        }

        this.isEmpty = function () {
            return _zeroOrOneElement.length === 0;
        };

        this.firstOrDefaultIfEmpty = function (defaultValue) {
            if (this.isEmpty()) {
                return defaultValue;
            } else {
                return _zeroOrOneElement[0];
            }
        };
    }
    return Maybe;
})();

var testMaybe = new Maybe();
console.log(testMaybe.firstOrDefaultIfEmpty('default'));

// prints 'default'
var testMaybe2 = new Maybe('a real string');
console.log(testMaybe2.firstOrDefaultIfEmpty('default'));
// prints 'a real string'
//# sourceMappingURL=app.js.map
