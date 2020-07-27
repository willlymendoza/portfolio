<template>
  <v-row class="fill-height mx-0 pa-md-5 pa-3 align-center">
    <transition v-if="show" name="fade-in-bottom" appear>
      <v-row>
        <v-col cols="4" class="mx-0 px-0 text-center">
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.95em + 0.95vw)"
            >Front-end</h1
          >
          <div>
            <h2
              v-for="item in frontEnd"
              :key="item"
              class="subtitle-p"
              style="font-size: calc(0.63em + 0.63vw)"
              >{{ item }}</h2
            >
          </div>
        </v-col>

        <v-col cols="4" class="mx-0 px-0 text-center">
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.95em + 0.95vw)"
            >Back-end</h1
          >
          <div>
            <h2
              v-for="item in backEnd"
              :key="item"
              class="subtitle-p"
              style="font-size: calc(0.63em + 0.63vw)"
              >{{ item }}</h2
            >
          </div>
        </v-col>

        <v-col cols="4" class="mx-0 px-0 text-center">
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.95em + 0.95vw)"
            >Tools</h1
          >
          <div>
            <h2
              v-for="item in tools"
              :key="item"
              class="subtitle-p"
              style="font-size: calc(0.63em + 0.63vw)"
              >{{ item }}</h2
            >
          </div>
        </v-col>
      </v-row>
    </transition>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      frontEnd: [
        'HTML',
        'CSS & SASS',
        'JAVASCRIPT',
        'JQUERY',
        'VUE.JS &',
        'NUXT.JS',
        'VUETIFY',
        'BOOTSTRAP',
        'REACT.JS',
        'REDUX'
      ],
      backEnd: ['PHP & LARAVEL', 'NODE.JS', 'EXPRESS.JS', 'MYSQL', 'MONGODB'],
      tools: ['GIT & GITHUB', 'HEROKU', 'NETLIFY', 'VSCODE', 'NPM'],
      show: false
    }
  },
  mounted() {
    this.show = true
  },
  head() {
    return {
      title: 'Skills',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My personal skill set'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
