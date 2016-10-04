module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    copy: {
      main: {
        files: [
          {src: ['node_modules/bootstrap/dist/js/bootstrap.js'], dest: 'dist/js/bootstrap.js'},
          {src: ['node_modules/bootstrap/dist/css/bootstrap.css'], dest: 'dist/css/bootstrap.css'}
        ],
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['copy']);
};
