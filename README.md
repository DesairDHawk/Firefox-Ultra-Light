## Стандартная версия
![изображение](https://github.com/user-attachments/assets/8be2aac3-1e11-442f-8740-d8d3b362d95d)

## Версия 2
![изображение](https://github.com/user-attachments/assets/e3c65f9c-be67-4227-9fa2-12c8185f950b)

## Всё что нужно для установки
#### Расширения
Для начала установим расширения Для Firefox:
* [Close Button](https://addons.mozilla.org/ru/firefox/addon/close-the-window/)
* [Minimize Bytton](https://addons.mozilla.org/firefox/addon/minimize-the-window/)
* [uBlock Origin](https://addons.mozilla.org/ru/firefox/addon/ublock-origin/)
* [privacy Badger](https://addons.mozilla.org/ru/firefox/addon/privacy-badger17/)
* [Translate Web Pages](https://addons.mozilla.org/ru/firefox/addon/translate-web-pages-custom/)
* [Tree Style Tab](https://addons.mozilla.org/ru/firefox/addon/tree-style-tab/), для этого расширения, в `настройках`, вставляем этот CSS:
```CSS
tab-item {
  overflow: hidden !important;
  cursor: pointer;
  padding: 1px;
  margin-right: 1px;
}

tab-item::after{
content: attr(data-current-uri);
  color: var(--theme-colors-toolbar_field_text);
  white-space: nowrap;
  padding: 1px 6px 7px;
  margin-top: -6px;
  font-size: 10px;
  mask-image: linear-gradient(to left, transparent 0, black 2em);
}

tab-item tab-label {
  overflow-y: hidden !important;
  white-space: wrap !important;
  display: -webkit-inline-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-top: 7px;
  margin-bottom: 12px;
}

tab-twisty{
  display: none;
}

tab-item-substance .ui{
  max-width: 100%;
}

tab-item tab-favicon{
  margin-left: 0.25rem;
}

tab-item.active{
  background: var(--theme-colors-tab_selected);
  color: var(--theme-colors-toolbar_text);
  border-radius: 4px;
  border: 1px solid var(--theme-colors-tab_line);
  padding: 0;
}

tab-item.active::after{
  color: var(--theme-colors-tab_line);
}

tab-item .background{
  display: none;
}
```

#### (Для 2 версии)
```CSS
:root {
    --tab-size: 34px;
    --timeout-hide: 0.25s;
}

:root.left #tabbar {
    direction: unset !important;
}

#tabbar,
#normal-tabs-container {
    scrollbar-width: none;
}

#tabbar.scrollbar-autohide #normal-tabs-container.overflow tab-item .extra-items-container.indent {
    width: 0 !important;
}

#tabbar {
    border-radius: 9px;
}

tab-item {
    overflow: hidden !important;
    cursor: pointer;
    padding-top: 0px;
    margin: 3px;
    border-radius: 7px;
    max-width: 100%;
    .background {
        display: none;
    }
}

tab-item::after {
    content: attr(data-current-uri);
    color: var(--theme-colors-toolbar_field_text);
    white-space: nowrap;
    font-size: 10px;
    mask-image: linear-gradient(to left, transparent 0, black 2em);
    position: absolute;
    bottom: 4px;
    left: 26px;
    width: 200px;
}

tab-item.active {
    background: var(--theme-colors-tab_selected);
    color: var(--theme-colors-toolbar_text);
    box-shadow: 1px 1px var(--theme-colors-tab_line), 1px -1px var(--theme-colors-tab_line), -1px 1px var(--theme-colors-tab_line), -1px -1px var(--theme-colors-tab_line), 0px 0px 5px var(--theme-colors-tab_line);
}

tab-item.active::after {
    color: var(--theme-colors-tab_line);
}

tab-item-substance {
    margin-left: 0 !important;
    height: auto;
    padding: 0;
    .ui {
        max-width: 100%;
    }
}

.left.sidebar:not(:hover) {
    tab-item {
        transition: max-width 300ms ease-in-out var(--timeout-hide) !important;
        max-width: 50px;
        padding-top: 0px;
    }
    tab-item::after {
        transition: all 300ms ease-in-out var(--timeout-hide) !important;
        opacity: 0;
    }
    tab-item tab-label {
        transition: all 300ms ease-in-out var(--timeout-hide) !important;
        opacity: 0 !important;
    }
    tab-favicon {
        transition: all 300ms ease-in-out var(--timeout-hide) !important;
        transform-origin: -12px 8px;
        transform: scale(1.5);
    }
    .overflow-indicator.end {
        bottom: 0px;
    }
}

.newtab-button {
    display: none;
}

.tab:not(:hover) .closebox {
    visibility: hidden;
}

.tab:hover {
    background: var(--theme-colors-toolbar);
}

.contextual-identity-marker {
    height: var(--tab-size);
    right: 0;
    top: -1px;
    border-radius: 7px;
    width: 100%;
    mask-image: linear-gradient(to top, transparent 0, rgba(0, 0, 0, 0.4) 40px);
}

tab-twisty {
    display: none;
}

tab-favicon {
    margin: 0.7rem 0.1rem 0.7rem 0.5rem;
}

tab-label {
    margin-top: -12px;
}
```

#### Тема
Можно использовать любые темы. На скриншоте используется [Monokai Ryo Ocean](https://addons.mozilla.org/ru/firefox/addon/monokai-ryo-ocean/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search)
#### Настройка браузера
В адресной строке браузера пишем `about:config`, далее в поисковую строку на этой странице вставляем `true` для следующих параметров (если параметр не находит, то создайте его сами):
* `javascript.enabled`
* `toolkit.legacyUserProfileCustomizations.stylesheets`
* `devtools.chrome.enabled`
* `devtools.debugger.remote-enabled`
  
Для `widget.non-native-theme.scrollbar.style` выставлляем значение `2`
#### Конфиг Prefs
Копируем параметры этого конфига и добавляем их **внизу, не заменяя основное содержимое** в файле `C:\Users\...\AppData\Roaming\Mozilla\Firefox\Profiles\...` (где точки - ваш username)

```JS
// Отключаем Pocket
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.pocket.oAuthConsumerKey", "");

//Отключаем анимацию открытия видео на фуллскрин и подсказку "нажмите esc.."
user_pref("full-screen-api.transition-duration.enter", "0");
user_pref("full-screen-api.transition-duration.leave", "0");
user_pref("full-screen-api.warning.timeout", 0);

//Просим сайты не отслеживать Вас
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.donottrackheader.enabled", true);

//Отключаем телеметрию и отправку отчетов
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.crashReporting.email", false);
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("breakpad.reportURL", "");
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("network.allow-experiments", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
```

#### Установка CustomJS
Устанавливаем Пакет от Aris-t2 - [https://github.com/Aris-t2/CustomJSforFx](https://github.com/Aris-t2/CustomJSforFx)
#### Настройка браузера перед установкой
Закрепите расширения Close Button и Minimize Button на пенели инструментов, а также нажав по панели ПКМ зайдите в настройки панели и поставьте на нее все нужные вам инструменты.
**Обязательно уберите галочки** с *панель меню* и *Заголовок* ![изображение](https://github.com/user-attachments/assets/fdf696e3-f5b2-4233-9b33-2cc05ee92395) ![изображение](https://github.com/user-attachments/assets/9272b8fa-0585-48ba-b738-afddb944f73a)

Поставьте кнопку Close Button и Minimize Button в самое начало именно так, **иначе не будет работать** как надо ![изображение](https://github.com/user-attachments/assets/2eefb44e-a4b5-4e8d-a66c-ad484751223b)

Далее скачиваем из папки [chrome](https://github.com/DesairDHawk/Firefox-Ultra-Light/tree/main/chrome) `userChrome.css` и `userChrome.js` для *Стандартной версии* или файлы `(v2)` для *2 версии* (не забудьте стереть `(v2) ` из названий файла для корректной работы) и закидываем их в папку `C:\Users\...\AppData\Roaming\Mozilla\Firefox\Profiles\...\chrome` (где точки - ваш username), если папки `chrome` нет, то создайте.
Теперь, что бы применить изменения удаляем все файлы которые содержат в названии `scriptCache` по этому пути `C:\Users\...\AppData\Local\Mozilla\Firefox\Profiles\...\startupCache` (где точки - ваш username) обычно их от 1 до 4
![изображение](https://github.com/user-attachments/assets/33356e7f-ad59-48bb-8306-be285c16f2b6)

Всё, можем пользоваться. Все инструменты, элементы управления, закладки и вкладки нахоятся на боковой панели, которую можно масштабировать. Что бы включить ULTRA-LIGHT Mode нажмите `F1`

