
export default {
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
    ],
    script: [
      {
          src: "https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js",
          type: "text/javascript",
           
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.js",
        type: "text/javascript",
        
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js",
      type: "text/javascript",
       
    },
    {
      src: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js",
      type: "text/javascript",
       
  },
  {
    src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.9.0/js/bootstrap-datepicker.js",
    type: "text/javascript",
     
},
{
  src: "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.13.11/js/bootstrap-select.js",
  type: "text/javascript",
   
},
{
  src: "//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js",
  type: "text/javascript",
   
}






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
    
    '@/assets/css/styles.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
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
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */

  axios: {
    baseURL: 'http://localhost/koin/api/index.php/wp-json',
    proxyHeaders: false,
    credentials: false
},

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  env: {
    url: {
        main:"http://localhost/",
        homePage: '/wp/v2/pages/7/',
    }
  }
}
