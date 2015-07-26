module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-open');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    connect: {
      server: {
        options: {
          port: 8080,
          base: './deploy'
        }
      }
    },

    browserify: {
      dist: {
        files: {
          'deploy/js/ballsosimple.js': 'src/ballsosimple/main.js',
        },
        options: {
          transform: [['babelify']]
        }
      }
    },

    concat: {
      dist: {
        src: 'src/vendor/**/*.js',
        dest: 'deploy/js/vendor.js'
      }
    },

    watch: {
      files: 'src/**/*.js',
      tasks: ['browserify']
    },

    open: {
      dev: {
        path: 'http://localhost:8080/index.html'
      }
    },

    jshint: {
      src: [
        'src/ballsosimple/**/*.js',
      ],
      options: {
        jshintrc: 'src/.jshintrc',
      },
    },
  });

  grunt.registerTask('default',
    ['concat', 'browserify', 'connect', 'open', 'watch']);

};
