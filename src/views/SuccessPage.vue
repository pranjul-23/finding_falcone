<template>
    <div class="success_page">
      <div class="reset__box">
        <a href="/">Reset</a>
        <div>|</div>
        <a href="https://www.geektrust.in/">Geek Trust Home</a>
      </div>
      <div v-if="getPlanetDetailData.planet_name">
          <h1>Success! Congratulation on Finding Falcone. King Shan is mighty pleased</h1>
          <h2>Time Taken: {{getPlanetDetailData.timeTaken}}</h2>
          <h2>Planet found: {{getPlanetDetailData.planet_name}}</h2>
      </div>
      <div v-else>
        <h1>Oops! King Shan could not find the Planet</h1>
      </div>
      <div class="btn__wrapper">
        <button class="btn_primary" @click="goToHomePage">Start Again</button>
      </div>
    </div>
</template>
<script src="./js/success-page.js"></script>
<style lang="scss" scoped>
    .success_page {
      text-align: center;
      .reset__box {
        display: flex;
        justify-content: flex-end;
        padding: 10px 20px;

        a {
          font-weight: 700;
          color: #2c3e50;
          text-decoration: none;
        }
      }
      .reset__box div:not(:first-child) {
        margin: 0 10px;
      }
      .btn__wrapper {
        text-align: center;
        margin-bottom: 50px;
        .btn_primary {
          width: 120px;
          padding: 10px;
          border-radius: 4px;
          color: #ffffff;
          cursor: pointer;
          outline: none;
          background-color: #ff8000;
        }
        .btn_disable {
          background-color: #808080;
          cursor: not-allowed;
        }
      }
    }
</style>
