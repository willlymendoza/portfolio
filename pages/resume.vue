<template>
  <v-row class="fill-height mx-0 pa-md-5 pa-3 align-center justify-start">
    <v-col cols="12" md="8" class="mx-0 px-0">
      <transition v-if="show" name="bounce-in-right" appear>
        <div>
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.95em + 0.95vw)"
            >Watch or Download my Resume
          </h1>
          <a href="/resume_en.pdf" target="_blank" class="link-p">
            <v-img
              class="d-inline-flex pt-1"
              src="/download.png"
              width="20"
              height="20"
            >
            </v-img>
            Resume_EN
          </a>
          <div></div>
          <a href="/resume_es.pdf" target="_blank" class="link-p">
            <v-img
              class="d-inline-flex"
              src="/download.png"
              width="20"
              height="20"
            >
            </v-img>
            Resume_ES
          </a>
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
      show: false
    }
  },
  mounted() {
    this.show = true
  },
  head() {
    return {
      title: 'Resume',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My resume in English and Spanish'
        }
      ]
    }
  }
}
</script>

<style scoped>
.text_p {
  font-size: calc(0.63em + 0.63vw);
}
</style>
