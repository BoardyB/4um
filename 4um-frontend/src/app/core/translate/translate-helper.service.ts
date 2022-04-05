import { LOCATION_INITIALIZED } from '@angular/common';
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class TranslateHelperService {
  public initializeApp(translateService: TranslateService, injector: Injector): Promise<any> {
    return new Promise(resolve => {
      const locationInitialized = injector.get(LOCATION_INITIALIZED, Promise.resolve(undefined));
      locationInitialized.then(() => {
        const loadedLanguage = localStorage.getItem('language');
        const languageToUse = !!loadedLanguage ? loadedLanguage : 'en';
        translateService.setDefaultLang('en');
        translateService.use(languageToUse).subscribe(
          () => {},
          () => {},
          () => {
            resolve(undefined);
          }
        );
      });
    });
  }
}
