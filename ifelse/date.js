let showBtn = document.getElementById("show");

showBtn.addEventListener("click", function () {
  console.log(1);
  let month = document.getElementById("day").value;
  let resultShow = document.getElementById("result");
  let date;
  let show;
  switch (month) {
    case "1":
    case "3":
    case "5":
    case "7":
    case "8":
    case "10":
    case "12":
      show = `Tháng ${month} có 31 ngày`;
      break;
    case "2":
        show = `Tháng ${month} có 28 hoặc 29 ngày`;
      break;
    case "4":
    case "6":
    case "9":
    case "11":
      show = `Tháng ${month} có 30 ngày`;
      break;
  }
  resultShow.innerHTML = show;
});
