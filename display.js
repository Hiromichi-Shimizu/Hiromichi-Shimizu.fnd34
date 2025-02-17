"use strict";

document.getElementById("in").addEventListener("click", function () {
  document.getElementById("inName").style.display = "block";
});

document.getElementById("inSend").addEventListener("click", searchName);

function searchName() {
  let name = document.getElementById("inputInName").value;
  if (!name) {
    return document.getElementById("inName").style.display = "none";
  }

  let workerNames = document.querySelectorAll(".worker-name > div");
  let inName = false;
  let index = 0;

  for (let i = 1; i < workerNames.length; i++) {
    if (workerNames[i].textContent === name) {
      inName = true;
      index = i;
    }
  }

  if (inName) {
    start = new Date();
    inWorkerStatus(index);
    startTimer(index);
  } else {
    alert(`${name} さんは入場許可されていません`);
  }
  document.getElementById("inName").style.display = "none";
  document.getElementById("inputInName").value = "";
}

function inWorkerStatus(index) {
  const workerName = document.getElementById(`workerName${index}`);
  const workerStatus = document.getElementById(`workerStatus${index}`);
  const workerTime = document.getElementById(`workerTime${index}`);
  workerStatus.textContent = "入場中";
  workerStatus.style.backgroundColor = "rgba(10, 246, 65, 0.936)";
  workerName.style.backgroundColor = "rgba(10, 246, 65, 0.936)";
  workerTime.style.backgroundColor = "rgba(10, 246, 65, 0.936)";
}

window.onload = function () {
  ["workerName1", "workerName2", "workerName3", "workerName4", "workerName5", "workerName6"].forEach((id) => {
    let index = id.slice(-1);
    const workerName = document.getElementById(id);
    const workerStatus = document.getElementById(`workerStatus${index}`);
    const workerTime = document.getElementById(`workerTime${index}`);
    const localData = localStorage.getItem(id);

    if (localData) {
      workerName.innerText = localData;
      workerStatus.innerText = "待機";
      workerTime.innerText = "00:00:00";
    } else {
      workerName.style.display = "none";
    }
  });

  ["areaA", "areaB", "areaC", "areaD", "areaE", "areaF"].forEach(id => {
    const areaColor = localStorage.getItem(id);
    if (areaColor) {
      const element = document.getElementById(id);
      if (areaColor === 'lightYellow') {
        element.classList.remove("transparent");
        element.classList.add("lightYellow");
      } else {
        element.classList.remove("lightYellow");
        element.classList.add("transparent");
      }
    }
  });

  document.getElementById("task-supervisor").textContent = localStorage.getItem("task-supervisor");
  document.getElementById("task-name").textContent = localStorage.getItem("task-name");
  document.getElementById("task-content").textContent = localStorage.getItem("task-content");
  document.getElementById("task-capacity").textContent = localStorage.getItem("task-capacity");
};




let start;
let hour = 0;
let min = 0;
let sec = 0;
let now = 0;
let datet = 0;

function startTimer(index) {
  now = new Date();
  datet = parseInt((now.getTime() - start.getTime()) / 1000);
  hour = parseInt(datet / 3600);
  min = parseInt((datet / 60) % 60);
  sec = datet % 60;
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  let timer1 = `${hour}:${min}:${sec}`;
  document.getElementById(`workerTime${index}`).innerText = timer1;

  if (datet > 30) {
    document.getElementById(`workerTime${index}`).style.backgroundColor = "red";
    document.getElementById(`workerName${index}`).style.backgroundColor = "red";
    document.getElementById(`workerStatus${index}`).style.backgroundColor = "red";
  }
  setTimeout(() => startTimer(index), 1000);
}


document.getElementById("out").addEventListener("click", function () {
  document.getElementById("outName").style.display = "block";
});

document.getElementById("outSend").addEventListener("click", outSearchName);

function outSearchName() {
  let name = document.getElementById("inputOutName").value;
  if (!name) {
    return document.getElementById("outName").style.display = "none";
  }
  let workerNames = document.querySelectorAll(".worker-name > div");
  let outName = false;
  let index = 0;

  for (let i = 1; i < workerNames.length; i++) {
    if (workerNames[i].textContent === name) {
      outName = true;
      index = i;
    }
  }

  if (outName) {
    start = new Date();
    outWorkerStatus(index);
    stopTimer(index);
  } else {
    alert(`${name} さんは入場許可されていません`);
  }

  document.getElementById("outName").style.display = "none";
  document.getElementById("inputOutName").value = "";
}

function outWorkerStatus(index) {
  let status = document.getElementById(`workerStatus${index}`);
  status.textContent = "退出";
}

function stopTimer(index) {
  document.getElementById(`workerTime${index}`).textContent = "00:00:00";
  document.getElementById(`workerTime${index}`).style.backgroundColor = "";
  document.getElementById(`workerName${index}`).style.backgroundColor = "";
  document.getElementById(`workerStatus${index}`).style.backgroundColor = "";
}
