<template>
  <v-navigation-drawer
    :value="drawer"
    app
    absolute
    hide-overlay
    class="back-nav"
  >
    <v-row class="flex-column py-5 mx-0" align="center">
      <v-avatar height="80" width="80" min-width="50" tile>
        <v-img :src="getImage('logo')"></v-img>
      </v-avatar>
      <h1 class="title-p">Willian Mendoza</h1>
      <h2 class="mb-8 subtitle-p primary_p--text">Front-end Developer</h2>

      <div v-for="item in menu" :key="item.title" class="mb-7">
        <n-link
          :to="{ name: item.link }"
          class="link-p"
          active-class="link-p-active"
          exact
          >{{ item.title }}</n-link
        >
      </div>

      <!-- SOCIALS -->
      <div>
        <a
          v-for="item in social"
          :key="item.name"
          :href="item.link"
          target="_blank"
          class="mx-2"
        >
          <v-avatar class="my-3" height="30" width="30" min-width="30" tile>
            <v-img :src="getImage(item.name)"></v-img>
          </v-avatar>
        </a>
        <a href="mailto: wyllmh5@gmail.com" class="mx-2">
          <v-avatar class="my-3" height="30" width="30" min-width="30" tile>
            <v-img :src="getImage('email')"></v-img>
          </v-avatar>
        </a>
      </div>
    </v-row>
  </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      menu: [
        { title: 'Home', link: 'index' },
        { title: 'About', link: 'about' },
        { title: 'Skills', link: 'skills' },
        { title: 'Portfolio', link: 'portfolio' },
        { title: 'Resume', link: 'resume' }
      ],
      social: [
        {
          name: 'github',
          alt: 'github',
          link: 'https://github.com/willlymendoza'
        },
        {
          name: 'linkedin',
          alt: 'linkedin',
          link: 'https://www.linkedin.com/in/willian-mendoza-75387a16b/'
        }
      ]
    }
  },
  computed: {
    ...mapState('drawer', ['drawer'])
  },
  methods: {
    getImage(name) {
      return require(`~/static/${name}.png`)
    }
  }
}
</script>
