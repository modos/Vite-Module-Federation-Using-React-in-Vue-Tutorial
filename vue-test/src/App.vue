<script setup>
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