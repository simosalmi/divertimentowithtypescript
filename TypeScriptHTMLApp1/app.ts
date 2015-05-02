/*
 * Inspired by "Encapsulation and SOLID" Pluralsight Course 
 * by Mark Seemann
 */
class Maybe<T> {
    isEmpty : () => boolean;
    firstOrDefaultIfEmpty : (T) => T;

    constructor(element?: T) {
        var _zeroOrOneElement: Array<T>;
        if (element !== null && element !== undefined) {
            _zeroOrOneElement = [element];
        }
        else {
            _zeroOrOneElement = [];
        }

        this.isEmpty = function() : boolean {
            return _zeroOrOneElement.length === 0;
        }

        this.firstOrDefaultIfEmpty = function(defaultValue : T) : T {
            if (this.isEmpty()) {
                return defaultValue;
            }
            else {
                return _zeroOrOneElement[0];
            }
        }
    }
}

var testMaybe = new Maybe<string>();
console.log(testMaybe.firstOrDefaultIfEmpty('default'));
// prints 'default'

var testMaybe2 = new Maybe<string>('a real string');
console.log(testMaybe2.firstOrDefaultIfEmpty('default'));
// prints 'a real string'