
<script setup lang="ts">
defineProps<{ book: any }>()


</script>

<template>
  <div class="book-item">
    <div class="book-cover">
      <img :src="book.cover" alt="Book cover" />
    </div>
    <div class="book-details">
      <h2>{{ book.title }}</h2>
      <h3>{{ book.author }}</h3>
      <p>{{ book.synopsis }}</p>
      <div class="rating">
        <span class="rating-number">{{ book.rating }}</span>
        <i class="fa fa-star"></i>
      </div>
      <div class="upvotes">
        <span class="upvotes-number">{{ book.upvotes }}</span>
        <!-- <i class="fa fa-thumbs-up" :class="{ 'upvoted': book.upvoted }" @click="upvoteBook"></i> -->
      </div>
    </div>
  </div>
</template>


<style scoped>
.book-item {
  display: flex;
  margin-bottom: 2rem;
}

.book-cover {
  width: 150px;
  height: 200px;
  margin-right: 1rem;
  border: 1px solid #ccc;
}

.book-cover img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.book-details {
  flex: 1;
}

.book-details h2 {
  margin-top: 0;
}

.rating {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.rating-number {
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 0.5rem;
}

.upvotes {
  display: flex;
  align-items: center;
}

.upvotes-number {
  margin-right: 0.5rem;
  font-weight: bold;
}

.fa {
  font-size: 1.5rem;
  cursor: pointer;
}

.fa-star {
  color: #ffc107;
}

.fa-thumbs-up.upvoted {
  color: #4caf50;
}
</style>
