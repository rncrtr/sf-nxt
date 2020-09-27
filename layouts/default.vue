<template>
<div>
    <nav class="menu">
        <a href="#" class="brand">
            <img class="logo" src="/img/basket.png" />
            <span>StepFlow</span>
        </a>

        <!-- responsive-->
        <input id="bmenub" type="checkbox" class="show">
        <label for="bmenub" class="burger pseudo button">menu</label>

        <div class="menu">
            <a href="#" class="pseudo button">Sign In</a>
            <button>Sign Up</button>
        </div>
    </nav>
    <Nuxt />
</div>
</template>

<script>
import 'flexboxgrid'

export default {
    
}
</script>

<style>
a{cursor: pointer;}
.menu{margin-bottom: 40px;}
</style>