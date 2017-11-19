<template>
  <section v-if="question">
    <answer-list :answers="question.answers"></answer-list>
    <h2></h2>
  </section>
</template>

<script>

import AnswerList from './answer-list.vue';

export default {
  name: "QuestionListElement",
  components: {
    AnswerList
  },
  props: {
    question: Object
  }

}
</script>

<style scoped>

</style>
