<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 px-4 py-12">
    <div class="bg-white rounded-3xl shadow-xl w-full max-w-md p-8">
      <!-- Logo -->
      <div class="text-center mb-8">
        <span class="text-3xl font-extrabold text-indigo-600">ShopNow</span>
        <h1 class="text-2xl font-bold text-gray-800 mt-2">{{ $t('register.title') }}</h1>
      </div>

      <div v-if="success" class="bg-green-50 text-green-700 text-sm px-4 py-3 rounded-xl flex items-center gap-2 mb-5">
        <Icon name="mdi:check-circle-outline" class="w-5 h-5" /> {{ $t('register.success') }}
      </div>

      <form @submit.prevent="handleRegister" class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('register.name') }}</label>
          <div class="relative">
            <Icon name="mdi:account-outline" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="form.name"
              type="text"
              required
              :placeholder="$t('register.name')"
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('register.email') }}</label>
          <div class="relative">
            <Icon name="mdi:email-outline" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="form.email"
              type="email"
              required
              :placeholder="$t('register.email')"
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('register.password') }}</label>
          <div class="relative">
            <Icon name="mdi:lock-outline" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="form.password"
              :type="showPass ? 'text' : 'password'"
              required
              :placeholder="$t('register.password')"
              class="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <button type="button" @click="showPass = !showPass" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Icon :name="showPass ? 'mdi:eye-off-outline' : 'mdi:eye-outline'" class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">{{ $t('register.confirm_password') }}</label>
          <div class="relative">
            <Icon name="mdi:lock-check-outline" class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              v-model="form.confirmPassword"
              :type="showPass ? 'text' : 'password'"
              required
              :placeholder="$t('register.confirm_password')"
              class="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>
        </div>

        <div v-if="error" class="bg-red-50 text-red-600 text-sm px-4 py-2 rounded-xl flex items-center gap-2">
          <Icon name="mdi:alert-circle-outline" class="w-4 h-4" /> {{ error }}
        </div>

        <button
          type="submit"
          class="w-full bg-indigo-600 text-white font-bold py-3 rounded-xl hover:bg-indigo-700 transition-colors active:scale-95 flex items-center justify-center gap-2"
        >
          <Icon name="mdi:account-plus-outline" class="w-5 h-5" />
          {{ $t('register.btn') }}
        </button>
      </form>

      <p class="text-center text-sm text-gray-500 mt-6">
        {{ $t('register.have_account') }}
        <NuxtLink to="/login" class="text-indigo-600 font-medium hover:underline ml-1">{{ $t('register.login_link') }}</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()

const form = reactive({ name: '', email: '', password: '', confirmPassword: '' })
const showPass = ref(false)
const error = ref('')
const success = ref(false)

function handleRegister() {
  error.value = ''
  if (form.password.length < 6) {
    error.value = t('register.password') + ' ต้องมีอย่างน้อย 6 ตัวอักษร'
    return
  }
  if (form.password !== form.confirmPassword) {
    error.value = 'รหัสผ่านไม่ตรงกัน / Passwords do not match'
    return
  }
  success.value = true
  setTimeout(() => navigateTo('/login'), 1500)
}
</script>
