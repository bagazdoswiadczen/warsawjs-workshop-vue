<template>
  <div id="app">
   <!-- <router-view/> -->
    <the-header></the-header>
     <quiz-details :quiz="quiz"></quiz-details>


  </div>
</template>

<script>

import TheHeader from './components/the-header.vue';
import QuizDetails from './components/quiz-details.vue';


export default {
    name: 'app',
    components: { TheHeader, QuizDetails },
    computed: {
      quiz() {
        return this.$store.getters.quiz;
      }
    },
    mounted() {
      this.$store.dispatch('init');
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

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
