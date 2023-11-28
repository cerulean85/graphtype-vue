/* eslint-disable prettier/prettier */
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/_variables.scss";` // 선택적으로 전역 SCSS 변수 파일을 가져올 수 있습니다.
      }
    }
  },
  lintOnSave: false
};