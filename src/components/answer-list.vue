<template>
  <section v-if="answers">
    <answer-list-element
    v-for="(answer,index) in answers"
    @selectAnswer="oneSelectAnswer(answer,index)"
    :answer="answer"
    :key="answer"></answer-list-element>
  </section>
</template>

<script>

import AnswerListElement from './answer-list-element.vue'

export default {
  name: "AnswerList",
  components: {
    AnswerListElement
  },
  props: {
    answers: Array
  },
  methods: {
    onSelectAnswers(selectAnswer, selectAnswerIndex) {
      this.$emit('selectAnswerIndex', selectAnswerIndex)
    },
  }
}
</script>

<style scoped>

</style>
