
export default {
    ssr: false,
    head:{
        link:[
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: '//fonts.googleapis.com/css?family=Roboto:100,200,300,400,500,700,400italic|Material+Icons' }
        ]
    },
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        'picnic',
        '@/assets/css/app.css',
        { src: 'vue-material/dist/vue-material.min.css', lang: 'css' },
        { src: 'vue-material/dist/theme/default.css', lang: 'css' },
        { src: 'vue-material/dist/theme/default-dark.css', lang: 'css' },
        // CSS file in the project
            //'@/assets/css/main.css',
        // SCSS file in the project
            //'@/assets/css/main.scss'
      ],
      plugins: [
        { src: '~/plugins/vue-material' }
      ]
}