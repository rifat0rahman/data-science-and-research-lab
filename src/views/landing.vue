<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 text-gray-900">
        <!-- Hero Slider -->
        <section class="relative h-screen overflow-hidden">
            <div v-for="(slide, idx) in slides" :key="idx" :class="[
                'absolute inset-0 transition-all duration-1000',
                activeIndex === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            ]">
                <div class="absolute inset-0 bg-cover bg-center" :style="{ backgroundImage: `url(${slide.image})` }">
                </div>
                <div :class="['absolute inset-0 bg-gradient-to-r', slide.gradient]"></div>

                <div class="relative h-full flex items-center">
                    <div class="max-w-7xl mx-auto px-6 lg:px-12">
                        <div class="max-w-3xl">
                            <h1 class="text-5xl md:text-7xl font-black leading-tight mb-6 text-white drop-shadow-lg">
                                {{ slide.title }}
                            </h1>
                            <p class="text-xl md:text-2xl text-white mb-8 drop-shadow-md">
                                {{ slide.subtitle }}
                            </p>
                            <div class="flex gap-4">
                                <a href="#about"
                                    class="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all">
                                    Explore Our Work
                                </a>
                                <a href="mailto:ffa.math@just.edu.bd"
                                    class="px-8 py-4 bg-white/90 text-gray-900 rounded-full font-semibold backdrop-blur-sm hover:bg-white transition-all shadow-lg">
                                    Get in Touch
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Slider Controls -->
            <button @click="prev"
                class="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-center hover:bg-white transition-all z-10 shadow-lg">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button @click="next"
                class="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-center hover:bg-white transition-all z-10 shadow-lg">
                <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
            </button>

            <!-- Indicators -->
            <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                <button v-for="(_, idx) in slides" :key="idx" @click="goTo(idx)" :class="[
                    'transition-all rounded-full shadow-md',
                    activeIndex === idx ? 'w-12 h-3 bg-blue-600' : 'w-3 h-3 bg-white/60 hover:bg-white/80'
                ]">
                </button>
            </div>

            <!-- Scroll Indicator -->
            <div class="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
                <svg class="w-6 h-6 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>

        <!-- Stats Banner -->
        <section class="relative -mt-20 z-20">
            <div class="max-w-7xl mx-auto px-6">
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8">
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div class="text-center transform hover:scale-105 transition-transform">
                            <div class="text-4xl md:text-5xl font-black text-yellow-300">24</div>
                            <div class="text-sm md:text-base text-white mt-2">Publications (2023-25)</div>
                        </div>
                        <div class="text-center transform hover:scale-105 transition-transform">
                            <div class="text-4xl md:text-5xl font-black text-green-300">8</div>
                            <div class="text-sm md:text-base text-white mt-2">Active Projects</div>
                        </div>
                        <div class="text-center transform hover:scale-105 transition-transform">
                            <div class="text-4xl md:text-5xl font-black text-pink-300">12</div>
                            <div class="text-sm md:text-base text-white mt-2">Team Members</div>
                        </div>
                        <div class="text-center transform hover:scale-105 transition-transform">
                            <div class="text-4xl md:text-5xl font-black text-cyan-300">3</div>
                            <div class="text-sm md:text-base text-white mt-2">Open Positions</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="py-24 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div
                            class="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-6">
                            About the Lab
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black mb-6 leading-tight text-gray-900">
                            Pioneering <span
                                class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Computational
                                Biology</span>
                        </h2>
                        <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                            Our lab combines machine learning, systems biology, and high-throughput experiments to build
                            predictive models of cellular behavior. We collaborate widely with experimentalists and
                            clinicians to translate computational insights into testable hypotheses.
                        </p>

                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div
                                class="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-blue-400 transition-all hover:shadow-xl">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-2xl">🧠</span>
                                </div>
                                <h3 class="text-lg font-bold mb-2 text-gray-900">Interpretable ML</h3>
                                <p class="text-sm text-gray-600">Models that provide mechanistic insights, not just
                                    predictions.</p>
                            </div>

                            <div
                                class="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-purple-400 transition-all hover:shadow-xl">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-2xl">🔬</span>
                                </div>
                                <h3 class="text-lg font-bold mb-2 text-gray-900">High-throughput Design</h3>
                                <p class="text-sm text-gray-600">Automated experimental pipelines and design frameworks.
                                </p>
                            </div>

                            <div
                                class="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-green-400 transition-all hover:shadow-xl">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-2xl">💻</span>
                                </div>
                                <h3 class="text-lg font-bold mb-2 text-gray-900">Open Software</h3>
                                <p class="text-sm text-gray-600">Well-documented reproducible code and datasets.</p>
                            </div>

                            <div
                                class="group p-6 bg-white rounded-2xl border border-gray-200 hover:border-pink-400 transition-all hover:shadow-xl">
                                <div
                                    class="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <span class="text-2xl">🎯</span>
                                </div>
                                <h3 class="text-lg font-bold mb-2 text-gray-900">Translational Focus</h3>
                                <p class="text-sm text-gray-600">Real-world impact in health and biotechnology.</p>
                            </div>
                        </div>
                    </div>

                    <div class="relative">
                        <div
                            class="absolute -inset-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded-3xl blur-2xl opacity-30">
                        </div>
                        <div class="relative rounded-3xl overflow-hidden shadow-2xl">
                            <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600&auto=format&fit=crop"
                                alt="Lab visualization" class="w-full h-[500px] object-cover" />
                        </div>

                        <!-- Floating Card -->
                        <div
                            class="absolute -bottom-6 -left-6 bg-white backdrop-blur-xl p-6 rounded-2xl border border-gray-200 shadow-2xl max-w-xs">
                            <h4 class="text-xl font-bold mb-2 text-gray-900">Join Our Team</h4>
                            <p class="text-sm text-gray-600 mb-4">We welcome motivated students and postdocs. Check open
                                positions or contact the PI directly.</p>
                            <a href="/open-positions"
                                class="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                                View Positions →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Upcoming Training Sessions -->
        <section id="training" class="py-24 px-6 bg-gradient-to-b from-white via-blue-50/30 to-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div
                        class="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-semibold mb-6">
                        🎓 Training Programs
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                        Upcoming <span
                            class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Training
                            Sessions</span>
                    </h2>
                    <p class="text-gray-600 text-lg">Join our latest training programs and enhance your skills</p>
                </div>

                <!-- Loading State -->
                <div v-if="loadingTraining" class="text-center py-12">
                    <div
                        class="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4">
                    </div>
                    <p class="text-gray-600">Loading training sessions...</p>
                </div>

                <!-- Training Cards -->
                <div v-else-if="upcomingTraining.length > 0" class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(training, index) in upcomingTraining" :key="training.id"
                        class="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-blue-400 transition-all hover:shadow-2xl hover:-translate-y-2">
                        <div :class="['h-48 relative overflow-hidden', getTrainingGradient(index)]">
                            <div
                                class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30">
                            </div>
                            <div class="absolute inset-0 flex items-center justify-center">
                                <span class="text-6xl">{{ getTrainingIcon(training.title) }}</span>
                            </div>
                            <div
                                class="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-blue-700">
                                {{ training.status?.value || 'Upcoming' }}
                            </div>
                        </div>
                        <div class="p-6">
                            <h3
                                class="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors text-gray-900">
                                {{ training.title }}
                            </h3>
                            <p class="text-sm text-gray-600 mb-4">
                                📅 {{ formatDate(training.startDate) }} • ⏱️ {{ training.duration || 'TBD' }}
                            </p>
                            <div class="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                                <div class="text-sm font-semibold text-blue-900">
                                    {{ getAvailableSeats(training) }} / {{ training.totalSeats || 'N/A' }} seats
                                    available
                                </div>
                            </div>
                            <div class="flex gap-3">
                                <a v-if="training['appy link']" :href="training['appy link']" target="_blank"
                                    rel="noopener noreferrer"
                                    class="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg transition-all text-center">
                                    Register Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- No Training State -->
                <div v-else class="text-center py-12">
                    <div class="text-6xl mb-4">📚</div>
                    <p class="text-gray-600 text-lg">No upcoming training sessions at the moment.</p>
                </div>

                <div class="text-center mt-12">
                    <a href="/training"
                        class="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-blue-500/50 transform hover:scale-105 transition-all">
                        View All Training Programs →
                    </a>
                </div>
            </div>
        </section>

        <!-- Team Section -->
        <section id="team" class="py-24 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-16">
                    <div
                        class="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-6">
                        Our Team
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black mb-4 text-gray-900">
                        Meet the <span
                            class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Principal
                            Investigator</span>
                    </h2>
                    <p class="text-gray-600 text-lg">Leading computational biology research and innovation</p>
                </div>

                <div class="flex justify-center">
                    <div class="group text-center max-w-sm">
                        <div class="relative mb-6 inline-block">
                            <div
                                class="absolute -inset-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity">
                            </div>
                            <img src="https://static.just.edu.bd/images/public/teacher/1643101826574_-1.jpeg"
                                alt="Fee Faysal Ahmed"
                                class="relative w-48 h-48 rounded-full object-cover border-4 border-white shadow-2xl" />
                            <div
                                class="absolute -bottom-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center border-4 border-white shadow-xl">
                                <span class="text-3xl">👨‍🔬</span>
                            </div>
                        </div>
                        <h3 class="text-2xl font-black text-gray-900 mb-2">Fee Faysal Ahmed</h3>
                        <p class="text-lg text-blue-600 font-bold mb-2">Principal Investigator</p>
                        <p class="text-sm text-gray-600 mb-4">Systems Biology & Computational Genomics</p>
                        <div class="flex justify-center gap-3">
                            <a href="mailto:ffa.math@just.edu.bd"
                                class="px-6 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold hover:bg-blue-200 transition-colors">
                                Email
                            </a>
                            <a href="https://scholar.google.com/citations?user=OtW5C_MAAAAJ&hl=en" target="_blank"
                                class="px-6 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold hover:bg-purple-200 transition-colors">
                                Google Scholar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import axios from 'axios';

