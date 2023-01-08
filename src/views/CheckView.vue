<script>
export default {
  data() {
    return {
      mso: 'Hello Wörld!',
      url: "images/Logo_DoP_2line_invert_cmyk.png",
      video: "https://vimeo.com/156083728"
    }
  }
}
</script>

<template>
  <h1>{{ mso }}</h1>
  <input v-model="mso">
  <div id="image">
  <img :src=url>
</div>
</template>

<style scoped>
#image {
    width: 50%;
    height: 50%;
    border: 5px dotted yellow;
    
}
img {
    width: 50%
}
</style>