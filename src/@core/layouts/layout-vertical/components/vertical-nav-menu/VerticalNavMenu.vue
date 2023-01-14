<template>
    <div
        class="main-menu menu-fixed menu-accordion menu-shadow"
        :class="[
            {
                expanded: !isVerticalMenuCollapsed || (isVerticalMenuCollapsed && isMouseHovered),
            },
            skin === 'semi-dark' ? 'menu-dark' : 'menu-light',
        ]"
        @mouseenter="updateMouseHovered(true)"
        @mouseleave="updateMouseHovered(false)"
    >
        <!-- main menu header-->
        <div class="navbar-header expanded">
            <slot name="header" :toggleVerticalMenuActive="toggleVerticalMenuActive" :toggleCollapsed="toggleCollapsed" :collapseTogglerIcon="collapseTogglerIcon">
                <!-- <ul class="nav navbar-nav flex-column">
                    <li class="row justify-content-center">
                        <span class="brand-text">
                            <b-img id="logoo" :src="appLogoImage" alt="logo" />
                        </span>
                    </li>
                    <li class="row justify-content-center">
                        <b-link  class="navbar-brand" to="/">
                            <span class="brand-logo">
                                <b-img :src="appLogoImage" alt="logo" />
                            </span>
                            <h2 class="brand-text">
                                {{ appName }}
                            </h2>
                        </b-link>

                        <h2 class="brand-text">
                            {{ appName }}
                        </h2>
                    </li> -->
                <!-- Toggler Button -->
                <!-- <li class="nav-item nav-toggle">
                        <b-link class="nav-link modern-nav-toggle">
                            <feather-icon
                                icon="XIcon"
                                size="20"
                                class="d-block d-xl-none"
                                @click="toggleVerticalMenuActive"
                            />
                            <feather-icon
                                :icon="collapseTogglerIconFeather"
                                size="20"
                                class="d-none d-xl-block collapse-toggle-icon"
                                @click="toggleCollapsed"
                            />
                        </b-link>
                    </li> -->
                <!-- </ul> -->
                <ul class="nav navbar-nav flex-row">
                    <!-- Logo & Text -->
                    <li class="nav-item mr-auto">
                        <b-link class="navbar-brand" to="/">
                            <span class="">
                                <b-img :src="alec1Logo" height="55px" class="alec1" alt="logo" />
                            </span>
                            <!-- <h2 class="mr-4"> -->
                                <!-- {{ appName }} -->
                                <b-img :src="alec2Logo" height="63px" class="alec2" alt="logo" />
                            <!-- </h2> -->
                        </b-link>
                    </li>

                    <!-- Toggler Button -->
                    <li class="nav-item nav-toggle">
                        <b-link class="nav-link modern-nav-toggle">
                            <feather-icon icon="XIcon" size="20" class="d-block d-xl-none" @click="toggleVerticalMenuActive" />
                            <feather-icon :icon="collapseTogglerIconFeather" size="20" class="d-none d-xl-block collapse-toggle-icon" @click="toggleCollapsed" />
                        </b-link>
                    </li>
                </ul>
            </slot>
        </div>
        <!-- / main menu header-->

        <!-- Shadow -->
        <div :class="{ 'd-block': shallShadowBottom }" class="shadow-bottom" />

        <!-- main menu content-->
        <vue-perfect-scrollbar
            :settings="perfectScrollbarSettings"
            class="main-menu-content scroll-area"
            tagname="ul"
            @ps-scroll-y="
                (evt) => {
                    shallShadowBottom = evt.srcElement.scrollTop > 0;
                }
            "
        >
            <vertical-nav-menu-items :items="navMenuItems" class="navigation navigation-main items" />
        </vue-perfect-scrollbar>
        <!-- /main menu content-->
    </div>
</template>

<script>
import navMenuItems from "@/navigation/vertical";
import VuePerfectScrollbar from "vue-perfect-scrollbar";
import { BLink, BImg } from "bootstrap-vue";
import { provide, computed, ref } from "@vue/composition-api";
import useAppConfig from "@core/app-config/useAppConfig";
import { $themeConfig } from "@themeConfig";
import VerticalNavMenuItems from "./components/vertical-nav-menu-items/VerticalNavMenuItems.vue";
import useVerticalNavMenu from "./useVerticalNavMenu";

export default {
    components: {
        VuePerfectScrollbar,
        VerticalNavMenuItems,
        BLink,
        BImg,
    },
    props: {
        isVerticalMenuActive: {
            type: Boolean,
            required: true,
        },
        toggleVerticalMenuActive: {
            type: Function,
            required: true,
        },
    },
    setup(props) {
        const { isMouseHovered, isVerticalMenuCollapsed, collapseTogglerIcon, toggleCollapsed, updateMouseHovered } = useVerticalNavMenu(props);
        const { skin } = useAppConfig();

        // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
        const shallShadowBottom = ref(false);

        provide("isMouseHovered", isMouseHovered);

        const perfectScrollbarSettings = {
            maxScrollbarLength: 60,
            wheelPropagation: false,
        };

        const collapseTogglerIconFeather = computed(() => (collapseTogglerIcon.value === "unpinned" ? "CircleIcon" : "DiscIcon"));

        // App Name
        const { appName, appLogoImage, alec1Logo, alec2Logo } = $themeConfig.app;

        return {
            navMenuItems,
            perfectScrollbarSettings,
            isVerticalMenuCollapsed,
            collapseTogglerIcon,
            toggleCollapsed,
            isMouseHovered,
            updateMouseHovered,
            collapseTogglerIconFeather,
            appLogoImage,
            alec1Logo,
            alec2Logo,
            // Shadow Bottom
            shallShadowBottom,

            // Skin
            skin,

            // App Name
            appName,
        };
    },
};
</script>

<style lang="scss">
@import "~@core/scss/base/core/menu/menu-types/vertical-menu.scss";
#logoo {
    width: 200px;
    height: 100px;
    margin-bottom: 10px;
}
.items {
    font-size: 13px;
    white-space: nowrap;
}
.logIMG {
    width: 120px;
    height: 50px;
}
.alec1 {
    position: absolute;
    left: 13px;
    bottom: -15px;
}
.alec2 {
    position: absolute;
    left: 33px;
    bottom: -15px;
}
</style>
