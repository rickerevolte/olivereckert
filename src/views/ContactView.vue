<template>
  <h3>contact</h3>
  <div id="spacer"></div>
  <div class="wrapper">
    <div id="spacer"></div>
    <div id="spacer"></div>
    <div id="spacer"></div>
    <div id="spacer"></div>
    <h3>mail(at)olivereckert.de</h3>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  /* width: calc(100% - 2px); */
  height: calc(60vh + 4ch + 6px);
  /* border: solid rgb(255, 255, 255) 1px; */
  text-align: center;
  align-items: center;
}
.image {
  position: relative;
  /* top: 16vh; */
  width: 100%;
  /* width: calc(100% - 2px); */
  /* border: solid rgb(255, 255, 255) 1px; */
  text-align: center;
  align-items: center;
}

#contactButton {
  position: relative;
  text-align: center;
  color: white;
  text-decoration: none;
}

#contactDetail {
  position: relative;
  display: none;
}

#contactDetail.contactDetailVisible {
  display: block;
}
</style>
