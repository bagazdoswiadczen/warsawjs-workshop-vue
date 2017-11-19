<template>
  <section v-if="question">
    <h2> {{ question.title }} </h2>
    <answer-list
    @SelectAnswerIndex="handleSelectAnswerIndex($event)"
    :answers="question.answers"
    :></answer-list>

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
  },
  methods: {
    handleSelectAnswerIndex(answerIndex) {
    console.log(answerIndex, this.question);
  },
}
}
</script>

<style scoped>
h2 {
  text-align: center;
}

</style>
