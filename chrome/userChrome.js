userChrome.import("/userChrome/my_script_name.uc.js", "UChrm");
userChrome.import("/userChrome/my_other_script_name.uc.js", "UChrm");

// Function to handle navbar modifications
function modifyNavBar() {
    const navBar = document.getElementById("nav-bar");
    const urlbar = document.getElementById('urlbar');
    const ulbarInput = document.querySelector('.urlbar-input-container');
    const urlbarSearch = document.querySelector('.urlbar-searchmode-and-input-box-container');
    if (navBar) {
        // Remove overflow attributes
        ["overflowable", "default-overflowbutton", "default-overflowtarget", "default-overflowpanel", "addon-webext-overflowbutton", "addon-webext-overflowtarget"].forEach(attr => navBar.removeAttribute(attr));

        // Hide overflow button
        const overflowButton = document.getElementById("nav-bar-overflow-button");
        if (overflowButton) {
            overflowButton.style.display = "none";
        }

        // Show hidden buttons
        const hiddenButtons = document.querySelectorAll(".toolbarbutton-1[overflowedItem]");
        hiddenButtons.forEach(button => {
            button.removeAttribute("overflowedItem");
            button.style.visibility = "visible";
            button.style.display = "-moz-box";
        });
    }
    urlbar.insertBefore(urlbarSearch, ulbarInput);
}

// Function to update sidebar header height
function updateSidebarHeaderHeight() {
    const sidebarHeader = document.getElementById("sidebar-header");
    const navigatorToolbox = document.getElementById("navigator-toolbox");

    if (sidebarHeader && navigatorToolbox) {
        sidebarHeader.style.height = `${navigatorToolbox.clientHeight}px`;
    }
}

// Function to update navigator toolbox width
function updateNavigatorToolboxWidth() {
    const navigatorToolbox = document.getElementById("navigator-toolbox");
    const sidebarBox = document.getElementById("sidebar-box");
    const minimizeWindowButton = document.getElementById("minimize-window-button_nanpuyue_com-browser-action");

    if (navigatorToolbox && sidebarBox) {
        navigatorToolbox.style.width = `${sidebarBox.clientWidth - 1}px`;
        minimizeWindowButton.style.marginRight = `${Math.abs(sidebarBox.clientWidth - 57)}px`;
        minimizeWindowButton.style.marginLeft = `0px`;
    }
}

function toggleNavigatorToolboxPosition() {
    const toolbox = document.getElementById('navigator-toolbox');
    const sidebaBox = document.getElementById('sidebar-box');
    const personalToolbar = document.getElementById('PersonalToolbar');
    const navBarCustomizationTarget = document.getElementById('nav-bar-customization-target');
    const closeButton = document.getElementById('close-window-button_nanpuyue_com-browser-action');
    const minimizeButton = document.getElementById('minimize-window-button_nanpuyue_com-browser-action');
    const body = document.querySelector('body');
    const urlbarContainer = document.getElementById('urlbar-container');

    // Массив разрешённых кнопок
    const allowedButtons = [
        'back-button',
        'stop-reload-button', 
        'urlbar-container', 
        'close-window-button_nanpuyue_com-browser-action', 
        'minimize-window-button_nanpuyue_com-browser-action'
    ];

    if (toolbox) {
        if (toolbox.style.position === 'unset') {
            // Открыто


            body.style.setProperty('flex-direction', 'column', 'important');
            toolbox.style.position = 'absolute';
            sidebaBox.removeAttribute('hidden');
            sidebaBox.setAttribute('checked', 'true');
            BookmarkingUI.toggleBookmarksToolbar();
            personalToolbar.style.display = 'flex';

            // // Перемещаем кнопки в начало #nav-bar-customization-target
            // if (closeButton && minimizeButton && navBarCustomizationTarget) {
            //     navBarCustomizationTarget.insertBefore(minimizeButton, navBarCustomizationTarget.firstChild);
            //     navBarCustomizationTarget.insertBefore(closeButton, navBarCustomizationTarget.firstChild);
            // }

            // Устанавливаем display: flex для разрешённых элементов
            for (const child of navBarCustomizationTarget.children) {
                if (!allowedButtons.includes(child.id)) {
                    child.style.display = 'flex'; // Обязательно оставить видимыми
                }
            }

            // Удаляем toolbarspring, если он существует
            const customSpring = document.getElementById('custom-spring');
            if (customSpring) {
                navBarCustomizationTarget.removeChild(customSpring);
            }
            
            urlbarContainer.style.transform = 'unset';
            // urlbarContainer.style.transformOrigin = 'center';
            urlbarContainer.style.fontSize = '10px'; 

            // urlbar.insertBefore(urlbarSearch, ulbarInput);

            toolbox.style.marginTop = 'unset';
            toolbox.style.height = 'auto';
        } else {
            // Закрыто
            body.style.setProperty('flex-direction', 'row', 'important');
            toolbox.style.position = 'unset';
            toolbox.style.width = 'auto';
            sidebaBox.removeAttribute('checked');
            sidebaBox.setAttribute('hidden', 'true');
            personalToolbar.style.display = 'none';
            BookmarkingUI.toggleBookmarksToolbar();

            // // Перемещаем кнопки в конец #nav-bar-customization-target
            // if (closeButton && minimizeButton && navBarCustomizationTarget) {
            //     navBarCustomizationTarget.appendChild(minimizeButton);
            //     navBarCustomizationTarget.appendChild(closeButton);
            // }

            minimizeButton.style.marginRight = '0px !important';

            // Создаём toolbarspring, если его нет
            let customSpring = document.getElementById('custom-spring');
            if (!customSpring) {
                customSpring = document.createElement('toolbarspring');
                customSpring.className = 'chromeclass-toolbar-additional';
                customSpring.id = 'custom-spring';
                customSpring.setAttribute('cui-areatype', 'toolbar');
                navBarCustomizationTarget.insertBefore(customSpring, minimizeButton);
            }

            // Скрываем все дочерние элементы, кроме разрешённых
            for (const child of navBarCustomizationTarget.children) {
                if (!allowedButtons.includes(child.id)) {
                    child.style.display = 'none'; // Скрываем неразрешённые элементы
                }
            }

            urlbarContainer.style.transform = 'scale(0.7)';
            urlbarContainer.style.transformOrigin = 'left';
            urlbarContainer.style.fontSize = '15px';

            toolbox.style.marginTop = '-5px';
            toolbox.style.height = '25px';
        }
    }
}

