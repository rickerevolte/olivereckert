<template>
  <h3>about</h3>
  <div id="container">
    <div class="image">
      <div>
        <img :src="this.aboutImages[this.randomID].imgURL" />
      </div>
    </div>
    <div id="block">
      <br />
      <p class="flow">{{ this.aboutList.par0 }}</p>
      <p class="flow">{{ this.aboutList.par1 }}</p>
      <p class="flow">{{ this.aboutList.par2 }}</p>
      <p class="flow">{{ this.aboutList.par3 }}</p>
      <p class="flow">{{ this.aboutList.par4 }}</p>
      <p class="flow">{{ this.aboutList.par5 }}</p>
      <p class="flow">{{ this.aboutList.par6 }}</p>
      <p class="flow">{{ this.aboutList.par7 }}</p>
    </div>
  </div>
</template>

<script>
import about from "../../public/data/about.json";
import aboutImages from "../../public/data/aboutImages.json";

export default {
  data() {
    return {
      aboutList: {},
      aboutImages: [],
      hello: "hello",
      randomID: 0,
    };
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },
  },
  created() {
    this.aboutList = about;
    this.aboutImages = aboutImages;
    this.randomID = this.getRndInteger(0, this.aboutImages.length);
  },
};
</script>

<style scoped>
#container {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: calc(60vh + 4ch + 6px);
}
#block {
  position: relative;
  width: calc(60%);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
.image {
  position: relative;
  margin-left: auto;
  margin-right: auto;
  /* top: 16vh; */

  /* width: calc(100% - 2px); */
  /* border: solid rgb(255, 255, 255) 1px; */
  text-align: center;
  align-items: center;
}
.image img {
  width: calc(100%);
  max-width: 600px;
}
</style>
