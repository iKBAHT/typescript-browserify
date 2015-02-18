module.exports = function (grunt) {
  grunt.initConfig({
    ts: {
      options: {
        compile: true,
        target: "es5",
        module: "commonjs",
        sourceMap: true
      },
      "transforms-only": {
        options: {
          compile: false
        }
      },
      build: {
        src: ["**/*.ts"],
        reference: 'reference.ts'
      }
    },
    clean: {
      buildclean: ["src/*.js", "src/*.map"],
      browser: ["browser/build.js"]
    },
    browserify: {
      build: {
        files: {
          "app/build.js": ["app/main.js"]
        },
        options: {
          debug: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.registerTask("default", [
    "clean:buildclean",
    "clean:browser",
    "ts:build",
    "browserify:build"
  ]);
};