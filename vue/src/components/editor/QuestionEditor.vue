<template>
    <div>
    <!-- Question index --> 
    <div class="flex items-center justify-between">
        <h3 class="text-lg font-bold">
            {{ index + 1 }}. {{ model.question}}
        </h3>


        <div class="flex items-center">
            <!-- Add new question --> 
            <button
                type="button"
                @click="addQuestion()"
                class="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                Add
            </button>
            <!--/ Add new question --> 

            <!-- Delete question -->
            <button
                type="button"
                @click="deleteQuestion()"
                class="flex items-center text-xs py-1 px-3 rounded-sm border border-transparent text-red-500 hover:border-red-600"
            >
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
                Delete
            </button>
            <!--/ Delete question --> 
        </div>
    </div>
    <!--/ Question index -->

    <div class="grid gap-3 grid-cols-12">
        <!-- Question --> 
        <div class="mt-3 col-span-9">
            <label
                :for="'question_text_' + model.data"
                class="block text-sm font-medium text-gray-700"
            >
                Question Text
            </label>
            <input 
                type="text"
                :name="'question_text_' + model.data"
                v-model="model.question"
                @change="dataChange"
                :id="'question_text_' + model.data"
                class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
        </div>
        <!--/ Question --> 

        <!-- Question Type --> 
        <div class="mt-3 col-span-3">
            <label for="question_type" class="block text-sm font-medium text-gray-500">
                Select Question Type 
            </label>
            <select
                id="question_type"
                name="question_type"
                v-model="model.type"
                @change="typeChange"
                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <option v-for="type in questionTypes" :key="type" :value="type">
                    {{ upperCaseFirst(type) }}

                </option>
            </select>
        </div>
        <!--/ Question Type --> 
    </div>

    <!-- Question Description --> 
    <div class="mt-3 col-span-9">
        <label
            :for="'question_description_' + model.id"
            class="block text-sm font-medium text-gray-700"
        >Description</label>
        <textarea 
            :name="'question_description_' + model.id"
            v-model="model.description"
            @change="dataChange"
            :id="'question_description_' + model.id"
            class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-500 rounded-md"
        />
    </div>
    <!--/ Question Description -->

    <!-- Data -->
    <div>
        <div v-if="ShouldHaveOptions()" class="mt-2">
            <h4 class="text-sm font-semibold mb-1 flex justify-between items-center">
                Options

                <!-- Add new option -->
                <button
                    type="button"
                    @click="addOption()"
                    class="flex items-center text-xs py-1 px-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add Option
                </button>
                <!--/ Add new option -->
            </h4>

            <div 
                v-if="!model.data.options.length"
                class="text-xs text-gray-600 text-center py-3"
            >
                You don't have any options defined
            </div>

             <!-- Option list -->
            <div
                v-for="(option, index) in model.data.options"
                :key="option.uuid"
                class="flex items-center mb-1"
            >
                <span class="w-6 text-sm">{{ index + 1 }}.</span>
                <input 
                    type="text"
                    v-model="option.text"
                    @change="dataChange"
                    class="w-full rounded-sm py-1 px-2 text-xs border border-gray-300 focus:border-indigo-500"
                />
                <!-- Delete Option -->
                <button
                    type="button"
                    @click="removeOption(option)"
                    class="h-6 w-6 rounded-full flex items-center justify-center border border-transparent transition-colors hover:border-red-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
                <!--/ Delete Option -->
            </div>
            <!--/ Option list -->
        </div>
    </div>
    <!--/ Data -->

    <hr class="my-4"/>
    </div>
</template>

<script setup>
    import {ref, computed} from "vue"
    import {v4 as uuidv4} from "uuid"
    import store from "../../store"


    const props = defineProps({
        question: Object,
        index: Number,
    });

    const emit = defineEmits(["change", "addQuestion", "deleteQuestion"]);

    // Re-create the whole question data to avoid unintentional reference change
    const model = ref(JSON.parse(JSON.stringify(props.question)));

    const questionTypes = computed(() => store.state.questionTypes);

    function upperCaseFirst(str){
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    // Check if the question should have options
    function ShouldHaveOptions() {
        return ["select", "radio", "checkbox"].includes(model.value.type)
    }

    function getOptions(){
        return model.value.data.options
    }

    function setOptions(options){
        model.value.data.options = options;
    }

    // Add option
    function addOption(){
        setOptions([
            ...getOptions(),
            { uuid: uuidv4(), text: ""},
        ]);
        datachange();
    }

    // Remove option
    function removeOption(op){
        setOptions(getOptions().filter((opt)=>opt !== op));
        datachange();
    }

    function typeChange() {
        if(ShouldHaveOptions()){
            setOptions(getOptions() || []);
        }
        datachange();
    }

    // Emit the data change 
    function dataChange(){
        const data= JSON.parse(JSON.stringify(model.value))
        if (!ShouldHaveOptions()){
            delete data.data.options;
        }

        emit("change", data);
    }

    function addQuestion(){
        emit("addQuestion", props.index + 1)
    }

    function deleteQuestion(){
        emit("deleteQuestion", props.question)
    }
</script>

<style>

</style>