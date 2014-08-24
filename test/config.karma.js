require.config({
    baseUrl: '/base',
    paths: {
        'libs/log':'libs/log.karma',
        'libs/underscore':'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    },
    shim: {
        'libs/underscore': {
            exports: 'window._'
        }
    },
    waitSeconds:15
});

var tests = [];
tests.push('test/spec.bootstrap');
tests.push('test/spec.javascript');

require(tests, function() {

    // we have to kickoff jasmine, as it is asynchronous
    window.__karma__.start();

});