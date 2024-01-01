<template>
  <div id="main" class="mefeed-div">
    <div class="header">    
      <div class="feed-logo">
        <!-- <button class="feed-logo-button">L</button> -->
        <label class="feed-logo-label">MeFeed</label>
      </div>    
      <span class="feed-user-button material-icons-outlined md-36">account_circle</span>

    </div>
    <div class="main">

      <div class="feed-zone">        
        <div class="feed-search-zone">
          <input class="feed-search-input" type="text" @keyup.enter="search" placeholder="Search..." v-model="searchText">
          <span class="feed-search-button material-icons-outlined md-36" @click="search">search</span>        
        </div>

        <div class="feed-list-zone" @scroll="attachData">
          <div class="feed-item-layout"
                v-for="(feed, index) in feedList"
                :key="feed.articleId"
                :style="{backgroundColor: isSelected(feed.articleId) ? '#FFCC25' : '#E6E6E9'}"
                @click="detail(index)">

            <div class="feed-elements">
              <label class="title" v-if="feed.title == undefined || feed.title == ''">Untitled</label>
              <label class="title" v-else>{{ feed.title }}</label>
              <label class="contents" v-if="feed.contents == undefined || feed.contents.length == 0">No Contents.</label>
              <label class="contents" v-else>{{ feed.contents }}</label>
              <label class="date">{{ feed.updatedAt }}</label>
            </div>
            
            <img class="feed-thumbnail" :src="feed.thumbnail" v-if="feed.thumbnail"/>
          </div>    
        </div>

        <!-- <div class="loading-indicator" v-show="loading" :style="{ height: (loading ? 40 : 0 ) + 'px' }">Loading...</div> -->
      </div>

        <div class="user-zone">
            
          <div class="user-control-zone">
            <span class="user-remove-feed-button material-icons-outlined md-28" @click="removeFeed">delete</span>
            <input type="file" id="fileInput" @change="addImage"/>
            <label class="user-add-image-button material-icons-outlined md-28" for="fileInput">add_photo_alternate</label>
            <span class="user-add-feed-button material-icons-outlined md-28" @click="createFeed">post_add</span>
          </div>

          <div class="user-typing-zone">
            <div class="user-typing-title">
              <input class="title" type="text" placeholder="제목을 입력하세요." 
                    v-model="currentFeed.title" @input="updateListHead"/>
            </div>
            <div class="user-typing-contents">
                <FeedEditor 
                :textareaContents="currentFeed.inventory"
                @update-focused-index="updateRowIndex"
                @update-contents-func="updateListHead"></FeedEditor>
            </div>
          </div>
        </div>

        <div class="intelligence-zone">
          <div class="bot-monit-zone">
            <img class="bot-thumbnail" src="https://cdn.imweb.me/upload/S20221129c3c04fdc67a8b/09e904cb8f26f.png"/>
            <label class="bot-label">{{ feedbackStateMessage }}</label>
            <span class="bot-rechat-button material-icons-outlined md-36" @click="replayFeedback">replay</span>
          </div>

          <div class="bot-challenge-zone">
            <div class="bot-challege-item"
                  v-for="feedbackItem in currentFeed.feedback"
                  :key="feedbackItem.bot">

              <label class="challenge-text">{{ feedbackItem.bot }}</label>
                <div v-for="item in feedbackItem.inventory" :key="item.no">                
                  <div class="content">{{ item.contents }}</div>
                </div>
            </div>
          </div>
        </div>  
    </div>  
  </div>
</template>

<script setup lang="ts">

import { ref, onMounted } from "vue";
import FeedEditor from './FeedEditor.vue';
import { getNowDatetimeString } from "../scripts/custom_datetime";
import { 
  remoteAxiosPost,
  remoteAxiosDelete,
  remoteAxiosPut,
  remoteAxiosGet
} from "../scripts/custom_axios";
import {
  Feed,
  getNewFeed,
  clearFeed,
  getNewFeedList,
} from "../scripts/interface_design";
import {
  remoteUrl
} from "../scripts/app_config";
import {
  getFeedbackMessage,
  feedbackState
} from "../scripts/feed";

const userId: string = "kkennib";

