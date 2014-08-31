(function(nodeRequire) {

    require = nodeRequire('requirejs');
    require.config({
        nodeRequire: nodeRequire,
        baseUrl: '..',
        paths: {
            'libs/log':'libs/log.null',
            'libs/underscore':'libs/underscore-min/index'
        },
        waitSeconds:15
    });

    if (typeof define !== 'function') { define = nodeRequire('amdefine')(module); }

})(require);

require(['jasmine', 'test/config.tests'], function(Jasmine, tests) {

    var jasmine = new Jasmine();

    var env = jasmine.env;
    var describe = env.describe.bind(env);
    var xdescribe = env.xdescribe.bind(env);
    var it = env.it.bind(env);
    var xit = env.xit.bind(env);
    var beforeEach = env.beforeEach.bind(env);
    var afterEach = env.afterEach.bind(env);
    var expect = env.expect.bind(env);
    var pending = env.pending.bind(env);
    var spyOn = env.spyOn.bind(env);

    require(tests, function() {

        debugger;

        env.execute();

    });

});