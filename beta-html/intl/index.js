import { cookiePolicy, acceptLanguagePolicy, defaultPolicy } from '@moxy/next-intl';

export default {
    locales: [
        {
            id: 'en-US',
            code: 'EN',
            icon: 'https://hatscripts.github.io/circle-flags/flags/us.svg',
            name: 'English',
            loadMessages: async () => {
                const module = await import('./messages/en-US.json');
                return module.default;
            },
        },
        {
            id: 'tr-TR',
            code: 'TR',
            icon: 'https://hatscripts.github.io/circle-flags/flags/tr.svg',
            name: 'Turkish',
            loadMessages: async () => {
                const module = await import('./messages/tr-TR.json');
                return module.default;
            },
        },        
    ],
    defaultLocale: 'tr-TR',
    policies: [
        cookiePolicy(),
        acceptLanguagePolicy(),
        defaultPolicy('tr-TR'),
    ],
};
