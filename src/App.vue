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
import QuestionList from './components/question-list.vue';
import AnswerList from './components/answer-list.vue';
import AnswerListElement from './components/answer-list-element.vue';

export default {
  name: 'app',
  components: {
    TheHeader,
    QuizDetails,
    QuestionList,
    AnswerList,
    AnswerListElement
  },
  data() {
    return {
      quiz: null
    };
  },
  mounted() {
    fetch('/static/quiz.json')
      .then((res) => res.json())
      .then((quiz) => {
        this.quiz = quiz;
    })
  }
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
