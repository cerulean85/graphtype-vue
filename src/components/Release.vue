<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>ArticleWriter</div>
  <span>title</span>
  <input type="text" />
  <br />
  <span>file</span>
  <input id="customFile" type="file" @change="handleFileChange" />
  <br />
  <label for="customFile">{{ filename }}</label>
  <button @click="addArticle">제출하기</button>
</template>

<script>
export default {
  data() {
    return {
      filename: "파일을 선택하세요.",
      selectedFile: null,
    };
  },
  methods: {
    addArticle() {
      // alert("Update!!");
      const formData = new FormData();
      formData.append("file", this.selectedFile);
      fetch("http://localhost:8082/upload", {
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
          // if (response.ok) {
          return response.json();
          // }
          // throw new Error("Network response was not ok.");
        })
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.log(`error: ${error}`);
        });
    },
    handleFileChange(e) {
      this.filename = e.target.files[0].name;
      this.selectedFile = e.target.files[0];
    },
  },
};
</script>
