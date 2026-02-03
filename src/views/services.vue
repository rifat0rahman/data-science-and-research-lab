<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center min-h-screen">
            <div class="text-center">
                <div
                    class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4">
                </div>
                <p class="text-gray-600 font-semibold">Loading services...</p>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="flex items-center justify-center min-h-screen">
            <div class="bg-red-50 border border-red-300 rounded-2xl p-8 max-w-md">
                <div class="text-4xl mb-4">⚠️</div>
                <h3 class="text-xl font-bold text-red-800 mb-2">Failed to Load Services</h3>
                <p class="text-red-600 mb-4">{{ error }}</p>
                <button @click="fetchServices"
                    class="px-6 py-3 bg-red-600 text-white rounded-xl font-semibold hover:bg-red-700 transition">
                    Retry
                </button>
            </div>
        </div>

        <!-- Main Content -->
        <template v-else>
            <!-- Hero Section -->
            <section class="relative py-20 px-6 overflow-hidden">
                <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                <div class="max-w-7xl mx-auto relative z-10">
                    <div class="text-center mb-12">
                        <div
                            class="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-6">
                            🛠️ Professional Services
                        </div>
                        <h1 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                            Data Science & Bioinformatics
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h1>
                        <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            End-to-end consulting, training, and implementation to accelerate your
                            analytics, machine learning, and computational biology initiatives.
                        </p>
                    </div>

                    <!-- Quick Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:scale-105 transition">
                            <div
                                class="text-4xl font-black bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                30+
                            </div>
                            <div class="text-sm text-gray-600 mt-2">Clients Served</div>
                        </div>
                        <div
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:scale-105 transition">
                            <div
                                class="text-4xl font-black bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">
                                50+
                            </div>
                            <div class="text-sm text-gray-600 mt-2">Projects Delivered</div>
                        </div>
                        <div
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:scale-105 transition">
                            <div
                                class="text-4xl font-black bg-gradient-to-br from-green-600 to-green-700 bg-clip-text text-transparent">
                                95%
                            </div>
                            <div class="text-sm text-gray-600 mt-2">Satisfaction Rate</div>
                        </div>
                        <div
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:scale-105 transition">
                            <div
                                class="text-4xl font-black bg-gradient-to-br from-pink-600 to-pink-700 bg-clip-text text-transparent">
                                4.9★
                            </div>
                            <div class="text-sm text-gray-600 mt-2">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Services Grid -->
            <section class="py-16 px-6">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <div
                            class="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-semibold mb-4">
                            💼 What We Offer
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Our
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Services
                            </span>
                        </h2>
                        <p class="text-gray-600 text-lg">
                            Tailored solutions for startups, research groups, and enterprises
                        </p>
                    </div>

                    <!-- No Services State -->
                    <div v-if="services.length === 0" class="text-center py-12">
                        <div class="text-6xl mb-4">📦</div>
                        <p class="text-gray-600 text-lg">No services available at the moment.</p>
                    </div>

                    <!-- Services Cards -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="(svc, index) in services" :key="svc.id"
                            class="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <!-- Header -->
                            <div :class="['relative h-40 p-6 flex items-center gap-4', getRandomGradient(index)]">
                                <div
                                    class="w-14 h-14 bg-white/90 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                                    {{ getServiceIcon(svc.type) }}
                                </div>
                                <div>
                                    <h3 class="text-2xl font-black text-white">{{ svc.Title }}</h3>
                                    <span v-if="svc.mode && svc.mode.length > 0" :class="[
                                        'inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold',
                                        getModeBadgeClass(svc.mode[0].color)
                                    ]">
                                        {{ svc.mode[0].value }}
                                    </span>
                                </div>
                                <div class="absolute inset-0 opacity-20 pointer-events-none"
                                    style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0); background-size: 22px 22px;">
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="p-6">
                                <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {{ svc.Description || 'Service description coming soon.' }}
                                </p>

                                <!-- Highlights -->
                                <div v-if="svc.highlights && svc.highlights.length > 0" class="mb-4">
                                    <h4 class="text-sm font-bold text-gray-900 mb-2">Includes:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span v-for="(item, idx) in svc.highlights" :key="idx"
                                            class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200">
                                            {{ item }}
                                        </span>
                                    </div>
                                </div>

                                <!-- Meta -->
                                <div v-if="svc.mode && svc.mode.length > 0" class="grid grid-cols-1 gap-3 mb-4">
                                    <div class="text-center p-3 bg-white rounded-xl border border-gray-200">
                                        <div class="text-lg font-black text-purple-600">{{ svc.mode[0].value }}</div>
                                        <div class="text-xs text-gray-600 mt-1">Mode</div>
                                    </div>
                                </div>

                                <!-- Actions -->
                                <div class="flex gap-3">
                                    <a v-if="contactLink" :href="contactLink" target="_blank" rel="noopener noreferrer"
                                        class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                                        Collaborate
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Note -->
                    <div class="mt-10 text-center text-sm text-gray-500">
                        Custom packages available on request. Contact us for a tailored scope and quote.
                    </div>
                </div>
            </section>

            <!-- Process / How We Work -->
            <section class="py-16 px-6">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <div
                            class="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-orange-700 text-sm font-semibold mb-4">
                            🔄 Our Process
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            How We
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Work
                            </span>
                        </h2>
                        <p class="text-gray-600 text-lg">
                            A collaborative, transparent approach from discovery to delivery
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div v-for="(step, index) in processSteps" :key="index"
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div
                                class="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md bg-gradient-to-br from-blue-100 to-purple-100">
                                <span class="text-2xl">{{ step.icon }}</span>
                            </div>
                            <div class="text-sm font-bold text-gray-900">{{ step.title }}</div>
                            <div class="text-xs text-gray-600 mt-2 leading-relaxed">{{ step.description }}</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-20 px-6">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
                        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                            Ready to Elevate Your Data Capabilities?
                        </h2>
                        <p class="text-xl text-white/90 mb-8">
                            Let's design a solution that fits your research or business objectives.
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a v-if="contactLink" :href="contactLink"
                                class="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all">
                                Contact Us
                            </a>
                            <a v-if="portfolioLink" :href="portfolioLink"
                                class="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/30 transition-all">
                                View Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

