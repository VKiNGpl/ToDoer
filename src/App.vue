<template>
  <div id="app">
    <Navbar />
    <div class="container mt-5">
      <router-view />
    </div>
    <!-- <UseFetch url="https://someapi.com">
      <slot v-slot="{ loading, data, error }">

      </slot>
    </UseFetch> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>

<style lang="scss">

</style>