// Slider data
const slides = [
    {
        title: 'Data-driven discovery in systems biology',
        subtitle: 'Predictive models, experimental design, and open science to accelerate research.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1600&auto=format&fit=crop',
        gradient: 'from-blue-900/80 via-purple-900/70 to-transparent'
    },
    {
        title: 'Interpretable machine learning for biology',
        subtitle: 'Methods that reveal mechanisms and suggest experiments.',
        image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=1600&auto=format&fit=crop',
        gradient: 'from-emerald-900/80 via-teal-900/70 to-transparent'
    },
    {
        title: 'Collaborative projects and open tools',
        subtitle: 'Reproducible pipelines, datasets, and community resources.',
        image: 'https://images.unsplash.com/photo-1505904267569-44f7a6fc18c5?q=80&w=1600&auto=format&fit=crop',
        gradient: 'from-indigo-900/80 via-blue-900/70 to-transparent'
    }
];

// State
const activeIndex = ref(0);
const upcomingTraining = ref([]);
const loadingTraining = ref(true);

// Training gradients
const trainingGradients = [
    'bg-gradient-to-br from-blue-500 to-blue-700',
    'bg-gradient-to-br from-purple-500 to-purple-700',
    'bg-gradient-to-br from-green-500 to-green-700'
];

// Training icons
const trainingIcons = {
    'machine learning': '🤖',
    'deep learning': '🧠',
    'data science': '📊',
    'python': '🐍',
    'bioinformatics': '🧬',
    'statistics': '📈',
    'nlp': '💬',
    'computer vision': '👁️',
    'default': '🎓'
};