let feedList: any = ref([getNewFeedList()]);
let currentFeed: any = ref(getNewFeed());
let currentRowIndex: number = 0;
function updateRowIndex(idx: number) { currentRowIndex = idx; }

// let loading: any = ref(false);
// const isLoading = (): boolean => { return loading.value;}
// const showIndicate = () => { loading.value = true; }
// const hideIndicate = () => { loading.value = false; }
const isSelected = (articleId: string): boolean => { return articleId == currentFeed.value.articleId; }
let feedbackStateMessage: any = ref(getFeedbackMessage(feedbackState.wait));

let page: any = ref(1);
let totalPageCount: number = -1;
let totalItemCount: any = ref(0);
let searchText: any = ref('');
const searching = () : boolean => ( searchText.value.length > 0 );
function search() {
  page.value = 1;
  feedList.value = getNewFeedList();
  totalPageCount = -1;
  totalItemCount.value = 0;
  loadData();
}
function initData() { loadData(); }
function attachData(e: any) {
  const { scrollHeight, scrollTop, clientHeight } = e.target;
  const isAtTheBottom = scrollHeight <= (scrollTop + clientHeight);
  if (!isAtTheBottom) return;
  if (totalPageCount < page.value) return;
  loadData();
}
async function loadData() {

  // if (isLoading())
  //   return;

  // showIndicate();

  const prefixUrl = `${remoteUrl}/articles`;
  const suffixUrl = searching() ? `search/${searchText.value}/${page.value}` : `${userId}/${page.value}`;
  const requestUrl = `${prefixUrl}/${suffixUrl}`;

  remoteAxiosGet(
    requestUrl, 
    (resData: any) => {

      resData.list.forEach((e: { contents: string; inventory: any; }) =>  {       
        e.contents = '';
        for (let item of e.inventory) {
          if (item.type == "text") {            
            e.contents = item.contents.substring(0, 50);
            break;
          }
        }    
      });

      setTimeout(()=> {    
        feedList.value = getNewFeedList();
        let curFeedList = feedList.value;
        for(var item of resData.list) {          
          curFeedList.push(item);
        }

        // totalPageCount = resData.totalPageCount;
        // totalItemCount.value = resData.totalItemCount;
        // page.value++;
        // hideIndicate();
        
        if (curFeedList.length == 0) createFeed();
        else detail(0);
        

      }, 1000)  
    },
    (error: any) => { /*hideIndicate();*/ }
  );
}

const detail = (index: number) => {

  const prevFeedId = currentFeed.value.articleId;
  if (prevFeedId != undefined && prevFeedId != '') {
    updateFeed();
  }

  const curFeed = currentFeed.value;
  const curFeedItem = feedList.value[index];
  curFeed.articleId = curFeedItem.articleId;
  curFeed.title = curFeedItem.title;
  curFeed.createdAt = curFeedItem.createdAt;

  const invenItemCount = curFeed.inventory.length;
  curFeed.inventory.splice(0, invenItemCount); // 이걸 해야 인식이 됨
  if (curFeedItem.inventory == undefined || curFeedItem.inventory.length == 0) {
    curFeed.inventory.push({ no: 1, contents: '', type: "text" });
  } else {
    for (const feed of curFeedItem.inventory) {
      curFeed.inventory.push({ 
        no: feed.no, 
        contents: feed.contents, 
        type: feed.type 
      })
    }
  }  

  checkBotState(curFeed.articleId, (res: Feed) => { curFeed.feedback = res.feedback });  
}

function checkBotState(articleId: string, updateFeedbackAction: any) {
  const requestUrl = `${remoteUrl}/chat/feedback/${userId}/${articleId}`;
  remoteAxiosGet(
    requestUrl, 
    (resData: any) => {

      const state = resData.state;
      feedbackStateMessage.value = getFeedbackMessage(state);
      updateFeedbackAction(resData);
      switch (state) {
        case feedbackState.wait:
        case feedbackState.work:
          setTimeout(() => {
            checkBotState(articleId, updateFeedbackAction);
          }, 5000);
          break;
      }
    },
    (error: any) => { 
      // hideIndicate(); 
    });
}

