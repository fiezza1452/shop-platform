<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center gap-2">
          <span class="text-2xl font-extrabold text-indigo-600">ShopNow</span>
        </NuxtLink>

        <!-- Nav links -->
        <div class="hidden md:flex items-center gap-6">
          <NuxtLink to="/" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">{{ $t('nav.home') }}</NuxtLink>
          <NuxtLink to="/products" class="text-gray-600 hover:text-indigo-600 font-medium transition-colors">{{ $t('nav.products') }}</NuxtLink>
        </div>

        <div class="flex items-center gap-3">
          <!-- Lang switcher -->
          <button
            @click="toggleLang"
            class="flex items-center gap-1 border border-gray-300 rounded-full px-3 py-1.5 text-sm font-medium text-gray-600 hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            <Icon name="mdi:translate" class="w-4 h-4" />
            {{ locale === 'th' ? 'EN' : 'TH' }}
          </button>

          <!-- Auth links -->
          <template v-if="!isLoggedIn">
            <NuxtLink to="/login" class="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors">
              {{ $t('nav.login') }}
            </NuxtLink>
            <NuxtLink to="/register" class="bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
              {{ $t('nav.register') }}
            </NuxtLink>
          </template>
          <template v-else>
            <span class="text-sm text-gray-600 font-medium">{{ user?.name }}</span>
            <button @click="logout" class="text-sm text-red-500 hover:text-red-700 font-medium transition-colors">
              {{ $t('nav.logout') }}
            </button>
          </template>

          <!-- Cart -->
          <NuxtLink to="/cart" class="relative flex items-center gap-1 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            <Icon name="mdi:cart-outline" class="h-5 w-5" />
            <span class="font-medium">{{ $t('nav.cart') }}</span>
            <span v-if="totalItems > 0" class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {{ totalItems }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()
const { totalItems } = useCart()
const { isLoggedIn, user, logout } = useAuth()

function toggleLang() {
  setLocale(locale.value === 'th' ? 'en' : 'th')
}
</script>

