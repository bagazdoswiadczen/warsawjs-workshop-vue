<template>
  <li @click="onClick()"> {{ answer}} </li>
</template>

<script>
export default {
  name: "AnswerListElement",
  props: {
    answer: String
  },
  methods: {
    onClcik() {
      this.$emit('selectAnswer', this.answer);
    },
  }
}
</script>

<style scoped>


</style>
