(function() {

const shadeColor = 'lightblue';

  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  function doStuff (message) {
    if (message.command === "makePresent") {
      Array.from(document.querySelectorAll('[name*="lstAttendAbsent"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}});
    } else if (message.command === "campusAssign") {
      Array.from(document.querySelectorAll('[name*="dTutorialCampus"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}});
      Array.from(document.querySelectorAll('[name*="dAssign"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}})
    } else if (message.command === "fillIn") {
      let txtAreaCollection = document.querySelectorAll('textarea[name*=txtComment]');
      for (let i = 0;i<txtAreaCollection.length;i++) {
        if (txtAreaCollection[i].style.backgroundColor === shadeColor) {
          let returnChar = txtAreaCollection[i].value.length === 0 ? "" : "\n";
          txtAreaCollection[i].value += returnChar + message.textBoxContent;
        }
      }
    }
    else if (message.command === "enableSelect") {
      var txtAreaCollection = document.querySelectorAll('textarea[name*=txtComment]');
      for (let i = 0;i<txtAreaCollection.length;i++) {
        txtAreaCollection[i].style.borderColor = shadeColor;
        txtAreaCollection[i].style.borderWidth = 'medium';
        txtAreaCollection[i].style.borderStyle = 'dotted';
      }

      for (let i = 0;i<txtAreaCollection.length;i++) {txtAreaCollection[i].addEventListener("click",
      function (e) {
        if (e.target.style.backgroundColor != shadeColor)
          {e.target.style.backgroundColor = shadeColor;}
          else {e.target.style.backgroundColor = 'white';};
        }
      )};
    }
  }

browser.runtime.onMessage.addListener(doStuff);
})();
