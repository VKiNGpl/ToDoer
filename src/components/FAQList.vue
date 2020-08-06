<template>
  <UseFAQs>
    <template v-slot="{ faqs }">
      <div class="card my-2" v-for="faq in faqs" :key="faq._id">
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
    </template>
  </UseFAQs>
</template>

<script>
import { useRouter } from "@u3u/vue-hooks";

import UseFAQs from "@/components/UseFAQs.vue";
import API_URL from "../API_URL";

export default {
  components: {
    UseFAQs,
  },
  setup() {
    const { router } = useRouter();

    async function removeFAQ(_id) {
      const response = await fetch(API_URL + "/" + _id, {
        method: "DELETE",
      });
      // getFAQs();
    }

    // getFAQs();

    function editFAQ(_id) {
      router.push({
        name: "update",
        params: {
          id: _id,
        },
      });
    }

    return {
      removeFAQ,
      editFAQ,
    };
  },
};
</script>

<style>
</style>