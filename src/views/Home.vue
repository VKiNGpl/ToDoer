<template>
  <div class="home">
    <router-link :to="{ name: 'create' }" class="button is-success mx-5 my-5">Dodaj</router-link>
    <FAQList />
  </div>
</template>

<script>
// @ is an alias to /src
import FAQList from '@/components/FAQList.vue'

export default {
  components: {
    FAQList,
  },
};
</script>
