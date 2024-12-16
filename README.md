## Стандартная версия
![изображение](https://github.com/user-attachments/assets/8be2aac3-1e11-442f-8740-d8d3b362d95d)

## Версия 2
![изображение](https://github.com/user-attachments/assets/a0ef3765-9c31-43d9-995b-d857749cb34d)

## Всё что нужно для установки
#### Расширения
Для начала установим расширения Для Firefox:
* [Close Button](https://addons.mozilla.org/ru/firefox/addon/close-the-window/)
* [Minimize Bytton](https://addons.mozilla.org/firefox/addon/minimize-the-window/)
* [uBlock Origin](https://addons.mozilla.org/ru/firefox/addon/ublock-origin/)
* [privacy Badger](https://addons.mozilla.org/ru/firefox/addon/privacy-badger17/)
* [Translate Web Pages](https://addons.mozilla.org/ru/firefox/addon/translate-web-pages-custom/)
* [Tree Style Tab](https://addons.mozilla.org/ru/firefox/addon/tree-style-tab/), для этого расширения, в `настройках`, вставляем этот CSS: [Для стандарта](https://github.com/DesairDHawk/Firefox-Ultra-Light/blob/main/chrome/scss%20TST) , [Для версии 2](https://github.com/DesairDHawk/Firefox-Ultra-Light/blob/main/chrome/(v2)%20scss%20TST)

#### Тема
Можно использовать любые темы. На скриншоте используется [Monokai Ryo Ocean](https://addons.mozilla.org/ru/firefox/addon/monokai-ryo-ocean/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search) и стандартная (в темной и светлой теме системы вид может отличатся)
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

Поставьте кнопку Close Button и Minimize Button в самое начало именно так, **иначе не будет работать** как надо ![изображение](https://github.com/user-attachments/assets/2eefb44e-a4b5-4e8d-a66c-ad484751223b)

Далее скачиваем из папки [chrome](https://github.com/DesairDHawk/Firefox-Ultra-Light/tree/main/chrome) `userChrome.css` и `userChrome.js` для *Стандартной версии* или файлы `(v2)` для *2 версии* (не забудьте стереть `(v2) ` из названий файла для корректной работы) и закидываем их в папку `C:\Users\...\AppData\Roaming\Mozilla\Firefox\Profiles\...\chrome` (где точки - ваш username), если папки `chrome` нет, то создайте.
Теперь, что бы применить изменения удаляем все файлы которые содержат в названии `scriptCache` по этому пути `C:\Users\...\AppData\Local\Mozilla\Firefox\Profiles\...\startupCache` (где точки - ваш username) обычно их от 1 до 4
![изображение](https://github.com/user-attachments/assets/33356e7f-ad59-48bb-8306-be285c16f2b6)

Всё, можем пользоваться. Все инструменты, элементы управления, закладки и вкладки нахоятся на боковой панели, которую можно масштабировать. Что бы включить ULTRA-LIGHT Mode нажмите `F1` (Работает только на стандартной версии, во второй версии пока может вызывать ошибки)

