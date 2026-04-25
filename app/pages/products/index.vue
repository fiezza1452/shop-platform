<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">{{ $t('products.title') }}</h1>

    <!-- Filter & Search -->
    <div class="flex flex-col sm:flex-row gap-4 mb-8">
      <input
        v-model="search"
        type="text"
        :placeholder="$t('products.search')"
        class="flex-1 border border-gray-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <div class="flex gap-2 flex-wrap">
        <button
          v-for="cat in allCategories"
          :key="cat.value"
          @click="selectedCategory = cat.value"
          class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
          :class="selectedCategory === cat.value
            ? 'bg-indigo-600 text-white'
            : 'bg-white border border-gray-300 text-gray-600 hover:border-indigo-400'"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Results count -->
    <p class="text-gray-500 text-sm mb-4">{{ $t('products.found', { count: filteredProducts.length }) }}</p>

    <!-- Grid -->
    <div v-if="filteredProducts.length > 0" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
    <div v-else class="text-center py-20 text-gray-400">
      <Icon name="mdi:magnify" class="w-16 h-16 mx-auto mb-4 text-gray-300" />
      <p class="text-lg">{{ $t('products.not_found') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products, categories } from '~/data/products'

const { t } = useI18n()

const search = ref('')
const selectedCategory = ref('all')

const allCategories = computed(() => [
  { value: 'all', label: t('products.all') },
  ...categories.filter((c) => c !== 'ทั้งหมด').map((c) => ({ value: c, label: c })),
])

const filteredProducts = computed(() => {
  return products.filter((p) => {
    const matchCategory = selectedCategory.value === 'all' || p.category === selectedCategory.value
    const matchSearch = p.name.toLowerCase().includes(search.value.toLowerCase())
    return matchCategory && matchSearch
  })
})
</script>
