"use strict";

function changeArea(id) {
  const element = document.getElementById(id);
  if (element.classList.contains("lightYellow")) {
    element.classList.remove("lightYellow");
    element.classList.add("transparent");
  } else {
    element.classList.remove("transparent");
    element.classList.add("lightYellow");
  }
}

function changeWorker(element) {
  if (element.classList.contains("blue")) {
    element.classList.remove("blue");
    element.classList.add("transparent");
    localStorage.removeItem(element.id);
  } else {
    element.classList.remove("transparent");
    element.classList.add("blue");
    localStorage.setItem(element.id, element.innerText);
  }
}

window.onload = function () {
  const areaButtons = document.querySelectorAll(".area-up-box, .area-down-box");
  const workerButtons = document.querySelectorAll(".worker-button");

  areaButtons.forEach((button) => {
    const storedStatus = localStorage.getItem(button.id);
    if (storedStatus) {
      button.classList.add(storedStatus);
    }
    button.addEventListener("click", function () {
      changeArea(button.id);
    });
  });

  workerButtons.forEach((button) => {
    const storedText = localStorage.getItem(button.id);
    if (storedText) {
      button.classList.add("blue");
      button.innerText = storedText;
    }
    button.addEventListener("click", function () {
      changeWorker(button);
    });
  });
};

document.getElementById("save").addEventListener("click", save);

let selectedWorkers = [];

function save() {
  ["areaA", "areaB", "areaC", "areaD", "areaE", "areaF"].forEach((id) => {
    const element = document.getElementById(id);
    if (element.classList.contains("lightYellow") {
      localStorage.setItem(id, element.value);
    } else {
      localStorage.removeItem(id);
    }
    element.classList.remove("lightYellow", "transparent");
  });
  
  ["workerName1", "workerName2", "workerName3", "workerName4", "workerName5", "workerName6"].forEach((id) => {
    const element = document.getElementById(id);
    if (element.classList.contains("blue")) {
      localStorage.setItem(id, element.value);
    } else {
      localStorage.removeItem(id);
    }
    element.classList.remove("blue", "lightYellow", "transparent");
  });

  const supervisor = document.getElementById("task-supervisor").value;
  const taskName = document.getElementById("task-name").value;
  const taskContent = document.getElementById("task-content").value;
  const taskCapacity = document.getElementById("task-capacity").value;

  localStorage.setItem("task-supervisor", supervisor);
  localStorage.setItem("task-name", taskName);
  localStorage.setItem("task-content", taskContent);
  localStorage.setItem("task-capacity", taskCapacity);
  localStorage.setItem("selectedWorkers", JSON.stringify(selectedWorkers));

  document.getElementById("task-supervisor").value = "";
  document.getElementById("task-name").value = "";
  document.getElementById("task-content").value = "";
  document.getElementById("task-capacity").value = "";
  

  alert("状態と作業情報が保存され、初期化されました。");
}
