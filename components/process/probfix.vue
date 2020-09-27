<template>
    <div class="probfix-container">
        <!--PROBLEMS-->
        <div class="probfix" v-show="showProbfix">
            <h3>Common Problems & Fixes</h3>
            <div class="row">
                <div class="col-lg-12">
                    <input type="text" placeholder="Problem Title">
                    <quill-editor
                        ref="myQuillEditor"
                        v-model="probfixContent"
                        :options="probfixEditorOptions"
                        @blur="onEditorBlur($event)"
                        @focus="onEditorFocus($event)"
                        @ready="onEditorReady($event)"
                    />
                    <!-- <div id="probfix_content" class="richtext"></div> -->
                    <!-- <textarea rows="5" placeholder="Fix Details"></textarea> -->
                </div>
            </div>
            <div class="probfix-actions row">
                <div class="probfix-add col-lg-9">
                    <button class="pri"><md-icon class="md-dark">chevron_right</md-icon> &nbsp;Add Problem/Fix</button>
                </div>
                <div class="col-lg-3 text-right">
                    <a v-on:click="showProbfix = !showProbfix"><md-icon class="md-primary">expand_less</md-icon>  Hide Problems</a>
                </div>
            </div>
        </div>
        <div class="probfix-show row" v-show="!showProbfix">
            <a v-on:click="showProbfix = !showProbfix"><md-icon class="md-primary">expand_more</md-icon>  Show Problems</a>
        </div>
        <!--/PROBLEMS-->
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
            showProbfix: false,
            showProbfixMedia: false,
            probfixContent: null,
            probfixEditorOptions:{
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