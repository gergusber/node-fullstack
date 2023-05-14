<script setup lang="ts">
import BookList from './components/BookList.vue';
import { useOffsetPagination } from '@vueuse/core';
import { ref, type Ref } from 'vue';
import type { Book } from './model/books';

const books: Ref<Book[]> = ref([]);

const fetchDataFromBack = async () => {
  const data = await fetch('http://localhost:3000/books',)
  return data.json();
}
fetchData({ currentPage: 1, currentPageSize: 5 });

async function fetchData({ currentPage, currentPageSize }: { currentPage: number; currentPageSize: number }) {
  const from = (currentPage - 1) * currentPageSize
  const to = from + currentPageSize
  const dataFromBackend = await fetchDataFromBack();
  books.value = dataFromBackend.books.slice(from, to);
}

const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: 10,
  page: 1,
  pageSize: 5,
  onPageChange: fetchData,
  onPageSizeChange: fetchData,
})


</script>

<template>
  <main>
    <BookList :data=books></BookList>
    
    <div>
      <button @click="prev" :disabled="isFirstPage"> prev </button>
      <div>{{ currentPage }} in {{ pageCount }}</div>
      <button @click="next" :disabled="isLastPage"> next </button>
    </div>

  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
