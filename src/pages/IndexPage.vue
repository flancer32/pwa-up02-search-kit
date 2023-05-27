<template>
  <q-page class="flex flex-center column">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <q-btn style="margin-top: 20px;" color="primary" to="/shop">Search Kit</q-btn>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage"
});
</script>
