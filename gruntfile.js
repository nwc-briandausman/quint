module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      my_target: {
      	files: {
      		'no-touching/js/scripts.min.js' : 
      		[
      			'bower_components/angular/angular.js',
      			'bower_components/jquery/dist/jquery.js',
      			'bower_components/bootstrap/dist/js/bootstrap.js',
      			'custom_components/js/media_queries.js',
      			'custom_components/js/scripts.js'
      		]
      	}
      }
    },






    sass: {
	    dist: {
	      options: {
	        style: 'compressed',
	        compass: true
	      },
	      files: {
	        'no-touching/css/style.css': 'custom_components/scss/style.scss',
	      }
	    }
	  },





	  imagemin: { 
	  	dynamic: {
	      files: [{
	        expand: true,
	        cwd: 'custom_components/images',
	        src: ['**/*.{png,jpg,gif}'], 
	        dest: 'no-touching/images'
	      }]
	    }
	  },







	  	watch: {
		scripts: {
			files: 'custom_components/**/*.js',
		    tasks: ['newer:uglify']
		},
		css: {
		    files: 'custom_components/**/*.scss',
		    tasks: ['newer:sass'],
		}
	}





  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');

  // Default task(s).
  grunt.registerTask('default', ['watch', 'imagemin']);

};