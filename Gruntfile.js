module.exports = function(grunt) {
  var bourbon = require('bourbon');
  bourbon.includePaths // Array of Bourbon paths

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        // src: 'src/js/<%= pkg.name %>.js',
        // dest: 'build/js/<%= pkg.name %>.min.js'

        files: [{
           expand: true,
           src: '**/*.js',
           dest: 'build/js',
           cwd: 'src/js',
           ext: '.min.js',
           extDot: 'last'
       }]
      }
    },
    sass: {
      options: {
        sourceMap: true,
        mode: 'native',
        includePaths: require('bourbon').includePaths
      },
      dist: {
        // files: {
        //   // 'build/css/app.css': 'src/stylesheets/app.scss'
        // }
        files: [{
          expand: true,
          cwd: 'src/stylesheets/',
          src: '**/*.scss',
          dest: 'build/css',
          ext: '.css',
          extDot: 'last'
        }]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      css: {
        files: ['src/stylesheets/*/**'],
        tasks: ['sass']
      },
      js: {
        files: ['src/js/48east.js'],
        tasks: ['uglify']
      }
    },
    express: {
      all: {
        options: {
          port:9000,
          hostname: 'localhost',
          bases: ['.'],
          livereload: true
        }
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "sass" task
  grunt.loadNpmTasks('grunt-sass');

  // Load the plugin that provides the "watch" task
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Load the plugin that provides the "express" task
  grunt.loadNpmTasks('grunt-express');

  // Default task(s).
  grunt.registerTask('default', ['sass']);
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('server', ['express', 'watch']);

};
