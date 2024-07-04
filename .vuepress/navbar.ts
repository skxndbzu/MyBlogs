import {NavItem} from "vuepress/config";

export default [
    {
        text: "学习路线",
        link: '/学习路线/'
    },
    {
        text: '学习资料',
        ariaLabel: 'Language Menu',
        items: [
            { text: 'Java基础', link: '/学习路线/' },
            { text: '数据库', link: '/学习路线/' }
        ]
    }
] as NavItem[];
