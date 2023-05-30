<template>
  <q-page class="flex row flex-center q-gutter-md">
    <q-input v-model="key"
             @keyup.enter="onSearch"
             dense
             label="Enter the search key..."
             outlined
    />
    <q-btn v-on:click="onSearch"
           :disable="ifSearchDisabled"
           color="primary"
    >
      Search
    </q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { encodeKey } from "../utils/codec";

export default defineComponent({
  name: "IndexPage",
  data() {
    return {
      key: null
    };
  },
  computed: {
    ifSearchDisabled() {
      return !(this.key?.length >= 3);
    }
  },
  methods: {
    onSearch() {
      const key = encodeKey(this.key);
      this.$router.push(`/search/${key}`);
    }
  }
});
</script>
