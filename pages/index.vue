/* eslint-disable prettier/prettier */
<template>
  <v-row class="fill-height pa-md-5 pa-3 mx-0 align-end justify-start">
    <transition v-if="show" name="fade-in-bottom" appear>
      <div class="my-12">
        <h1 class="title-p" style="font-size: calc(1.88em + 1.88vw);">
          <span class="primary_p--text">Hello,</span> I'm Willian Mendoza
        </h1>
        <h2
          class="subtitle-p secondary_p--text type-text"
          style="font-size: calc(0.8em + 0.8vw)"
        >
          I'm a Front-End & Back-End Developer, Specialize In Front-End
        </h2>
      </div>
    </transition>
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
      title: 'Home'
    }
  }
}
</script>

<style scoped></style>
