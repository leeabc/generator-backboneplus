requirejs.config({
    paths: {
        'backbone' : '../bower_components/backbone/backbone',
        'jquery' : '../bower_components/jquery/jquery',
        'underscore' : '../bower_components/underscore/underscore'
    },
    shim : {
        'backbone' : {
            deps: ['underscore','jquery'],
            exports : 'Backbone'
        },
        'jquery' : {
            exports : 'Jquery'
        },
        'underscore' : {
            exports : 'Underscore'
        }
    }
});

requirejs(['jquery', 'backbone', 'underscore', 'routes'],function($, Backbone, _, Routes){

    new Routes();

    console.log('App Running');
    console.log($);

    Backbone.history.start();
});