<template>
  <div>
    <slot :faqs="faqs"></slot>
  </div>
</template>
<script>
import useFAQs from "../hooks/useFAQs";

export default {
  setup() {
    const { faqs, getFAQs } = useFAQs();

    getFAQs();

    return {
      faqs,
    };
  },
};
</script>

<style>
</style>