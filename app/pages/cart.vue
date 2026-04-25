<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <h1 class="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-2">
      <Icon name="mdi:cart" class="w-8 h-8 text-indigo-600" /> {{ $t('cart.title') }}
    </h1>

    <div v-if="cartItems.length > 0" class="flex flex-col lg:flex-row gap-8">
      <!-- Cart Items -->
      <div class="flex-1 space-y-4">
        <div
          v-for="item in cartItems"
          :key="item.id"
          class="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4"
        >
          <img :src="item.image" :alt="item.name" class="w-20 h-20 object-cover rounded-xl flex-shrink-0" />
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-gray-800 truncate">{{ item.name }}</h3>
            <span class="text-xs text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">{{ item.category }}</span>
            <p class="text-indigo-600 font-bold mt-1">฿{{ item.price.toLocaleString() }}</p>
          </div>
          <div class="flex items-center gap-2 flex-shrink-0">
            <button @click="updateQuantity(item.id, item.quantity - 1)" class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <Icon name="mdi:minus" class="w-4 h-4" />
            </button>
            <span class="w-6 text-center font-semibold">{{ item.quantity }}</span>
            <button @click="updateQuantity(item.id, item.quantity + 1)" class="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100">
              <Icon name="mdi:plus" class="w-4 h-4" />
            </button>
          </div>
          <div class="text-right flex-shrink-0">
            <p class="font-bold text-gray-800">฿{{ (item.price * item.quantity).toLocaleString() }}</p>
            <button @click="removeFromCart(item.id)" class="text-red-400 hover:text-red-600 mt-1 flex items-center gap-0.5 text-xs ml-auto">
              <Icon name="mdi:trash-can-outline" class="w-4 h-4" /> {{ $t('cart.remove') }}
            </button>
          </div>
        </div>
      </div>

      <!-- Summary -->
      <div class="lg:w-72">
        <div class="bg-white rounded-2xl shadow-sm p-6 sticky top-20">
          <h2 class="text-lg font-bold text-gray-800 mb-4">{{ $t('cart.summary') }}</h2>
          <div class="space-y-2 text-sm text-gray-600">
            <div class="flex justify-between">
              <span>{{ $t('cart.items', { count: totalItems }) }}</span>
              <span>฿{{ totalPrice.toLocaleString() }}</span>
            </div>
            <div class="flex justify-between">
              <span>{{ $t('cart.shipping') }}</span>
              <span class="text-green-600 font-medium">{{ $t('cart.free') }}</span>
            </div>
            <div class="border-t pt-2 flex justify-between font-bold text-gray-800 text-base">
              <span>{{ $t('cart.total') }}</span>
              <span class="text-indigo-600">฿{{ totalPrice.toLocaleString() }}</span>
            </div>
          </div>
          <button
            @click="handleCheckout"
            class="mt-5 w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors active:scale-95"
          >
            {{ $t('cart.checkout') }}
          </button>
          <NuxtLink to="/products" class="mt-3 block text-center text-indigo-600 text-sm hover:underline">
            {{ $t('cart.continue') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Empty cart -->
    <div v-else class="text-center py-24">
      <Icon name="mdi:cart-off" class="w-20 h-20 text-gray-300 mx-auto mb-4" />
      <h2 class="text-xl font-semibold text-gray-700 mb-2">{{ $t('cart.empty_title') }}</h2>
      <p class="text-gray-400 mb-6">{{ $t('cart.empty_sub') }}</p>
      <NuxtLink to="/products" class="bg-indigo-600 text-white font-bold px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors">
        {{ $t('cart.start_shop') }}
      </NuxtLink>
    </div>

    <!-- Checkout success modal -->
    <div v-if="showSuccess" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div class="bg-white rounded-2xl p-8 max-w-sm mx-4 text-center shadow-2xl">
        <Icon name="mdi:check-circle" class="w-16 h-16 text-green-500 mx-auto mb-3" />
        <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ $t('cart.success_title') }}</h2>
        <p class="text-gray-500 mb-5 whitespace-pre-line">{{ $t('cart.success_sub') }}</p>
        <button @click="closeSuccess" class="bg-indigo-600 text-white font-bold px-6 py-2.5 rounded-full hover:bg-indigo-700">
          {{ $t('cart.back_home') }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { cartItems, totalItems, totalPrice, removeFromCart, updateQuantity, clearCart } = useCart()
const showSuccess = ref(false)

function handleCheckout() {
  showSuccess.value = true
  clearCart()
}

function closeSuccess() {
  showSuccess.value = false
  navigateTo('/')
}
</script>
