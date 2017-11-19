<template>
  <section v-if="quiz">
    <h1>
      <p> {{quiz.name}} </p>
      <p> {{quiz.categoryName}} </p>
      <img :src="quiz.promo" alt="">
    </h1>
    <h2></h2>
  </section>
</template>

<script>
export default {
  name: "QuizDetails",
  props: {
    quiz: Object
  }
}
</script>

<style scoped>

</style>


