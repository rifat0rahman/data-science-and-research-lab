<template>
    <div class="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
        <!-- Loading State -->
        <div v-if="loading" class="flex items-center justify-center min-h-screen">
            <div class="text-center">
                <div
                    class="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4">
                </div>
                <p class="text-gray-600 font-semibold">Loading training programs...</p>
            </div>
        </div>

        <!-- Error State -->
        <div v-else-if="error" class="flex items-center justify-center min-h-screen">
            <div class="bg-red-50 border border-red-300 rounded-2xl p-8 max-w-md">
                <div class="text-4xl mb-4">⚠️</div>
                <h3 class="text-xl font-bold text-red-800 mb-2">Failed to Load Training Programs</h3>
                <p class="text-red-600 mb-4">{{ error }}</p>
                <button @click="fetchTrainingData"
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
                            🎓 Professional Training Programs
                        </div>
                        <h1 class="text-5xl md:text-6xl font-black mb-6 text-gray-900 leading-tight">
                            Master
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Data Science
                            </span>
                            Skills
                        </h1>
                        <p class="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Join our comprehensive training programs designed to equip you with cutting-edge skills in
                            data science, machine learning, and bioinformatics. Learn from industry experts and hands-on
                            projects.
                        </p>
                    </div>

                    <!-- Quick Stats -->
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        <div
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
                            <div
                                class="text-4xl font-black bg-gradient-to-br from-blue-600 to-blue-700 bg-clip-text text-transparent">
                                {{ totalStudents }}+
                            </div>
                            <div class="text-sm text-gray-600 mt-2">Students Trained</div>
                        </div>
                        <div
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
                            <div
                                class="text-4xl font-black bg-gradient-to-br from-purple-600 to-purple-700 bg-clip-text text-transparent">
                                {{ allTrainingPrograms.length }}+
                            </div>
                            <div class="text-sm text-gray-600 mt-2">Courses Offered</div>
                        </div>
                        <div
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
                            <div
                                class="text-4xl font-black bg-gradient-to-br from-green-600 to-green-700 bg-clip-text text-transparent">
                                95%
                            </div>
                            <div class="text-sm text-gray-600 mt-2">Success Rate</div>
                        </div>
                        <div
                            class="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 text-center transform hover:scale-105 transition-all">
                            <div
                                class="text-4xl font-black bg-gradient-to-br from-pink-600 to-pink-700 bg-clip-text text-transparent">
                                4.8★
                            </div>
                            <div class="text-sm text-gray-600 mt-2">Average Rating</div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Upcoming Training Sessions -->
            <section v-if="upcomingSessions.length > 0" class="py-16 px-6" id="upcoming">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <div
                            class="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-semibold mb-4">
                            🔥 Starting Soon
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Upcoming
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Training Sessions
                            </span>
                        </h2>
                        <p class="text-gray-600 text-lg">
                            Register now to secure your spot in these high-demand courses
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="(session, index) in upcomingSessions" :key="session.id"
                            class="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <!-- Header -->
                            <div :class="['relative h-40 p-6 flex items-center gap-4', getRandomGradient(index)]">
                                <div
                                    class="w-14 h-14 bg-white/90 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                                    {{ getTrainingIcon(session.title) }}
                                </div>
                                <div>
                                    <h3 class="text-2xl font-black text-white">{{ session.title }}</h3>
                                    <span :class="[
                                        'inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold',
                                        'bg-white/90 text-blue-700'
                                    ]">
                                        {{ session.status?.value || 'Upcoming' }}
                                    </span>
                                </div>
                                <div class="absolute inset-0 opacity-20 pointer-events-none"
                                    style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0); background-size: 22px 22px;">
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="p-6">
                                <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {{ session.description || 'Learn essential skills with hands-on projects and expert guidance.' }}
                                </p>

                                <!-- Highlights -->
                                <div class="mb-4">
                                    <h4 class="text-sm font-bold text-gray-900 mb-2">Details:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span
                                            class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200">
                                            📅 {{ formatDate(session.startDate) }}
                                        </span>
                                        <span
                                            class="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-semibold border border-purple-200">
                                            ⏱️ {{ session.duration || 'TBD' }}
                                        </span>
                                        <span
                                            class="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-semibold border border-green-200">
                                            👥 {{ getAvailableSeats(session) }} seats left
                                        </span>
                                    </div>
                                </div>

                                <!-- Meta -->
                                <div class="grid grid-cols-1 gap-3 mb-4">
                                    <div class="text-center p-3 bg-white rounded-xl border border-gray-200">
                                        <div class="text-lg font-black text-purple-600">
                                            {{ getAvailableSeats(session) }} / {{ session.totalSeats || 'N/A' }}
                                        </div>
                                        <div class="text-xs text-gray-600 mt-1">Seats Available</div>
                                    </div>
                                </div>

                                <!-- Actions -->
                                <div class="flex gap-3">
                                    <a v-if="session['apply link']" :href="session['apply link']" target="_blank"
                                        rel="noopener noreferrer"
                                        class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                                        Register Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Currently Running Training Programs -->
            <section v-if="runningPrograms.length > 0" class="py-16 px-6">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <div
                            class="inline-block px-4 py-2 bg-green-100 border border-green-300 rounded-full text-green-700 text-sm font-semibold mb-4">
                            ⚡ Currently Active
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Running
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Training Programs
                            </span>
                        </h2>
                        <p class="text-gray-600 text-lg">
                            Join these ongoing programs and catch up with live sessions
                        </p>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="(program, index) in runningPrograms" :key="program.id"
                            class="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <!-- Header -->
                            <div
                                :class="['relative h-40 p-6 flex items-center gap-4', getRandomGradient(index + upcomingSessions.length)]">
                                <div
                                    class="w-14 h-14 bg-white/90 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                                    {{ getTrainingIcon(program.title) }}
                                </div>
                                <div>
                                    <h3 class="text-2xl font-black text-white">{{ program.title }}</h3>
                                    <span :class="['inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold','bg-white/90 text-green-700']">
                                        {{ program.status?.value || 'Running' }}
                                    </span>
                                </div>
                                <div class="absolute inset-0 opacity-20 pointer-events-none"
                                    style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0); background-size: 22px 22px;">
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="p-6">
                                <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {{ program.description || 'Comprehensive training program with hands-on projects and expert instruction.' }}
                                </p>

                                <!-- Highlights -->
                                <div class="mb-4">
                                    <h4 class="text-sm font-bold text-gray-900 mb-2">Program Info:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span
                                            class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200">
                                            🚀 Started {{ formatDateShort(program.startDate) }}
                                        </span>
                                        <span
                                            class="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-semibold border border-purple-200">
                                            ⏱️ {{ program.duration || 'TBD' }}
                                        </span>
                                        <span v-if="getAvailableSeats(program) > 0"
                                            class="px-3 py-1 bg-green-50 text-green-700 rounded-lg text-xs font-semibold border border-green-200">
                                            ✨ {{ getAvailableSeats(program) }} spots left
                                        </span>
                                        <span v-else
                                            class="px-3 py-1 bg-red-50 text-red-700 rounded-lg text-xs font-semibold border border-red-200">
                                            🔒 Fully Booked
                                        </span>
                                    </div>
                                </div>

                                <!-- Meta -->
                                <div class="grid grid-cols-1 gap-3 mb-4">
                                    <div class="text-center p-3 bg-white rounded-xl border border-gray-200">
                                        <div class="text-lg font-black text-green-600">
                                            {{ getAvailableSeats(program) }} / {{ program.totalSeats || 'N/A' }}
                                        </div>
                                        <div class="text-xs text-gray-600 mt-1">Seats Available</div>
                                    </div>
                                </div>

                                <!-- Actions -->
                                <div class="flex gap-3">
                                    <a v-if="program['apply link'] && getAvailableSeats(program) > 0"
                                        :href="program['apply link']" target="_blank" rel="noopener noreferrer"
                                        class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                                        Join Now
                                    </a>
                                    <button v-else
                                        class="flex-1 px-6 py-3 bg-gray-200 text-gray-500 rounded-xl font-semibold text-center cursor-not-allowed">
                                        Fully Booked
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- All Training Programs -->
            <section class="py-16 px-6 bg-white">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <div
                            class="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-orange-700 text-sm font-semibold mb-4">
                            📚 Complete Catalog
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            All Training
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Programs
                            </span>
                        </h2>
                        <p class="text-gray-600 text-lg">
                            Browse our complete collection of training programs
                        </p>
                    </div>

                    <!-- No Programs State -->
                    <div v-if="allTrainingPrograms.length === 0" class="text-center py-12">
                        <div class="text-6xl mb-4">📦</div>
                        <p class="text-gray-600 text-lg">No training programs available at the moment.</p>
                    </div>

                    <!-- Programs Cards -->
                    <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div v-for="(program, index) in allTrainingPrograms" :key="program.id"
                            class="group bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                            <!-- Header -->
                            <div :class="['relative h-40 p-6 flex items-center gap-4', getRandomGradient(index)]">
                                <div
                                    class="w-14 h-14 bg-white/90 rounded-2xl flex items-center justify-center text-2xl shadow-md">
                                    {{ getTrainingIcon(program.title) }}
                                </div>
                                <div>
                                    <h3 class="text-2xl font-black text-white">{{ program.title }}</h3>
                                    <span :class="['inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold',getStatusBadgeClassForHeader(program.status)]">
                                        {{ program.status?.value || 'Coming Soon' }}
                                    </span>
                                </div>
                                <div class="absolute inset-0 opacity-20 pointer-events-none"
                                    style="background-image: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.7) 1px, transparent 0); background-size: 22px 22px;">
                                </div>
                            </div>

                            <!-- Content -->
                            <div class="p-6">
                                <p class="text-sm text-gray-600 mb-4 leading-relaxed">
                                    {{ truncateText(program.description, 100) || 'Comprehensive training program with expert instruction.' }}
                                </p>

                                <!-- Highlights -->
                                <div class="mb-4">
                                    <h4 class="text-sm font-bold text-gray-900 mb-2">Quick Info:</h4>
                                    <div class="flex flex-wrap gap-2">
                                        <span
                                            class="px-3 py-1 bg-blue-50 text-blue-700 rounded-lg text-xs font-semibold border border-blue-200">
                                            📅 {{ formatDate(program.startDate) }}
                                        </span>
                                        <span
                                            class="px-3 py-1 bg-purple-50 text-purple-700 rounded-lg text-xs font-semibold border border-purple-200">
                                            ⏱️ {{ program.duration || 'TBD' }}
                                        </span>
                                    </div>
                                </div>

                                <!-- Meta -->
                                <div class="grid grid-cols-1 gap-3 mb-4">
                                    <div class="text-center p-3 bg-white rounded-xl border border-gray-200">
                                        <div :class="['text-lg font-black',getAvailableSeats(program) > 5 ? 'text-green-600' :getAvailableSeats(program) > 0 ? 'text-orange-600' : 'text-red-600']">
                                            {{ getAvailableSeats(program) }} / {{ program.totalSeats || 'N/A' }}
                                        </div>
                                        <div class="text-xs text-gray-600 mt-1">
                                            {{ getSeatsPercentage(program) }}% Available
                                        </div>
                                    </div>
                                </div>

                                <!-- Actions -->
                                <div class="flex gap-3">
                                    <a v-if="program['apply link'] && !isFullyBooked(program)"
                                        :href="program['apply link']" target="_blank" rel="noopener noreferrer"
                                        class="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                                        Apply Now
                                    </a>
                                    <button v-else
                                        class="flex-1 px-6 py-3 bg-gray-200 text-gray-500 rounded-xl font-semibold text-center cursor-not-allowed">
                                        {{ isFullyBooked(program) ? 'Fully Booked' : 'Coming Soon' }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Training Schedule -->
            <section class="py-16 px-6">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <div
                            class="inline-block px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-orange-700 text-sm font-semibold mb-4">
                            📅 Schedule
                        </div>
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Training
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Schedule
                            </span>
                        </h2>
                        <p class="text-gray-600 text-lg">
                            Plan your learning journey with our flexible schedule
                        </p>
                    </div>

                    <!-- Schedule Content -->
                    <div class="bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
                        <div class="overflow-x-auto">
                            <table class="w-full">
                                <thead class="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                                    <tr>
                                        <th class="px-6 py-4 text-left font-bold">Course Name</th>
                                        <th class="px-6 py-4 text-left font-bold">Date</th>
                                        <th class="px-6 py-4 text-left font-bold">Time</th>
                                        <th class="px-6 py-4 text-left font-bold">Instructor</th>
                                        <th class="px-6 py-4 text-left font-bold">Mode</th>
                                        <th class="px-6 py-4 text-center font-bold">Status</th>
                                        <th class="px-6 py-4 text-center font-bold">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in runningPrograms" :key="index"
                                   
                                        class="border-b border-gray-100 hover:bg-blue-50 transition-colors">
                                        <td class="px-6 py-4">
                                            <div class="font-bold text-gray-900">{{ item.title }}</div>
                                        </td>
                                        <td class="px-6 py-4 text-gray-700">{{ formatDate(item.startDate) }}</td>
                                        <td class="px-6 py-4 text-gray-700">{{ item.startTime }}-{{ item.endTime }}</td>
                                        <td class="px-6 py-4">
                                            <div class="flex items-center gap-2">
                                                <span class="text-gray-900 font-medium">{{ item.instructor }}</span>
                                            </div>
                                        </td>
                                        <td class="px-6 py-4">
                                            <span :class="[
                                                'px-3 py-1 rounded-full text-xs font-bold',
                                                item.Mode?.value === 'Online'
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-blue-100 text-blue-700'
                                            ]">
                                                {{ item.Mode?.value }}
                                            </span>
                                        </td>
                                        <td class="px-6 py-4 text-center">
                                            {{ item.status?.value }}
                                        </td>
                                        <!-- action -->
                                        <td class="px-6 py-4 text-center">
                                            <a :href="item['apply link']" target="_blank"  rel="noopener noreferrer"
                                                class="flex-1 px-6 py-3 bg-gradient-to-r  from-blue-600 to-purple-600 text-white rounded-xl font-semibold text-center hover:shadow-lg hover:shadow-blue-500/50 transition-all">
                                                Apply Now
                                            </a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <!-- Why Choose Us -->
            <section class="py-16 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center mb-12">
                        <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                            Why
                            <span class="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Train With Us?
                            </span>
                        </h2>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="(feature, index) in features" :key="index"
                            class="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl hover:-translate-y-2 transition-all">
                            <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg','feature.iconBg']">
                                <span class="text-3xl">{{ feature.icon }}</span>
                            </div>
                            <h3 class="text-xl font-bold text-gray-900 mb-3">{{ feature.title }}</h3>
                            <p class="text-gray-600 leading-relaxed">{{ feature.description }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- CTA Section -->
            <section class="py-20 px-6" id="contact">
                <div class="max-w-4xl mx-auto">
                    <div class="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center shadow-2xl">
                        <h2 class="text-4xl md:text-5xl font-black text-white mb-6">
                            Ready to Start Your Learning Journey?
                        </h2>
                        <p class="text-xl text-white/90 mb-8">
                            Join hundreds of students who have transformed their careers with our training programs
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="#upcoming"
                                class="px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:shadow-2xl transform hover:scale-105 transition-all">
                                Browse Courses
                            </a>
                            <a href="mailto:ffa.math@just.edu.bd"
                                class="px-8 py-4 bg-white/20 backdrop-blur-sm text-white border-2 border-white rounded-xl font-bold hover:bg-white/30 transition-all">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </template>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

// State
const allTrainingPrograms = ref([]);
const loading = ref(true);
const error = ref(null);

const totalStudents = 500;
const trainingSchedule = [
    {
        course: 'Python for Data Science',
        code: 'DS-101',
        date: 'Jan 15, 2026',
        time: '10:00 AM - 12:00 PM',
        instructor: 'Dr. Sarah Ahmed',
        mode: 'Online',
        status: 'Open',
        applyLink: 'https://forms.google.com/your-form-link'
    },
    {
        course: 'Machine Learning Basics',
        code: 'ML-201',
        date: 'Jan 18, 2026',
        time: '2:00 PM - 4:00 PM',
        instructor: 'Prof. John Smith',
        mode: 'Hybrid',
        status: 'Filling Fast',
        applyLink: 'https://forms.google.com/your-form-link'
    },
    {
        course: 'Deep Learning Workshop',
        code: 'DL-301',
        date: 'Jan 20, 2026',
        time: '3:00 PM - 5:00 PM',
        instructor: 'Dr. Maria Garcia',
        mode: 'Online',
        status: 'Open',
        applyLink: 'https://forms.google.com/your-form-link'
    },
    {
        course: 'Bioinformatics Fundamentals',
        code: 'BIO-101',
        date: 'Jan 22, 2026',
        time: '9:00 AM - 11:00 AM',
        instructor: 'Fee Faysal Ahmed',
        mode: 'Hybrid',
        status: 'Open',
        applyLink: 'https://forms.google.com/your-form-link'
    },
    {
        course: 'Data Visualization with R',
        code: 'VIZ-101',
        date: 'Jan 25, 2026',
        time: '1:00 PM - 3:00 PM',
        instructor: 'Dr. Lisa Chen',
        mode: 'Online',
        status: 'Full',
        applyLink: 'https://forms.google.com/your-form-link'
    },
    {
        course: 'Statistical Modeling',
        code: 'STAT-201',
        date: 'Feb 1, 2026',
        time: '10:00 AM - 12:00 PM',
        instructor: 'Prof. Robert Lee',
        mode: 'Hybrid',
        status: 'Open',
        applyLink: 'https://forms.google.com/your-form-link'
    }
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

// Training icons mapping
const trainingIcons = {
    'machine learning': '🤖',
    'deep learning': '🧠',
    'data science': '📊',
    'python': '🐍',
    'bioinformatics': '🧬',
    'statistics': '📈',
    'visualization': '📉',
    'r programming': '📊',
    'neural network': '🔮',
    'ai': '🤖',
    'genomics': '🧬',
    'biology': '🧪',
    'nlp': '💬',
    'natural language': '💬',
    'computer vision': '👁️',
    'image': '🖼️',
    'rna': '🧬',
    'sql': '🗄️',
    'database': '💾',
    'reinforcement': '🎮',
    'bayesian': '🎲',
    'feature': '⚙️',
    'spark': '⚡',
    'big data': '📊',
    'testing': '🧪',
    'graph': '🕸️',
    'network': '🌐',
    'time series': '📈',
    'mlops': '🔧',
    'deployment': '🚀',
    'default': '🎓'
};

// Features
const features = [
    {
        icon: '👨‍🏫',
        iconBg: 'bg-gradient-to-br from-blue-100 to-blue-200',
        title: 'Expert Instructors',
        description: 'Learn from industry professionals and PhD researchers with years of practical experience.'
    },
    {
        icon: '💻',
        iconBg: 'bg-gradient-to-br from-purple-100 to-purple-200',
        title: 'Hands-on Projects',
        description: 'Build a portfolio with real-world projects that demonstrate your skills to employers.'
    },
    {
        icon: '🎓',
        iconBg: 'bg-gradient-to-br from-green-100 to-green-200',
        title: 'Certification',
        description: 'Receive industry-recognized certificates upon successful completion of courses.'
    },
    {
        icon: '🤝',
        iconBg: 'bg-gradient-to-br from-pink-100 to-pink-200',
        title: 'Career Support',
        description: 'Get guidance on job applications, interviews, and career advancement in data science.'
    },
    {
        icon: '⚡',
        iconBg: 'bg-gradient-to-br from-yellow-100 to-yellow-200',
        title: 'Flexible Learning',
        description: 'Study at your own pace with recorded lectures and flexible assignment deadlines.'
    },
    {
        icon: '🌐',
        iconBg: 'bg-gradient-to-br from-cyan-100 to-cyan-200',
        title: 'Community Access',
        description: 'Join our active community of learners, collaborate on projects, and network with peers.'
    }
];

// Computed properties
const upcomingSessions = computed(() => {
    return allTrainingPrograms.value.filter(program => {
        const status = program.status?.value?.toLowerCase() || '';
        return status.includes('upcoming') || status.includes('registration') || status.includes('open');
    });
});

const runningPrograms = computed(() => {
    return allTrainingPrograms.value.filter(program => {
        const status = program.status?.value?.toLowerCase() || '';
        return status.includes('running') || status.includes('active') || status.includes('ongoing');
    });
});


// Fetch training data from Baserow
const fetchTrainingData = async () => {
    loading.value = true;
    error.value = null;

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

        allTrainingPrograms.value = response.data.results;
    } catch (err) {
        console.error('Error fetching training data:', err);
        error.value = err.response?.data?.error || err.message || 'Unable to load training programs. Please try again later.';
    } finally {
        loading.value = false;
    }
};

// Helper functions
const getRandomGradient = (index) => {
    return gradientBackgrounds[index % gradientBackgrounds.length];
};

const getTrainingIcon = (title) => {
    if (!title) return trainingIcons.default;

    const lowerTitle = title.toLowerCase();
    for (const [key, icon] of Object.entries(trainingIcons)) {
        if (lowerTitle.includes(key)) return icon;
    }

    return trainingIcons.default;
};

const getStatusBadgeClassForHeader = (status) => {
    if (!status) return 'bg-white/90 text-gray-700';

    const statusValue = status.value?.toLowerCase() || '';

    if (statusValue.includes('running') || statusValue.includes('active') || statusValue.includes('ongoing')) {
        return 'bg-white/90 text-green-700';
    }

    if (statusValue.includes('upcoming') || statusValue.includes('open')) {
        return 'bg-white/90 text-blue-700';
    }

    if (statusValue.includes('full') || statusValue.includes('closed')) {
        return 'bg-white/90 text-red-700';
    }

    if (statusValue.includes('filling')) {
        return 'bg-white/90 text-orange-700';
    }

    return 'bg-white/90 text-gray-700';
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

const formatDateShort = (dateString) => {
    if (!dateString) return 'TBD';

    try {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric'
        });
    } catch (e) {
        return dateString;
    }
};

const getAvailableSeats = (program) => {
    const total = program.totalSeats || 0;
    const booked = program['seat booked'] || 0;
    return Math.max(0, total - booked);
};

const getSeatsPercentage = (program) => {
    const total = program.totalSeats || 0;
    if (total === 0) return 0;

    const available = getAvailableSeats(program);
    return Math.round((available / total) * 100);
};

const isFullyBooked = (program) => {
    return getAvailableSeats(program) === 0;
};

const truncateText = (text, maxLength) => {
    if (!text) return '';
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};

// Lifecycle
onMounted(() => {
    fetchTrainingData();
});
</script>

<style scoped>
/* Smooth transitions */
* {
    transition-property: transform, box-shadow, background-color;
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

/* Scroll behavior */
html {
    scroll-behavior: smooth;
}
</style>