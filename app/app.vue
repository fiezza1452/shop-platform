<template>
  <div class="min-h-screen bg-gray-50">
    <NuxtRouteAnnouncer />
    <Navbar />
    <main>
      <NuxtPage />
    </main>
    <footer class="bg-gray-800 text-gray-300 text-center py-6 mt-16">
      <p class="text-sm">© 2026 ShopNow · {{ $t('footer') }}</p>
    </footer>
  </div>
</template>
