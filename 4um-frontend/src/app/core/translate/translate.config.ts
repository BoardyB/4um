import { HttpClient } from '@angular/common/http';
import { APP_INITIALIZER, Injector } from '@angular/core';
import {
  FakeMissingTranslationHandler,
  MissingTranslationHandler,
  MissingTranslationHandlerParams,
  TranslateLoader,
  TranslateModuleConfig,
  TranslateService
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../../../environments/environment';
import { TranslateHelperService } from './translate-helper.service';

export const DEFAULT_LANGUAGE = 'en';
export const AVAILABLE_LANGUAGES = [DEFAULT_LANGUAGE, 'es'];

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

export class FailingMissingTranslationHandler implements MissingTranslationHandler {
  public handle(params: MissingTranslationHandlerParams) {
    throw new Error(
      `Cannot find translation values for: ${params.key}. ` +
      `Maybe you forgot to add ${params.key} translation key to any json in /assets/i18n/*?`
    );
  }
}

export const TRANSLATE_MODULE_CONFIG: TranslateModuleConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: HttpLoaderFactory,
    deps: [HttpClient]
  },
  missingTranslationHandler: {
    provide: MissingTranslationHandler,
    useClass: environment.production ? FakeMissingTranslationHandler : FailingMissingTranslationHandler
  }
};

export function initializerFactory(
  translateHelperService: TranslateHelperService,
  translateService: TranslateService,
  injector: Injector
) {
  return () => translateHelperService.initializeApp(translateService, injector);
}

export const TRANSLATE_PROVIDER_CONFIG = [
  TranslateHelperService,
  {
    provide: APP_INITIALIZER,
    useFactory: initializerFactory,
    multi: true,
    deps: [TranslateHelperService, TranslateService, Injector]
  }
];
