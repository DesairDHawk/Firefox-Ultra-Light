## Всё что нужно для установки
#### Расширения
Для начала установим расширения Для Firefox:
* [Tree Style Tab](https://addons.mozilla.org/ru/firefox/addon/tree-style-tab/)
* [Close Button](https://addons.mozilla.org/ru/firefox/addon/close-the-window/)
* [Minimize Bytton](https://addons.mozilla.org/firefox/addon/minimize-the-window/)
* [uBlock Origin](https://addons.mozilla.org/ru/firefox/addon/ublock-origin/)
* [privacy Badger](https://addons.mozilla.org/ru/firefox/addon/privacy-badger17/)
* [Translate Web Pages](https://addons.mozilla.org/ru/firefox/addon/translate-web-pages-custom/)
#### Тема
Можно использовать любые темы, но я рекомендую:
* Monokai Ryo Ocean
* Firefox Color - [Кастомная](https://color.firefox.com/?theme=XQAAAAJRBAAAAAAAAABBqYhm849SCicxcUcPX38oKRicm6da8pvllTRNDmkKYfng4-frk3bPVUag9TtOaxW-Nz4RBZAw1UjeG_pQy5ECr3W2zVZxdZLlxM585ewh1WkaTSOLQDWWCM81lK_lcAegNdSuq-rx3RvKYoO0lG9pFke2Hr4ob2adW5SELSXypZu8FidwBCybSrIyQUbLTD3BMm9_rNvCYYdQtpJH4QzBLEU1krb3A0FNtUeX07mUAHCdq2AHC_qK3wMxwbHzl5HHfQ_zl8yrmSpXv_2CJU0tpZgRhSU0v4L1hZ3nIL5aUYMxxeJam7KIcDD9W8SRDty7Yg-Qdz-xFuQofnaPcQU9MAzdVMkEbWpminJFJAhQZHb-_VCX9yxPQah0Llry10fFwV2dyRZb6yWSQAE0jJ9VORcpZ3_i7o0YGj30stWLwqVAOPbMfnYt01i4Ck1SYyY05sIEOUBGVbMw-82b_6nKu-OQziPFz2HS-BkF2n34yNuY_tE_tKQv4Q31Ks8SG1Ih2ofLxrJ__92sJl4)
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
user_pref("accessibility.typeaheadfind.flashBar", 0);
user_pref("app.installation.timestamp", "133705134347602141");
user_pref("app.normandy.first_run", false);
user_pref("app.normandy.migrationsApplied", 12);
user_pref("app.normandy.user_id", "1088c690-3c37-4b6a-9e22-ca8e4d3f1539");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.update.auto.migrated", true);
user_pref("app.update.background.lastInstalledTaskVersion", 4);
user_pref("app.update.background.previous.reasons", "[\"on Windows but cannot usually use BITS\",\"the maintenance service registry key is not present\"]");
user_pref("app.update.background.rolledout", true);
user_pref("app.update.download.attempts", 0);
user_pref("app.update.elevate.attempts", 0);
user_pref("app.update.lastUpdateTime.addon-background-update-timer", 1729480140);
user_pref("app.update.lastUpdateTime.background-update-timer", 1729501740);
user_pref("app.update.lastUpdateTime.browser-cleanup-thumbnails", 1729501861);
user_pref("app.update.lastUpdateTime.recipe-client-addon-run", 1729501953);
user_pref("app.update.lastUpdateTime.region-update-timer", 1729063984);
user_pref("app.update.lastUpdateTime.rs-experiment-loader-timer", 1726112894);
user_pref("app.update.lastUpdateTime.services-settings-poll-changes", 1729480140);
user_pref("app.update.lastUpdateTime.telemetry_modules_ping", 1726039895);
user_pref("app.update.lastUpdateTime.telemetry_untrustedmodules_ping", 0);
user_pref("app.update.lastUpdateTime.xpi-signature-verification", 1729480140);
user_pref("app.update.migrated.updateDir3.7FD9CE71360F02DD", true);
user_pref("breakpad.reportURL", "");
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.didSeeFinalScreen", true);
user_pref("browser.bookmarks.editDialog.confirmationHintShowCount", 3);
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("browser.compactmode.show", true);
user_pref("browser.contentblocking.category", "standard");
user_pref("browser.contextual-services.contextId", "{3d5962aa-f112-4b3f-9066-6a9039f1397e}");
user_pref("browser.ctrlTab.sortByRecentlyUsed", true);
user_pref("browser.download.autohideButton", false);
user_pref("browser.download.panel.shown", true);
user_pref("browser.download.viewableInternally.typeWasRegistered.avif", true);
user_pref("browser.download.viewableInternally.typeWasRegistered.webp", true);
user_pref("browser.engagement.ctrlTab.has-used", true);
user_pref("browser.engagement.downloads-button.has-used", true);
user_pref("browser.engagement.fxa-toolbar-menu-button.has-used", true);
user_pref("browser.engagement.home-button.has-removed", true);
user_pref("browser.engagement.home-button.has-used", true);
user_pref("browser.engagement.library-button.has-used", true);
user_pref("browser.firefox-view.view-count", 2);
user_pref("browser.laterrun.bookkeeping.profileCreationTime", 1726039837);
user_pref("browser.laterrun.bookkeeping.sessionCount", 1);
user_pref("browser.laterrun.bookkeeping.updateAppliedTime", 1729501949);
user_pref("browser.launcherProcess.enabled", true);
user_pref("browser.migrate.interactions.bookmarks", true);
user_pref("browser.migrate.interactions.history", true);
user_pref("browser.migration.version", 149);
user_pref("browser.ml.chat.provider", "https://chatgpt.com");
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", true);
user_pref("browser.newtabpage.activity-stream.impressionId", "{54aecc91-5b95-47be-b92f-3bdc743c0c4f}");
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
user_pref("browser.newtabpage.activity-stream.topSitesRows", 2);
user_pref("browser.newtabpage.storageVersion", 1);
user_pref("browser.pageActions.persistedActions", "{\"ids\":[\"bookmark\",\"_036a55b4-5e72-4d05-a06c-cba2dfcc134a_\",\"_0b8e907e-f4c7-4317-9c82-9ee41c422656_\"],\"idsInUrlbar\":[\"_036a55b4-5e72-4d05-a06c-cba2dfcc134a_\",\"_0b8e907e-f4c7-4317-9c82-9ee41c422656_\",\"bookmark\"],\"idsInUrlbarPreProton\":[],\"version\":1}");
user_pref("browser.pagethumbnails.storage_version", 3);
user_pref("browser.privacySegmentation.createdShortcut", true);
user_pref("browser.protections_panel.infoMessage.seen", true);
user_pref("browser.proton.toolbar.version", 3);
user_pref("browser.region.update.updated", 1729063985);
user_pref("browser.rights.3.shown", true);
user_pref("browser.safebrowsing.provider.google4.lastupdatetime", "1729503619795");
user_pref("browser.safebrowsing.provider.google4.nextupdatetime", "1729505438795");
user_pref("browser.safebrowsing.provider.mozilla.lastupdatetime", "1729501787295");
user_pref("browser.safebrowsing.provider.mozilla.nextupdatetime", "1729523387295");
user_pref("browser.search.region", "RU");
user_pref("browser.search.totalSearches", 19);
user_pref("browser.sessionstore.upgradeBackup.latestBuildID", "20241011205646");
user_pref("browser.shell.didSkipDefaultBrowserCheckOnFirstRun", true);
user_pref("browser.shell.mostRecentDateSetAsDefault", "1729501958");
user_pref("browser.startup.couldRestoreSession.count", 2);
user_pref("browser.startup.homepage", "https://newpage.local");
user_pref("browser.startup.homepage_override.buildID", "20241011205646");
user_pref("browser.startup.homepage_override.mstone", "131.0.3");
user_pref("browser.startup.lastColdStartupCheck", 1729501958);
user_pref("browser.startup.page", 3);
user_pref("browser.startup.windowsLaunchOnLogin.disableLaunchOnLoginPrompt", true);
user_pref("browser.tabs.crashReporting.email", false);
user_pref("browser.tabs.crashReporting.emailMe", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.inTitlebar", 1);
user_pref("browser.tabs.loadInBackground", false);
user_pref("browser.theme.toolbar-theme", 1);
user_pref("browser.toolbars.bookmarks.showOtherBookmarks", false);
user_pref("browser.toolbars.bookmarks.visibility", "always");
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.panelShown", true);
user_pref("browser.uiCustomization.state", "{\"placements\":{\"widget-overflow-fixed-list\":[],\"unified-extensions-area\":[\"treestyletab_piro_sakura_ne_jp-browser-action\",\"maximize-window-button_nanpuyue_com-browser-action\",\"jid1-mnnxcxisbpnsxq_jetpack-browser-action\",\"_036a55b4-5e72-4d05-a06c-cba2dfcc134a_-browser-action\",\"tst_colorize_tabs_emvaized_com-browser-action\",\"firefoxcolor_mozilla_com-browser-action\",\"_0b8e907e-f4c7-4317-9c82-9ee41c422656_-browser-action\"],\"nav-bar\":[\"close-window-button_nanpuyue_com-browser-action\",\"minimize-window-button_nanpuyue_com-browser-action\",\"downloads-button\",\"history-panelmenu\",\"unified-extensions-button\",\"back-button\",\"forward-button\",\"stop-reload-button\",\"home-button\",\"ublock0_raymondhill_net-browser-action\",\"browsec_browsec_com-browser-action\",\"urlbar-container\"],\"toolbar-menubar\":[\"menubar-items\"],\"TabsToolbar\":[\"firefox-view-button\",\"tabbrowser-tabs\",\"alltabs-button\"],\"PersonalToolbar\":[\"personal-bookmarks\"]},\"seen\":[\"save-to-pocket-button\",\"developer-button\",\"browsec_browsec_com-browser-action\",\"treestyletab_piro_sakura_ne_jp-browser-action\",\"ublock0_raymondhill_net-browser-action\",\"jid1-mnnxcxisbpnsxq_jetpack-browser-action\",\"_036a55b4-5e72-4d05-a06c-cba2dfcc134a_-browser-action\",\"close-window-button_nanpuyue_com-browser-action\",\"maximize-window-button_nanpuyue_com-browser-action\",\"minimize-window-button_nanpuyue_com-browser-action\",\"tst_colorize_tabs_emvaized_com-browser-action\",\"firefoxcolor_mozilla_com-browser-action\",\"_0b8e907e-f4c7-4317-9c82-9ee41c422656_-browser-action\"],\"dirtyAreaCache\":[\"nav-bar\",\"PersonalToolbar\",\"unified-extensions-area\",\"toolbar-menubar\",\"TabsToolbar\"],\"currentVersion\":20,\"newElementCount\":121}");
user_pref("browser.uidensity", 1);
user_pref("browser.urlbar.placeholderName", "Google");
user_pref("browser.urlbar.placeholderName.private", "Google");
user_pref("browser.urlbar.quicksuggest.migrationVersion", 2);
user_pref("browser.urlbar.quicksuggest.scenario", "history");
user_pref("browser.urlbar.tipShownCount.searchTip_onboard", 4);
user_pref("browser.urlbar.tipShownCount.searchTip_redirect", 4);
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionPolicyAcceptedVersion", 2);
user_pref("datareporting.policy.dataSubmissionPolicyNotifiedTime", "1726039839956");
user_pref("datareporting.policy.firstRunURL", "");
user_pref("devtools.chrome.enabled", true);
user_pref("devtools.command-button-measure.enabled", true);
user_pref("devtools.debugger.end-panel-size", 177);
user_pref("devtools.debugger.pending-selected-location", "{\"url\":\"https://newpage.local/script.js\",\"line\":97,\"column\":33}");
user_pref("devtools.debugger.prefs-schema-version", 11);
user_pref("devtools.debugger.remote-enabled", true);
user_pref("devtools.debugger.start-panel-size", 177);
user_pref("devtools.dom.enabled", true);
user_pref("devtools.everOpened", true);
user_pref("devtools.inspector.showUserAgentStyles", true);
user_pref("devtools.netmonitor.columnsData", "[{\"name\":\"status\",\"minWidth\":30,\"width\":5.93},{\"name\":\"method\",\"minWidth\":30,\"width\":5.93},{\"name\":\"domain\",\"minWidth\":30,\"width\":11.85},{\"name\":\"file\",\"minWidth\":30,\"width\":29.62},{\"name\":\"url\",\"minWidth\":30,\"width\":25},{\"name\":\"initiator\",\"minWidth\":30,\"width\":11.85},{\"name\":\"type\",\"minWidth\":30,\"width\":5.93},{\"name\":\"transferred\",\"minWidth\":30,\"width\":11.85},{\"name\":\"contentSize\",\"minWidth\":30,\"width\":5.93},{\"name\":\"waterfall\",\"minWidth\":150,\"width\":11.11}]");
user_pref("devtools.netmonitor.msg.visibleColumns", "[\"data\",\"time\"]");
user_pref("devtools.performance.recording.entries", 134217728);
user_pref("devtools.performance.recording.features", "[\"screenshots\",\"js\",\"cpu\"]");
user_pref("devtools.performance.recording.threads", "[\"GeckoMain\",\"Compositor\",\"Renderer\",\"DOM Worker\"]");
user_pref("devtools.responsive.reloadNotification.enabled", false);
user_pref("devtools.selfxss.count", 5);
user_pref("devtools.theme", "light");
user_pref("devtools.toolbox.footer.height", 402);
user_pref("devtools.toolbox.host", "right");
user_pref("devtools.toolbox.previousHost", "window");
user_pref("devtools.toolbox.selectedTool", "jsdebugger");
user_pref("devtools.toolbox.splitconsole.open", true);
user_pref("devtools.toolbox.splitconsoleHeight", 520);
user_pref("devtools.toolsidebar-height.inspector", 350);
user_pref("devtools.toolsidebar-width.inspector", 908);
user_pref("devtools.toolsidebar-width.inspector.splitsidebar", 454);
user_pref("distribution.iniFile.exists.appversion", "131.0.3");
user_pref("distribution.iniFile.exists.value", false);
user_pref("doh-rollout.disable-heuristics", true);
user_pref("doh-rollout.doneFirstRun", true);
user_pref("doh-rollout.home-region", "RU");
user_pref("doh-rollout.uri", "https://mozilla.cloudflare-dns.com/dns-query");
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.push.userAgentID", "8fa0df20e9b04b4bbefa1640fe5853e2");
user_pref("extensions.activeThemeID", "{451dfdfd-2da8-4273-828e-09589626251b}");
user_pref("extensions.blocklist.pingCountVersion", -1);
user_pref("extensions.databaseSchema", 36);
user_pref("extensions.formautofill.creditCards.reauth.optout", "MDIEEPgAAAAAAAAAAAAAAAAAAAEwFAYIKoZIhvcNAwcECO1uzpVK+57LBAhqYVyq4CP8Dw==");
user_pref("extensions.getAddons.cache.lastUpdate", 1729048204);
user_pref("extensions.getAddons.databaseSchema", 6);
user_pref("extensions.lastAppBuildId", "20241011205646");
user_pref("extensions.lastAppVersion", "131.0.3");
user_pref("extensions.lastPlatformVersion", "131.0.3");
user_pref("extensions.pendingOperations", true);
user_pref("extensions.pictureinpicture.enable_picture_in_picture_overrides", true);
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.oAuthConsumerKey", "");
user_pref("extensions.pocket.site", "");
user_pref("extensions.quarantinedDomains.list", "autoatendimento.bb.com.br,ibpf.sicredi.com.br,ibpj.sicredi.com.br,internetbanking.caixa.gov.br,www.ib12.bradesco.com.br,www2.bancobrasil.com.br");
user_pref("extensions.systemAddonSet", "{\"schema\":1,\"addons\":{}}");
user_pref("extensions.ui.dictionary.hidden", true);
user_pref("extensions.ui.extension.hidden", false);
user_pref("extensions.ui.lastCategory", "addons://list/theme");
user_pref("extensions.ui.locale.hidden", true);
user_pref("extensions.ui.sitepermission.hidden", true);
user_pref("extensions.ui.theme.hidden", false);
user_pref("extensions.webcompat.enable_shims", true);
user_pref("extensions.webcompat.perform_injections", true);
user_pref("extensions.webcompat.perform_ua_overrides", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.FirefoxColor@mozilla.com", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.browsec@browsec.com", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.jid1-MnnxcxisBPnSXQ@jetpack", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.screenshots@mozilla.org", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.treestyletab@piro.sakura.ne.jp", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.tst-colored-tabs@murz", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.tst-indent-line@piro.sakura.ne.jp", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.tst-lock-tree-collapsed@piro.sakura.ne.jp", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.tst_colorize_tabs@emvaized.com", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.uBlock0@raymondhill.net", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.{036a55b4-5e72-4d05-a06c-cba2dfcc134a}", true);
user_pref("extensions.webextensions.ExtensionStorageIDB.migrated.{0b8e907e-f4c7-4317-9c82-9ee41c422656}", true);
user_pref("extensions.webextensions.uuids", "{\"formautofill@mozilla.org\":\"cb3b3be9-db96-42ed-87c6-1943f69ba328\",\"pictureinpicture@mozilla.org\":\"2e3ce782-6ee5-4579-9480-3e0df35b0b4b\",\"screenshots@mozilla.org\":\"9a0bc466-dada-4dad-8ee9-16979cb5b505\",\"webcompat-reporter@mozilla.org\":\"d7e196a2-cbd8-425a-aca2-d5f1ac03b5b0\",\"webcompat@mozilla.org\":\"b928b508-143c-4ee7-bc30-5f915d6f5f89\",\"default-theme@mozilla.org\":\"430230e6-62c8-491e-b870-433a90408de7\",\"addons-search-detection@mozilla.com\":\"9db6be85-2898-4293-bdc5-6cda554c9094\",\"browsec@browsec.com\":\"cd400c83-6805-4e09-b728-9468e14ac68a\",\"treestyletab@piro.sakura.ne.jp\":\"e7139ff5-a78e-4250-8927-042fe0a163da\",\"uBlock0@raymondhill.net\":\"157a78c9-8eb3-40fa-8080-e691a58b6d98\",\"jid1-MnnxcxisBPnSXQ@jetpack\":\"cbec53a8-79ec-4d70-a5b5-4e415beec287\",\"{036a55b4-5e72-4d05-a06c-cba2dfcc134a}\":\"61396c50-482a-453d-af64-b438485aa97c\",\"close-window-button@nanpuyue.com\":\"047ddf0f-e281-4390-a03b-ca0dbb6dae3d\",\"minimize-window-button@nanpuyue.com\":\"9eba9b04-7fae-46a1-a3f3-c286e4b05137\",\"tst_colorize_tabs@emvaized.com\":\"e6e6383f-a219-4163-83d9-ce337e050850\",\"tst-indent-line@piro.sakura.ne.jp\":\"84356161-6fa8-4b80-ab72-37c07edac2c5\",\"tst-colored-tabs@murz\":\"3ed44e78-ae3c-4903-b8a7-f3cc518144fc\",\"firefox-compact-light@mozilla.org\":\"2da7db68-1c9d-4db1-ad72-c0b109dd5a06\",\"firefox-alpenglow@mozilla.org\":\"bfb061d4-f4a2-4dfd-928e-c351972b0713\",\"tst-lock-tree-collapsed@piro.sakura.ne.jp\":\"1c9af447-7453-4c39-ae31-34b74bc8ab7b\",\"firefox-compact-dark@mozilla.org\":\"b3e9cc29-ec54-4668-9536-fe1a75de598c\",\"{02ff3ae0-8bfc-401e-890b-91e0170c840a}\":\"f5788f29-b58c-4357-bca8-399c148f4394\",\"FirefoxColor@mozilla.com\":\"afb67212-486e-4e88-8148-12aab311b4c8\",\"{c6d54c52-4acf-47dd-8baf-7a10d8018c10}\":\"bfff4e3a-7b3d-45ba-9ba0-1bd08f12d138\",\"{451dfdfd-2da8-4273-828e-09589626251b}\":\"1d093d40-2a5b-4340-aeef-91fb547d34ad\",\"{0b8e907e-f4c7-4317-9c82-9ee41c422656}\":\"5638f629-3428-4cc3-8b3e-86ce57dcc5bb\"}");
user_pref("findbar.highlightAll", true);
user_pref("font.size.variable.x-cyrillic", 14);
user_pref("full-screen-api.transition-duration.enter", "0");
user_pref("full-screen-api.transition-duration.leave", "0");
user_pref("full-screen-api.warning.timeout", 0);
user_pref("gecko.handlerService.defaultHandlersVersion", 1);
user_pref("gfx-shader-check.build-version", "20241011205646");
user_pref("gfx-shader-check.device-id", "0x4692");
user_pref("gfx-shader-check.driver-version", "32.0.101.5972");
user_pref("gfx-shader-check.ptr-size", 8);
user_pref("idle.lastDailyNotification", 1729480140);
user_pref("media.gmp-gmpopenh264.abi", "x86_64-msvc-x64");
user_pref("media.gmp-gmpopenh264.hashValue", "b667086ed49579592d435df2b486fe30ba1b62ddd169f19e700cd079239747dd3e20058c285fa9c10a533e34f22b5198ed9b1f92ae560a3067f3e3feacc724f1");
user_pref("media.gmp-gmpopenh264.lastDownload", 1726039866);
user_pref("media.gmp-gmpopenh264.lastInstallStart", 1726039866);
user_pref("media.gmp-gmpopenh264.lastUpdate", 1726039866);
user_pref("media.gmp-gmpopenh264.version", "2.3.2");
user_pref("media.gmp-manager.buildID", "20241011205646");
user_pref("media.gmp-manager.lastCheck", 1729502028);
user_pref("media.gmp-manager.lastEmptyCheck", 1729502028);
user_pref("media.gmp-widevinecdm.abi", "x86_64-msvc-x64");
user_pref("media.gmp-widevinecdm.hashValue", "03105dcf804e4713b6ed7c281ad0343ac6d6eb2aed57a897c6a09515a8c7f3e06b344563e224365dc9159cfd8ed3ef665d6aec18cc07aaad66eed0dc4957dde3");
user_pref("media.gmp-widevinecdm.lastDownload", 1727407435);
user_pref("media.gmp-widevinecdm.lastDownloadFailReason", "Error: Failed downloading via ServiceRequest, status: 0, channelStatus: 2152398878, errorCode: 2, reason: error");
user_pref("media.gmp-widevinecdm.lastDownloadFailed", 1729480141);
user_pref("media.gmp-widevinecdm.lastInstallStart", 1729480141);
user_pref("media.gmp-widevinecdm.lastUpdate", 1727407435);
user_pref("media.gmp-widevinecdm.version", "4.10.2830.0");
user_pref("media.gmp.storage.version.observed", 1);
user_pref("media.hardware-video-decoding.failed", false);
user_pref("messaging-system-action.showEmbeddedImport", true);
user_pref("network.allow-experiments", false);
user_pref("network.dns.disableIPv6", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.proxy.type", 0);
user_pref("network.trr.excluded-domains", "gitlab.eriskip.com");
user_pref("network.trr.mode", 5);
user_pref("pdfjs.enabledCache.state", true);
user_pref("pdfjs.migrationVersion", 2);
user_pref("places.database.lastMaintenance", 1728961796);
user_pref("pref.browser.homepage.disable_button.bookmark_page", false);
user_pref("privacy.bounceTrackingProtection.hasMigratedUserActivationData", true);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", false);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.globalprivacycontrol.was_ever_enabled", true);
user_pref("privacy.history.custom", true);
user_pref("privacy.purge_trackers.date_in_cookie_database", "0");
user_pref("privacy.purge_trackers.last_purge", "1726111766536");
user_pref("privacy.sanitize.clearOnShutdown.hasMigratedToNewPrefs2", true);
user_pref("privacy.sanitize.pending", "[{\"id\":\"shutdown\",\"itemsToClear\":[\"cache\",\"cookiesAndStorage\"],\"options\":{}},{\"id\":\"newtab-container\",\"itemsToClear\":[],\"options\":{}}]");
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.extension", "treestyletab@piro.sakura.ne.jp");
user_pref("privacy.userContext.ui.enabled", true);
user_pref("sanity-test.device-id", "0x4692");
user_pref("sanity-test.driver-version", "32.0.101.5972");
user_pref("sanity-test.running", false);
user_pref("sanity-test.version", "20241011205646");
user_pref("security.insecure_field_warning.contextual.enabled", false);
user_pref("security.mixed_content.block_active_content", false);
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("services.settings.blocklists.addons-bloomfilters.last_check", 1729504961);
user_pref("services.settings.blocklists.gfx.last_check", 1729504961);
user_pref("services.settings.clock_skew_seconds", 0);
user_pref("services.settings.last_etag", "\"1729504600821\"");
user_pref("services.settings.last_update_seconds", 1729504961);
user_pref("services.settings.main.addons-manager-settings.last_check", 1729504961);
user_pref("services.settings.main.anti-tracking-url-decoration.last_check", 1729504961);
user_pref("services.settings.main.bounce-tracking-protection-exceptions.last_check", 1729504961);
user_pref("services.settings.main.cfr.last_check", 1729504961);
user_pref("services.settings.main.cookie-banner-rules-list.last_check", 1729504961);
user_pref("services.settings.main.devtools-compatibility-browsers.last_check", 1729504961);
user_pref("services.settings.main.devtools-devices.last_check", 1729504961);
user_pref("services.settings.main.doh-config.last_check", 1729504961);
user_pref("services.settings.main.doh-providers.last_check", 1729504961);
user_pref("services.settings.main.fingerprinting-protection-overrides.last_check", 1729504961);
user_pref("services.settings.main.fxmonitor-breaches.last_check", 1729504961);
user_pref("services.settings.main.hijack-blocklists.last_check", 1729504961);
user_pref("services.settings.main.language-dictionaries.last_check", 1729504961);
user_pref("services.settings.main.message-groups.last_check", 1729504961);
user_pref("services.settings.main.newtab-wallpapers-v2.last_check", 1729504961);
user_pref("services.settings.main.nimbus-desktop-experiments.last_check", 1729504961);
user_pref("services.settings.main.nimbus-secure-experiments.last_check", 1729504961);
user_pref("services.settings.main.normandy-recipes-capabilities.last_check", 1729504961);
user_pref("services.settings.main.partitioning-exempt-urls.last_check", 1729504961);
user_pref("services.settings.main.password-recipes.last_check", 1729504961);
user_pref("services.settings.main.password-rules.last_check", 1729504961);
user_pref("services.settings.main.pioneer-study-addons-v1.last_check", 1729504961);
user_pref("services.settings.main.public-suffix-list.last_check", 1729504961);
user_pref("services.settings.main.query-stripping.last_check", 1729504961);
user_pref("services.settings.main.search-config-icons.last_check", 1729504961);
user_pref("services.settings.main.search-config-overrides-v2.last_check", 1729504961);
user_pref("services.settings.main.search-config-v2.last_check", 1729504961);
user_pref("services.settings.main.search-default-override-allowlist.last_check", 1729504961);
user_pref("services.settings.main.search-telemetry-v2.last_check", 1729504961);
user_pref("services.settings.main.sites-classification.last_check", 1729504961);
user_pref("services.settings.main.tippytop.last_check", 1729504961);
user_pref("services.settings.main.top-sites.last_check", 1729504961);
user_pref("services.settings.main.tracking-protection-lists.last_check", 1729504961);
user_pref("services.settings.main.translations-models.last_check", 1729504961);
user_pref("services.settings.main.translations-wasm.last_check", 1729504961);
user_pref("services.settings.main.url-classifier-skip-urls.last_check", 1729504961);
user_pref("services.settings.main.urlbar-persisted-search-terms.last_check", 1729504961);
user_pref("services.settings.main.websites-with-shared-credential-backends.last_check", 1729504961);
user_pref("services.settings.security-state.cert-revocations.last_check", 1729504961);
user_pref("services.settings.security-state.intermediates.last_check", 1729504961);
user_pref("services.settings.security-state.onecrl.last_check", 1729504961);
user_pref("services.sync.clients.lastSync", "0");
user_pref("services.sync.declinedEngines", "");
user_pref("services.sync.globalScore", 0);
user_pref("services.sync.nextSync", 0);
user_pref("signon.management.page.os-auth.optout", "MDIEEPgAAAAAAAAAAAAAAAAAAAEwFAYIKoZIhvcNAwcECIMN6tQiQxpOBAi9txVOVMYa4w==");
user_pref("storage.vacuum.last.content-prefs.sqlite", 1729051484);
user_pref("storage.vacuum.last.index", 2);
user_pref("storage.vacuum.last.places.sqlite", 1728961795);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("toolkit.startup.last_success", 1729501957);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "18da55b6-1348-4791-8e3b-cd65a6087053");
user_pref("toolkit.telemetry.cachedProfileGroupID", "d8acf061-ba89-4cdc-af10-ac669d1a3d21");
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.pioneer-new-studies-available", true);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("trailhead.firstrun.didSeeAboutWelcome", true);
user_pref("ui.osk.debug.keyboardDisplayReason", "IKPOS: Touch screen not found.");
user_pref("widget.non-native-theme.scrollbar.style", 3);
```

#### Установка CustomJS
Устанавливаем Пакет от Aris-t2 - [https://github.com/Aris-t2/CustomJSforFx](https://github.com/Aris-t2/CustomJSforFx)
#### Настройка браузера перед установкой
Закрепите расширения Close Button и Minimize Button на пенели инструментов, а также нажав по панели ПКМ зайдите в настройки панели и поставьте на нее все нужные вам инструменты.
**Обязательно уберите галочки** с *панель меню* и *Заголовок* ![изображение](https://github.com/user-attachments/assets/fdf696e3-f5b2-4233-9b33-2cc05ee92395) ![изображение](https://github.com/user-attachments/assets/9272b8fa-0585-48ba-b738-afddb944f73a)

Поставьте кнопку Close Button и Minimize Button в самое начало именно так, **иначе не будет работать** как надо ![изображение](https://github.com/user-attachments/assets/ef35fc99-b0ad-41bb-89a9-a2e05968d5f8)

Далее скачиваем папку [chrome](https://github.com/DesairDHawk/Firefox-Ultra-Light/tree/main/chrome) и закидываем её в папку `C:\Users\...\AppData\Roaming\Mozilla\Firefox\Profiles\...` (где точки - ваш username) и подтверждаем замену.
Теперь, что бы применить изменения удаляем все файлы которые содержат в названии `scriptCache` по этому пути `C:\Users\...\AppData\Local\Mozilla\Firefox\Profiles\...\startupCache` (где точки - ваш username) обычно их от 1 до 4
![изображение](https://github.com/user-attachments/assets/33356e7f-ad59-48bb-8306-be285c16f2b6)

Всё, можем пользоваться. Все инструменты, элементы управления, закладки и вкладки нахоятся на боковой панели, которую можно масштабировать. Что бы включить ULTRA-LIGHT Mode нажмите `F1`

