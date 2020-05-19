<template>
  <v-app dark>
    <!-- NAVIGATION DRAWER -->
    <!-- REPSONSIVE NAVIGATION BUTTON -->
    <v-btn
      color="dark_p mx-2 my-2 "
      absolute
      right
      style="z-index: 9"
      active-class="dark_p"
      class=""
      @click="changeDrawer()"
    >
      <v-img src="/menu.png" width="30" height="30"></v-img>
    </v-btn>
    <NavDrawer />
    <v-content>
      <!-- CONTENT -->
      <v-img :src="require(`~/static/background.png`)" style="height: 100vh;">
        <nuxt />
      </v-img>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import NavDrawer from '~/components/NavDrawer'
export default {
  components: {
    NavDrawer
  },
  data() {
    return {}
  },
  methods: {
    ...mapActions('drawer', ['changeDrawer'])
  }
}
</script>

<style scoped>
.black_btn_p {
  background-color: ;
}
</style>
