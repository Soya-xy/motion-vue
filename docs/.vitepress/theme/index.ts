// https://vitepress.dev/guide/custom-theme
import Layout from './layout/MainLayout.vue'
import DocsLayout from './layout/DocsLayout.vue'
import * as components from './components'
import './style.css'
import './styles/shiki.css'
import './styles/vp-doc.css'

export default {
  Layout,
  enhanceApp({ app }) {
    // ...
    app.component('docs', DocsLayout)

    for (const component of Object.keys(components))
      app.component(component, components[component])
  },
}
