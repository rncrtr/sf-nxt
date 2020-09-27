<template>
<div class="step-item">
  <section>
    <div class="row">
      <div class="col-lg-1">
        <h1>{{step.id + 1}}.</h1>
      </div>
      <div class="col-lg-10">
        <h1>{{step.title}}</h1>
      </div>
      <div class="col-lg-1 mt10 text-right">
        <div class="row">
          <div class="col cursor-pointer">
            <md-icon class="md-3x md-primary">edit</md-icon>
          </div>
          <div class="col cursor-pointer">
            <md-icon class="md-3x md-primary">delete</md-icon>
          </div>
          <div class="col cursor-move">
            <md-icon class="md-3x md-primary">drag_indicator</md-icon>
          </div>
        </div>
      </div> 
    </div>
      <div class="row">
        <div class="col-lg-1">

        </div>
        <div class="col-lg-7">
          {{step.details}} 
        </div> 
        <!--
        <div class="col-lg-5 step-media">
          <span v-for="media in step.media" v-bind:key="media.url">
            <span class="step-media-image" v-show="media.type == 'image'">
              <img v-bind:src="media.url" width="200" />
            </span>
            <span class="step-media-image" v-show="media.type == 'video'">
              <iframe width="200" height="133" v-bind:src="media.url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
            <div class="text-center">
              <strong>{{media.caption}}</strong>
            </div>
          </span>
        </div>
        -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
    props: ['steps','step']
}
</script>
<style>

</style>