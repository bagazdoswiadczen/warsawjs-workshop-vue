<template>
  <section v-if="questions">
    <question-list-element v-for="question in questions" :question="question" :key="question.title"></question-list-element>
    <h2></h2>
  </section>
</template>

<script>

import QuestionListElement from './question-list-element.vue';

export default {
  name: "QuestionList",
  components: {
    QuestionListElement
  },
  props: {
    questions: Array
  }
}
</script>

<style scoped>

</style>
