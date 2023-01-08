<template>
    <div v-if="!this.cookieAccepted" id="myCookieConsent" class="cookieConsent">
        <CookieConsent  class="cookie-content" @closePopUpClicked= "hideCookieWindow()"></CookieConsent>
    </div>
    <div v-else>
        <!-- <h2>Welcome Cookies!</h2> -->
    </div>
    <h2 class="white">works</h2>
    <h4 class="white">selection</h4>
    <!-- this is set to display: "none" in <style scoped> below-->
    <div id="userSortAndFilter">
        <label>
            <select id="selectSort" v-model="selected" @change="this.sort(this.filteredFilms)">
                <div><p class="white">{{selected}}</p></div>
                <option v-for="option in options" :value="option.value">{{option.text}}</option>
        </select>
        </label>
        <label>
            <p class="white">filter by:
            <input @input="this.sortAndFilter()"></p>
        </label>
    </div>
    <!---->
    <div id="picGaleryContainer">
    <div id="picGalery">

        <VideoPic v-for="(film, index) in this.sortedAndFilteredFilms"
            @picClicked="openPlayer(film.id)"
            :key="index"
            :img="film.img"
            :title="film.title"
        />
    </div>
    </div>
        <div id="offset"></div>
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
                <VimeoPlayer v-if="!this.playerClosed" :this.vimeoID ='"785975822"'
                    :videoID="this.vimeoID"
                />
                <div v-else>What happened to the player?</div>
                <div class="filmInfo">
                    <h4>{{this.selectedFilm.title}}</h4>
                    <p>director:</p>
                    <h4>{{this.selectedFilm.director}}</h4>
                    <p>production:</p>
                    <h4>{{this.selectedFilm.production}}</h4>
                    <div id="fundingBox">
                        <p>with the support of: </p><h5>{{this.selectedFilm.fundedText}}</h5>
                    </div>
                    <p>year: {{this.selectedFilm.year}}</p>
                    <a :href="this.selectedFilm.link" target="blank" id="infoLink">info</a>
                </div>
                <div id="closeX">
                    <span class="close"
                    @click="this.doSomething('closing player')"
                    >&times;</span>
                </div>
        </div>
    </div>
</template>

