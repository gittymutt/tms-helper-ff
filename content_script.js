(function() {


  browser.runtime.onMessage.addListener((message) => {
    console.log("the message: " + message);
    if (message.command === "makePresent") {
      console.log("make it present!");
      Array.from(document.querySelectorAll('[name*="lstAttendAbsent"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}});
    } else if (message.command === "campusAssign") {
      console.log("assign campus");
      Array.from(document.querySelectorAll('[name*="dTutorialCampus"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}});
      Array.from(document.querySelectorAll('[name*="dAssign"]')).map((el)=>{ if (!el.disabled) {el.selectedIndex=2}})
    }
  });

})();
