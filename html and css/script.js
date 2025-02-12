const modifaer = {
  AccordionItemOpen: 'accordion__item-open',
  AccordionItemOpened: 'accordion__item-open'
}

const elsTabsLink = document.querySelectorAll('.js-tabs-link');
const elsTabsItem = document.querySelectorAll('.tabs-item');
const elsTabsPanel = document.querySelectorAll('.tab-panel')

const elsAccordionItemToggler = document.querySelectorAll('.accordion__item-toggler')
const elsAccordionItem = document.querySelectorAll('.accordion__item')



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

function closeAccordionItems () {
  elsAccordionItem.forEach(function (elAccordionItem) {
    elAccordionItem.classList.remove(modifaer.AccordionItemOpen)
  })
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



elsAccordionItemToggler.forEach(function (elAccordionItemToggler) {
  elAccordionItemToggler.addEventListener('click', function () {
    closeAccordionItems();

    elAccordionItemToggler.closest('.accordion__item').classList.add(modifaer.AccordionItemOpened);
  });
});
