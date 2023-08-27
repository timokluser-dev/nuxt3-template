<script setup lang="ts">
import { PetApi } from '~/api';

const {
  data: pet,
  error,
  pending,
  refresh,
} = await useAsyncData('pet', () => {
  console.log('fetching API');
  return new PetApi().getPetById({ petId: 1 });
});

async function onRefreshClick() {
  await refresh();
}
</script>

<template>
  <div>
    <h1>App</h1>
  </div>

  <div>
    <p>API:</p>

    <p v-if="pending">Loading...</p>

    <pre v-else-if="pet" class="text-white"
      >{{ pet }}
    </pre>

    <div v-else-if="error" class="p-3 bg-red-500">
      <p>
        {{ error.message }}
      </p>
    </div>

    <button @click="onRefreshClick">Refresh</button>
  </div>
</template>
