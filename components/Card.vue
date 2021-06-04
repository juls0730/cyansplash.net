<template>
  <div class="p-1">
    <div class="max-w-md rounded-lg overflow-hidden shadow-lg">
      <p class="text-lg font-semibold p-2">{{ name }}</p>
      <hr class="p-1" />
      <p class="p-1 pb-2 pt-0">
        {{ description }}
      </p>
      <hr class="p-1" />
      <div class="p-2">
        <div v-if="link1 && link2" class="flex justify-end">
          <a :href="link1">
            <button class="button rounded-l">
              {{ button1 }}
            </button>
          </a>
          <a :href="link2">
            <button class="button rounded-r">
              {{ button2 }}
            </button>
          </a>
        </div>
        <div v-if="link1 && !link2" class="flex justify-end">
          <a :href="link1">
            <button class="button rounded">
              {{ button1 }}
            </button>
          </a>
        </div>
        <div v-if="!link1 && link2" class="flex justify-end">
          <a :href="link2">
            <button class="button rounded">
              {{ button2 }}
            </button>
          </a>
        </div>
        <div v-if="!link1 && !link2" class="flex justify-end">
          <p v-if="!link1 && !link2" class="font-semibold pr-1">Coming Soon!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  props: ['name', 'description', 'button1', 'button2', 'link1', 'link2'],
  /* eslint-enable */
}
</script>
