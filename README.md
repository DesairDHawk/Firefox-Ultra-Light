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
  --tab-size: 36px;
  --timeout-hide: 0.25s;
  --max-height-resolution: 1080px;
  --number-of-stack-icon: 6;
}

:root,
body,
#background {
  background-position-y: top;
  background-position-x: left -100vh;
  background-size: auto calc(var(--max-height-resolution) - calc(28px * var(--number-of-stack-icon)));
}

.flexible {
  height: fit-content;
}

.closebox{
right: -4px !important; 
}

#tabbar #normal-tabs-container {
  scrollbar-color: var(--theme-colors-tab_line) rgba(0,0,0,0) !important;
  margin: 3px 3px 3px 0px;
  border-radius: 7px;
}

tab-item {
  overflow: hidden !important;
  cursor: pointer;
  padding-top: 0px;
  border-radius: 7px;
  max-width: 100%;
}

tab-item::after {
  content: attr(data-current-uri);
  color: var(--theme-colors-toolbar_field_text);
  white-space: nowrap;
  font-size: 10px;
  mask-image: linear-gradient(to left, transparent 0, black 2em);
  position: absolute;
  bottom: 6px;
  left: 35px;
  width: 185px;
  height: 11px;
}

tab-item.active {
  .background{
    background: var(--theme-colors-toolbar);
  color: var(--theme-colors-toolbar_text);
  box-shadow: 0px 0px 0px 1px var(--theme-colors-tab_line), 0 0 var(--tab-dropshadow-blur) rgba(0, 0, 0, 0.4);
  }
}

.background{
z-index: -1;
      outline: none;
  bottom: 2px;
  left: 5px;
  right: 2px;
  top: 2px;
  border-radius: 7px
}

.ui{
padding: 1px 0px;
}

tab-item.active::after {
  color: var(--theme-colors-tab_line);
}

.after-tabs.vbox {
  position: absolute;
  top: 0;
  left: 0;
  height: min-content;
  width: fit-content;
}

.after-tabs.vbox:hover .newtab-button{
  height: 33px;
  width: 33px;
  transform: scale(1);
}

.newtab-button{
  background: var(--theme-colors-toolbar);
  box-shadow: 0px 0px 0px 1px var(--theme-colors-tab_line), 0 0 var(--tab-dropshadow-blur) rgba(0, 0, 0, 0.4);
  margin: 4px 0px 0px 8px;
  height: 33px;
  width: 33px;
  transform: scale(0.5) translateX(-18px) translateY(-20px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  border-radius: 7px;
  top: 0;
}

.newtab-button:after{

}

.after-tabs [role="button"]:hover::before {
  opacity: 0;
}

.newtab-action-selector-anchor {
  display: none;
}

tab-item-substance {
  padding: 0px 0px;
  margin: 0px 0px;
  height: var(--tab-size);
}

.contextual-identity-marker {
  width: unset;
  left: 4px;
  top: 1px;
  right: 1px;
  mask-image: linear-gradient(to top, transparent 0%, rgba(0, 0, 0, 0.75) 100%);
  z-index: -1;
  border-radius: 7px;
}

tab-twisty {
  display: none;
}

tab-favicon {
  position: absolute;
  margin: 0.7rem 0.4rem 0.7rem 1rem;
}

tab-label {
  margin-top: -13px;
  margin-left: 35px;
  min-width: 185px;
}

.tab:not(:hover) .closebox{
  visibility: hidden;
}

.tab:last-of-type .closebox {
  display: none;
}

.caption{
	height: 32.8px;
  display: flex;
}

.overflow-indicator.start,
.overflow-indicator.end{
    border: 0;
    background-color: var(--browser-background);
    background-image: var(--browser-bg-images, none);
  background-position-x: left -100vh;
    background-repeat: var(--browser-bg-repeat, none);
  height: 25px;
  background-size: auto calc(var(--max-height-resolution) - calc(28px * var(--number-of-stack-icon)));
}


.overflow-indicator.start{
  background-position-y: top;
    mask-image: linear-gradient(to top, transparent 0%, #000 100%);

}

.overflow-indicator.end{
  bottom: 0;
background-position-y: bottom;
  mask-image: linear-gradient(to bottom, transparent 0%, #000 100%);
}

#tabbar {
    bottom: 0;
  }

.left.sidebar:not(:hover) {
  tab-item {
    transition: max-width 100ms ease-in-out var(--timeout-hide) !important;
    max-width: calc(100% - 198px);
    padding-top: 0px;
  }
  tab-item::after {
    transition: all 100ms ease-in-out var(--timeout-hide) !important;
    opacity: 0;
  }
  tab-item tab-label {
    transition: all 100ms ease-in-out var(--timeout-hide) !important;
    opacity: 0;
  }
  .ui{
    transition: all 100ms ease-in-out var(--timeout-hide) !important;
    margin-left: 4px;
    max-width: calc(100% - 6px);
    display: flex;
    .caption{
      transition: all 100ms ease-in-out var(--timeout-hide) !important;
    	position: relative;
      display: flex;
    }
  }
  
  tab-favicon {
    transition: all 100ms ease-in-out var(--timeout-hide) !important;
    margin: 0 0 0 50%;
    transform: translateX(-50%) scale(1.5);
  }
  
  tab-closebox{
  	display: none;
  }
  
  .overflow-indicator.end {
    bottom: 0px;
  }
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

