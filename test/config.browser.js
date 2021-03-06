require.config({
    baseUrl: '/',
    paths: {
        'libs/log':'libs/log.browser',
        'libs/jasmine':'libs/jasmine-2.0.1/jasmine',
        'libs/jasmine-html':'libs/jasmine-2.0.1/boot',
        'libs/jasmine-html-core':'libs/jasmine-2.0.1/jasmine-html',
        'libs/underscore':'libs/underscore-min/index'
    },
    shim: {
        'libs/jasmine': {
            exports:'window.jasmineRequire'
        },
        'libs/jasmine-html': {
            deps: ['libs/jasmine', 'libs/jasmine-html-core'],
            exports: 'window.jasmine'
        },
        'libs/jasmine-html-core': {
            deps: ['libs/jasmine'],
            exports: 'window.jasmineRequire'
        },
        'libs/underscore': {
            exports: 'window._'
        }
    },
    waitSeconds:15
});

require(['libs/jasmine-html', 'test/config.tests'],
    function(jasmine, tests) {
        require(tests, function() {
            if (window.onload) window.onload();
        });
});
