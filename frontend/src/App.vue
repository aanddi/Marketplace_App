<script>
export default {
  data() {
    return {
      drawer: false
    }
  }
}
</script>

<template>
  <v-app>
    <v-navigation-drawer app v-model="drawer"></v-navigation-drawer>
    <v-app-bar app dark color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn>
          <v-icon start icon="mdi-cake-variant"></v-icon>
          Link One
        </v-btn>
        <v-btn>Link Two</v-btn>
        <v-btn>Link Three</v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>



  

  

  