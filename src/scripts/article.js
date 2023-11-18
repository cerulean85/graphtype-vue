// export let articleSet = [
//   {
//     id: 0,
//     title:
//       "0 아파도 티 안 내는 고양이, 우리 고양이는 지금 무엇을 생각하고 있을까?",
//     author: "kkennib",
//     thumbnail:
//       "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
//     inventory: [
//       {
//         no: 1,
//         type: "text",
//         contents:
//           "고양이가 원래 사막에서 나고 자랐다고 해서, 더위를 타지 않는다고 생각하면 절대 안돼요! 고양이에게 더위는 치명적일 수 있답니다. 온도 변화에 민감하기 때문에 더위를 느껴 체온이 올라갔을 때, 본능적으로 체온을 낮추기 위해 여러가지 행동들을 합니다. 정상보다 높은 체온인 상태가 오랫동안 지속되면 내부 장기의 되돌릴 수 없는 손상을 일으킬 수 있습니다. 더위를 먹은 것 같다면 일단 빠르게 병원에 데려가 주세요. 절대 억지로 물을 뿌려 체온을 낮추려 하거나, 물을 강제로 급여하는 행동은 하지 말아주세요. 높은 체온이 빠르게 떨어지는 것도 매우 위험합니다.",
//       },
//       {
//         no: 2,
//         type: "image",
//         contents:
//           "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
//       },
//     ],
//     updatedAt: "2023-11-18",
//   },
//   {
//     id: 1,
//     title:
//       "1 아파도 티 안 내는 고양이, 우리 고양이는 지금 무엇을 생각하고 있을까?",
//     author: "kkennib",
//     thumbnail:
//       "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
//     inventory: [
//       {
//         no: 1,
//         type: "text",
//         contents:
//           "고양이가 원래 사막에서 나고 자랐다고 해서, 더위를 타지 않는다고 생각하면 절대 안돼요! 고양이에게 더위는 치명적일 수 있답니다. 온도 변화에 민감하기 때문에 더위를 느껴 체온이 올라갔을 때, 본능적으로 체온을 낮추기 위해 여러가지 행동들을 합니다. 정상보다 높은 체온인 상태가 오랫동안 지속되면 내부 장기의 되돌릴 수 없는 손상을 일으킬 수 있습니다. 더위를 먹은 것 같다면 일단 빠르게 병원에 데려가 주세요. 절대 억지로 물을 뿌려 체온을 낮추려 하거나, 물을 강제로 급여하는 행동은 하지 말아주세요. 높은 체온이 빠르게 떨어지는 것도 매우 위험합니다.",
//       },
//       {
//         no: 2,
//         type: "image",
//         contents:
//           "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
//       },
//     ],
//     updatedAt: "2023-11-18",
//   },
//   {
//     id: 2,
//     title:
//       "2 아파도 티 안 내는 고양이, 우리 고양이는 지금 무엇을 생각하고 있을까?",
//     author: "kkennib",
//     thumbnail:
//       "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
//     inventory: [
//       {
//         no: 1,
//         type: "text",
//         contents:
//           "고양이가 원래 사막에서 나고 자랐다고 해서, 더위를 타지 않는다고 생각하면 절대 안돼요! 고양이에게 더위는 치명적일 수 있답니다. 온도 변화에 민감하기 때문에 더위를 느껴 체온이 올라갔을 때, 본능적으로 체온을 낮추기 위해 여러가지 행동들을 합니다. 정상보다 높은 체온인 상태가 오랫동안 지속되면 내부 장기의 되돌릴 수 없는 손상을 일으킬 수 있습니다. 더위를 먹은 것 같다면 일단 빠르게 병원에 데려가 주세요. 절대 억지로 물을 뿌려 체온을 낮추려 하거나, 물을 강제로 급여하는 행동은 하지 말아주세요. 높은 체온이 빠르게 떨어지는 것도 매우 위험합니다.",
//       },
//       {
//         no: 2,
//         type: "image",
//         contents:
//           "https://health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0.jpg",
//       },
//     ],
//     updatedAt: "2023-11-18",
//   },
// ];

// import axios from "axios";
// export function getArticleList() {
//   axios
//     .get("http://localhost:8081/articles/basic")
//     .then((response) => {
//       // API 응답을 데이터 변수에 할당
//       // this.data = response.data;
//       console.log(response.data);
//       console.log(response.data);
//       console.log(response.data);

//       articleSet.length = 0;
//       //articleSet = response.data;
//       alert(articleSet.length);
//     })
//     .catch((error) => {
//       console.error("API 호출 오류:", error);
//     });
// }
