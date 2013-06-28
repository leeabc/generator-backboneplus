'use strict';
require.config(
	paths:
        jquery: '../bower_components/jquery/jquery'
        backbone: '../bower_components/backbone-amd/backbone'
        underscore: '../bower_components/underscore-amd/underscore'
    shim:
    	underscore:
    		exports: '_'
    	backbone:
    		deps: ['underscore','jquery']
    		exports: 'Backbone'
)

require ['backbone'], (Backbone)->
	Backbone.history.start()
	console.log 'App Running!'