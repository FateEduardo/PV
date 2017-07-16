import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./module/app.module";

console.info('UI app.environment:', app.environment);
if (app.environment === 'production') {
  enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
