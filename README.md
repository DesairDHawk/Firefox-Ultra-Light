![изображение](https://github.com/user-attachments/assets/e71d33d7-45d9-45b2-890e-8e90a9dd0a0b)


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
  padding: 1px 5px 5px;
  margin-top: -6px;
  font-size: 10px;
  mask-image: linear-gradient(to left, transparent 0, black 2em);
}

tab-item tab-label {
  overflow-y: hidden !important;
  text-align:top;
  white-space: nowrap !important;
  display: -webkit-inline-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  margin-top: 5px;
  margin-bottom: 5px;
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

Далее скачиваем папку [chrome](https://github.com/DesairDHawk/Firefox-Ultra-Light/tree/main/chrome) и закидываем её в папку `C:\Users\...\AppData\Roaming\Mozilla\Firefox\Profiles\...` (где точки - ваш username) и подтверждаем замену.
Теперь, что бы применить изменения удаляем все файлы которые содержат в названии `scriptCache` по этому пути `C:\Users\...\AppData\Local\Mozilla\Firefox\Profiles\...\startupCache` (где точки - ваш username) обычно их от 1 до 4
![изображение](https://github.com/user-attachments/assets/33356e7f-ad59-48bb-8306-be285c16f2b6)

Всё, можем пользоваться. Все инструменты, элементы управления, закладки и вкладки нахоятся на боковой панели, которую можно масштабировать. Что бы включить ULTRA-LIGHT Mode нажмите `F1`

