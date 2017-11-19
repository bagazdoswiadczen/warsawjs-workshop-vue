<template>
  <section v-if="quiz">
    <h1>
      <p> {{quiz.name}} </p>
      <p> {{quiz.categoryName}} </p>
      <img :src="quiz.promo" alt="">
    </h1>

    <question-list :questions="quiz.questions"></question-list>
  </section>
</template>

<script>

import QuestionList from './question-list.vue';

export default {
  name: "QuizDetails",
  props: {
    quiz: Object
  },
  components: {
    QuestionList
  }
}
</script>

<style scoped>

</style>


