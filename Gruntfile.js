module.exports = function(grunt) {
    // measures the time each task takes
    require('time-grunt')(grunt);
    // load grunt config
    require('load-grunt-config')(grunt);


    var colors = require('colors');

    grunt.registerTask('colorLog', function() {
        console.log(colors.rainbow('OMG Rainbows!')); // rainbow 
    });


    //tasks
    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint']);

    grunt.registerTask('dev', ['jshint', 'colorLog', 'browserify']);
};