<script>
    import VimeoPlayer from '../components/VimeoPlayer.vue';
    import filmlist from '../../public/data/films.json';
    import VideoPic from '../components/VideoPic.vue';
    import CookieConsent from '../components/CookieConsent.vue';


    export default {
        components: {
            VimeoPlayer,
            VideoPic,
            CookieConsent
        },
        data() {
            return {
                SearchText: '',
                films: [],
                filteredFilms: [],
                sortedFilms: [],
                sortedAndFilteredFilms:[],
                selectedFilm: {},
                filmInfo: {},
                vimeoID: '785975822',
                selected: 'year DESC',
                options: [
                    {text: 'year DESC', value: 'year DESC'},
                    {text: 'year ASC', value: 'year ASC'},
                    {text: 'nothing', value: 'nothing'}
                ],
                cookieAccepted: false,
                playerClosed: false
            }
        },
        methods: {
            hideCookieWindow() {
                console.log("received emit closePopUpClicked");
                const cookieWindow = document.getElementById("myCookieConsent");
                cookieWindow.style.display="none";
                this.cookieAccepted = true;
                console.log(`storing cookie accepted: ${this.cookieAccepted}`);
                localStorage.setItem("cookieConsent", JSON.stringify(this.cookieAccepted));
            },

            doSomething(data) {
                console.log(data);
                this.playerClosed = true;
            },
            openPlayer(selectedId) {
                this.playerClosed = false;
                for (let i = 0; i < this.sortedAndFilteredFilms.length; i ++) {
                    if (this.sortedAndFilteredFilms[i].id === selectedId ) {
                        this.selectedFilm = this.sortedAndFilteredFilms[i];
                    }
                }
                this.vimeoID = this.selectedFilm.vimeoID;
                this.title = this.selectedFilm.title;
                let modal = document.getElementById("myModal");
                let span = document.getElementsByClassName("close")[0];
                let infoLink = document.getElementById("infoLink");
                let fundingBox = document.getElementById("fundingBox");
                modal.style.display = "block";
                if (this.selectedFilm.url === true) {
                    infoLink.style.display="block";
                } else {
                    infoLink.style.display="none"
                };
                if (this.selectedFilm.funded === true) {
                    fundingBox.style.display="block";
                } else {
                    fundingBox.style.display="none"
                };
                span.onclick = function () {
                modal.style.display = "none";
                };
            },
            sortAndFilter() {
                this.SearchText = event.target.value;
                const searchTerm = this.SearchText.toLowerCase();
                this.filterByName(this.films, searchTerm);
                this.sortedAndFilteredFilms = this.sort (this.filteredFilms);
            },

            sort(dataArray) {
                if (this.selected === 'year DESC') {
                    this.sortedAndFilteredFilms = this.sortByDateDESC(dataArray);   
                } else if (this.selected === 'year ASC') {
                    this.sortedAndFilteredFilms = this.sortByDateASC(dataArray);
                } else {
                this.sortedAndFilteredFilms = [];
            };
            return this.sortedAndFilteredFilms;
            },

            filterByName(dataArray, searchTerm) {
                this.filteredFilms = dataArray.filter(function(element) {
                return element.title.toLowerCase().includes(searchTerm) ||
                element.director.toLowerCase().includes(searchTerm) ||
                element.dp.toLowerCase().includes(searchTerm);
            });

            return this.filteredFilms;
            },

            sortByDateDESC(filmsToSort) {
                this.sortedFilms=filmsToSort.sort(function(a,b){
                    return b.year.localeCompare(a.year);
                });
                return this.sortedFilms;
            },

            sortByDateASC(filmsToSort) {
                this.sortedFilms=filmsToSort.sort(function(a,b){
                    return a.year.localeCompare(b.year);
                });
                return this.sortedFilms;
            },
        },
        created() {
            this.cookieAccepted=JSON.parse(localStorage.getItem("cookieConsent"));
            this.films = filmlist;
            this.unsortedFilmList = filmlist;
            this.filteredFilms = this.films;
            this.sortedAndFilteredFilms = this.filteredFilms;
            this.sort(this.sortedAndFilteredFilms);
        }
    }

</script>

<style scoped>
    .white {
        color: white;
    }
    #userSortAndFilter {
        /* display: flex; */
        display: none;
        gap: 2ch;
    }

    #picGaleryContainer {
        min-height: calc(60vh + 2ch);
    }
    #picGalery {
        margin-top: 2ch;;
        min-height: calc(20vh + 2ch);
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 10px;
    }

    /* The Cookie Consent PopUp */

    #myCookieConsent {
        display: block;
    }
    .cookieConsent {
        display: block;
        position: fixed;
        z-index: 101; /* over <header> in styles.css*/
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
    }

    /* Cookie Content/Box */
        .cookie-content {
        display: flex;
        flex-direction: row;
        gap: 10px;
        background-color: #fefefe;
        margin: 30% auto;
        padding: 30px;
        /* border: 5px solid #888; */
        width: 60%;
        opacity: 90%;
        box-shadow: 10px;
        border-radius: 10px;
    }
    /* The Modal */
    .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgb(0, 0, 0);
        background-color: rgba(0, 0, 0, 0.9);
    }
    /* Modal Content/Box */
    .modal-content {
        display: flex;
        flex-direction: row;
        gap: 10px;
        background-color: #fefefe;
        margin: 20% auto;
        padding: 10px;
        border: 1px solid #888;
        width: 80%;
        opacity: 100%;
    }
    .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
    }
    .close:hover,
    .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
    }
    .filmInfo > 
    h3,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    a {
        color: black;
    }

    #infoLink {
        display: none;
    }

    #offset {
        height: calc(1ch + 8px);
    }
</style>