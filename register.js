"use strict";

const changeArea = function(event) {
  const element = event.target;
  if (element.classList.contains("lightYellow")) {
    element.classList.remove("lightYellow");
    element.classList.add("transparent");
  } else {
    element.classList.remove("transparent");
    element.classList.add("lightYellow");
  }
}

document.querySelectorAll(".area-up-box").forEach((element) => element.addEventListener("click", changeArea));
document.querySelectorAll(".area-down-box").forEach((element) => element.addEventListener("click", changeArea));

const changeWorker = function(event){
  const element = event.target;
  if (element.classList.contains("blue")) {
    element.classList.remove("blue");
    element.classList.add("transparent");
  } else {
    element.classList.remove("transparent");
    element.classList.add("blue");
  }
}

document.querySelectorAll(".worker-button").forEach((element) => element.addEventListener("click", changeWorker));

const save = function() {
  ["areaA", "areaB", "areaC", "areaD", "areaE", "areaF"].forEach((id) => {
    const element = document.getElementById(id);
    if (element.classList.contains("lightYellow")) {
      localStorage.setItem(id, "lightYellow");
    } else {
      localStorage.setItem(id, "transparent");
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
    element.classList.remove("blue", "transparent");
  });

  const supervisor = document.getElementById("task-supervisor").value;
  const taskName = document.getElementById("task-name").value;
  const taskContent = document.getElementById("task-content").value;
  const taskCapacity = document.getElementById("task-capacity").value;

  localStorage.setItem("task-supervisor", supervisor);
  localStorage.setItem("task-name", taskName);
  localStorage.setItem("task-content", taskContent);
  localStorage.setItem("task-capacity", taskCapacity);

  document.getElementById("task-supervisor").value = "";
  document.getElementById("task-name").value = "";
  document.getElementById("task-content").value = "";
  document.getElementById("task-capacity").value = "";
  
  alert("状態と作業情報が保存され、初期化されました。");
}

document.getElementById("save").addEventListener("click", save);
