import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import YtVideo from './YtVideo.vue'

export default {
    extends: DefaultTheme,
    Layout: () => h(DefaultTheme.Layout, null, {
        'home-features-before': () => h(YtVideo),
    }),
}
