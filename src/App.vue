<template>
  <h1>{{ message }}</h1>
</template>

<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class App extends Vue {
  number = 1
  message = `Hello, world! ${this.number}`

  created () {
    this.created()
    let a = 1
    if (a === 2) {
      window.addEventListener('test', () => {
        a = 4
      })
      a = 2
    } else {
      a = 3
    }
  }
}
</script>

<style>
h1 {
  background-color: green;
}
</style>
