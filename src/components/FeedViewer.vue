<script setup lang="ts">
import { ref, onMounted, onUpdated, nextTick } from "vue";

const props = defineProps(["textareaContents"]);
defineEmits(["updateContentsFunc", "updateFocusedIndex"]);
  const textareaContents = props.textareaContents; //ref([{ content: '' }])
  const textareaRefs = ref([]);

  const showImageTag = (contents) => {
  const imageUrlRegex = /(https?:\/\/[^\s]+)/g;
  const matches = contents.match(imageUrlRegex);
  return matches;
};

const calcHeight = () => {
  let lineCount = 0;
  const lineHeight = 30;
  for (var ref of textareaRefs.value) {
    const fontWidth = lineCount < 10 ? 12 : 8;
    const lineLength = ref.clientWidth / fontWidth;
    const textCount = ref.value.length;
    lineCount = Math.ceil(textCount / lineLength);
    lineCount = lineCount == 0 ? 1 : lineCount;

    const refHeight = lineCount * lineHeight;
    ref.style.height = refHeight + "px";
  }
};

onMounted(() => {
  window.addEventListener("resize", () => {
    calcHeight();
  });
});

onUpdated(() => {
  calcHeight();
});
</script>

<template>
  <div v-for="(_, index) in textareaContents" :key="index">
    <div class="content">{{ textareaContents[index].contents }}</div>
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
