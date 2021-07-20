import { createIntl, createIntlCache, IntlShape } from "react-intl";
import * as locales from '../compiled-locale'


function loadLocaleData(locale: string) {
    switch (locale) {
        case 'pt':
            return locales[locale]
        default:
            return locales['en']
    }
}

export let messages = {};

const cache = createIntlCache();
let intl: IntlShape;

export function setLanguage(lang: string) {
    messages = loadLocaleData(lang);
    intl = createIntl(
        {
            locale: lang,
            messages: messages
        },
        cache
    );
}

const f = (msg: any, values?: {}) => {
    return intl.formatMessage(msg, values);
};

export default f;
