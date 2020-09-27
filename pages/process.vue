<template>
    <div id="app" class="container">
        <h1 class="text-bold">PROCESS: How to save a life</h1>
        <small>lorem loved ipsum to make descriptums.</small>
        <div class="row process-steps">
            <div class="col-lg-12">
                <process-steps
                class="card"
                v-for="step in steps"
                v-bind:step="step"
                v-bind:steps="steps"
                v-bind:key="step.id"
                ></process-steps>
            </div>
        </div>
        <!-- <new-step v-bind:steps="steps"></new-step> -->
        <!--NEW STEP-->
        <div class="step-new row" v-show="showStepNew">
            <div class="col-lg-12">
                <h3>New Step</h3>
                <needitems></needitems>
                <!--STEP MAIN-->
                <div class="row step-main">
                    <div class="col-lg-8">
                        <input type="text" placeholder="Step Title">
                        <quill-editor
                            ref="myQuillEditor"
                            v-model="stepContent"
                            :options="stepEditorOptions"
                            @blur="onEditorBlur($event)"
                            @focus="onEditorFocus($event)"
                            @ready="onEditorReady($event)"
                        />
                        <!-- <div id="step_content" class="richtext"></div> -->
                        <!-- <textarea rows="6" placeholder="Step Details"></textarea> -->
                    </div>
                    <div class="col-lg-4">
                        <media></media>         
                    </div>
                </div>
                <!--/STEP MAIN-->
                <subtasks></subtasks>
                <probfix></probfix>
                <div>
                    <button class="pri"><md-icon class="md-dark">chevron_right</md-icon>Save Step</button>
                </div>
            </div>
        </div>
        <!--/NEW STEP-->
        <div class="row">
            <div class="col-lg-6" v-show="!showStepNew">
                <button class="pri" v-on:click="showStepNew = !showStepNew"><md-icon class="md-dark">add</md-icon>Add New Step</button>
            </div>
            <div class="col-lg-6 text-right" v-show="showStepNew">
                <md-icon class="md-primary">expand_less</md-icon>
                <a v-on:click="showStepNew = !showStepNew">Hide New Step</a>
            </div>
        </div>
    </div>
</template>

<script>
    import 'quill/dist/quill.core.css'
    import 'quill/dist/quill.snow.css'
    import 'quill/dist/quill.bubble.css'

    import { quillEditor } from 'vue-quill-editor'

    // Include Vue Components
    import processSteps from '~/components/process-steps'
    import media from '~/components/process/media'
    import needitems from '~/components/process/needitems'
    import subtasks from '~/components/process/subtasks'
    import probfix from '~/components/process/probfix'

export default {
    data() {
        return {
            message: 'Hello Vue!',
            showStepNew: false,
            showProbFix: false,
            showStepMedia: false,
            editors: {},
            stepContent: null,
            stepEditorOptions: {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block']
                    ]
                }
            },
            subtaskContent: null,
            subtaskEditorOptions:{
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block']
                    ]
                }
            },
            problemContent: null,
            problemEditorOptions: {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block']
                    ]
                }
            },
            steps:[
                {
                    id: 0,
                    title: "New Data Model",
                    details: "lorem ipsum OMG this is richtext I think.",
                    ord:0,
                    media: [
                        {
                            caption:"hello world",
                            type: "image",
                            url: "https://images.unsplash.com/photo-1600673736081-50451fd6e9eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                            ord:0
                        },

                        {
                            caption:"hello world",
                            type: "video",
                            url: "https://www.youtube.com/embed/A5cVyjrKx_Q",
                            ord:1
                        },
                    ],
                    needitems: [
                        {
                            name: "Plywood",
                            type: "material",
                            amt: "1",
                            um: "4x8' sheet",
                            ord:0
                        },

                        {
                            name: "IP Address",
                            type: "info",
                            format: "/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/",
                            ord:1
                        },

                        {
                            name: "Christmas 2020",
                            type: "future-date",
                            value: "2020-12-25 00:00:00.0",
                            ord:2
                        },
                    ],
                    subtasks: [
                        {
                            id: 4,
                            title: "Smaller Task",
                            details: "task richtext.",
                            ord:0,
                            media: [
                                {
                                    caption:"hello world",
                                    type: "image",
                                    url: "https://unsplash.com/first-one.jpg",
                                    ord:0
                                },
                                {
                                    caption:"hello world",
                                    type: "video",
                                    url: "https://youtube.com/KU6g7i5fi",
                                    ord:1
                                },
                            ]
                        }
                    ],
                    commonProblems: [
                        {
                            problem: "my hand caught on fire",
                            fix: "extinguisher stat!",
                            ord:0,
                            media: [
                            {
                                caption:"hello world",
                                type: "image",
                                url: "https://unsplash.com/first-one.jpg",
                                ord:0
                            },
                            {
                                caption:"hello world",
                                type: "image",
                                url: "https://uploads.s3.aws.amazon.com/us-east/3674852347869234789fg82g.jpg",
                                ord:1
                            },
                            {
                                caption:"hello world",
                                type: "video",
                                url: "https://youtube.com/KU6g7i5fi",
                                ord:2
                            },
                            ]
                        }
                    ]
                }
            ]
        }
    },
    components:{
        quillEditor,
        media,
        processSteps,
        needitems,
        subtasks,
        probfix
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
    },
    mounted(){

    },
    methods:{
        onEditorBlur(quill,editorID) {
            //console.log('editor blur!', quill)
        },
        onEditorFocus(quill) {
            //console.log('editor focus!', quill)
        },
        onEditorReady(quill) {
            //console.log('editor ready!', quill)
        }
    }
}
</script>

<style>
    #app{margin-top: 40px;}
</style>