// Event listener for load event
window.addEventListener("load", () => {
    modifyNavBar();
    updateSidebarHeaderHeight();
    updateNavigatorToolboxWidth();

    // Observers for resizing
    const navigatorToolboxObserver = new ResizeObserver(updateSidebarHeaderHeight);
    navigatorToolboxObserver.observe(document.getElementById("navigator-toolbox"));

    const sidebarBoxObserver = new ResizeObserver(updateNavigatorToolboxWidth);
    sidebarBoxObserver.observe(document.getElementById("sidebar-box"));

    // Ищем элементы на странице
    const panelUIButton = document.getElementById("PanelUI-button");
    const targetContainer = document.getElementById("nav-bar-customization-target");
    const minimizeWindowButton = document.getElementById("minimize-window-button_nanpuyue_com-browser-action");

    // Проверяем, что все элементы найдены
    if (panelUIButton && targetContainer && minimizeWindowButton) {
        // Перемещаем кнопку #PanelUI-button после #close-window-button_nanpuyue_com-browser-action
        targetContainer.insertBefore(panelUIButton, minimizeWindowButton.nextSibling);
    }

    document.getElementById('close-window-button_nanpuyue_com-browser-action').onclick = () => {
        const sidebarBox = document.getElementById('sidebar-box');
        if (sidebarBox.hasAttribute('hidden')){
            toggleNavigatorToolboxPosition();
        }
    }
});

// Функция для переключения flexDirection у body
function toggleBodyFlexDirection() {
    const body = document.querySelector('body');

    if (body) {
        // Проверяем текущее значение flexDirection и переключаем его
        const currentDirection = window.getComputedStyle(body).getPropertyValue('flex-direction');
        
        if (currentDirection === 'column') {
            body.style.setProperty('flex-direction', 'row', 'important');
        } else {
            body.style.setProperty('flex-direction', 'column', 'important');
        }
    }
}

// Обработчик для нажатия клавиши F1
window.addEventListener('keydown', (event) => {
    if (event.key === 'F1') {
        // Останавливаем стандартное поведение F1
        event.preventDefault();
        // Вызываем функцию переключения позиции navigator-toolbox
        toggleNavigatorToolboxPosition();
        // Вызываем функцию переключения flexDirection у body
        toggleBodyFlexDirection();
    }
});

// Получаем элемент #urlbar-container
const urlbarContainer = document.getElementById('urlbar-container');
const urlbarInput = document.getElementById('urlbar-input'); // Поле ввода поисковой строки

// Функция для установки min-width
function setMinWidth() {
    urlbarContainer.style.minWidth = '440px';
}

// Функция для сброса min-width
function removeMinWidth() {
    urlbarContainer.style.minWidth = '';
}

// Назначаем обработчики событий focus и blur для поля ввода поисковой строки
urlbarInput.addEventListener('focus', setMinWidth);
urlbarInput.addEventListener('blur', removeMinWidth);
