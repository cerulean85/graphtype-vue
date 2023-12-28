<template>
  <div id="appx">
    <h1>Editor</h1>
    
    <ArticleBasicEditorComponent
      v-model:title="article.title"
      v-model:contents="article.contents"
    >
      
    </ArticleBasicEditorComponent>
    
    <input type="file" id="fileInput" @change="handleFileChange">
    <label for="fileInput" class="file-input-button">Choose a File</label>

    <label>Choose a File</label>

    <div><button @click="submit">제출</button></div>
    
  </div>
  
  <!-- <div contenteditable="true" v-html="contents">여긴 테스트 영역이지요.</div> -->
</template>

<script setup lang="ts">
import ArticleBasicEditorComponent from './article/ArticleBasicEditorComponent.vue';
import { ref, onMounted } from "vue"

const article = ref({
    title: "zzzz",
    contents: "aaaa",
    imageSrc: "",
})

function submit() {
  console.log("제목: ", article.value.title);
  console.log("내용: ", article.value.contents);

  const articleValue = article.value
  let srcArr = articleValue.contents.split("\n");


  interface ArticleItem {
    no: number, contents: string, type: string
  }

  const articleObj = { 
    articleType: "basic", 
    author: "kkennib", 
    title: articleValue.title, 
    thumbnail: "", 
    inventory: new Array<ArticleItem>()
  };

  for (let text of srcArr) {

    if (text == "") continue;

    let type = "text";      
    if (text.substring(0, 5) == "[img]") {
      text = text.substring(5, text.length);
      articleObj.thumbnail = articleObj.thumbnail == "" ? text : articleObj.thumbnail
      type = "image";
    }

    articleObj.inventory.push({
      no: articleObj.inventory.length + 1,
      contents: text,
      type: type
    });
    
  }    

  fetch("http://localhost:8082/article", {
    method: "POST",
    mode: "cors", //no-cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleObj),
  })
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(`error: ${error}`);
  });
}

function updateContent(event: any) {
    article.value.contents = event.target.innerHTML;
}

function handleFileChange(event: any) {
  const file = event.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = (e) => {
      // this.contents += `<img src=${e.target.result} />`;
      // this.imageSrc = e.target.result;

      const formData = new FormData();
      formData.append("file", file);
      fetch("http://localhost:8082/uploadFile", {
        method: "POST",
        mode: "cors", //no-cors, *same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: formData,
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then((data) => {
          article.value.contents += `\n[img]${data.url}\n\n`;
          
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    };

    reader.readAsDataURL(file);
  }
}

  // let srcArr = this.contents.split("\n");

  // const articleObj = { articleType: "basic", author: "kkennib", title: this.title, thumbnail: "", inventory: [] };
  // for (var i = 0; i < srcArr.length; i++) {
  //   let type = "text";
  //   let text = srcArr[i];
  //   if (text == "") 
  //     continue;

  //   console.log(text.substring(0, 5))
  //   if (text.substring(0, 5) == "[img]") {
  //     text = text.substring(5, text.length);
  //     articleObj.thumbnail = articleObj.thumbnail == "" ? text : articleObj.thumbnail
  //     type = "image";
  //   }
  //   articleObj.inventory.push({
  //     no: articleObj.inventory.length + 1,
  //     contents: text,
  //     type: type,
  //   });
  // }
  
  // console.log(articleObj);

  // fetch("http://localhost:8082/article", {
  //   method: "POST",
  //   mode: "cors", //no-cors, *same-origin
  //   cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(articleObj),
  // })
  // .then((response) => {
  //   console.log(response);
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((error) => {
  //   console.log(`error: ${error}`);
  // });




// export default {
//   data() {
//     return {
//       title: "",
//       contents: "",
//       imageSrc: "",
//     };
//   },
//   methods: {
//     focusContentsArea() {
//       this.$refs.contents_area.foucs();
//     },
//     updateContent(event) {
//       this.contents = event.target.innerHTML;
//     },
//     handleFileChange(event) {
//       const file = event.target.files[0];

//       if (file) {
//         const reader = new FileReader();

//         reader.onload = (e) => {
//           // this.contents += `<img src=${e.target.result} />`;
//           // this.imageSrc = e.target.result;

//           const formData = new FormData();
//           formData.append("file", file);
//           fetch("http://localhost:8082/uploadFile", {
//             method: "POST",
//             mode: "cors", //no-cors, *same-origin
//             cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//             // headers: {
//             //   "Content-Type": "application/json",
//             // },
//             body: formData,
//           })
//             .then((response) => {
//               console.log(response);
//               return response.json();
//             })
//             .then((data) => {
//               this.contents += `\n[img]${data.url}\n\n`;
              
//             })
//             .catch((error) => {
//               console.log(`error: ${error}`);
//             });
//         };

//         reader.readAsDataURL(file);
//       }
//     },
//     submit: function () {
//       console.log("제목: ", this.title);
//       console.log("내용: ", this.contents);
//       let srcArr = this.contents.split("\n");

//       const articleObj = { articleType: "basic", author: "kkennib", title: this.title, thumbnail: "", inventory: [] };
//       for (var i = 0; i < srcArr.length; i++) {
//         let type = "text";
//         let text = srcArr[i];
//         if (text == "") 
//           continue;

//         console.log(text.substring(0, 5))
//         if (text.substring(0, 5) == "[img]") {
//           text = text.substring(5, text.length);
//           articleObj.thumbnail = articleObj.thumbnail == "" ? text : articleObj.thumbnail
//           type = "image";
//         }
//         articleObj.inventory.push({
//           no: articleObj.inventory.length + 1,
//           contents: text,
//           type: type,
//         });
//       }
      
//       console.log(articleObj);

//       fetch("http://localhost:8082/article", {
//         method: "POST",
//         mode: "cors", //no-cors, *same-origin
//         cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(articleObj),
//       })
//       .then((response) => {
//         console.log(response);
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//       })
//       .catch((error) => {
//         console.log(`error: ${error}`);
//       });



//     },
//   },
// };
</script>

<style lang="scss">
@import "@/styles/contents.scss";
</style>
