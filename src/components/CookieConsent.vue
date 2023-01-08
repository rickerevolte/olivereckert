<template>
    <div class="cookie-content">
        <div id="consentText">
            <h3>I love cookies and third-party content!</h3>
            <h1>😀</h1>
            <h3>Otherwise I have to leave this page.</h3>
            <h1>☹️</h1>
        </div>
        <div id="closeX">
            <span class="closeCookie" @click="this.closePopUpWindow()"><h3> Yes</h3></span>
        </div>
    </div>
</template>
<script>
export default {
    emits: ["closePopUpClicked"],
    methods: {
        closePopUpWindow() {
            this.$emit("closePopUpClicked")
        }
    }
}
</script>
<style scoped>

    h2, h3, h4, h5 {
        color: rgb(39, 39, 39);
        font-weight: lighter;
    }
    #consentText {
        border: solid pink 0px; 
    }
    /* The Close Button */
    #closeX {
        position: relative;
        right: -1%;

    }
    .closeCookie {
        padding: 4px;
        width: 36px;
        align-content: center;
        border-radius: 5px;
        height: 28px;
        border: solid rgb(81, 63, 162) 2px;
        float: right;
    }
    .closeCookie:hover,
    .closeCookie:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
</style>