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
      <h1
        class="title-p primary_p--text"
        style="font-size: calc(0.94em + 0.94vw)"
        >{{ item.name }}</h1
      >
      <v-hover v-slot:default="{ hover }">
        <v-card
          class="ma-auto dark_p"
          width="90%"
          max-width="350"
          style="opacity: .9; background-color: initial!important;"
        >
          <v-img
            :src="getImage(item.img)"
            :alt="`${item.img}`"
            width="350"
            class="ma-auto"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                style="height: 100%;"
              >
                $14.99
              </div>
            </v-expand-transition>
          </v-img>
        </v-card>
      </v-hover>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { name: 'WeatherApp', img: 'weather-app' },
        { name: 'CurrencyExchange', img: 'currency-exchange' },
        { name: 'Rock, Paper, Scissors', img: 'rock-paper-scissors' },
        { name: 'BudgetApp', img: 'budget-app' },
        { name: 'Tic, Tac, Toe', img: 'tic-tac-toe' },
        { name: 'Basic Calculator', img: 'basic-calculator' }
      ]
    }
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
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.95;
  position: absolute;
  width: 100%;
}
</style>
