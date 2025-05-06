const { app, BrowserWindow } = require("electron");
const path = require("path");
var kill = require("tree-kill");
const { spawn } = require("child_process");

let window;
console.log(app.getAppPath());

function createWindow() {
  window = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

  const jarPath = path.join(__dirname, "student-portal-api-0.0.1.jar");
  const child = spawn("java", ["-jar", jarPath]);
  window.loadURL(`file://${__dirname}/html/student.html`);

  window.on("closed", function () {
    kill(child.pid);
    window = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (window === null) {
    createWindow();
  }
});
