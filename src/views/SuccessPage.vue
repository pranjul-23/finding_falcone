<template>
    <div class="success_page">
        <div v-if="getPlanetDetailData.planet_name">
            <h1>Yahoo! King Shan has got the Planet: {{getPlanetDetailData.planet_name}}</h1>
            <h3>Time Taken: {{getPlanetDetailData.timeTaken}}</h3>
        </div>
        <h1 v-else>Oops! King Shan could not find the Planet</h1>
    </div>
</template>
<script src="./js/success-page.js"></script>
<style lang="scss" scoped>
    .success_page {
        text-align: center;
    }
</style>
