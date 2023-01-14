<template>
    <p class="mt-4">
        <span class="float-md-left d-block d-md-inline-block mt-4 sentence">
            COPYRIGHT © {{ new Date().getFullYear() }}
            <b-link class="ml-25 text-danger font-weight-bolder" href="https://redlimoo.com/" target="_blank">RedLimoo</b-link>
            <span class="d-none d-sm-inline-block">, All rights Reserved</span>
        </span>

        <span class="float-md-right d-none d-md-block mt-2">
            <b-link class="ml-25 text-danger font-weight-bolder" href="https://redlimoo.com/" target="_blank">
                <span>
                    <b-img height="100px" :src="redlimooLogo" alt="logo" />
                </span>
            </b-link>
            <span>
                <b-img height="50px" :src="qmcLogo" alt="logo" />
            </span>
        </span>
    </p>
</template>

<script>
import { BLink, BImg } from "bootstrap-vue";
import { $themeConfig } from "@themeConfig";
export default {
    components: {
        BLink,
        BImg,
    },
    setup(props) {
        // App Name
        const { appName, redlimooLogo, qmcLogo } = $themeConfig.app;

        return {
            redlimooLogo,
            appName,
            qmcLogo,
        };
    },
};
</script>
<style scoped>
.sentence{
    margin-top: 100px;
}
</style>
