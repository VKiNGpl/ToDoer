import { ref } from '@vue/composition-api';

import API_URL from '../API_URL';

export default function UseFAQs() {
    const faqs = ref([]);

    async function getFAQs() {
      const response = await fetch(API_URL);
      const json = await response.json();
      faqs.value = json;
    }
    
    return {
        faqs,
        getFAQs,
    };
}