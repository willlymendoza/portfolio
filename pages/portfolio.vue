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
              height="182"
              :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
              class="ma-auto grey-lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-card-actions>
              <v-spacer></v-spacer>
              <a :href="item.codeUrl" class="mx-2" target="_blank">
                <v-avatar
                  class="my-3"
                  height="30"
                  width="30"
                  min-width="30"
                  tile
                >
                  <v-img :src="getImage('github')">
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
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
                  height="30"
                  width="30"
                  min-width="30"
                  tile
                >
                  <v-img :src="getImage('eye')">
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular
                          indeterminate
                          color="grey lighten-5"
                          width="20"
                        ></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
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
          viewUrl: 'https://weatherapp-by-willy.netlify.app/'
        },
        {
          name: 'CurrencyExchange',
          img: 'currency-exchange',
          codeUrl:
            'https://github.com/willlymendoza/currency-exchange/tree/master/src',
          viewUrl: 'https://currency-exchange-by-willy.netlify.app/'
        },
        {
          name: 'PHP REST API',
          img: 'larapi',
          codeUrl:
            'https://github.com/willlymendoza/larapi/blob/master/app/Http/Controllers/CurrencyController.php',
          viewUrl: ''
        },
        {
          name: 'Rock, Paper, Scissors',
          img: 'rock-paper-scissors',
          codeUrl:
            'https://github.com/willlymendoza/rock-paper-scissors/blob/master/app.js',
          viewUrl: 'https://willlymendoza.github.io/rock-paper-scissors/'
        },
        {
          name: 'BudgetApp',
          img: 'budget-app',
          codeUrl:
            'https://github.com/willlymendoza/budgetApp/blob/master/src/index.js',
          viewUrl: 'https://willlymendoza.github.io/budgetApp/'
        },
        {
          name: 'Tic, Tac, Toe',
          img: 'tic-tac-toe',
          codeUrl:
            'https://github.com/willlymendoza/tic-tac-toe/blob/master/src/index.js',
          viewUrl: 'https://willlymendoza.github.io/tic-tac-toe/'
        },
        {
          name: 'Basic Calculator',
          img: 'basic-calculator',
          codeUrl:
            'https://github.com/willlymendoza/basic-calculator/blob/master/src/index.js',
          viewUrl: 'https://willlymendoza.github.io/basic-calculator/'
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
