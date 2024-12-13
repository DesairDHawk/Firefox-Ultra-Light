userChrome.import("/userChrome/my_script_name.uc.js", "UChrm");
userChrome.import("/userChrome/my_other_script_name.uc.js", "UChrm");

// Function to handle navbar modifications
function modifyNavBar() {
    const navBar = document.getElementById("nav-bar");
    if (navBar) {
        // Remove overflow attributes
        ["overflowable", "default-overflowbutton", "default-overflowtarget", "default-overflowpanel", "addon-webext-overflowbutton", "addon-webext-overflowtarget"].forEach((attr) => navBar.removeAttribute(attr));

        // Hide overflow button
        const overflowButton = document.getElementById("nav-bar-overflow-button");
        if (overflowButton) {
            overflowButton.style.display = "none";
        }

        // Show hidden buttons
        const hiddenButtons = document.querySelectorAll(".toolbarbutton-1[overflowedItem]");
        hiddenButtons.forEach((button) => {
            button.removeAttribute("overflowedItem");
            button.style.visibility = "visible";
            button.style.display = "-moz-box";
        });
    }
}

// Function to update sidebar header height
function updateSidebarHeaderHeight() {
    const sidebarBody = document.getElementById("sidebar-box");
    const navigatorToolbox = document.getElementById("navigator-toolbox");
    const mainBrowser = document.querySelector("hbox#browser");

    const computedHeight = window.screen.height - navigatorToolbox.clientHeight;

    if (mainBrowser) {
        mainBrowser.style.backgroundSize = `auto ${computedHeight}px`;
        mainBrowser.style.backgroundPositionY = `top ${navigatorToolbox.clientHeight}px`;
    }
    if (sidebarBody && navigatorToolbox) {
        sidebarBody.style.marginTop = `${navigatorToolbox.clientHeight + 10}px`;
        sidebarBody.style.maxHeight = `calc(100% - ${navigatorToolbox.clientHeight + 20}px)`;

        let beforeElement = mainBrowser.querySelector(".sidebar-before");
        if (!beforeElement) {
            let beforeElement = document.createElement("div");
            beforeElement.className = "sidebar-before";
            mainBrowser.insertBefore(beforeElement, sidebarBody);
        }

        let afterElement = mainBrowser.querySelector(".sidebar-after");
        if (!afterElement) {
            let afterElement = document.createElement("div");
            afterElement.className = "sidebar-after";
            sidebarBody.insertAdjacentElement("afterend", afterElement);
        }

        if (beforeElement != null) {
            afterElement.style.backgroundSize = `auto ${computedHeight}px`;
            beforeElement.style.backgroundSize = `auto ${computedHeight}px`;
            beforeElement.style.backgroundPositionY = `top`;
            beforeElement.style.top = `${navigatorToolbox.clientHeight}px`;
        }

        // const style = document.createElement("style");
        // style.innerHTML = `
        // #sidebar-box::before,
        // #sidebar-box::after {
        //     background-size: auto ${computedHeight}px;
        // }
        // #sidebar-box::before{
        //     background-position-y: top;
        // }
        // `;
        // document.head.appendChild(style);
    }
}

function tryUpdateSidebarHeaderHeight(retries = 10) {
    if (document.getElementById("browser")) {
        updateSidebarHeaderHeight();
    } else if (retries > 0) {
        // Пробуем снова через 100 мс
        setTimeout(() => tryUpdateSidebarHeaderHeight(retries - 1), 200);
    } else {
        console.error("Элемент #browser не найден.");
    }
}

