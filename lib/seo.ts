export const seo = {
  title: '多多先生 | 开发者、开源、铲屎官、创造',
  description:
    '我叫 多多先生，目前在月之暗面 Kimi 做搜索 & 推荐研发，同时也会做一些业余爱好的项目。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://haha.ai'
      : 'http://localhost:3000'
  ),
} as const
