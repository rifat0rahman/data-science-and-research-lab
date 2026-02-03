<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <!-- Hero Section -->
        <section class="relative py-20 px-6 overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
            <div class="max-w-7xl mx-auto relative z-10">
                <div class="text-center mb-12">
                    <div
                        class="inline-block px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-blue-700 text-sm font-semibold mb-6">
                        👨‍🎓 Faculty Profile
                    </div>
                    <h1 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                        {{ name }}
                    </h1>
                    <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                        Computational BioSystems Lab<br />
                        <span class="text-base text-gray-600">{{ department }}</span>
                    </p>
                </div>
            </div>
        </section>

        <!-- Main Content Grid:  Photo + Bio + Stats -->
        <section class="py-16 px-6">
            <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                <!-- Left: Professor Photo -->
                <div class="lg:col-span-1">
                    <div
                        class="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 group h-96 bg-white">
                        <img :src="photo" :alt="`Photo of ${name}`"
                            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        <!-- Gradient overlay on hover -->
                        <div
                            class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        </div>
                    </div>

                    <!-- Quick Contact Card -->
                    <div class="mt-8 bg-white rounded-3xl p-6 shadow-xl border border-gray-200">
                        <h4 class="font-black text-gray-900 mb-4 flex items-center gap-2">
                            <span class="text-lg">📬</span>
                            Quick Links
                        </h4>
                        <div class="space-y-3">
                            <a v-if="profileUrl" :href="profileUrl"
                                class="block w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                                Full Profile
                            </a>
                            <a v-if="publicationsUrl" :href="publicationsUrl"
                                class="block w-full px-4 py-3 bg-white text-gray-800 border-2 border-blue-600 rounded-xl font-semibold text-center hover:bg-blue-50 transition-all">
                                Publications
                            </a>
                            <a v-if="contactUrl" :href="contactUrl"
                                class="block w-full px-4 py-3 bg-white text-gray-800 border border-gray-300 rounded-xl font-semibold text-center hover:border-blue-400 hover:text-blue-600 transition-all">
                                Get in Touch
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Center: Bio & Research Overview -->
                <div class="lg:col-span-2 space-y-8">
                    <!-- Main Bio Section -->
                    <div class="bg-white/95 backdrop-blur rounded-3xl p-8 shadow-xl border border-gray-200">
                        <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                            About
                        </h2>

                        <div class="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                               Fee Faysal Ahmed is the Principal Investigator of the Computational BioSystems Lab and a
                                professor of {{ department }}. Their core research address is at the intersection of
                                <span class="font-semibold text-blue-600">
                                    statistical modeling, machine learning, and systems biology
                                </span>
                                — focused on creating interpretable, reproducible computational methods that bridge
                                data and experiment to accelerate discovery in agriculture and health.
                            </p>

                            <p>
                                The group's work centers on three complementary pillars:
                            </p>

                            <div class="space-y-3 pl-4 border-l-4 border-blue-500">
                                <div>
                                    <span class="font-bold text-gray-900">
                                        (1) Principled probabilistic and statistical approaches
                                    </span>
                                    <span class="text-gray-600">
                                        for multi-omics and high-dimensional data analysis
                                    </span>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-900">
                                        (2) Model-driven experimental design
                                    </span>
                                    <span class="text-gray-600">
                                        and active learning for high-throughput assays
                                    </span>
                                </div>
                                <div>
                                    <span class="font-bold text-gray-900">
                                        (3) Open, well-documented software and datasets
                                    </span>
                                    <span class="text-gray-600">
                                        that enable reproducible science and community collaboration
                                    </span>
                                </div>
                            </div>

                            <p>
                                Together these pillars form a research program that drives mechanistic insight,
                                suggests testable experiments, and shortens the path from computational result to
                                real-world impact.
                            </p>
                        </div>
                    </div>

                    <!-- Core Research Areas -->
                    <div>
                        <h3 class="text-2xl font-black text-gray-900 mb-4">Research Focus Areas</h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div v-for="(area, index) in researchAreas" :key="index"
                                class="group p-6 rounded-2xl border border-gray-200 bg-gradient-to-br from-blue-50 to-purple-50 hover:shadow-lg hover:border-blue-300 transition-all">
                                <div class="flex items-start gap-3">
                                    <span class="text-3xl mt-1">{{ area.icon }}</span>
                                    <div>
                                        <h4 class="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                                            {{ area.title }}
                                        </h4>
                                        <p class="text-sm text-gray-600 mt-2">
                                            {{ area.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Vision & Impact -->
                    <div
                        class="bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 rounded-3xl p-8 shadow-2xl text-white">
                        <div class="flex items-start gap-4">
                            <span class="text-4xl flex-shrink-0">🚀</span>
                            <div>
                                <h3 class="text-2xl font-black mb-3">Vision & Impact</h3>
                                <p class="leading-relaxed text-white/90">
                                    The lab translates computational advances into tools and experiments that address
                                    <span class="font-semibold">food security, human health, and sustainable
                                        agriculture</span>.
                                    Emphasis is placed on transparency, collaboration with experimental groups, and
                                    mentoring
                                    the next generation of quantitative biologists.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Lab Overview Section -->
        <section class="py-16 px-6 bg-white">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <div
                        class="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-semibold mb-4">
                        🧪 Computational BioSystems Lab
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Lab at a
                        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Glance
                        </span>
                    </h2>
                    <p class="text-gray-600 text-lg">
                        Overview of team composition, research themes, and collaborative partnerships
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div v-for="(item, index) in labOverview" :key="index"
                        class="group bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all">
                        <div :class="[
                            'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform',
                            item.iconBg
                        ]">
                            <span class="text-3xl">{{ item.icon }}</span>
                        </div>
                        <h3 class="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                            {{ item.title }}
                        </h3>
                        <p class="text-gray-600 text-sm leading-relaxed mb-4">
                            {{ item.description }}
                        </p>
                        <ul class="space-y-2">
                            <li v-for="(point, idx) in item.points" :key="idx" class="flex gap-2 text-sm text-gray-700">
                                <span class="text-blue-600 font-bold">✓</span>
                                <span>{{ point }}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <!-- Teaching & Mentoring -->
        <section class="py-16 px-6">
            <div class="max-w-7xl mx-auto">
                <div class="text-center mb-12">
                    <div
                        class="inline-block px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-700 text-sm font-semibold mb-4">
                        📚 Education & Mentoring
                    </div>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Teaching &
                        <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            Mentoring
                        </span>
                    </h2>
                    <p class="text-gray-600 text-lg">
                        Committed to developing the next generation of computational biologists
                    </p>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- Courses -->
                    <div
                        class="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="text-3xl">🎓</span>
                            <h3 class="text-2xl font-black text-gray-900">Courses Taught</h3>
                        </div>
                        <div class="space-y-3">
                            <div v-for="(course, index) in courses" :key="index"
                                class="p-4 rounded-xl bg-blue-50 border border-blue-100 hover:border-blue-300 transition-all">
                                <h4 class="font-bold text-gray-900">{{ course.name }}</h4>
                                <p class="text-xs text-gray-600 mt-1">{{ course.level }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Mentoring & Student Support -->
                    <div
                        class="bg-white rounded-3xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-all">
                        <div class="flex items-center gap-3 mb-6">
                            <span class="text-3xl">👥</span>
                            <h3 class="text-2xl font-black text-gray-900">Mentoring & Support</h3>
                        </div>
                        <div class="space-y-4">
                            <div v-for="(mentor, index) in mentoringPoints" :key="index" class="flex gap-3">
                                <span class="text-blue-600 text-xl flex-shrink-0">{{ mentor.icon }}</span>
                                <div>
                                    <h4 class="font-bold text-gray-900 text-sm">{{ mentor.title }}</h4>
                                    <p class="text-xs text-gray-600 mt-1">{{ mentor.description }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Collaboration & Contact CTA -->
        <section class="py-20 px-6">
            <div class="max-w-4xl mx-auto">
                <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
                    <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                        Interested in Collaboration?
                    </h2>
                    <p class="text-xl text-white/90 mb-8">
                        We welcome collaborations with wet-lab partners, clinicians, and industry researchers
                        working at the intersection of biology and computational science.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a v-if="contactUrl" :href="contactUrl" target="_blank"
                            class="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all">
                            Contact the Lab
                        </a>
                        <a v-if="profileUrl" :href="profileUrl" target="_blank"
                            class="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/30 transition-all">
                            View Full Profile
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    name: {
        type: String,
        default: 'Meet our Principal Investigator'
    },
    department: {
        type: String,
        default: 'Statistics / Computational Biology'
    },
    photo: {
        type: String,
        default: 'https://static.just.edu.bd/images/public/teacher/1643101826574_-1.jpeg'
    },
    profileUrl: {
        type: String,
        default: 'https://scholar.google.com/citations?user=OtW5C_MAAAAJ&hl=en'
    },
    publicationsUrl: {
        type: String,
        default: 'https://scholar.google.com/citations?user=OtW5C_MAAAAJ&hl=en'
    },
    contactUrl: {
        type: String,
        default: 'mailto:ffa.math@just.edu.bd'
    }
});

// Research Areas
const researchAreas = [
    {
        icon: '🧬',
        title: 'Interpretable Statistical & ML Models',
        description:
            'Developing principled probabilistic approaches for analyzing multi-omics and high-dimensional biological data.'
    },
    {
        icon: '💊',
        title: 'Protein Interaction & Drug Discovery',
        description:
            'Predicting protein-protein interactions and advancing computational methods for drug discovery pipelines.'
    },
    {
        icon: '🔬',
        title: 'Experimental Design & Active Learning',
        description:
            'Designing optimal experiments and adaptive learning strategies for efficient high-throughput assays.'
    },
    {
        icon: '🔧',
        title: 'Reproducible Tools & Data Engineering',
        description:
            'Creating open-source pipelines and well-documented datasets that enable transparent, collaborative science.'
    }
];

// Lab Overview
const labOverview = [
    {
        icon: '👨‍💼',
        iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
        title: 'Team Composition',
        description: 'A diverse group of researchers spanning multiple disciplines and career stages.',
        points: [
            "PhD students conducting thesis research",
            "Master's students in bioinformatics & statistics",
            'Undergraduate researchers and interns',
            'Postdoctoral fellows and collaborators'
        ]
    },
    {
        icon: '🎯',
        iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
        title: 'Research Themes',
        description: 'Integrated projects bridging computational methods with experimental validation.',
        points: [
            'Data-driven biological discovery',
            'Machine learning model development',
            'Experimental validation & feedback loops',
            'Publication & open-source dissemination'
        ]
    },
    {
        icon: '🤝',
        iconBg: 'bg-gradient-to-br from-green-500 to-green-600',
        title: 'Collaborations',
        description: 'Strategic partnerships advancing translational research and real-world impact.',
        points: [
            'Wet-lab partners for experimental validation',
            'Clinical collaborators in healthcare research',
            'Industry partnerships for applied solutions',
            'Community contributions to open science'
        ]
    }
];

// Courses Taught
const courses = [
    {
        name: 'Applied Statistics',
        level: 'Graduate & Advanced Undergraduate'
    },
    {
        name: 'Computational Biology & Systems Analysis',
        level: 'Graduate Course'
    },
    {
        name: 'Machine Learning for Bioinformatics',
        level: 'Graduate Course'
    },
    {
        name: 'Statistical Modeling & Data Science',
        level: 'Graduate'
    }
];

// Mentoring Points
const mentoringPoints = [
    {
        icon: '📖',
        title: 'Thesis Supervision',
        description: 'Guiding students through independent research in statistical modeling and bioinformatics.'
    },
    {
        icon: '💬',
        title: 'Career Development',
        description: 'Mentoring on academic career paths, funding strategies, and professional communication.'
    },
    {
        icon: '🚀',
        title: 'Skill Development',
        description: 'Training in data analysis, programming, scientific writing, and collaborative research practices.'
    },
    {
        icon: '🎓',
        title: 'Professional Growth',
        description: 'Supporting conference presentations, publications, and networking opportunities.'
    }
];

</script>

<style scoped>
/* Smooth transitions matching your existing style */
* {
    transition-property: transform, box-shadow, background-color, border-color;
    transition-duration: 300ms;
    transition-timing-function: ease-in-out;
}
</style>