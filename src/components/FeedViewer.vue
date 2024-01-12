<script setup lang="ts">
import { ref, onMounted, onUpdated, nextTick } from "vue";

const props = defineProps(["textareaContents"]);
defineEmits(["updateContentsFunc", "updateFocusedIndex"]);
const textareaContents = props.textareaContents; //ref([{ content: '' }])
const textareaRefs = ref([]);

const showImageTag = (contents: string) => {
  const imageUrlRegex = /(https?:\/\/[^\s]+)/g;
  const matches = contents.match(imageUrlRegex);

  console.log(contents);
  console.log(matches);

  return matches;
};
</script>

<template>
  <div v-for="(_, index) in textareaContents" :key="index">
    <div class="content" v-if="!showImageTag(textareaContents[index].contents)">
      {{ textareaContents[index].contents }}
    </div>
    <div style="text-align: center">
      <img
        class="image"
        :src="textareaContents[index].contents"
        alt="Image"
        v-if="showImageTag(textareaContents[index].contents)"
      />
    </div>
  </div>
</template>

<style lang="scss">
@import "@/styles/contents.scss";
</style>
