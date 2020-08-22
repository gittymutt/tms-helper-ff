
console.log('ran script.js');



function listenForClicks() {

  document.addEventListener("click", (e) => {

    function makePresent(tabs) {
      console.log("made present");
        browser.tabs.sendMessage(tabs[0].id, {
          command: "makePresent"
        });
    }

    function campusAssign(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "campusAssign",
        });
    }

    function fillIn(tabs) {
      console.log("textare has in it:" + document.getElementsByClassName('textarea')[0].value);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "fillIn",
          textBoxContent: document.getElementsByClassName('textarea')[0].value

        });
    }

    function enableSelect(tabs) {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "enableSelect"
        });
    }

    function reportError(error) {
      console.error(`Could not do it: ${error}`);
    }


    if (e.target.classList.contains("make-present")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(makePresent)
        .catch(reportError);
    }
    else if (e.target.classList.contains("campus-assign")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(campusAssign)
        .catch(reportError);
    }
    else if (e.target.classList.contains("fill-in")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(fillIn)
        .catch(reportError);
    }
    else if (e.target.classList.contains("enable-select")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(enableSelect)
        .catch(reportError);
    }
  });
}

function reportExecuteScriptError(error) {
  console.error(`Failed to execute TMSHelper content script: ${error.message}`);
}

browser.tabs.executeScript({file: "../content_script.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
