<template>
    <div class="picContainer">
        <div class="pic" @click="picClick(id)" @mouseover="picOver(id)">
            <div class="vAlign">
            <img :src="img"/>
            <h5 class="white">{{title}}</h5>
            </div>
        </div>
        <div class="title">

        </div>
    </div>
</template>

<script>
import filmlist from '../../public/data/films.json';
export default {
    props: ['img', 'id', 'title'],
    emits: ['picClicked', 'picOver'],
    methods: {
        picClick() {
            this.$emit("picClicked")
        }  ,
        picOver() {
            this.$emit('picOver')
        }
    },
    created() {
        this.films = filmlist;
    }
}
</script>

<style scoped>
.picContainer {
    display: flex;
    margin-top: 3.5ch;
    flex-direction: column;
}
.pic {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 150px;
}
img {    
    width: 100%;
    cursor: pointer;
}
.title {
    width: 200px;
}
.white {
    color: white;
}
</style>