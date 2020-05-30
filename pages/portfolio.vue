<template>
  <v-row
    class="fill-height mx-0 pa-md-5 pa-3 align-center flex-wrap"
    style="overflow: auto;"
  >
    <v-col
      v-for="item in projects"
      :key="item.name"
      cols="12"
      sm="6"
      md="4"
      xl="3"
      class="mx-0 px-0 text-center"
    >
      <transition v-if="show" name="fade-in-bottom" appear>
        <div>
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.94em + 0.94vw)"
            >{{ item.name }}</h1
          >

          <v-card
            class="ma-auto dark_p"
            width="90%"
            max-width="350"
            style="opacity: .9; background-color: initial!important;"
            elevation="0"
          >
            <v-img
              :src="getImage(item.img)"
              :alt="`${item.img}`"
              width="350"
              class="ma-auto grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="primary_p"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-actions>
              <v-avatar
                v-for="lang in item.languages"
                :key="lang"
                class="my-3 mx-1"
                height="20"
                width="20"
                min-width="20"
                tile
              >
                <v-tooltip top>
                  <template v-slot:activator="{ on }">
                    <v-img :src="getImage(lang)" v-on="on"></v-img>
                  </template>
                  <span>{{ lang }}</span>
                </v-tooltip>
              </v-avatar>
              <v-spacer></v-spacer>
              <a :href="item.codeUrl" class="mx-2" target="_blank">
                <v-avatar
                  class="my-3"
                  height="25"
                  width="25"
                  min-width="25"
                  tile
                >
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <v-img :src="getImage('github')" v-on="on"></v-img>
                    </template>
                    <span>code</span>
                  </v-tooltip>
                </v-avatar>
              </a>
              <a
                v-if="item.viewUrl !== ''"
                :href="item.viewUrl"
                class="mx-2"
                target="_blank"
              >
                <v-avatar
                  class="my-3"
                  height="25"
                  width="25"
                  min-width="25"
                  tile
                >
                  <v-tooltip top>
                    <template v-slot:activator="{ on }">
                      <v-img :src="getImage('eye')" v-on="on"></v-img>
                    </template>
                    <span>preview</span>
                  </v-tooltip>
                </v-avatar>
              </a>
            </v-card-actions>
          </v-card>
        </div>
      </transition>
    </v-col>
  </v-row>
</template>

<script>
export default {
  transition: {
    name: 'fade'
  },
  data() {
    return {
      projects: [
        {
          name: 'WeatherApp',
          img: 'weather-app',
          codeUrl:
            'https://github.com/willlymendoza/weather-app/tree/master/src',
          viewUrl: 'https://weatherapp-by-willy.netlify.app/',
          languages: ['html', 'css', 'javascript', 'vue', 'vuetify']
        },
        {
          name: 'CurrencyExchange',
          img: 'currency-exchange',
          codeUrl:
            'https://github.com/willlymendoza/currency-exchange/tree/master/src',
          viewUrl: 'https://currency-exchange-by-willy.netlify.app/',
          languages: ['html', 'css', 'javascript', 'vue', 'vuetify']
        },
        {
          name: 'PHP REST API',
          img: 'larapi',
          codeUrl:
            'https://github.com/willlymendoza/larapi/blob/master/app/Http/Controllers/CurrencyController.php',
          viewUrl: '',
          languages: ['laravel']
        },
        {
          name: 'BudgetApp',
          img: 'budget-app',
          codeUrl:
            'https://github.com/willlymendoza/budgetApp/blob/master/src/index.js',
          viewUrl: 'https://willlymendoza.github.io/budgetApp/',
          languages: ['html', 'css', 'javascript']
        }
      ],
      show: false
    }
  },
  mounted() {
    this.show = true
  },
  methods: {
    getImage(name) {
      return require(`~/static/${name}.png`)
    }
  },
  head() {
    return {
      title: 'Portfolio',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Watch my recent personal proyects'
        }
      ]
    }
  }
}
</script>

<style scoped>
.v-card--reveal {
  bottom: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.95;
  position: absolute;
  width: 100%;
  font-size: calc(0.5em + 0.5vw) !important;
  line-height: inherit;
}
</style>
