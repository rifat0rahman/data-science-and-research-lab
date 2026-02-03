<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <!-- Hero Section -->
        <section class="relative py-20 px-6 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-12">
                    <div
                        class="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-6">
                        🔬 Research & Publications
                    </div>
                    <h1 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                        Research in
                        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Data Science & Bioinformatics
                        </span>
                    </h1>
                    <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Exploring the intersection of machine learning, computational biology, and data-driven
                        discovery. Advancing healthcare through intelligent algorithms and interpretable AI.
                    </p>
                </div>

                <!-- Quick Stats -->
                <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <div
                        class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
                        <div
                            class="text-4xl font-black bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                            50+
                        </div>
                        <div class="text-sm text-gray-600 mt-2">Publications</div>
                    </div>
                    <div
                        class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
                        <div
                            class="text-4xl font-black bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">
                            5+
                        </div>
                        <div class="text-sm text-gray-600 mt-2">Active Projects</div>
                    </div>
                    <div
                        class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
                        <div
                            class="text-4xl font-black bg-gradient-to-br from-green-600 to-green-700 bg-clip-text text-transparent">
                            500+
                        </div>
                        <div class="text-sm text-gray-600 mt-2">Citations</div>
                    </div>
                    <div
                        class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
                        <div
                            class="text-4xl font-black bg-gradient-to-br from-pink-600 to-pink-700 bg-clip-text text-transparent">
                            8
                        </div>
                        <div class="text-sm text-gray-600 mt-2">Collaborators</div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Main Content: Left (Overview & Research List) + Right (Image) -->
        <section class="py-16 px-6">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <!-- Left Side: Research Overview & Publication List -->
                <div class="space-y-8">
                    <!-- Research Overview Card -->
                    <div
                        class="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl hover:border-blue-300 transition-all">
                        <div class="mb-6">
                            <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                                Research Overview
                            </h2>
                            <p class="text-gray-700 leading-relaxed text-base">
                                My research applies advanced machine learning and statistical methods to solve
                                pressing problems at the intersection of data science and biology. I focus on
                                building interpretable, robust models that drive scientific discovery and improve
                                patient outcomes.
                            </p>
                        </div>

                        <!-- Key Research Areas -->
                        <div class="space-y-3">
                            <div v-for="(area, index) in researchAreas" :key="index"
                                class="flex gap-4 p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100 hover:border-blue-300 transition-all">
                                <span class="text-2xl flex-shrink-0">{{ area.icon }}</span>
                                <div>
                                    <h4 class="font-bold text-gray-900 text-sm">{{ area.title }}</h4>
                                    <p class="text-xs text-gray-600 mt-1">{{ area.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Research Highlights Badge -->
                    <div
                        class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8 shadow-lg border border-blue-200">
                        <div class="flex items-center gap-3 mb-4">
                            <span class="text-2xl">⭐</span>
                            <h3 class="text-lg font-black text-gray-900">Research Highlights</h3>
                        </div>
                        <ul class="space-y-2">
                            <li v-for="(highlight, idx) in highlights" :key="idx" class="flex gap-2 text-sm">
                                <span class="text-blue-600 font-bold">✓</span>
                                <span class="text-gray-700">{{ highlight }}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Right Side: Featured Image + Quick Links -->
                <div class="space-y-8">
                    <!-- Featured Research Image -->
                    <div
                        class="relative w-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl overflow-hidden border border-purple-300 group h-96">
                        <!-- Animated background pattern -->
                        <div class="absolute inset-0 opacity-30"
                            style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0); background-size: 24px 24px;">
                        </div>

                        <!-- Content overlay -->
                        <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent">
                        </div>

                        <!-- Image or placeholder -->
                        <div v-if="researchImage" class="absolute inset-0">
                            <img :src="researchImage" alt="Featured research" class="w-full h-full object-cover" />
                        </div>

                        <!-- Text content on top -->
                        <div class="relative h-full flex flex-col justify-between p-8">
                            <div>
                                <span
                                    class="inline-block px-3 py-1 bg-white/90 text-blue-700 rounded-full text-xs font-bold mb-3">
                                    Featured Research
                                </span>
                                <h3 class="text-2xl md:text-3xl font-black text-white leading-tight">
                                    {{ featuredResearch.title }}
                                </h3>
                            </div>

                            <div class="space-y-3">
                                <p class="text-white/90 text-sm leading-relaxed">
                                    {{ featuredResearch.description }}
                                </p>
                                <a v-if="featuredResearch.link" :href="featuredResearch.link" target="_blank"
                                    rel="noopener noreferrer"
                                    class="inline-block px-4 py-2 bg-white text-blue-600 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-all">
                                    Read Publication →
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- External Links Card -->
                    <div
                        class="bg-white rounded-3xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all">
                        <h4 class="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <span class="text-lg">🔗</span>
                            Find Me Online
                        </h4>
                        <div class="grid grid-cols-2 gap-3">
                            <a v-for="(link, idx) in externalLinks" :key="idx" :href="link.url" target="_blank"
                                rel="noopener noreferrer"
                                class="p-3 rounded-xl border border-gray-200 bg-gray-50 hover:bg-blue-50 hover:border-blue-300 transition-all text-center">
                                <div class="text-xl mb-1">{{ link.icon }}</div>
                                <div class="text-xs font-semibold text-gray-900">{{ link.label }}</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- ... rest of your sections remain unchanged ... -->
    </div>
</template>

<script setup>
import { ref } from 'vue';

const researchImage = ref('');

const featuredResearch = ref({
    title: 'Deep Learning for Multi-Omics Integration',
    description: 'Building interpretable neural networks that integrate genomic, transcriptomic, and clinical data for precision medicine applications.',
    link: 'https://scholar.google.com/citations?user=OtW5C_MAAAAJ&hl=en'
});

const researchAreas = [
    { icon: '🤖', title: 'Machine Learning & AI', description: 'Developing predictive models and deep learning architectures for biomedical applications.' },
    { icon: '🧬', title: 'Computational Biology', description: 'Analyzing genomic and transcriptomic data to understand biological mechanisms.' },
    { icon: '🔍', title: 'Interpretability', description: 'Creating explainable AI models that provide insights into scientific predictions.' },
    { icon: '📊', title: 'Data Integration', description: 'Combining multi-modal datasets to enhance accuracy and robustness of models.' }
];

const highlights = [
    'Published in top-tier peer-reviewed journals and conferences',
    'Cited by leading researchers in computational biology and machine learning',
    'Open-source tools and datasets for reproducible research',
    'Active collaboration with academic and industry partners',
    'Focus on translating research into clinical applications'
];


const externalLinks = [
    { icon: '🎓', label: 'Google Scholar', url: 'https://scholar.google.com/citations?user=OtW5C_MAAAAJ&hl=en' },
    { icon: '🤝', label: 'LinkedIn', url: 'https://linkedin.com/' }
];

const impactMetrics = [
    { icon: '📚', iconBg: 'bg-gradient-to-br from-blue-100 to-blue-200', title: 'Peer-Reviewed Publications', description: 'Contributed to research published in top-tier journals and presented at major international conferences.' },
    { icon: '🤝', iconBg: 'bg-gradient-to-br from-purple-100 to-purple-200', title: 'Active Collaborations', description: 'Working with research groups and institutions across academia and industry to advance computational biology and precision medicine.' },
    { icon: '📊', iconBg: 'bg-gradient-to-br from-green-100 to-green-200', title: 'Open-Source Contributions', description: 'Developing and maintaining tools and datasets for the research community to enable reproducible and accessible science.' }
];
</script>

<style scoped>
* {
    transition-property: transform, box-shadow, background-color, border-color;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
}
</style>
