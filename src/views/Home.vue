<template>
  <div class="home">
    <div class="counter">
      <p>count: {{ count }}</p>
      <p>
        <button @click="increase">+</button>
        <button @click="decrease">-</button>
      </p>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { defineComponent, ref } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const count = ref(0);
    const increase = () => {
      count.value++;
    };
    const decrease = () => {
      count.value--;
    };

    return {
      count,
      increase,
      decrease,
    };
  },
});
</script>
