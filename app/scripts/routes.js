define([
    'jquery',
    'backbone',
    'views/startView'
    ],function($, Backbone, StartView){
    var Routes = Backbone.Router.extend({
        routes: {
            "": "start"
        },
        start : function(){
            new StartView();
        }
    });

    return Routes;
});