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

describe('currying', function(){

    var add = function(a, b) { return a + b; }
    var add3 = add.bind(null, 3);

    it('should work', function() {

        expect(add(2,5)).toBe(7);

        expect(add3(5)).toBe(8);

        expect(add3(5, 1)).toBe(8);

        expect(add3(5, 1, 2, 3)).toBe(8);

    });

});

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

xdescribe('scope\'s child', function () {

    it('is isolated from parent scope', function () {

        expect($scope.items.length).toBe(3);
        expect($child.items.length).toBe(3);

        $child.remove(1);

        expect($scope.items.length).toBe(3);
        expect($child.items.length).toŋŋBe(2);

        $scope.items.push({ title: 'Pebbles', quantity: 5, price: 6.95 });

        expect($scope.items.length).toBe(4);
        expect($child.items.length).toBe(2);
    });

});