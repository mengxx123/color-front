<template>
    <div id="app" class="app">
        <router-view :key="$route.fullPath" />
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>
