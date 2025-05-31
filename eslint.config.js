import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  // add more generic rulesets here, such as:
  // js.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  // ...pluginVue.configs['flat/vue2-recommended'], // Use this if you are using Vue.js 2.x.
  {
    rules: {
      // override/add rules settings here, such as:
      // 'vue/no-unused-vars': 'error'
      'vue/max-attributes-per-line': "off",
      'vue/multi-word-component-names': "off",
      'vue/html-indent': ["warn", 4],
      'vue/script-indent': ["warn", 4, {
        "baseIndent": 0,
        "switchCase": 1,
      }],
    },
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.browser
      }
    }
  }
]