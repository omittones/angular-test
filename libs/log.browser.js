define([], function() {

    return {
        dump : function(input) {
            this.info(JSON.stringify(input));
        },
        info : console.info.bind(console)
    };

});