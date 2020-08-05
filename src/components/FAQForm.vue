<template>
  <form @submit.prevent="submitForm">
    <div class="field">
      <label class="label">Do Zrobienia:</label>
      <div class="control">
        <input
          v-model="faq.question"
          class="input"
          type="text"
          name="question"
          placeholder="Na przykład: Pranie"
          required
        />
      </div>
    </div>

    <div class="field">
      <label class="label">Szczegóły:</label>
      <div class="control">
        <textarea
          v-model="faq.answer"
          class="textarea"
          rows="4"
          type="text"
          name="answer"
          placeholder="Na przykład: Kolorowe"
        />
      </div>
      <button type="submit" class="button is-success">Dodaj</button>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/composition-api";

export default {
  props: ["submitForm", 'faq'],
};
</script>

<style>
</style>