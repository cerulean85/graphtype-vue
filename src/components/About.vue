<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div id="main" class="about">
    <h1 class="title">About</h1>
    <hr />

    <div class="scroll-container">
      <div style="margin-bottom: 18px; margin-left: 12px; font-size:14px; color:gray">Updated: 2024-01-13</div>
      <ul>
        <h4>1. MeFeed의 기능</h4>
        <li>MeFeed는 사용자가 보다 수준 높은 글을 작성할 수 있도록 생성형 AI의 Feedback을 지원합니다.</li>
        <li>MeFeed는 사용자가 글을 작성하고 이미지를 업로드하고, 검색하는 기능을 제공합니다.</li>
        <li>MeFeed는 Open API를 이용하여 OpenAI의 ChatGPT와 Google의 Gemini의 API를 이용하여 상호작용합니다.</li>
      </ul>
      <br />
      <ul>
        <h4>2. MeFeed 개발진의 의무</h4>
        <li>MeFeed 개발진은 사용자 지향적인 Feedback 지원을 위해 Prompt를 지속적으로 탐구하여 AI 성능을 향상시킵니다.</li>
        <li>MeFeed 개발진은 사용자가 능숙하게 글을 작성하여 콘텐츠를 제작할 수 있도록 Editor 기능을 끊임없이 연구하여 업데이트합니다.</li>
      </ul>
      <ul>
        <h4>3. MeFeed의 현재</h4>
        <li>MeFeed는 아직 개발 단계이지만 사용자의 호의적인 반응을 얻는 멋진 서비스가 되기까지 서비스를 공개합니다.</li>
      </ul>
      <!-- <h2>비전</h2>
      <ul>
        <li>
          SW에 대한 인사이트를 연구하고 지식과 지혜, 경험을 사람들과 나누는 일
        </li>
        <li>AI를 적극 활용하며 다양한 콘텐츠를 만들고 공유할 것</li>
        <li>클라우드 네이티브의 프로그래머 될 것</li>
      </ul> -->
    </div>
  </div>

  <!-- 

  - 이벤트 기반 서버 사이드 네트워크 애플리케이션 개발 플랫폼
  - 논블록킹 I/O와 단일 스레드, 이벤트 루프를 통해 높은 처리 성능과 확장성을 가진

  논블록킹이란?
  - 다른 함수를 호출할 때 코드를 실행할 수 있는 제어권을 넘기지 않고 갖고 있음
  
  블록킹
  - 호출함수가 피호출함수 호출 후 중단됨
  - 피호출함수에 의해 자원이 선점됨
  - 함수 간 자원 사용을 간섭함

  논블록킹
  - 호출함수가 피호출함수 호출 후에도 중단되지 않음
  - 피호출함수에게 별도의 자원이 부여됨
  - 함수 간 자원 사용이 독립적

  동기: 순차적으로 함수들이 실행됨

  비동기: 무작위로 함수들이 실행됨

  - 다음 작업을 다른 함수의 실행 결과와 무관하게 진행함


동기-블록킹
- 호출함수와 피호출함수 간 순차적으로 처리되고, 호출함수의 실행 흐름이 피호출함수의 처리 결과를 필요로 함

동기-논블록킹
- 호출함수의 실행 흐름이 피호출함수의 처리 결과를 필요로 하지만, 호출함수와 피호출함수 간의 


동기/비동기, 블록킹/논블록킹에 대하여

동기/비동기는 작업이 전달되는 방식을 의미하고,
블록킹/논블록킹은 작업 처리기의 독립적인 동작 가능 여부를 의미함

어떤 작업 전달자에 의해 작업이 전달된다면 동기 방식이고,
어떤 공간을 통해 처리기가 작업을 가져간다면 비동기 방식임

작업을 처리하는 각 처리기들이 독립적으로 동작한다면 논블록킹 방식이지만,
선행의 처리기가 중단되어야 다음 처리기가 동작할 수 있다면 블록킹 방식임


동기-블록킹 방식은 작업 전달 및 처리 간섭에 의한 딜레이가 발생함
비동기-블록킹 방식은 작업 전달에 의한 딜레이는 없으니 처리 간섭 딜레이는 존재함
비동기-논블록킹 방식은 작업 전달 및 처리 간섭에 의한 모든 딜레이가 최소화됨. 다만, 처리기가 독립적으로 작동시키기 위한 자원 소모가 많음
동기-논블록킹 방식은 작업 전달에 의해 전체적인 딜레이가 결정됨

팀장이 일일이 돌아다니며 팀원들에게 일을 배분하는 건 동기식
어디 하나의 리스트에 일을 정리해놓고 팀원들이 알아서 일을 가져가게 한다면 비동기식

만약 팀원들이 노트북으로 일을 하지만, 모두 배터리가 없고 충전기가 하나만 있다면 블록킹
모두 각자 충전기를 하나씩 가졌다면 논블록킹

어떤 작업들이 논리적으로 선/후행 관계가 있다면 이것은 블록킹의 개념으로 해석해야 하며,
동기의 개념은 단순히 일의 전달 방식이라고 봐야 함


이벤트 루프?

이거 뭐 별거 없다.

자바스크립트 코드는 동기와 비동기 코드로 나뉜다.
동기 코드는 Call Stack에 바로 쌓이지만, 비동기 코드는 Web API에 의해 처리해서 callback을 Task Queue에 등록한다.
이벤트 루프는 Call Stack에 비면 Task Queue의 callback함수를 Call Stack으로 옮겨 버린다.
그럼 자바스크립트 엔진은 Call Stack의 함수를 처리할 것이다.
그러니까 이벤트 루프는 Call Stack을 살펴보고 Task Queue의 함수를 Call Stack으로 옮기는 역할을 한다.

자바스크립트가 싱글쓰레드인 이유는?
제어가 쉬워서이다-_- 멀티쓰레딩이나 멀티프로세시을 환경 경험해 본 사람이라면 이 이유에 무릎을 탁 칠 것이다. -->
</template>

<!--https://wit.nts-corp.com/2021/04/23/6338-->
<!--https://wit.nts-corp.com/2021/04/23/6338-->
<!--https://wit.nts-corp.com/2021/04/23/6338-->
<!--https://wit.nts-corp.com/2021/04/23/6338-->
<!--https://wit.nts-corp.com/2021/04/23/6338-->
<!--https://wit.nts-corp.com/2021/04/23/6338-->
<!--https://wit.nts-corp.com/2021/04/23/6338-->
<!--https://wit.nts-corp.com/2021/04/23/6338-->
<!--https://wit.nts-corp.com/2021/04/23/6338-->

<style lang="scss">
@import "@/styles/contents.scss";
//@import "@/styles/timer.scss";
</style>
<script setup lang="ts">
</script>