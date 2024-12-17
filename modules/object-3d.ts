import { addVitePlugin, defineNuxtModule } from "nuxt/kit"

import object3d from 'unplugin-object-3d/vite'

export default defineNuxtModule((options, nuxt) => {
  addVitePlugin(object3d)
})