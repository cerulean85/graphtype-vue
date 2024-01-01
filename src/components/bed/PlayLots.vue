<template>
  <div class="container-layout">
    <div class="container-lg text-center contents-layout border border-dark">
      <div class="row choose-zone-layout">
        <div class="col-9 gx-0">
          <div id="choose-zone" class="choose-zone border-end border-4">
            <div style="text-align: center;">
              <div class="choose-message">{{ shownChooseMessage }}</div>
              <button class="choose" @click="choose" v-if="showChooseButton">Choose!</button>
            </div>
          </div>
        </div>
        <div class="col-3 gx-0">  
          <div class="choose-list-zone">   
            <div class="row label-list-title gx-0">추가된 목록</div>
            <div class="label-list gx-0 ps-0 m-0">
              <div class="label-box gx-0"  v-for="(label, index) in labelList">
                <div class="col-9 label-txt rounded-3">{{ label }}</div>
                <button class="col-3 btn btn-danger remove-btn" @click="remove(index)">삭제</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row inputzone-layout">
        <div class="input-group">
          <input type="text" class="form-control" @keyup.enter="add" placeholder="Input Text..." aria-label="Input Text..." aria-describedby="button-addon2" v-model="labelText">
          <button class="btn btn-primary" type="button" @click="add">Submit</button>
        </div>
        <!-- <div class="col-11 pe-0">
          <input class="text-input" type="text" @keyup.enter="add" placeholder="Input Text..." v-model="labelText">
        </div>
        <div class="col-1 ps-0">
          <button class="send-button" @click="add">전송</button>        
        </div> -->
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
const resizableHeight:any = ref(500);

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
