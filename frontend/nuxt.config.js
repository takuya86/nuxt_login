
export default {
  ssr: true,

  server: {
    port: 3000,
    host: '0.0.0.0', // デフォルト: localhost,
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/axios.js'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: "http://localhost:3000"
  },
  auth: {
    redirect: {
      login: '/auth/signin', // middleware:authを設定したURLにアクセスがあった場合の、リダイレクト先。
      logout: '/', // ログアウト後のリダイレクト先
      callback: false,
      home: '/' /// ログイン後のリダイレクト先。
    },
    strategies: {
      local: {
        user: {
          property: 'agent'
        },
        endpoints: {
          // ログイン処理に関する設定
          login: {
            url: '/auth/sign_in',
            method: 'post',
            propertyName: 'access_token'
          },
          // ログアウト処理に関する設定
          logout: {
            url: '/auth/sign_out',
            method: 'delete'
          },
          user: false
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [
      'axios'
    ],
    extend (config, ctx) {
    }
  }
}
