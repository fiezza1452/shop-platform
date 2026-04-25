<template>
  <div class="max-w-5xl mx-auto px-4 py-10">
    <NuxtLink to="/products" class="text-indigo-600 hover:underline text-sm mb-6 inline-block">{{ $t('product.back') }}</NuxtLink>

    <div v-if="product" class="bg-white rounded-2xl shadow-md overflow-hidden">
      <div class="grid md:grid-cols-2 gap-0">
        <!-- Image -->
        <div class="relative">
          <img :src="product.image" :alt="product.name" class="w-full h-96 md:h-full object-cover" />
          <span v-if="product.originalPrice" class="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
            ลด {{ Math.round((1 - product.price / product.originalPrice) * 100) }}%
          </span>
        </div>

        <!-- Info -->
        <div class="p-8 flex flex-col justify-center">
          <span class="text-sm text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full w-fit">{{ product.category }}</span>
          <h1 class="text-3xl font-bold text-gray-800 mt-3">{{ product.name }}</h1>

          <!-- Rating -->
          <div class="flex items-center gap-2 mt-2">
            <div class="flex text-yellow-400">
              <Icon v-for="i in 5" :key="i" :name="i <= Math.round(product.rating) ? 'mdi:star' : 'mdi:star-outline'" class="w-5 h-5" />
            </div>
            <span class="text-gray-500 text-sm">{{ product.rating }} ({{ product.reviews }} {{ $t('products.reviews') }})</span>
          </div>

          <!-- Price -->
          <div class="flex items-baseline gap-3 mt-4">
            <span class="text-4xl font-extrabold text-indigo-600">฿{{ product.price.toLocaleString() }}</span>
            <span v-if="product.originalPrice" class="text-lg text-gray-400 line-through">฿{{ product.originalPrice.toLocaleString() }}</span>
          </div>

          <!-- Description -->
          <p class="text-gray-600 mt-4 leading-relaxed">{{ product.description }}</p>

          <!-- Stock -->
          <div class="mt-4 flex items-center gap-2">
            <div class="w-2.5 h-2.5 rounded-full" :class="product.inStock ? 'bg-green-500' : 'bg-red-400'"></div>
            <span class="text-sm font-medium" :class="product.inStock ? 'text-green-600' : 'text-red-500'">
            {{ product.inStock ? $t('product.in_stock') : $t('product.out_of_stock') }}
            </span>
          </div>

          <!-- Quantity -->
          <div v-if="product.inStock" class="flex items-center gap-3 mt-5">
            <button @click="qty > 1 && qty--" class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <Icon name="mdi:minus" class="w-4 h-4" />
            </button>
            <span class="w-8 text-center font-semibold text-lg">{{ qty }}</span>
            <button @click="qty++" class="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <Icon name="mdi:plus" class="w-4 h-4" />
            </button>
          </div>

          <!-- Add to cart -->
          <button
            :disabled="!product.inStock"
            @click="handleAddToCart"
            class="mt-6 py-3 px-8 rounded-xl font-bold text-lg transition-all w-full flex items-center justify-center gap-2"
            :class="product.inStock
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'"
          >
            <Icon :name="product.inStock ? 'mdi:cart-plus' : 'mdi:cart-off'" class="w-6 h-6" />
            {{ product.inStock ? $t('product.add_to_cart') : $t('product.out_of_stock') }}
          </button>

          <div v-if="addedMsg" class="mt-3 text-center text-green-600 font-medium text-sm">{{ $t('product.added') }}</div>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20 text-gray-400">
      <Icon name="mdi:emoticon-sad-outline" class="w-16 h-16 mx-auto mb-4 text-gray-300" />
      <p>{{ $t('product.not_found') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'

const route = useRoute()
const product = products.find((p) => p.id === Number(route.params.id))
const qty = ref(1)
const addedMsg = ref(false)

const { addToCart } = useCart()

function handleAddToCart() {
  if (!product) return
  for (let i = 0; i < qty.value; i++) {
    addToCart(product)
  }
  addedMsg.value = true
  setTimeout(() => (addedMsg.value = false), 2000)
}
</script>
