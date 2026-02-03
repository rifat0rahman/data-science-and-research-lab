<template>
    <nav class="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">
            <div class="flex items-center justify-between h-20">
                <!-- Logo/Brand -->
                <div class="flex-shrink-0">
                    <router-link to="/" class="flex items-center gap-3 group">
                        <div
                            class="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-lg">
                            <span class="text-2xl">🔬</span>
                        </div>
                        <div>
                            <h1 class="text-xl font-black text-gray-900 leading-tight">
                                Data Science Research
                            </h1>
                            <p class="text-xs text-gray-600 font-semibold">& Training Lab</p>
                        </div>
                    </router-link>
                </div>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-2">
                    <router-link to="/"
                        class="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                        active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gradient-to-r hover: from-blue-700 hover: to-purple-700 shadow-lg hover:shadow-xl">
                        Home
                    </router-link>
                    <router-link to="/training"
                        class="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                        active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl">
                        Training
                    </router-link>
                    <router-link to="/services"
                        class="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                        active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 shadow-lg hover: shadow-xl">
                        Services
                    </router-link>
                    <router-link to="/research"
                        class="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                        active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl">
                        Research
                    </router-link>
                    <router-link to="/about"
                        class="px-6 py-2.5 rounded-full font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700 hover:text-gray-900"
                        active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl">
                        About
                    </router-link>

                    <!-- CTA Button -->
                    <a href="#contact"
                        class="ml-4 px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all">
                        Contact Us
                    </a>
                </div>

                <!-- Mobile Menu Button -->
                <div class="md:hidden">
                    <button @click="mobileMenuOpen = !mobileMenuOpen"
                        class="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        aria-label="Toggle menu">
                        <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                        <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
            </div>

            <!-- Mobile Navigation -->
            <transition enter-active-class="transition duration-200 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-150 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <div v-if="mobileMenuOpen" class="md:hidden py-4 border-t border-gray-200">
                    <div class="flex flex-col gap-2">
                        <router-link to="/" @click="mobileMenuOpen = false"
                            class="px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700"
                            active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gradient-to-r hover: from-blue-700 hover: to-purple-700">
                            🏠 Home
                        </router-link>
                        <router-link to="/training" @click="mobileMenuOpen = false"
                            class="px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700"
                            active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: bg-gradient-to-r hover:from-blue-700 hover:to-purple-700">
                            🎓 Training
                        </router-link>
                        <router-link to="/services" @click="mobileMenuOpen = false"
                            class="px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700"
                            active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover: bg-gradient-to-r hover:from-blue-700 hover:to-purple-700">
                            💼 Services
                        </router-link>
                        <router-link to="/research" @click="mobileMenuOpen = false"
                            class="px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700"
                            active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gradient-to-r hover: from-blue-700 hover: to-purple-700">
                            🔬 Research
                        </router-link>
                        <router-link to="/about" @click="mobileMenuOpen = false"
                            class="px-4 py-3 rounded-xl font-semibold text-sm transition-all hover:bg-gray-100 text-gray-700"
                            active-class="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:bg-gradient-to-r hover: from-blue-700 hover: to-purple-700">
                            ℹ️ About
                        </router-link>
                        <a href="mailto:ffa.math@just.edu.bd" @click="mobileMenuOpen = false"
                            class="mt-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-sm text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                            📧 Contact Us
                        </a>
                    </div>
                </div>
            </transition>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);
</script>

<style scoped>
/* Optional: Add smooth scroll behavior */
a {
    scroll-behavior: smooth;
}

/* Active link hover state fix */
.router-link-active {
    background-color: transparent;
    color: inherit;
}
</style>