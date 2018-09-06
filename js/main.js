var send = document.querySelector(".footer-chat__field");

var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("send");
  } catch (err) {
    isStorageSupport = false;
  } 

document.addEventListener("submit", function (evt) {
    if (!send.value) {
      evt.preventDefault();
      console.log("Введите сообщение");
    } else {
      localStorage.setItem("send", send.value);
    }
  });