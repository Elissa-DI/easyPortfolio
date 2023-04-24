function showTab(tabName) {
    const tabContents = document.getElementsByClassName('tab-content');
    for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].classList.remove('active');
    }

    document.getElementById(tabName).classList.add('active');
  }