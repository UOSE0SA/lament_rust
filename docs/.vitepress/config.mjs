import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/lament_rust/',
  title: "Lament Rust",
  description: "A Rust course site.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '开始学习', link: '/course/introduction' },
    ],

    sidebar: [
      {
        text: '基础入门',
        items: [
          { text: '介绍', link: '/course/introduction/index.md' },
          { text: '1. 你好，世界',
            link: '/course/hello_world/index.md',
            items: [
                {text: '1.1 注释', link: '/course/hello_world/1.1_comments.md' },
                {text: '1.2 第一个程序', link: '/course/hello_world/1.2_first_program.md' },
            ]},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      copyright: "Copyright © 2025-present Lament Rust.",
    }
  }
})