let timer = null;

// Slider functions
function next() {
    activeIndex.value = (activeIndex.value + 1) % slides.length;
}

function prev() {
    activeIndex.value = (activeIndex.value - 1 + slides.length) % slides.length;
}

function goTo(i) {
    activeIndex.value = i;
}

// Fetch training data
const fetchTrainingData = async () => {
    loadingTraining.value = true;
    try {
        const response = await axios.get(
            'https://api.baserow.io/api/database/rows/table/825553/',
            {
                headers: {
                    'Authorization': 'Token qTloFJMhH7C1iWeoHvguFv6vaCYuvYxo'
                },
                params: {
                    user_field_names: true
                }
            }
        );

        // Filter upcoming sessions and take only first 3
        console.log(response.data.results);
        const upcoming = response.data.results;

        upcomingTraining.value = upcoming.slice(0, 3);
    } catch (err) {
        console.error('Error fetching training data:', err);
    } finally {
        loadingTraining.value = false;
    }
};

// Helper functions
const getTrainingGradient = (index) => {
    return trainingGradients[index % trainingGradients.length];
};

const getTrainingIcon = (title) => {
    if (!title) return trainingIcons.default;
    const lowerTitle = title.toLowerCase();
    for (const [key, icon] of Object.entries(trainingIcons)) {
        if (lowerTitle.includes(key)) return icon;
    }
    return trainingIcons.default;
};

const formatDate = (dateString) => {
    if (!dateString) return 'TBD';
    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    } catch (e) {
        return dateString;
    }
};

const getAvailableSeats = (training) => {
    const total = training.totalSeats || 0;
    const booked = training['seat booked'] || 0;
    return Math.max(0, total - booked);
};

// Lifecycle
onMounted(() => {
    // Auto-slide timer
    timer = setInterval(() => {
        activeIndex.value = (activeIndex.value + 1) % slides.length;
    }, 6000);

    // Fetch training data
    fetchTrainingData();
});

onBeforeUnmount(() => {
    if (timer) clearInterval(timer);
});
</script>

<style scoped>
@keyframes bounce {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(-10px);
    }
}

.animate-bounce {
    animation: bounce 2s infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

.animate-spin {
    animation: spin 1s linear infinite;
}
</style>