function toggle(e) {
    if (e.checked) {
      document.getElementsByClassName('amount')[0].innerHTML =
        "$19.99";

      document.getElementsByClassName('amount2')[0].innerHTML =
        "$24.99";

      document.getElementsByClassName('amount3')[0].innerHTML =
        "$39.99";
    } else {
      document.getElementsByClassName('amount')[0].innerHTML =
        "$199.99";

      document.getElementsByClassName('amount2')[0].innerHTML =
        "$249.99";

      document.getElementsByClassName('amount3')[0].innerHTML =
        "$399.99";
    }
  }