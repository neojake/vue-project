<template>
  <div id="app">        
    <v-app toolbar footer>
      <v-navigation-drawer
        persistent
        v-model="drawer"
        light
        enable-resize-watcher
        absolute
      >
      <v-list dense v-for="menu in menus">
        <v-list-tile @click="$router.push(menu.link)">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{menu.menuName}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>      
      </v-navigation-drawer>
      <v-toolbar class="indigo" dark fixed>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Vue Project</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="$router.push('/login')">
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>      
      <main>
        <v-container fluid>          
          <router-view></router-view>
        </v-container>
      </main>
      <v-footer></v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      menus: [
        { link: '/', menuName: 'Hello' },
        { link: '/About', menuName: 'About' },
      ],
      drawer: false,
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
