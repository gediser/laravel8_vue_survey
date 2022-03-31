import {createStore} from "vuex";
import axiosClient from '../axios'

const tmpSurveys = [
    {
        id: 100,
        title: "TheCodeholic youtube channel content",
        slug: "thecodeholic-youtube-channel-content",
        status: "draft",
        image: "https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png",
        description: "My name is Hermann. <br> I am a Web Developer with 9+ years of experience, free educational content",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions:[
            {
                id: 1,
                type: "select",
                question: "From which country are you?",
                description: null,
                data: {
                    options: [
                        {uuid: "94b2158b-b3e1-481f-a237-a5105b30feb4", text: "USA"},
                        {uuid: "5a6f1ba6-17d0-4202-9ebc-f9b996261ac3", text: "Georgia"},
                        {uuid: "e0a48f02-6832-4bde-a042-4b46d7422182", text: "Germany"},
                        {uuid: "db779cd2-00e4-4610-8e05-1960e32e5456", text: "India"},
                        {uuid: "512632c0-8821-4684-bf08-06a0da5e5e91", text: "United Kingdom"},

                    ],

                },
            },
            {
                id:2,
                type: "checkbox",
                question: "Which language videos do you want to see on my channel?",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                date:{
                    options:[
                        {uuid: "6312ac1a-a899-43e1-a9cc-107ff7eab78c", text: "Javascript"},
                        {uuid: "d4a1b82a-df44-46b1-b175-9fc236bcbc7a", text: "PHP"},
                        {uuid: "7abae734-da0e-4328-918b-c35b981dc869", text: "HTML + CSS"},
                        {uuid: "343713b9-40b1-4408-94c4-3233b1c714a5", text: "Everything Hermann thinks will be good"},
                    ]
                }
            },
            {
                id:3,
                type:"checkbox",
                question: "Which PHP framework videos do you want to see on my chennel?",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                data:{
                    options:[
                        {uuid:"d50d64f0-0aba-4e71-a0f1-3c89298daea7", text:"Laravel"},
                        {uuid:"72adbb04-f9bb-4bfa-80fb-9230d96a1437", text:"Yii2"},
                        {uuid:"c99df80c-1613-4797-be69-870921d3243c", text:"Code igniter"},
                        {uuid:"19253dfa-ce57-4032-93e4-6f9dd7653919", text:"Symfony"},
                    ]
                }
            },
            {
                id:4,
                type:"radio",
                question: "Which Laravel framework do you love most?",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                data:{
                    options:[
                        {uuid:"c4681635-5752-4d4a-8f4b-5fba3d1b1472", text:"Laravel 5"},
                        {uuid:"2731cf71-8a4e-41f2-a1f7-68fd1eae255d", text:"Laravel 6"},
                        {uuid:"94ea4b18-e643-4523-adda-e91b0428a460", text:"Laravel 7"},
                        {uuid:"fbd038e0-6353-4cca-afd7-2173845705d2", text:"Laravel 8"},
                    ]
                }
            },
            {
                id:5,
                type:"checkbox",
                question: "Which type of project do you want to see on my channel built with Laravel?",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,",
                data:{
                    options:[
                        {uuid:"f03f964f-f0fe-462e-becb-b0e6f3956c38", text:"REST API"},
                        {uuid:"c71c24c0-9772-4128-afba-1be4ff411659", text:"E-commerce"},
                        {uuid:"38b4eeb0-a6a7-42e1-bf0c-7267809b63f4", text:"Social App"},
                    ]
                }
            },
            {
                id:6,
                type:"text",
                question: "What's your favourite youtube channel?",
                description:null,
                data:{
                }
            },
            {
                id:7,
                type:"textarea",
                question: "What do you think about the codeholic channel?",
                description: "Write your honest opinion. Everything is anonymous",
                data:{
                }
            }
        ],
    },
    {
        id: 200,
        title: "Laravel 8",
        slug: "laravel-8",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg",
        description:"My name is Hermann. <br> I am a Web Developer with 9+ years of experience, free educational content",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions:[

        ]
    },
    {
        id: 300,
        title: "Vue 3",
        slug: "vue-3",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg",
        description:"My name is Hermann. <br> I am a Web Developer with 9+ years of experience, free educational content",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions:[
            
        ]
    },
    {
        id: 400,
        title: "Tailwind 3",
        slug: "tailwind-3",
        status: "active",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg",
        description: "My name is Hermann. <br> I am a Web Developer with 9+ years of experience, free educational content",
        created_at: "2021-12-20 18:00:00",
        updated_at: "2021-12-20 18:00:00",
        expire_date: "2021-12-31 18:00:00",
        questions:[
            
        ]
    }
];

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('TOKEN'),
        },
        surveys: [...tmpSurveys],
    },
    getters: {},
    actions: {
        register({ commit }, user){
            return axiosClient.post('/register', user)
                .then(({data}) => {
                    commit('setUser', data)
                    return data
                })
        },
        login({ commit }, user){
            return axiosClient.post('/login', user)
                .then(({data}) => {
                    commit('setUser', data)
                    return data
                })
        },
        logout({commit}){
            return axiosClient.post('/logout')
                .then(response => {
                    commit('logout')
                    return response;
                })
        },
    },
    mutations: {
        logout : (state) => {
            state.user.data = {};
            state.user.token = null;
        },
        setUser: (state, userData) => {
            state.user.token = userData.token;
            state.user.data = userData.user;
            sessionStorage.setItem('TOKEN', userData.token)
        }
    },
    modules: {}
});

export default store;