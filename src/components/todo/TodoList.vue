<!-- eslint-disable vue/require-v-for-key -->
<template>
  <header style="position: sticky; top: 0">
    <h1>Logo</h1>
    <nav>
      <ul>
        <li>Menu1</li>
        <li>Menu2</li>
        <li>Menu3</li>
      </ul>
    </nav>
  </header>

  <main>
    <div>
      <div class="col-2" id="green" style="float: left">
        <!-- Navigation links in sidebar-->
        <div><a href="/about">Link 1</a></div>
        <div><a href="#">Link 2</a></div>
        <div><a href="#">Link 3</a></div>
        <div><a href="#">Link 4</a></div>
      </div>
      <!--Contains the main content
                    of the webpage-->
      <!-- <div class="col-10" style="text-align: justify;">
                Bootstrap is a free and open-source
                tool collection for creating responsive
                websites and web applications. It
                is the most popular HTML, CSS, and
                JavaScript framework for developing
                responsive, mobile-first web sites.
            </div> -->

      <div class="col-10" style="float: right">
        <div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
          <div style="background-color: blue; height: 100px"></div>
        </div>
        <!-- <div v-for="todoItem in todoItems" class="shadow"> -->
        <!-- <i class="checkBtn fas fa-check" aria-hidden="true"></i> -->
        <!-- <img :src="todoItem" /> -->
        <!-- </div> -->
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [
        "https://zhdev-gallary.s3.ap-northeast-2.amazonaws.com/images/cat001.jpg",
        "https://zhdev-gallary.s3.ap-northeast-2.amazonaws.com/images/cat002.jpg",
        "https://zhdev-gallary.s3.ap-northeast-2.amazonaws.com/images/cat003.jpg",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/ed193798-d6a0-4a17-b3f7-1fbb1a0db460.png",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/b4400716-44a3-4688-beb8-83a47e343546.jpeg",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/7653f59d-d4da-46c7-97c4-15bb6e741132.jpeg",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/02f080f2-b536-4458-a1aa-ceec268c8b2e.png",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/2630e282-13d9-4bc2-85b2-2f4b84fc6fa8.png",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/6aae4470-3253-479c-97fa-2cace11f0bd0.png",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/36855292-977d-420a-b0f3-f8bc02577896.jpeg",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/5a0175e9-7b48-4752-89a8-023609030b92.jpeg",
        // "https://zh-gallary.s3.ap-northeast-2.amazonaws.com/images/6e884af2-bdc8-448c-8057-4f43064e00c1.png",
      ],
    };
  },
  created() {
    if (localStorage.length > 0) {
      for (var i = 0; i < localStorage.length; i++) {
        this.todoItems.push(localStorage.key(i));
      }
    }
  },
  methods: {
    removeTodo(todoItem, index) {
      localStorage.removeItem(todoItem);
      this.todoItems.splice(index, 1);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  /* text-align: left; */
}

li {
  display: flex;
  /* min-height: 50px;
  height: 50px; */
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}

li p {
  width: 100%;
  text-align: center;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-left: 5px;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
</style>
