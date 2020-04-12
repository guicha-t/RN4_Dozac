import I18n from 'react-native-i18n';
import {en} from '../i18n';
import {fr} from '../i18n';

I18n.fallbacks = true;

I18n.translations = {
  en,
  fr
};

export const Translate = (id) => I18n.t(id);

export const TranslateRouter = (id) => I18n.t(id);

export const TranslateMatchCard = (id) => I18n.t("MatchCard." + id);

export const TranslateMenu = (id) => I18n.t("menu." + id);
export const TranslateCockTails = (id) => I18n.t("CockTails." + id);
export const TranslateIngredients = (id) => I18n.t("Ingredients." + id);
export const TranslateLogin = (id) => I18n.t("Login." + id);

export const TranslateSplashScreen = (id) => I18n.t("SplashScreen." + id);
export const TranslateSignIn = (id) => I18n.t("SignIn." + id);
export const TranslateProfile = (id) => I18n.t("Profile." + id);