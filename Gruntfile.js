module.exports = function (grunt) {
  var
    commonAliases = [
      "./app/scripts/common/jsmodule/newJs.js:newJs"
    ],
    buildOneAliases = [
      "./app/scripts/1/app.js:app",
      "./app/scripts/1/jsmodule/newJsDependency.js:newJsDependency"
    ],
    buildTwoAliases = [
      "./app/scripts/2/app.js:app",
      "./app/scripts/2/jsmodule/newJsDependency.js:newJsDependency"
    ];

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
      buildclean: ["src/*.js", "**/*.map"],
      browser: ["app/build1.js", "app/build2.js"]
    },
    browserify: {
      build1: {
        files: {
          "app/build1.js": ["app/main.js"]
        },
        options: {
          alias: commonAliases.concat(buildOneAliases)
        }
      },
      build2: {
        files: {
          "app/build2.js": ["app/main.js"]
        },
        options: {
          alias: commonAliases.concat(buildTwoAliases)
        }
      },
      options: {
        browserifyOptions: {
          debug: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-ts");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.registerTask("clear", [
    "clean:buildclean",
    "clean:browser"
  ]);
  grunt.registerTask("default", [
    "clear",
    "ts:build",
    "browserify:build1",
    "browserify:build2"
  ]);
};