function toggleNavigatorToolboxPosition() {
    const toolbox = document.getElementById("navigator-toolbox");
    const sidebaBox = document.getElementById("sidebar-box");
    const personalToolbar = document.getElementById("PersonalToolbar");
    const navBarCustomizationTarget = document.getElementById("nav-bar-customization-target");
    const closeButton = document.getElementById("close-window-button_nanpuyue_com-browser-action");
    const minimizeButton = document.getElementById("minimize-window-button_nanpuyue_com-browser-action");
    const body = document.querySelector("body");
    const urlbarContainer = document.getElementById("urlbar-container");

    // Массив разрешённых кнопок
    const allowedButtons = ["back-button", "stop-reload-button", "urlbar-container", "close-window-button_nanpuyue_com-browser-action", "minimize-window-button_nanpuyue_com-browser-action"];

    if (toolbox) {
        if (toolbox.style.position === "unset") {
            // Открыто

            body.style.setProperty("flex-direction", "column", "important");
            toolbox.style.position = "absolute";
            sidebaBox.removeAttribute("hidden");
            sidebaBox.setAttribute("checked", "true");
            BookmarkingUI.toggleBookmarksToolbar();
            personalToolbar.style.display = "flex";

            // Устанавливаем display: flex для разрешённых элементов
            for (const child of navBarCustomizationTarget.children) {
                if (!allowedButtons.includes(child.id)) {
                    child.style.display = "flex"; // Обязательно оставить видимыми
                }
            }

            // Удаляем toolbarspring, если он существует
            const customSpring = document.getElementById("custom-spring");
            if (customSpring) {
                navBarCustomizationTarget.removeChild(customSpring);
            }

            toolbox.style.marginTop = "unset";
            toolbox.style.height = "auto";
        } else {
            // Закрыто
            body.style.setProperty("flex-direction", "row", "important");
            toolbox.style.position = "unset";
            toolbox.style.width = "auto";
            sidebaBox.removeAttribute("checked");
            sidebaBox.setAttribute("hidden", "true");
            personalToolbar.style.display = "none";
            BookmarkingUI.toggleBookmarksToolbar();

            minimizeButton.style.marginRight = "0px !important";

            // Создаём toolbarspring, если его нет
            let customSpring = document.getElementById("custom-spring");
            if (!customSpring) {
                customSpring = document.createElement("toolbarspring");
                customSpring.className = "chromeclass-toolbar-additional";
                customSpring.id = "custom-spring";
                customSpring.setAttribute("cui-areatype", "toolbar");
                navBarCustomizationTarget.insertBefore(customSpring, minimizeButton);
            }

            // Скрываем все дочерние элементы, кроме разрешённых
            for (const child of navBarCustomizationTarget.children) {
                if (!allowedButtons.includes(child.id)) {
                    child.style.display = "none"; // Скрываем неразрешённые элементы
                }
            }

            toolbox.style.marginTop = "-5px";
            toolbox.style.height = "25px";
        }
    }
}

