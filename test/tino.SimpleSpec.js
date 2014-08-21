var log = {
    dump : console.info.bind(console),
    info : window.dump.bind(window)
};

(function () {

    log.info('console.info called at the beggining of script!');

    var functions = [];
    for (var f in window) {
        if (typeof window[f] === 'function') {
            functions.push(f);
        }
    }
    log.info(functions.join('\n'));

})();

describe('basic stuff', function () {

    it ('should work', function() {

        expect(0).toBe(0);

        expect(_).toBeDefined();

    });

    for (var i = 1; i <= 10; i++) {

        var title = String.format('repeats for the {0} {1}',
            i, (i===1 ? 'time':'times'));

        //log.info(String.format('Setting up "{0}" test!', title));

        it (title, function() {

            expect(0).toBe(0);

        });
    }

});



describe('describe', function(){

    describe('inside a describe', function(){

        var temp;

        it('should set variable', function() {
            temp = true;
        });

        it('should read variable that was set before', function() {
            expect(temp).toBe(true);
        });

    });

});



describe('javascript currying', function(){

    var add = function(a, b) { return a + b; }
    var add3 = add.bind(null, 3);

    it('should work', function() {

        expect(add(2,5)).toBe(7);

        expect(add3(5)).toBe(8);

        expect(add3(5, 1)).toBe(8);

        expect(add3(5, 1, 2, 3)).toBe(8);

    });

});





describe('javascript objects', function(){

    var numberOfTests = 0;
    var Person;

    beforeEach(function(){

        numberOfTests++;

        Person = function(name) {
            if (name !== undefined)
                this.name = name;
        };

        Person.prototype.name = 'default name';

    });

    it('should inherit from prototype', function(){

        var defaultPerson = new Person();
        expect(defaultPerson.name).toBe('default name');

        Person.prototype.name = 'new default name';
        expect(defaultPerson.name).toBe('new default name');

    });

    it('should be able to override prototype', function(){

        var myPerson = new Person('my name');
        expect(myPerson.name).toBe('my name');

        Person.prototype.name = 'new default name';
        expect(myPerson.name).toBe('my name');

    });

    it('should use Object.create to inherit from prototype', function(){

        var DerivedPerson = function() {
        };

        DerivedPerson.prototype = Object.create(Person.prototype);

        var derivedPerson = new DerivedPerson();
        expect(derivedPerson.name).toBe('default name');

        DerivedPerson.prototype.name = 'overriden name';
        expect(Person.prototype.name).toBe('default name');

        DerivedPerson.prototype.surrname = 'default surrname';
        expect(Person.prototype.surrname).toBeUndefined();

        expect(derivedPerson instanceof Person).toBe(true);
        expect(derivedPerson instanceof DerivedPerson).toBe(true);
        expect(typeof derivedPerson).toBe('object');
    });

    it('all tests should be executed', function(){
        expect(numberOfTests).toBe(4);
    });

});



describe('Object.create', function(){

    it ('can be used to extend object', function(){

        var base = { one:1, two:3 };
        var extension = { two:{value:2}, three:{value:3} };

        var merged = Object.create(base, extension);

        expect(merged.one).toBe(1);
        expect(merged.two).toBe(2);
        expect(merged.three).toBe(3);

    });

    it ('should be replaced by _.extend for simplicity', function(){

        var base = { one:1, two:3 };
        var extension = { two:2, three:3 };

        var merged = _.extend(base, extension);

        expect(merged.one).toBe(1);
        expect(merged.two).toBe(2);
        expect(merged.three).toBe(3);

    });

    function runTestWith(extender) {

        var Person = function() {};
        var DerivedPerson = function() {};

        Person.prototype.name = 'default name';
        DerivedPerson.prototype = extender(Person.prototype);
        DerivedPerson.prototype.name = 'overriden name';
        DerivedPerson.prototype.surrname = 'default surrname';

        var derivedPerson = new DerivedPerson();
        var person = new Person();

        expect(person.name).toBe('default name');
        expect(person.surrname).toBeUndefined();
        expect(derivedPerson.name).toBe('overriden name');
        expect(derivedPerson.surrname).toBe('default surrname');

        expect(derivedPerson instanceof Person).toBe(true);
        expect(derivedPerson instanceof DerivedPerson).toBe(true);

    }

    it('can be used properly', function() {

        runTestWith(function(b) {
            return Object.create(b);
        });
    });

    xit('cannot be replaced with _.extend !!!!!!!!!', function() {

        runTestWith(function(b) {
            return _.extend({}, b);
        });

    });

});