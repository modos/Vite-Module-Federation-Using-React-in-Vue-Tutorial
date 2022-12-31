<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import {Button} from 'react/Button'
import {onMounted} from "vue";

onMounted(() => {
  Button(document.getElementById('react'), {value: 'Hello From React'});
})
</script>

<template>
  <div id="react">
  </div>
</template>