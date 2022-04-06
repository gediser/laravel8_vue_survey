<template>
    <page-component title="Dashboard">
        <div v-if="loading" class="flex jsutify-center">Loading...</div>

        <div v-else class="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-5 text-gray-700">
            <div class="bg-white shadow-md p-3 text-center flex flex-col order-1 lg:order-2 animate-fade-in-down"
                style="animation-delay: 0.1s"
            >
                <h3 class="text-2xl font-semibold">Total Surveys</h3>
                <div
                    class="text-8xl font-semibold flex-1 flex items-center justify-center"
                >
                    {{ data.totalSurveys }}
                </div>
            </div>

            <div class="bg-white shadow-md p-3 text-center flex flex-col order-2 lg:order-4 animate-fade-in-down"
                style="animation-delay: 0.2s"
            >
                <h3 class="text-2xl font-semibold">Total Answers</h3>
                <div
                    class="text-8xl font-semibold flex-1 flex items-center justify-center"
                >
                    {{ data.totalAnswers }}
                </div>
            </div>

            <div class="row-span-2 order-3 lg:order-1 bg-white shadow-md p-4"
                
            >
                <h3 class="text-2xl font-semibold">Latest Survey</h3>
                <img 
                    :src="data.latestSurvey.image_url"
                    class="w-[240px] mx-auto"
                    alt=""
                />
                <h3 class="font-bold text-xl mb-3">{{data.latestSurvey.title}}</h3>
                <div class="flex justify-between text-sm mb-1">
                    <div>Upload Date:</div>
                    <div>{{data.latestSurvey.created_at}}</div>
                </div>
                <div class="flex justify-between text-sm mb-1">
                    <div>Expire Date:</div>
                    <div>{{data.latestSurvey.expire_date}}</div>
                </div>
                <div class="flex justify-between text-sm mb-1">
                    <div>Status:</div>
                    <div>{{data.latestSurvey.status ? 'Active' : 'Draft'}}</div>
                </div>
                <div class="flex justify-between text-sm mb-1">
                    <div>Questions:</div>
                    <div>{{ data.latestSurvey.questions }}</div>
                    
                </div>
                <div class="flex justify-between text-sm mb-3">
                    <div>Answers:</div>
                    <div>{{ data.latestSurvey.answers }}</div>
                    
                </div>
                <div class="flex justify-between">
                    <router-link
                        :to="{name: 'SurveyView', params: {id:data.latestSurvey.id}}"
                        class="flex py-2 px-4 border border-transparent text-sm rounded-md
                                text-indigo-500 hover:bg-indigo-700 hover:text-white transition-colors
                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path fill-rule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clip-rule="evenodd" />
                        </svg>
                        Edit Survey
                    </router-link>

                    <button
                        class="flex py-2 px-4 border border-transparent text-sm rounded-md text-indigo-500 hover:bg-indigo-700 hover:text-white transition-colors
                                focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        Delete Survey
                    </button>
                </div>
            </div>

            <div class="row-span-2 p-3 bg-white shadow-md order-4 lg:order-3 animate-fade-in-down"
                style="animation-delay: 0.3s"
            >
                <div class="flex justify-between items-center mb-3 px-2">
                    <h3 class="text-2xl font-semibold">Latest Answers</h3>

                     <a
                        href="javascript:void(0)"
                        class="text-sm text-blue-500 hover:decoration-blue-500"
                    >
                        View all
                    </a> 
                </div>
                <a
                    href="#"
                    v-for="answer of data.answers"
                    :key="answer.id"
                    class="block p-2 hover:bg-gray-100/90"
                >
                    <div class="font-semibold">{{ answer.survey.title }}</div>
                    <small>
                        Answer made at 
                        <i class="font-semibold">{{ answer.end_date}}</i>
                    </small>
                </a>
               
            </div>
        </div>
        
    </page-component>
</template>

<script setup>
import PageComponent from "../components/PageComponent.vue"
import { computed } from "vue";
import {useStore} from "vuex"

const store = useStore();

const loading = computed(() => store.state.dashboard.loading);
const data = computed(() => store.state.dashboard.data);

store.dispatch("getDashboardData");

</script>

<style scoped>

</style>
