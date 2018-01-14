<template>
  <h1>{{ message }}</h1>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  message = 'Hello, world!'

  created () {
  }
}
</script>

<style>
h1 {
  background-color: green;
}
</style>
