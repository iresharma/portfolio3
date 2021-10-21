function fnBrowserDetect() {
  let userAgent = navigator.userAgent;
  let browserName;

  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = "chrome";
  } else if (userAgent.match(/firefox|fxios/i)) {
    browserName = "firefox";
  } else if (userAgent.match(/safari/i)) {
    browserName = "safari";
  } else if (userAgent.match(/opr\//i)) {
    browserName = "opera";
  } else if (userAgent.match(/edg/i)) {
    browserName = "edge";
  } else {
    browserName = "No browser detection";
  }

  if (browserName != "safari") {
    document.querySelector(".nav__logo").classList.add("nav__logo--gradient");
    document
      .querySelector(".home__title span")
      .classList.add("home__title--name");
    var buttons = document.getElementsByClassName("section__title"),
      len = buttons !== null ? buttons.length : 0,
      i = 0;
    for (i; i < len; i++) {
      buttons[i].className += " nav__logo--gradient";
    }
  }
  console.log(browserName);
}

fnBrowserDetect();