// Event listener for load event
window.addEventListener("load", () => {
    modifyNavBar();
    tryUpdateSidebarHeaderHeight();

    // Observers for resizing
    const navigatorToolboxObserver = new ResizeObserver(updateSidebarHeaderHeight);
    navigatorToolboxObserver.observe(document.getElementById("navigator-toolbox"));

    // Ищем элементы на странице
    const panelUIButton = document.getElementById("PanelUI-button");
    const targetContainer = document.getElementById("nav-bar-customization-target");
    const minimizeWindowButton = document.getElementById("minimize-window-button_nanpuyue_com-browser-action");

    // Проверяем, что все элементы найдены
    if (panelUIButton && targetContainer && minimizeWindowButton) {
        // Перемещаем кнопку #PanelUI-button после #close-window-button_nanpuyue_com-browser-action
        targetContainer.insertBefore(panelUIButton, minimizeWindowButton.nextSibling);
    }

    document.getElementById("close-window-button_nanpuyue_com-browser-action").onclick = () => {
        const sidebarBox = document.getElementById("sidebar-box");
        if (sidebarBox.hasAttribute("hidden")) {
            toggleNavigatorToolboxPosition();
        }
    };

    // Получаем элемент #urlbar-container
    const urlbarContainer = document.getElementById("urlbar-container");
    let placeholder = null;
    const urlbarInput = document.getElementById("urlbar-input"); // Поле ввода поисковой строки
    const urlbarSame = document.getElementById("urlbar");
    const urlbarView = document.querySelector(".urlbar-input-container");
    const navBar = document.getElementById("nav-bar");
    // Назначаем обработчики событий focus и blur для поля ввода поисковой строки
    urlbarSame.style.visibility = "hidden";

    let isClicking = false;

    urlbarContainer.onclick = () => {
        if (isClicking) return;
        isClicking = true;

        urlbarSame.style.visibility = "unset";
        urlbarView.click();
        setMinWidth();

        isClicking = false;
    };

    urlbarInput.addEventListener("focus", setMinWidth);
    urlbarInput.addEventListener("blur", removeMinWidth);

    // Функция для установки min-width
    function setMinWidth() {
        const rect = urlbar.getBoundingClientRect();

        urlbarContainer.style.position = "absolute";

        urlbarContainer.style.top = `${rect.top + window.scrollY - 22}px`;
        urlbarContainer.style.left = `${rect.left + window.scrollX - 8}px`;

        if (!placeholder) {
            placeholder = document.createElement("div");
            placeholder.style.width = `28px`;
            placeholder.style.height = `28px`;
            placeholder.style.flexShrink = "0";
            urlbarContainer.parentNode.insertBefore(placeholder, urlbarContainer);
        }

        urlbarContainer.style.minWidth = "440px";
        urlbarContainer.style.maxWidth = "540px";
        urlbarSame.style.marginLeft = "5px";
    }

    // Функция для сброса min-width
    function removeMinWidth() {
        urlbarContainer.style.position = "relative";

        urlbarContainer.style.top = "unset";
        urlbarContainer.style.left = "unset";

        if (placeholder) {
            placeholder.remove();
            placeholder = null;
        }

        urlbarContainer.style.minWidth = "";
        urlbarContainer.style.maxWidth = "28px";
        urlbarSame.style.marginLeft = "";
        urlbarSame.style.visibility = "hidden";
    }

    function checkAndRemoveMinWidth() {
        if (!navBar.hasAttribute("urlbar-exceeds-toolbar-bounds")) {
            removeMinWidth();
        }
    }
    checkAndRemoveMinWidth();
    const observerCheckRem = new MutationObserver(checkAndRemoveMinWidth);
    observerCheckRem.observe(navBar, { attributes: true });

    function updateSidebarHeight() {
        const sidebb = document.querySelector('#sidebar-box[sidebarcommand="treestyletab_piro_sakura_ne_jp-sidebar-action"]');
        const tabContainer = document.getElementById("tabbrowser-arrowscrollbox");
        const navigatorToolbox = document.getElementById("navigator-toolbox");
        const maxAvailibleHeight = window.screen.height - navigatorToolbox.scrollHeight - 20;

        let tabsToHeight = 0;

        if (sidebb && tabContainer) {
            // Проверяем, что элементы существуют
            tabsToHeight = (tabContainer.childNodes.length - 1) * 36 + 6;
            if (tabsToHeight > maxAvailibleHeight) {
                tabsToHeight = maxAvailibleHeight;
            }
            sidebb.style.height = `${tabsToHeight}px`;
        }

        const beforeElement = document.querySelector(".sidebar-before");
        const afterElement = document.querySelector(".sidebar-after");
        const afterHeight = tabsToHeight + 10;

        let timeoutHover;

        if (!sidebb.hasEventListener) {
            sidebb.addEventListener("mouseenter", () => {
                clearTimeout(timeoutHover);
                beforeElement.classList.add("hovered");
                afterElement.classList.add("hovered");
            });

            sidebb.addEventListener("mouseleave", () => {
                timeoutHover = setTimeout(() => {
                    beforeElement.classList.remove("hovered");
                    afterElement.classList.remove("hovered");
                }, 280);
            });

            sidebb.hasEventListener = true;
        }
        afterElement.style.top = `${navigatorToolbox.scrollHeight + afterHeight}px`;
        afterElement.style.backgroundPositionY = `top -${afterHeight}px`;
    }

    // Устанавливаем начальную высоту с небольшой задержкой
    setTimeout(updateSidebarHeight, 500);

    // Наблюдаем за изменением количества вкладок
    const observer = new MutationObserver(updateSidebarHeight);

    const tabContainer = document.getElementById("tabbrowser-arrowscrollbox");
    if (tabContainer) {
        // Убедимся, что контейнер вкладок существует перед наблюдением
        observer.observe(tabContainer, { childList: true });
    } else {
        console.error("Контейнер вкладок не найден.");
    }
});

// Функция для переключения flexDirection у body
function toggleBodyFlexDirection() {
    const body = document.querySelector("body");

    if (body) {
        // Проверяем текущее значение flexDirection и переключаем его
        const currentDirection = window.getComputedStyle(body).getPropertyValue("flex-direction");

        if (currentDirection === "column") {
            body.style.setProperty("flex-direction", "row", "important");
        } else {
            body.style.setProperty("flex-direction", "column", "important");
        }
    }
}

// Обработчик для нажатия клавиши F1
window.addEventListener("keydown", (event) => {
    if (event.key === "F1") {
        // Останавливаем стандартное поведение F1
        event.preventDefault();
        // Вызываем функцию переключения позиции navigator-toolbox
        toggleNavigatorToolboxPosition();
        // Вызываем функцию переключения flexDirection у body
        toggleBodyFlexDirection();
    }
});
