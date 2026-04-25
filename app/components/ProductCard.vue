<template>
  <div class="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
    <NuxtLink :to="`/products/${product.id}`">
      <div class="relative overflow-hidden">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span v-if="product.originalPrice" class="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          -{{ Math.round((1 - product.price / product.originalPrice) * 100) }}%
        </span>
        <span v-if="!product.inStock" class="absolute inset-0 bg-black/40 flex items-center justify-center">
          <span class="bg-white text-gray-700 font-semibold px-3 py-1 rounded-full text-sm">สินค้าหมด</span>
        </span>
      </div>
    </NuxtLink>

    <div class="p-4">
      <span class="text-xs text-indigo-600 font-medium bg-indigo-50 px-2 py-0.5 rounded-full">{{ product.category }}</span>
      <NuxtLink :to="`/products/${product.id}`">
        <h3 class="mt-2 text-gray-800 font-semibold text-lg leading-tight hover:text-indigo-600 transition-colors line-clamp-2">
          {{ product.name }}
        </h3>
      </NuxtLink>

      <!-- Rating -->
      <div class="flex items-center gap-1 mt-1">
        <div class="flex text-yellow-400">
          <Icon v-for="i in 5" :key="i" :name="i <= Math.round(product.rating) ? 'mdi:star' : 'mdi:star-outline'" class="w-4 h-4" />
        </div>
        <span class="text-xs text-gray-500">({{ product.reviews }} {{ $t('products.reviews') }})</span>
      </div>

      <!-- Price -->
      <div class="flex items-center gap-2 mt-2">
        <span class="text-xl font-bold text-indigo-600">฿{{ product.price.toLocaleString() }}</span>
        <span v-if="product.originalPrice" class="text-sm text-gray-400 line-through">฿{{ product.originalPrice.toLocaleString() }}</span>
      </div>

      <button
        :disabled="!product.inStock"
        @click="addToCart(product)"
        class="mt-3 w-full py-2 rounded-xl font-semibold text-sm transition-all"
        :class="product.inStock
          ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
          : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
      >
        <span class="flex items-center justify-center gap-1">
          <Icon v-if="product.inStock" name="mdi:cart-plus" class="w-4 h-4" />
          <Icon v-else name="mdi:cart-off" class="w-4 h-4" />
          {{ product.inStock ? $t('products.add_to_cart') : $t('products.out_of_stock') }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/data/products'

defineProps<{ product: Product }>()

const { addToCart } = useCart()
</script>
