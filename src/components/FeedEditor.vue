<script setup lang="ts">
import { ref, onMounted, onUpdated, nextTick } from "vue";

const props = defineProps(["textareaContents"]);
defineEmits(["updateContentsFunc", "updateFocusedIndex"]);
const textareaContents = props.textareaContents; //ref([{ content: '' }])
const textareaRefs = ref([]);

const enterKey = async (index) => {
  const currentTextarea = textareaRefs.value[index];
  const currentIndex = currentTextarea.selectionStart;

  const currentText = textareaContents[index].contents;
  const newTextareaValue = currentText.substring(
    currentIndex,
    currentTextarea.value.length
  );
  textareaContents[index].contents = currentText.substring(0, currentIndex);

  textareaContents.splice(index + 1, 0, { contents: newTextareaValue });
  await nextTick();
  const newTextarea = textareaRefs.value[index + 1];
  newTextarea.focus();
  newTextarea.setSelectionRange(0, 0);
};

const deleteKey = async (index, event) => {
  if (event.key === "Delete") {
    if (index == textareaRefs.value.length - 1) return;
    event.preventDefault();

    const currentTextarea = textareaRefs.value[index];
    const currentTextareaContentObj = textareaContents[index];
    const currentTextareaLastInedx = currentTextareaContentObj.contents.length;
    const nextTextareaContent = textareaContents[index + 1].contents;

    currentTextarea.value =
      currentTextareaContentObj.contents + nextTextareaContent;
    currentTextarea.setSelectionRange(
      currentTextareaLastInedx,
      currentTextareaLastInedx
    );
    currentTextareaContentObj.contents = currentTextarea.value;
    textareaContents.splice(index + 1, 1);
  } else if (event.key === "Backspace") {
    if (index == 0) return;

    const currentTextarea = textareaRefs.value[index];
    const currentIndex = currentTextarea.selectionStart;
    if (currentIndex == 0) {
      event.preventDefault();

      const currentText = textareaContents[index].contents;
      const concatTextareaValue = currentText.substring(
        0,
        currentTextarea.value.length
      );
      const prevTextareaContentObj = textareaContents[index - 1];
      const prevTextareaLastInedx = prevTextareaContentObj.contents.length;
      const prevTextarea = textareaRefs.value[index - 1];

      prevTextarea.focus();
      textareaContents.splice(index, 1);

      prevTextarea.value =
        prevTextareaContentObj.contents + concatTextareaValue;
      prevTextarea.setSelectionRange(
        prevTextareaLastInedx,
        prevTextareaLastInedx
      );
      prevTextareaContentObj.contents = prevTextarea.value;
    }
  }
};

const arrowUpKey = (index) => {
  if (index == 0) return;
  const prevTextarea = textareaRefs.value[index - 1];
  prevTextarea.focus();
  prevTextarea.setSelectionRange(
    prevTextarea.value.length,
    prevTextarea.value.length + 1
  );
};

const arrowDownKey = (index) => {
  if (index == textareaRefs.value.length - 1) return;
  const nextTextarea = textareaRefs.value[index + 1];
  nextTextarea.focus();
  nextTextarea.setSelectionRange(0, 0);
};

const arrowLeftKey = (index) => {
  const currentTextarea = textareaRefs.value[index];
  const currentIndex = currentTextarea.selectionStart;
  if (currentIndex == 0) arrowUpKey(index);
  else currentTextarea.setSelectionRange(currentIndex, currentIndex - 1);
};

const arrowRightKey = (index) => {
  const currentTextarea = textareaRefs.value[index];
  const currentIndex = currentTextarea.selectionStart;
  if (currentIndex == currentTextarea.value.length) arrowDownKey(index);
  else currentTextarea.setSelectionRange(currentIndex + 1, currentIndex + 1);
};

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
    <textarea
      class="content"
      v-model="textareaContents[index].contents"
      placeholder="내용을 입력해주세요."
      @keydown.enter.prevent="enterKey(index)"
      @keydown.up.prevent="arrowUpKey(index)"
      @keydown.down.prevent="arrowDownKey(index)"
      @keydown.left.prevent="arrowLeftKey(index)"
      @keydown.right.prevent="arrowRightKey(index)"
      @keydown="deleteKey(index, $event)"
      @input="$emit('updateContentsFunc', index)"
      @focus="$emit('updateFocusedIndex', index)"
      ref="textareaRefs"
    >
    </textarea>
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
