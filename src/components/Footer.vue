<template>
    <div id="footer">

        <nav class="footerMenu">
            <ul>
                <li><RouterLink to="/imprint"><p>imprint/disclaimer</p></RouterLink></li>
            </ul>
        </nav>
    </div>
</template>

<style scoped>
    #footer {
        /* position: fixed; */
        top: calc(100vh - 60px);
        /* background-color: rgb(146, 19, 19);
        opacity: 50%; */
        height: 60px;
        width: calc(100vw - 65px);
        /* border: solid gold 1px; */
    }

    #footer>h5 {
        line-height: 40px;
    }
</style>