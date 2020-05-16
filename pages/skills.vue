<template>
  <v-row class="fill-height mx-0 pa-md-5 pa-3 align-center">
    <v-row>
      <v-col cols="4" class="mx-0 px-0 text-center">
        <transition v-if="show" name="bounce-in-right" appear>
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.95em + 0.95vw)"
            >Front-end</h1
          >
        </transition>
        <transition v-if="show" name="bounce-in-bottom" appear>
          <div>
            <h2
              v-for="item in frontEnd"
              :key="item"
              class="subtitle-p"
              style="font-size: calc(0.63em + 0.63vw)"
              >{{ item }}</h2
            >
          </div>
        </transition>
      </v-col>

      <v-col cols="4" class="mx-0 px-0 text-center">
        <transition v-if="show" name="bounce-in-right" appear>
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.95em + 0.95vw)"
            >Back-end</h1
          >
        </transition>
        <transition v-if="show" name="bounce-in-bottom" appear>
          <div>
            <h2
              v-for="item in backEnd"
              :key="item"
              class="subtitle-p"
              style="font-size: calc(0.63em + 0.63vw)"
              >{{ item }}</h2
            >
          </div>
        </transition>
      </v-col>

      <v-col cols="4" class="mx-0 px-0 text-center">
        <transition v-if="show" name="bounce-in-right" appear>
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.95em + 0.95vw)"
            >Tools</h1
          >
        </transition>
        <transition v-if="show" name="bounce-in-bottom" appear>
          <div>
            <h2
              v-for="item in tools"
              :key="item"
              class="subtitle-p"
              style="font-size: calc(0.63em + 0.63vw)"
              >{{ item }}</h2
            >
          </div>
        </transition>
      </v-col>
    </v-row>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      frontEnd: [
        'HTML',
        'CSS',
        'JAVASCRIPT',
        'JQUERY',
        'VUE.JS &',
        'NUXT.JS',
        'VUETIFY',
        'BOOTSTRAP'
      ],
      backEnd: ['PHP & LARAVEL', 'NODE.JS', 'MYSQL', 'MONGODB'],
      tools: ['GIT & GITHUB', 'HEROKU', 'NETLIFY', 'VSCODE', 'NPM'],
      show: false
    }
  },
  mounted() {
    this.show = true
  }
}
</script>

<style lang="scss" scoped></style>
