<template>
    <div class="gameframe">
      <div class="playground">

        <div class="playarea">
          <div class="playarea-layout">
            <div class="play-zone">
              <div style="text-align: center;">
                <div class="choose-message">{{ shownChooseMessage }}</div>
                <button class="choose" @click="choose" v-if="showChooseButton">Choose!</button>
              </div>
            </div>
            <div class="label-list-title">추가된 목록</div>
            <div class="label-list">
              <div class="label-box"  v-for="(label, index) in labelList">
                <div class="label-txt">{{ label }}</div>
                <button @click="remove(index)">삭제</button>
              </div>
            </div>
          </div>

        </div>

        <div class="inputarea">
          <div class="text-input-zone">
          <input class="text-input" type="text" @keyup.enter="add" placeholder="Input Text..." v-model="labelText">
          <button class="send-button" @click="add">전송</button>        
        </div>
        </div>
      </div>
    
    </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
const labelText: any = ref('');
const labelList: any = ref([]);
const showChooseButton: any = ref(false);
const shownChooseMessage: any = ref('Add Text.');

function add() {
  if (labelText.value !== '') {
    labelList.value.push(labelText.value);
    showChooseButton.value = true;
    shownChooseMessage.value = "Click Button!";
  }
  labelText.value = '';
}

const lastCount = 5;
let timer:any = undefined;
function choose() {  
  let curCount = lastCount;

  // 1부터 10까지의 랜덤한 정수 생성
  const randomInt = Math.floor(Math.random() * labelList.value.length) + 1;
  console.log(randomInt);

  shownChooseMessage.value = curCount;
  showChooseButton.value = false;
  timer = setInterval(()=> {  
    curCount--;
    shownChooseMessage.value = curCount;
    showChooseButton.value = (curCount == 0);
    
    if (curCount == 0) {
      clearInterval(timer);          
      const choosenNumber = Math.floor(Math.random() * labelList.value.length) + 1;
      shownChooseMessage.value = labelList.value[choosenNumber-1];
      console.log(choosenNumber);
    }

  }, 1000)
}

function remove(index: number) {
  labelList.value.splice(index, 1)
  if (labelList.value.length == 0) {
    showChooseButton.value = false;
    shownChooseMessage.value = "Add Text.";
  }

}

</script>

<style lang="scss">
@import "@/styles/game.scss";
</style>
