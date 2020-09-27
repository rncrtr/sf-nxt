<template>
    <div class="subtasks-container">
        <!--SUBTASKS-->
        <div class="step-subtasks" v-show="showSubtasks">
            <h3>Subtasks</h3>
            <br />
            <div class="row">
                <div class="col-lg-8 step-subtask-item">
                    <div class="row">
                        <div class="col-lg-1">
                            <md-icon class="md-size-3x md-primary">chevron_right</md-icon>
                        </div>
                        <div class="col-lg-11">
                            <div>
                                <input type="text" placeholder="Step Title">
                            </div>
                            <div class="mt10">
                                <quill-editor
                                    ref="subtaskQuillEditor"
                                    v-model="subtaskContent"
                                    :options="subtaskEditorOptions"
                                    @blur="onEditorBlur($event)"
                                    @focus="onEditorFocus($event)"
                                    @ready="onEditorReady($event)"
                                />
                                <!-- <div id="subtask_content" class="richtext"></div> -->
                                <!-- <textarea rows="6" placeholder="Step Details"></textarea> -->
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <media></media>
                </div>                                    
            </div>
            <div class="row">
                <div class="col-lg-8 subtask-add">
                    <button class="pri"><md-icon class="md-dark">add</md-icon> &nbsp;Add Subtask</button>
                </div>
                <div class="col-lg-4 text-right">
                    <md-icon class="md-primary">expand_less</md-icon>
                    <a v-on:click="showSubtasks = !showSubtasks">Hide Subtasks</a>
                </div>
            </div>
        </div>
        <div class="row" v-show="!showSubtasks">
            <div class="col">
               <md-icon class="md-primary">expand_more</md-icon>
               <a v-on:click="showSubtasks = !showSubtasks">Show Subtasks</a>
            </div>
        </div>
        <!--/SUBTASKS-->
    </div>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
import media from '~/components/process/media'

export default {
    data(){
        return{
            showSubtasks: false,
            showSubtaskMedia: false,
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
        }
    },
    components:{
        quillEditor,
        media
    },
    computed: {
      editor() {
        return this.$refs.myQuillEditor.quill
      }
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
