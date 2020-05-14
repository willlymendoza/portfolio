<template>
  <v-row class="fill-height mx-0 pa-md-5 pa-3 align-center justify-start">
    <v-col cols="12" md="8" class="mx-0 px-0">
      <transition v-if="show" name="bounce-in-right" appear>
        <h1
          class="title-p primary_p--text"
          style="font-size: calc(0.95em + 0.95vw)"
          >About me</h1
        >
      </transition>
      <transition v-if="show" name="bounce-in-bottom" appear>
        <div>
          <p style="font-size: calc(0.63em + 0.63vw)"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo
            pariatur ipsa iusto cupiditate modi atque fuga quidem consectetur
            molestias?</p
          >
          <p style="font-size: calc(0.63em + 0.63vw)"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo
            pariatur ipsa
          </p>
          <p style="font-size: calc(0.63em + 0.63vw)"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quo
            pariatur ipsa iusto cupiditate modi atque
          </p>
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
  }
}
</script>

<style lang="scss" scoped></style>
