<template>
  <div>
    <div class="card" v-for="faq in faqs" :key="faq._id">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{faq.question}}</p>
          </div>
        </div>

        <div class="content">{{faq.answer}}</div>
        <button @click="removeFAQ(faq._id)" class="button is-danger my-3">Usuń</button>
        <button @click="editFAQ(faq._id)" class="button is-warning my-3">Edytuj</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "@vue/composition-api";
import { useRouter } from "@u3u/vue-hooks";

export default {
  setup() {
    const { router } = useRouter();
    const faqs = ref([]);

    const API_URL = "http://localhost:9999/api/v1/faqs/";

    async function getFAQs() {
      const response = await fetch(API_URL);
      const json = await response.json();
      faqs.value = json;
    }

    async function removeFAQ(_id) {
      const response = await fetch(API_URL + "/" + _id, {
        method: "DELETE",
      });
      getFAQs();
    }

    getFAQs();

    function editFAQ(_id) {
      router.push({
        name: 'update',
        params: {
          id: _id,
        },
      });
    }

    return {
      faqs,
      removeFAQ,
      editFAQ,
    };
  },
};
</script>

<style>
</style>