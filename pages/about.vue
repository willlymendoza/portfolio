<template>
  <v-row class="fill-height mx-0 pa-md-5 pa-3 align-center justify-start">
    <v-col cols="12" md="8" class="mx-0 px-0">
      <transition v-if="show" name="fade-in-bottom" appear>
        <div>
          <h1
            class="title-p primary_p--text"
            style="font-size: calc(0.95em + 0.95vw)"
            >About me</h1
          >
          <div>
            <p class="text_p"
              >I have been a software developer for about 4 years, I love giving
              optimal solutions to clients and creating software that provide a
              good experience when using it.
            </p>
            <p class="text_p"
              >I have had the opportunity to work for local companies doing a
              full-stack job as a freelancer and I have worked with a group of
              developers for almost a year.
              <strong class="primary_p--text subtitle-p text_p">
                This is detailed in my Resume.</strong
              >
            </p>
            <p class="text_p">
              I really like learning new technologies.
            </p>
            <p class="text_p">
              I like to help and learn from others, teamwork helps you to
              improve and learn faster.
            </p>
          </div>
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
      title: 'About',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Read something about me'
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
