const elsTabsLink = document.querySelectorAll('.js-tabs-link');
const elsTabsItem = document.querySelectorAll('.tabs-item');
const elsTabsPanel = document.querySelectorAll('.tab-panel')


function deactivateTabItems () {
  elsTabsItem.forEach(function (elTabsItem) {
    elTabsItem.classList.remove('tabs-item--active');
  });
}


function deactivateTabPanel () {
  elsTabsPanel.forEach(function (elTabsPanel) {
    elTabsPanel.classList.remove('tab-panel-avtive');
  });
}

elsTabsLink.forEach(function (elTabLink) {
  elTabLink.addEventListener('click', function (evt) {
    // prevent page move
    evt.preventDefault();


    deactivateTabItems();

    // add active class
    elTabLink.parentElement.classList.add('tabs-item--active');
    // Remove active class tabs-panel elements
    deactivateTabPanel();

    // SHow active panel




    // const elTargetPanel = document.querySelector(`#${elTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elTabLink.dataset.tabTarget);

    elTargetPanel.classList.add('tab-panel-avtive');


    console.log(elTabLink.dataset.tabTarget);
  });
});
