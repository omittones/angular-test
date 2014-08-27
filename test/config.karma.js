require.config({
    baseUrl: '/base',
    paths: {
        'libs/log':'libs/log.null',
        'libs/underscore':'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    },
    shim: {
        'libs/underscore': {
            exports: 'window._'
        }
    },
    waitSeconds:15
});

require(['test/config.tests'], function(tests) {
    require(tests, function() {
        // we have to kickoff jasmine, as it is asynchronous
        window.__karma__.start();
    });
});
