import { Collapse } from "bootstrap";

document.addEventListener("DOMContentLoaded", function () {
    let menuItems = document.querySelectorAll(".collapse");

    menuItems.forEach(item => {
        item.addEventListener("show.bs.collapse", function () {
            let niveauActuel = getNiveau(item.id);
            let parentMenu = item.parentElement.closest(".collapse"); // Trouver le parent direct

            if (niveauActuel === 1) {
                closeOtherMenus(menuItems, niveauActuel, item);
            } else if (parentMenu) {
                closeOtherMenus(parentMenu.querySelectorAll(".collapse.show"), niveauActuel, item);
            }

            updateIcon(item, true);
        });

        item.addEventListener("hide.bs.collapse", function () {
            updateIcon(item, false);
        });
    });

    function closeOtherMenus(menuList, niveau, currentItem) {
        menuList.forEach(sibling => {
            if (sibling !== currentItem && getNiveau(sibling.id) === niveau) {
                let instance = Collapse.getInstance(sibling) || new Collapse(sibling, { toggle: false });
                instance.hide();
                updateIcon(sibling, false);
            }
        });
    }

    function updateIcon(element, isOpen) {
        let toggleButton = document.querySelector(`[href="#${element.id}"]`);
        if (toggleButton) {
            let icon = toggleButton.querySelector("i.fa-chevron-right, i.fa-chevron-down");
            if (icon) {
                icon.classList.toggle("fa-chevron-right", !isOpen);
                icon.classList.toggle("fa-chevron-down", isOpen);
            }
        }
    }

    function getNiveau(id) {
        let match = id.match(/submenu(\d+)_/);
        return match ? parseInt(match[1], 10) : 1;
    }
});
