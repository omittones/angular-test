define([], function() {

    return {
        dump : window.dump.bind(window),
        info : console.info.bind(console)
    };

});