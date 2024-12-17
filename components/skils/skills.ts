export const category = {
  'Frontend': [
    ['HTML', 'CSS', 'JavaScript'],
    ['SCSS', 'TypeScript', 'Node'],
    ['Vue2', 'Vuex',  'Nuxt'],
    ['Quasar', 'Electron', 'WebRTC'],
    ['Vue3', 'Pinia', 'i18n'],
    ['Webpack', 'Vite', 'Rollup'],
    ['WebGL', 'ThreeJS', 'GLSL'],
    ['Tailwind', 'UnoCSS', 'Bootstrap'],
    ['Eslint', 'Prettier', 'Monorepo'],
  ],
  'Backend': [
    ['SQL', 'SQL Server', 'MySQL'],
    ['MongoDB', 'Firebase', 'Postgres'],
    ['REST', 'Socket.io', 'Express'],
    ['NestJS', 'Ruby', 'Rails'],
  ],
  'DevOps': [
    ['Git', 'Linux', 'Bash'],
    ['SSH', 'WSL', 'ZX'],
    ['Github Actions', 'GitHub', 'Pm2'],
  ],
  'Other': [
    ['Telegram Bot', 'Discrod Bot', 'Google API'],
    ['Kotlin', 'Android', 'Google Maps'],
    ['Python', 'R', 'Numpy'],
    ['Go', 'C#', 'C++'],
  ]
} as Record<string, string[][]>

export const skills = Object.values(category).map((category) => [...category, []]).flat()
