module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jade: {
			compile: {
				options: {
					pretty: true,
					banner: '/*! <%= pkg.name %> 0.0.1 HTML */\n'
				},
				files: {
					'mobile/www/index.html': 'src/views/*.jade'
				}
			}
		},

		stylus: {
			compile: {
				options: {
					banner: '/*! <%= pkg.name %> 0.0.1 Styles */\n'
				},

				files: {
					'mobile/www/css/boton-alerta.css': 'src/css/boton-alerta.styl' // 1:1 compile
				}
			}
		},
		
		watch: {
			grunt: { files: ['Gruntfile.js'] },
			jade: {
				files: 'src/views/**/*.jade',
				tasks: ['jade']
			},
			stylus: {
				files: 'src/css/**/*.styl',
				tasks: ['stylus']
			}
		}
	});


	grunt.loadNpmTasks('grunt-contrib-stylus');
	grunt.loadNpmTasks('grunt-contrib-jade');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['jade', 'stylus', 'watch']);
};