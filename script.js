document.querySelector('.tab-group').addEventListener("click", setTab);

function setTab(event) {
    event.preventDefault();
    let cur = document.querySelector('.our-services-tab[data-selected="yes"]');
    if (cur) {
        cur.setAttribute('data-selected', 'no');
        document.querySelector(`.our-services-par[data-par=${cur.dataset.id}]`).classList.add('hidden');
    }
    let newTab = event.target.closest('.our-services-tab');
    document.querySelector(`.our-services-par[data-par=${newTab.dataset.id}]`).classList.remove('hidden');
    newTab.dataset.selected = 'yes';

}