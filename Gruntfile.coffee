module.exports = (grunt) ->

  grunt.initConfig

    clean:
      all:
        options:
          force: true
        src: 'este/**/*.{js,css}'

    stylus:
      options:
        'include css': true
        'compress': false
      all:
        files: [
          expand: true
          src: [
            'este/**/*.styl'
          ]
          ext: '.css'
        ]

    coffee:
      all:
        options:
          bare: true
        files: [
          expand: true
          src: 'este/**/*.coffee'
          ext: '.js'
        ]

    coffee2closure:
      all:
        files: [
          expand: true
          src: 'este/**/*.coffee'
          ext: '.js'
        ]

    esteTemplates:
      all:
        src: 'este/**/*.soy'

    esteDeps:
      all:
        options:
          outputFile: 'build/deps.js'
          prefix: '../../../../'
          root: [
            'bower_components/closure-library'
            'bower_components/closure-templates'
            'este'
          ]

    esteUnitTests:
      app:
        options:
          depsPath: '<%= esteDeps.all.options.outputFile %>'
          prefix: '<%= esteDeps.all.options.prefix %>'
        src: 'este/**/*_test.js'

    esteBuilder:
      options:
        root: '<%= esteDeps.all.options.root %>'
        depsPath: '<%= esteDeps.all.options.outputFile %>'
        compilerFlags: [
          # You will love advanced compilation with verbose warning level.
          '--output_wrapper="(function(){%output%})();"'
          '--compilation_level="ADVANCED_OPTIMIZATIONS"'
          '--warning_level="VERBOSE"'
          # Remove code for ancient browsers (IE<8, very old Gecko/Webkit).
          '--define=goog.net.XmlHttp.ASSUME_NATIVE_XHR=true'
          '--define=este.json.SUPPORTS_NATIVE_JSON=true'
          '--define=goog.style.GET_BOUNDING_CLIENT_RECT_ALWAYS_EXISTS=true'
          '--define=goog.DEBUG=false'
          # Externs. They allow us to use thirdparty code without [] syntax.
          '--externs=externs/react.js'
        ]

      all:
        options:
          namespace: '*'
          outputFilePath: 'build/all.js'

    bump:
      options:
        commitFiles: ['-a']
        files: ['package.json', 'bower.json']
        pushTo: 'origin'
        tagName: '%VERSION%'

    'npm-contributors':
      options:
        file: 'package.json'
        commit: true
        commitMessage: 'Update contributors'

    changelog:
      options: {}

  grunt.loadNpmTasks 'grunt-bump'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-stylus'
  grunt.loadNpmTasks 'grunt-conventional-changelog'
  grunt.loadNpmTasks 'grunt-este'
  grunt.loadNpmTasks 'grunt-npm'

  grunt.registerTask 'build', ->
    grunt.task.run [
      'clean'
      'coffee'
      'coffee2closure'
      'esteTemplates'
      'esteDeps'
      'esteBuilder'
      'stylus'
    ]

  grunt.registerTask 'test', ->
    grunt.task.run [
      'clean'
      'coffee'
      'coffee2closure'
      'esteTemplates'
      'esteDeps'
      'esteUnitTests'
      'esteBuilder'
    ]

  grunt.registerTask 'incorporateReact', ->
    src = grunt.file.read 'bower_components/react/react.min.js'
    desc = """
      ###*
        @fileoverview Facebook React UI library incorporated into Este. Remember to
        use externs for advanced compilation.

        Supported browsers:

        - all evergreen and IE9+
        - to support IE8, add [es5-shim](https://github.com/kriskowal/es5-shim)

        @see /demos/thirdparty/react/index.html
        @see http://facebook.github.io/react
        @see https://github.com/steida/este/blob/master/Gruntfile.coffee
      ###
      goog.provide 'este.thirdParty.react'

      goog.globalEval #{JSON.stringify src}

      # Hint for compiler dead code removal, it prevents src duplication.
      # How to test it: Try compile Este default app.start.
      # grunt build --stage // should be around 25KB.
      goog.globalEval ';'
    """
    grunt.file.write 'este/thirdparty/react.coffee', desc

  grunt.registerTask 'incorporatePointerEvents', ->
    src = grunt.file.read 'bower_components/pointerevents-polyfill/pointerevents.min.js'
    desc = """
      ###*
        @fileoverview Polymer PointerEvents polyfill incorporated into Este.
        @see http://www.polymer-project.org/platform/pointer-events.html
      ###
      goog.provide 'este.thirdParty.pointerEvents'

      goog.require 'goog.userAgent'

      ###*
        @return {boolean}
      ###
      este.thirdParty.pointerEvents.isSupported = ->
        !goog.userAgent.IE || goog.userAgent.isVersionOrHigher 10

      ###*
        @type {boolean}
        @private
      ###
      este.thirdParty.pointerEvents.installed_ = false

      este.thirdParty.pointerEvents.install = ->
        return if !este.thirdParty.pointerEvents.isSupported()
        return if este.thirdParty.pointerEvents.installed_
        este.thirdParty.pointerEvents.installed_ = true
        goog.globalEval #{JSON.stringify src}

      # Hint for compiler dead code removal, it prevents src duplication.
      # grunt build --stage // should be around 8.6KB.
      goog.globalEval ';'
    """
    grunt.file.write 'este/thirdparty/pointerevents.coffee', desc