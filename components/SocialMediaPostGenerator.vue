<script setup lang="ts">

interface aiData {
  ai?: string;
}
let myAI = ref<aiData>({});
let gotData = ref<boolean>(false);

async function getAI(message = '') {

  const res: aiData = await $fetch("/api/ai", {
    method: "POST",
    body: {
      message,
    },
  });
  if (!res) return;

  myAI.value = res;
  gotData.value = true;

}

</script>

<template>
  <div class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-4xl my-10">Social Media Post Generator</h1>
        <button class="btn btn-primary" @click="getAI()">Get some!</button>
        <button class="btn btn-secondary" @click="getAI('hello')">Get even more!</button>

        <p class="py-6" v-if="gotData">hello ai? {{ myAI?.ai }}</p>
      </div>
    </div>
  </div>

  <!-- ImportUrlForm Here -->

  <div>
    <!-- Twitter Card Here -->
    <!-- Facebook Card Here -->
    <!-- Images Card Here -->
  </div>
  <hr />
</template>
