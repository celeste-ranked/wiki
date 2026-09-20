import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Celeste Ranked Wiki',
    description: 'Wiki for Celeste Ranked',
    cleanUrls: true,
    lastUpdated: true,

    themeConfig: {
        nav: [
            { text: 'Install', link: '/installation/install' },
            { text: 'Gameplay', link: '/gameplay/' },
            { text: 'Contribute', link: '/contribute' },
        ],

        sidebar: {
            '/gameplay/': [
                {
                    text: 'Gameplay',
                    items: [
                        { text: 'Overview', link: '/gameplay/' },
                        { text: 'How matches work', link: '/gameplay/matches' },
                        { text: 'Ranks and Elo', link: '/gameplay/ranks' },
                        { text: 'Lobbies', link: '/gameplay/lobbies' },
                        { text: 'Replays', link: '/gameplay/replays' }
                    ]
                }
            ],
            '/': [
                {
                    text: 'Getting started',
                    items: [
                        { text: 'Install', link: '/installation/install' },
                        { text: 'Mods and the whitelist', link: '/installation/mods' }
                    ]
                },
                {
                    text: 'Gameplay',
                    items: [
                        { text: 'Overview', link: '/gameplay/' },
                        { text: 'How matches work', link: '/gameplay/matches' },
                        { text: 'Ranks and Elo', link: '/gameplay/ranks' },
                        { text: 'Lobbies', link: '/gameplay/lobbies' },
                        { text: 'Replays', link: '/gameplay/replays' }
                    ]
                },
                {
                    text: 'Help',
                    items: [
                        { text: 'FAQ', link: '/faq' },
                        { text: 'Contribute', link: '/contribute' }
                    ]
                }
            ]
        },

        socialLinks: [
            { 
              icon: { svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z"/></svg>' }, 
              link: 'https://celesteranked.com',
              ariaLabel: 'Back to Homepage'
            },
            { icon: 'github', link: 'https://github.com/celeste-ranked/wiki', ariaLabel: 'Wiki Repository'},
            { icon: 'discord', link: 'https://discordapp.com/users/879048612817010799', ariaLabel: 'Contact on Discord' },
            { icon: 'x', link: 'https://x.com/CelesteRanked?s=20', ariaLabel: "X (Twitter)" },
        ],

        search: {
            provider: 'local'
        },

        editLink: {
            pattern: 'https://github.com/celeste-ranked/wiki/edit/main/:path',
            text: 'Edit this page'
        },

        // footer: {
        //     message: 'Celeste Ranked is a community mod. Not affiliated with EXOK',
        //     copyright: 'Edits welcome, open a PR.'
        // }
    }
})
