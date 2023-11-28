<script setup lang="ts">

defineProps({
  title: String,
  contents: String,
  titleModifiers: { default: () => ({}) },
})

defineEmits(['update:title', 'update:contents'])
</script>

<template>
  <div>
    <h1>Editor</h1>
    <!-- 어바웃 페이지 내용 추가 -->
    <!-- <div>
      <textarea v-model="title" placeholder="제목을 입력하세요."></textarea>
    </div>
    <div>
      <textarea v-model="contents" placeholder="내용을 입력하세요."></textarea>
    </div> -->
    <div>
      <div>제목</div>
      <textarea style="width: 400px;" :value="title" @input="$emit('update:title', $event.target.value)"></textarea>
    </div>
    <div>
      <div>내용</div>
      <textarea style="width: 400px; height:300px;" :value="contents" @input="$emit('update:contents', $event.target.value)"></textarea>
    </div>
    <!-- <div contenteditable="true" v-html="contents" @input="updateContent"></div> -->
    
    <!-- <img :src="imageSrc"/>
    <div><button @click="submit">제출</button></div>
    <input type="file" @change="handleFileChange"> -->
  </div>
</template>