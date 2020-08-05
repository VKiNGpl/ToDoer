<template>
  <FAQForm :faq="faq" :submitForm="updateFAQ">
    <template slot="button">Zapisz</template>
  </FAQForm>
</template>

<script>
import FAQForm from "@/components/FAQForm.vue";
import { ref } from "@vue/composition-api";
import { useRouter } from "@u3u/vue-hooks";

export default {
  components: {
    FAQForm,
  },
  setup() {
    const { router, route } = useRouter();
    const faq = ref({
      question: "",
      answer: "",
    });
    const API_URL = "http://localhost:9999/api/v1/faqs/";

    async function updateFAQ() {
      const { id } = route.value.params;
      const response = await fetch(API_URL + "/" + id, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          question: faq.value.question,
          answer: faq.value.answer,
        }),
      });
      const json = await response.json();
      console.log(json);
      if (response.ok) {
        router.push({
          name: "home",
        });
      } else {
        // TODO: show an error
      }
    }

    async function getCurrentFAQ() {
      const { id } = route.value.params;
      const response = await fetch(API_URL + "/" + id);
      const json = await response.json();
      faq.value = json;
    }

    getCurrentFAQ();

    return {
      faq,
      updateFAQ,
    };
  },
};
</script>

<style>
</style>