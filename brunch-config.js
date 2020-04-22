module.exports = {
  paths: {
    public: 'web',
    watched: ['app', 'templates']
  },

  modules: {
    autoRequire: {
      'scripts/app.js': ['scripts/app']
    }
  },

  optimize: false,

  files: {
    javascripts: {
      entryPoints: {
        'app/scripts/app.js': 'scripts/app.js',
        'app/scripts/pages.js': 'scripts/pages.js',
      },
      joinTo: {
        'scripts/vendor.js': [
          'node_modules/jquery/dist/jquery.min.js',
        ],
        'scripts/pace.min.js': 'node_modules/pace-js/pace.min.js',
      }
    },
    stylesheets: {
      joinTo: {
        'styles/app.css': 'app/styles/main.scss',
        'styles/cp.css': 'app/styles/cp.scss',
        'styles/pace.css': 'app/styles/pace.scss',
        'styles/vendor.css': [
          'node_modules/flickity/dist/flickity.min.css',
          'node_modules/normalize.css/normalize.css',
          'node_modules/leaflet/dist/leaflet.css'
        ]
      }
    }
  },

  npm: {
    styles: {
      flickity: ['/dist/flickity.min.css'],
      'normalize.css': ['/normalize.css'],
      leaflet: ['dist/leaflet.css']
    },
    static: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/pace-js/pace.min.js',
    ],
  },

  plugins: {
    autoReload: {
      enabled: true
    },
    babel: {
      presets: [
        ["@babel/preset-env", {
          targets: {
            browsers: ['last 2 versions']
          }
        }]
      ]
    },
    postcss: {
      processors: [
        require('autoprefixer')(['last 10 versions'])
      ]
    }
  }
};