define([
    'jquery',
    'backbone',
    'text!templates/start.html'
    ],function($, Backbone, StartTPL){
        var startView = Backbone.View.extend({
            template : StartTPL,
            el : $("#container"),
            events: {
                "click [data-js=startViewClick]" : "startViewClick"
            },
            initialize: function(){
                this.render();
            },
            render : function(){
                this.$el.html(this.template);
            },
            startViewClick : function(){
                console.log("Container clicked!");
            }
        });

        return startView;
    });