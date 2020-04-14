import * as Localization from 'expo-localization';
import I18n from 'i18n-js';
import {en} from '../i18n';
import {fr} from '../i18n';

I18n.translations = {
  en,
  fr
};

I18n.locale= Localization.local
I18n.fallbacks = true;

export default I18n;

