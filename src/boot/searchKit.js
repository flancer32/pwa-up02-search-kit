// see https://github.com/searchkit/searchkit/blob/main/examples/with-ui-vue/src/main.ts
import InstantSearch from "vue-instantsearch/vue3/es";

export default function({ app }) {
  app.use(InstantSearch);
}

