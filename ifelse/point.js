let showPointBtn = document.getElementById("showPoint");
let showResult = document.getElementById("result");

showPointBtn.addEventListener("click", function () {
  console.log(1);
  let mathPoint = document.getElementById("math").value;
  let litturePoint = document.getElementById("litture").value;
  let englishPoint = document.getElementById("english").value;
  let area = document.getElementById("area").value;
  let areaPoint;
  switch (area) {
    case "KV1":
      areaPoint = 0.75;
      break;
    case "KV2-NT":
      areaPoint = 0.5;
      break;
    case "KV2":
      areaPoint = 0.25;
      break;
    case "KV3":
      areaPoint = 0;
      break;
  }
  let sumHTML = +(mathPoint) + +(litturePoint) + +(englishPoint) + +(areaPoint);
  showResult.innerHTML = `Tông điểm thi đại học của bạn là : ${sumHTML}`;
});
