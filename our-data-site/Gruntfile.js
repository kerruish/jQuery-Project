module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: ['src/js/*.js'],
                dest: 'dist/js/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
            },
            dist: {
                files: {
                    'dist/js/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        concat_css: {
            options: {},
            all: {
                src: ["src/css/*.css"],
                dest: "dist/css/<%= pkg.name %>.css"
            },
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'dist/css',
                    ext: '.min.css'
                }]
            }
        },
        jshint: {
            ignore_warning: {
                options: {
                    '-W015': true,
                    '-W069': true,
                    '-W106': true,
                    '-W034': true,
                    "-W041": false
                },
                src: 'src/**/*.js',
                filter: 'isFile'
            }
        },
        // jshint: {
        //     files: ['Gruntfile.js', 'src/**/*.js'],
        //     options: {
        //         globals: {
        //             jQuery: true,
        //             console: true,
        //             module: true,
        //             document: true
        //         }
        //     },
        // },
        watch: {
            files: ['<%= jshint.files %>'],
            tasks: ['jshint', 'qunit']
        },
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-concat-css');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('test', ['jshint']);

    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'concat_css', 'cssmin']);

};
