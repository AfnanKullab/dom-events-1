const tabs = document.querySelectorAll('.tab'); // nodelist
const tabsContents = document.querySelectorAll('.content'); // nodelist

tabs.forEach((tab, index, tabs) => {
    tab.addEventListener('click', function() {
        tab.classList.remove('active'); // to remove active from all tabs
        
        tab.classList.add('active'); // add active to clicked tab
        tabsContents.forEach((content, tabsContents) => {
            content.classList.remove('active'); //to remove/ hide contents for other tabs
        });

        tabsContents[index].classList.add('active'); // add show the content for clicked tab
    });
});