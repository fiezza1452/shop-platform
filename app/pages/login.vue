<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4 py-12">
    <div class="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
      <!-- Logo -->
      <div class="text-center mb-8">
        <span class="text-3xl font-extrabold text-indigo-600">ShopNow</span>
        <h1 class="text-2xl font-bold text-gray-800 mt-2">{{ $t('login.title') }}</h1>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('login.email') }}</label>
          <div class="relative">
            <Icon name="mdi:email-outline" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="form.email"
              type="email"
              required
              :placeholder="$t('login.email')"
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('login.password') }}</label>
          <div class="relative">
            <Icon name="mdi:lock-outline" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="form.password"
              :type="showPass ? 'text' : 'password'"
              required
              :placeholder="$t('login.password')"
              class="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button type="button" @click="showPass = !showPass" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Icon :name="showPass ? 'mdi:eye-off-outline' : 'mdi:eye-outline'" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between text-sm">
          <span></span>
          <a href="#" class="text-indigo-600 hover:underline">{{ $t('login.forgot') }}</a>
        </div>

        <div v-if="error" class="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-xl flex items-center gap-2">
          <Icon name="mdi:alert-circle-outline" class="w-4 h-4" /> {{ error }}
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors active:scale-95 flex items-center justify-center gap-2"
        >
          <Icon name="mdi:login" class="w-5 h-5" />
          {{ $t('login.btn') }}
        </button>
      </form>

      <p class="text-center text-sm text-gray-500 mt-6">
        {{ $t('login.no_account') }}
        <NuxtLink to="/register" class="text-indigo-600 font-medium hover:underline ml-1">{{ $t('login.register_link') }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { login } = useAuth()

const form = reactive({ email: '', password: '' })
const showPass = ref(false)
const error = ref('')

function handleLogin() {
  // Simple mock auth - accept any email/password
  if (form.email && form.password.length >= 6) {
    const name = form.email.split('@')[0]
    login(form.email, name)
    navigateTo('/')
  } else {
    error.value = t('login.password') + ' ต้องมีอย่างน้อย 6 ตัวอักษร'
  }
}
</script>
