<template>
  <v-app dark>
    <!-- NAVIGATION DRAWER -->
    <NavDrawer />
    <v-content>
      <v-img :src="require(`~/static/background.png`)" style="height: 100vh;">
        <nuxt />
      </v-img>
    </v-content>
  </v-app>
</template>

<script>
import NavDrawer from '~/components/NavDrawer'
export default {
  components: {
    NavDrawer
  },
  data() {
    return {}
  }
}
</script>
