<script setup lang="ts">
defineProps({
  title: String,
  likes: Number
})

defineEmits(['enlarge-text'])

</script>

<template>
    <div class="blog-post">
      <h4>{{  title  }}</h4>
      <button @click="$emit('enlarge-text')">텍스트 확대</button>
      <slot />
    </div>
</template>