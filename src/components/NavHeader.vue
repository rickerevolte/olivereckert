<template>
    <header>
            <img :src="img" id="logo" class="">
        <nav class="topMenu">
            <ul>
                <li><RouterLink to="/">works</RouterLink></li>
                <li><RouterLink to="/about">about</RouterLink></li>
                <li><RouterLink to="/contact">contact</RouterLink></li>
                <!-- <li><RouterLink to="/check">check</RouterLink></li> -->
            </ul>
        </nav>
        <a href="#" id="burgerButton">=</a>
    </header>
    <div id="sideMenu" class="">
        <ul>
            <li><RouterLink to="/">works</RouterLink></li>
            <li><RouterLink to="/about">about</RouterLink></li>
            <li><RouterLink to="/contact">contact</RouterLink></li>
            <!-- <li><RouterLink to="/check">check</RouterLink></li> -->
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
        img: 'images/Logo_09_1zeilig-weiss_noborder.png'
        }
    }
}
</script>