function createFeed() {
  
  const newItem: Feed = getNewFeed();
  newItem.author = userId;
  newItem.feedback = [];
  remoteAxiosPost(`${remoteUrl}/article`, newItem, (res: any) => {
    newItem.articleId = res.data.articleId;
    const nowDatetime = getNowDatetimeString();
    newItem.createdAt = nowDatetime;
    newItem.updatedAt = nowDatetime;
    feedList.value.unshift(newItem);
    detail(0);
  });
}

function removeFeed() {  
  const curFeed = currentFeed.value;
  if (curFeed.articleId == undefined || curFeed.articleId == '')
    return;

  if (!confirm("Feed를 삭제하시겠습니까?"))
    return;
  
  curFeed.author = userId;
  remoteAxiosDelete(`${remoteUrl}/article`, curFeed, (res: any) => {    
    const feedItems = feedList.value;
    for (let i in feedItems) {
      const feedItem = feedItems[i];
      if (feedItem.articleId == curFeed.articleId) {
        feedItems.splice(i, 1);

        clearFeed(curFeed);
        if (feedItems.length > 0) {
          detail(0);
        } else {          
          createFeed();
        }
        break;
      }
    }
  });
}

function updateListHead(idx: number) {
  const curFeed = currentFeed.value;
  if (curFeed == undefined || idx > 0)
    return;

  const curFeedList = feedList.value;
  for (var i in curFeedList) {
    const feedItem = curFeedList[i];
    if (feedItem.articleId !==  curFeed.articleId)
      continue;

      feedItem.title = curFeed.title;
      if (feedItem.inventory.length > 0) {
        feedItem.contents = curFeed.inventory[0].contents;
      } else {
        feedItem.inventory.push({
          no: curFeed.inventory[0].no,
          contents: curFeed.inventory[0].contents,
          type: curFeed.inventory[0].type,
        })
      }
      curFeedList.splice(i, 1);
      curFeedList.splice(0, 0, feedItem);
  }  
}

const updateFeed = async () => {
  if (currentFeed == undefined)
    return;

  const curFeed = currentFeed.value;
  const curFeedList = feedList.value;
  for (var feedItem of curFeedList) {
    if (feedItem.articleId !==  curFeed.articleId)
      continue;

    feedItem.inventory.splice(0, feedItem.inventory.length);
    for (var editInvenItem of curFeed.inventory) {
      feedItem.inventory.push(editInvenItem);
    }
  }

  curFeed.author = userId;
  remoteAxiosPut (`${remoteUrl}/article`, curFeed);
}


const replayFeedback = async () => {  
  if (!confirm("Feedback을 다시 진행하시겠습니까?"))
    return;
  
  const curFeed = currentFeed.value;
  await updateFeed();
  remoteAxiosPut(`${remoteUrl}/rechat`, curFeed, (res: any) => {
    checkBotState(curFeed.articleId, (res: Feed) => { curFeed.feedback = res.feedback });  
    feedbackStateMessage.value = getFeedbackMessage(feedbackState.wait);
  })
}


onMounted(() => {
  
  initData();

  /*
  window.addEventListener('visibilitychange', (e) => {
    if (document.visibilityState !== 'visible') {
    console.info('탭이 전환되었습니다. (다른 탭으로 이동됨)');
    // 여기에 Update 코드 넣기
    
    // update();
  }
    
  });

  window.addEventListener('beforeunload', function (event) {
    const message = '변경사항이 저장되지 않을 수 있습니다.';
    event.returnValue = message;
    return message;
  });
  
  window.addEventListener('unload', async function (event) {
    // update();
  });
  */
  
})


function addImage(event: any) {
  const curFeed = currentFeed.value;
  if (curFeed.articleId == undefined || curFeed.articleId == '')
    return;

  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("articleId", curFeed.articleId);
      fetch(`${remoteUrl}/uploadFile`, {
        method: "POST",
        mode: "cors", //no-cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        body: formData,
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          const curFeed = currentFeed.value;
          const curFeedList = feedList.value;
          for (var i in curFeedList) {
            const feedItem = curFeedList[i];
            if (feedItem.articleId != curFeed.articleId)
              continue;            

              curFeed.inventory[currentRowIndex] = {            
                no: curFeed.inventory.length + 1,
                contents: data.url,
                type: "text"
              };
          }
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    };
    reader.readAsDataURL(file);
  }
}

</script>

<style lang="scss">
@import "@/styles/contents.scss";
</style>