<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 px-4">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-5xl font-extrabold leading-tight mb-4 whitespace-pre-line">{{ $t('home.hero_title') }}</h1>
        <p class="text-indigo-200 text-lg mb-8">{{ $t('home.hero_sub') }}</p>
        <NuxtLink to="/products" class="inline-block bg-white text-indigo-600 font-bold px-8 py-3 rounded-full hover:bg-indigo-50 transition-colors text-lg shadow-lg">
          {{ $t('home.hero_btn') }}
        </NuxtLink>
      </div>
    </section>

    <!-- Stats -->
    <section class="bg-white py-8 border-b">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <Icon name="mdi:package-variant-closed" class="w-8 h-8 text-indigo-400 mx-auto mb-1" />
          <p class="text-3xl font-bold text-indigo-600">500+</p>
          <p class="text-gray-500 text-sm mt-1">{{ $t('home.stats_products') }}</p>
        </div>
        <div>
          <Icon name="mdi:account-group" class="w-8 h-8 text-indigo-400 mx-auto mb-1" />
          <p class="text-3xl font-bold text-indigo-600">10K+</p>
          <p class="text-gray-500 text-sm mt-1">{{ $t('home.stats_customers') }}</p>
        </div>
        <div>
          <Icon name="mdi:truck-fast-outline" class="w-8 h-8 text-indigo-400 mx-auto mb-1" />
          <p class="text-3xl font-bold text-indigo-600">24h</p>
          <p class="text-gray-500 text-sm mt-1">{{ $t('home.stats_delivery') }}</p>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="max-w-7xl mx-auto px-4 py-14">
      <div class="flex items-center justify-between mb-8">
        <h2 class="text-3xl font-bold text-gray-800">{{ $t('home.featured') }}</h2>
        <NuxtLink to="/products" class="text-indigo-600 hover:underline font-medium">{{ $t('home.view_all') }}</NuxtLink>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ProductCard v-for="product in featuredProducts" :key="product.id" :product="product" />
      </div>
    </section>

    <!-- Banner -->
    <section class="bg-indigo-50 py-14 px-4">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-indigo-600 rounded-3xl px-10 py-10 text-white">
        <div>
          <h3 class="text-2xl font-bold mb-2">{{ $t('home.promo_title') }}</h3>
          <p class="text-indigo-200">{{ $t('home.promo_sub') }}</p>
        </div>
        <NuxtLink to="/products" class="bg-white text-indigo-600 font-bold px-6 py-3 rounded-full hover:bg-indigo-50 transition-colors whitespace-nowrap">
          {{ $t('home.promo_btn') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { products } from '~/data/products'

const featuredProducts = products.slice(0, 4)
</script>
