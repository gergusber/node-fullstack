<script setup lang="ts">
import BookItem from './BookItem.vue';


defineProps<{
  data: any
}>()
</script>

<template>
  <div class="book-list">
    <BookItem v-for="book in data" :key="book.slug" :book="book" />
  </div>
</template>