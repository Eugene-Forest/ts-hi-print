<template>
  <!-- <h1>hi print</h1> -->
  <!-- <div>
      <RouterLink to="/designer">designer</RouterLink>

      <RouterLink to="/render">render</RouterLink>
  </div>
  <RouterView /> -->
  <Designer></Designer>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

// const $router = useRouter();
onMounted(() => {
    console.log("hiprint ");
    // $router.push('/designer')
});
</script>

<style lang="css" scoped></style>
