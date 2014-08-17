xdescribe('scope\'s child', function(){

    it ('is isolated from parent scope', function() {

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

describe('basic stuff', function(){

    it ('should work', function() {

        expect(0).toBe(0);

    });

    for (var i = 0; i < 10; i++) {

        var title = String.format('repeats for the {0} {1}',
            i, (i===1 ? 'time':'times'));

        it (title, function() {

            expect(0).toBe(0);

        });
    }

});