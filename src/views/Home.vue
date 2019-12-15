<template>
  <div class="home">
    <NavigationDrawer :items="items" />

    <HomeNavbar :app-name="appName" @logout="logout" />

    <v-content>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </div>
</template>

<script>
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import HomeNavbar from "@/components/HomeNavbar.vue";
import Auth from "@/packages/auth";
import config from "@/config.js";

export default {
  name: "Home",
  components: {
    NavigationDrawer,
    HomeNavbar
  },
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "fas fa-tachometer-alt",
          route: "home.dashboard"
        },
        { title: "Page 2", icon: "fas fa-file-invoice" },
        {
          title: "Page 3",
          icon: "fas fa-file-powerpoint"
        },
        { title: "Page 4", icon: "fas fa-book" },
        { title: "Settings", icon: "fas fa-cogs" }
      ]
    };
  },
  computed: {
    appName() {
      return config.appTitle();
    }
  },
  methods: {
    logout() {
      Auth.destroyToken();
      this.$router.push({ name: "login" });
    }
  }
};
</script>
<style lang="scss">
.home {
  min-height: 94vh;
}
</style>