// State
const services = ref([]);
const loading = ref(true);
const error = ref(null);

// External CTA links
const contactLink = 'mailto:ffa.math@just.edu.bd';
const portfolioLink = 'https://scholar.google.com/citations?user=OtW5C_MAAAAJ&hl=en';

// Process steps
const processSteps = [
    { icon: '🧭', title: 'Discover', description: 'Understand goals, constraints, and success metrics.' },
    { icon: '🧩', title: 'Design', description: 'Propose architecture and plan with clear milestones.' },
    { icon: '⚙️', title: 'Build', description: 'Implement, iterate, and validate deliverables.' },
    { icon: '📈', title: 'Deliver', description: 'Handover, documentation, and next-steps roadmap.' }
];

// Gradient backgrounds pool
const gradientBackgrounds = [
    'bg-gradient-to-br from-blue-600 to-purple-600',
    'bg-gradient-to-br from-purple-600 to-indigo-600',
    'bg-gradient-to-br from-green-600 to-teal-600',
    'bg-gradient-to-br from-pink-600 to-rose-600',
    'bg-gradient-to-br from-cyan-600 to-blue-600',
    'bg-gradient-to-br from-amber-600 to-orange-600',
    'bg-gradient-to-br from-red-600 to-pink-600',
    'bg-gradient-to-br from-teal-600 to-emerald-600',
    'bg-gradient-to-br from-indigo-600 to-purple-600',
    'bg-gradient-to-br from-orange-600 to-red-600',
    'bg-gradient-to-br from-violet-600 to-fuchsia-600',
    'bg-gradient-to-br from-lime-600 to-green-600'
];

// Icon mapping based on service type
const serviceIcons = {
    'machine learning': '🤖',
    'bioinformatics': '🧬',
    'analytics': '📊',
    'experimental': '🧪',
    'engineering': '🔧',
    'training': '🎓',
    'consulting': '💼',
    'visualization': '📈',
    'default': '⚡'
};

// Fetch services from Baserow API
const fetchServices = async () => {
    loading.value = true;
    error.value = null;

    try {
        const response = await axios.get(
            'https://api.baserow.io/api/database/rows/table/825430/',
            {
                headers: {
                    'Authorization': 'Token qTloFJMhH7C1iWeoHvguFv6vaCYuvYxo'
                },
                params: {
                    user_field_names: true
                }
            }
        );

        services.value = response.data.results.map(service => ({
            ...service,
            // Parse highlights if stored as JSON string or comma-separated
            highlights: parseHighlights(service.highlights || service.Description)
        }));
    } catch (err) {
        console.error('Error fetching services:', err);
        error.value = err.response?.data?.error || err.message || 'Unable to load services. Please try again later.';
    } finally {
        loading.value = false;
    }
};

// Parse highlights from various formats
const parseHighlights = (data) => {
    if (!data) return [];

    // If already an array
    if (Array.isArray(data)) return data;

    // Try parsing as JSON
    try {
        const parsed = JSON.parse(data);
        if (Array.isArray(parsed)) return parsed;
    } catch (e) {
        // Not JSON, try comma-separated
    }

    // Try comma-separated values
    if (typeof data === 'string') {
        const items = data.split(',').map(s => s.trim()).filter(s => s);
        if (items.length > 0) return items;
    }

    return [];
};

// Get random gradient for service card (deterministic based on index)
const getRandomGradient = (index) => {
    return gradientBackgrounds[index % gradientBackgrounds.length];
};

// Get icon based on service type
const getServiceIcon = (type) => {
    if (!type) return serviceIcons.default;

    const lowerType = type.toLowerCase();
    for (const [key, icon] of Object.entries(serviceIcons)) {
        if (lowerType.includes(key)) return icon;
    }

    return serviceIcons.default;
};

// Get badge class based on mode color
const getModeBadgeClass = (color) => {
    const colorMap = {
        'light-blue': 'bg-blue-100 text-blue-700 border border-blue-200',
        'blue': 'bg-blue-100 text-blue-700 border border-blue-200',
        'purple': 'bg-purple-100 text-purple-700 border border-purple-200',
        'green': 'bg-green-100 text-green-700 border border-green-200',
        'pink': 'bg-pink-100 text-pink-700 border border-pink-200',
        'orange': 'bg-orange-100 text-orange-700 border border-orange-200',
        'red': 'bg-red-100 text-red-700 border border-red-200',
        'yellow': 'bg-yellow-100 text-yellow-700 border border-yellow-200'
    };

    return colorMap[color] || 'bg-white/90 text-gray-700 border border-gray-200';
};

// Lifecycle
onMounted(() => {
    fetchServices();
});
</script>

<style scoped>
/* Smooth transitions matching your existing style */
* {
    transition-property: transform, box-shadow, background-color, border-color;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
}

/* Animation for spinner */
@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>