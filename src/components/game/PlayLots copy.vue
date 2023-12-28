<template>
    <div class="gameframe">
      <div class="playground" 
        @mousemove="moveAdjBar"
        @mouseup="releaseAdjBar">

        <div class="playarea">
          <div class="playarea-layout">
            <div class="play-zone">
              <div style="text-align: center;">
                <div class="choose-message">{{ shownChooseMessage }}</div>
                <button class="choose" @click="choose" v-if="showChooseButton">Choose!</button>
              </div>
            </div>

            <div class="label-list-complex">
              <div class="complex-layout">
                <div 
                  id="list-adj-bar"
                  class="list-adj-bar" 
                  :style="{ left: adjXPos + 'px' }"
                
                  @mousedown="catchAdjBar"
                >
              </div>
                <div id="list-box" class="list-layout" :style="{ width: resizableWidth + 'px' }">
                  <div class="title">추가된 목록</div>
                  <div class="list-layout">
                    <div class="label-box"  v-for="(label, index) in labelList">
                      <div class="label-txt">{{ label }}</div>
                      <button @click="remove(index)">삭제</button>
                    </div>
                  </div>
                </div>
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
const resizableWidth:any = ref(document.getElementById("list-box")?.clientWidth)
const adjXPos: any = ref(0)

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

let isResizing = false;
let firstX = 0;
function catchAdjBar(event: any) {
  console.log(event);  
  isResizing = true;

  // const adjBar = document.getElementById("list-adj-bar");
  // adjXPos.value = -55;

  // adjXPos.value = -100;
}

let tmp = 0;
function moveAdjBar(event: any) {
  if (!isResizing)
    return;

    // console.log(event.clientX)
    
    const adjBar = document.getElementById("list-adj-bar");
    // console.log((event.clientX - adjBar?.offsetLeft) + '/' + firstX);
    // const adjBarRightXPos = adjBar?.offsetLeft + adjBar?.offsetWidth;
    // adjBar?.offsetLeft = event.clientX;
    // console.log("adjBarRightXPos: " + (adjBar?.offsetLeft - firstX));

    tmp = event.clientX - adjBar?.offsetLeft;
    console.log(event.clientX + '/' + adjBar?.offsetLeft + '/' + tmp + '/' + isResizing);
    if (Math.abs(tmp) > 30) {
      
      adjXPos.value = tmp;
      // adjXPos.value += Math.abs(tmp);
      tmp = 0;
      return;
    }

    // console.log(tmp);
    // console.log(adjBar?.offsetLeft)
    // console.log(event.clientX)
    // console.log(tmp)
    //adjXPos.value = tmp;
    // console.log(tmp)
    
    
    // adjBar?.style.left = (adjBar?.offsetLeft - firstX) + "px";

    //const listBox = document.getElementById("list-box");
    // listBox.style.left = "-50px";
    // resizableWidth.value
    // listBox?.offsetWidth;
    // document.getElementById("list-adj-bar").clien
  // }
  // resizableWidth.value = 50;
}

function releaseAdjBar(event: any) {
  isResizing = false;
  alert(isResizing)
  // console.log(tmp)
  // if (Math.abs(adjXPos.value - tmp) > 10) {
  //   adjXPos.value += tmp;
  //   tmp = 0;
  // }
  // adjXPos.value = (event.clientX - adjBar?.offsetLeft)
}

</script>

<style lang="scss">
@import "@/styles/game.scss";
</style>
