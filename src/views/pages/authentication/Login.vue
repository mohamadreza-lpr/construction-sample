<template>
    <div class="auth-wrapper auth-v2">
        <b-row class="auth-inner m-0">
            <!-- Brand logo-->
            <b-link class="brand-logo">
                <h2 class="brand-text text-primary ml-1">Vueme</h2>
            </b-link>
            <!-- /Brand logo-->

            <!-- Left Text-->
            <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
                <div class="w-100 d-lg-flex align-items-center justify-content-center px-5">
                    <b-img fluid :src="imgUrl" alt="Login V2" />
                </div>
            </b-col>
            <!-- /Left Text-->

            <!-- Login-->
            <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
                <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
                    <b-card-title class="mb-1 font-weight-bold" title-tag="h2"> Welcome to Vueme! 👋 </b-card-title>
                    <b-card-text class="mb-2"> Please sign-in to your account and start the adventure </b-card-text>

                    <b-alert variant="primary" show>
                        <div class="alert-body font-small-2">
                            <p>
                                <small class="mr-50"><span class="font-weight-bold">Admin:</span> admin@demo.com | admin</small>
                            </p>
                            <p>
                                <small class="mr-50"><span class="font-weight-bold">Client:</span> client@demo.com | client</small>
                            </p>
                        </div>
                        <feather-icon v-b-tooltip.hover.left="'This is just for ACL demo purpose'" icon="HelpCircleIcon" size="18" class="position-absolute" style="top: 10; right: 10" />
                    </b-alert>

                    <!-- form -->
                    <validation-observer ref="loginForm" #default="{ invalid }">
                        <b-form class="auth-login-form mt-2" @submit.prevent="signIn">
                            <!-- email -->
                            <b-form-group label="Email" label-for="login-email">
                                <validation-provider #default="{ errors }" name="Email" vid="email" rules="required|email">
                                    <b-form-input id="login-email" v-model="userEmail" :state="errors.length > 0 ? false : null" name="login-email" placeholder="john@example.com" />
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </validation-provider>
                            </b-form-group>

                            <!-- forgot password -->
                            <b-form-group>
                                <div class="d-flex justify-content-between">
                                    <label for="login-password">Password</label>
                                    <b-link :to="{ name: 'auth-forgot-password' }">
                                        <small>Forgot Password?</small>
                                    </b-link>
                                </div>
                                <validation-provider #default="{ errors }" name="Password" vid="password" rules="required">
                                    <b-input-group class="input-group-merge" :class="errors.length > 0 ? 'is-invalid' : null">
                                        <b-form-input id="login-password" v-model="password" :state="errors.length > 0 ? false : null" class="form-control-merge" :type="passwordFieldType" name="login-password" placeholder="Password" />
                                        <b-input-group-append is-text>
                                            <feather-icon class="cursor-pointer" :icon="passwordToggleIcon" @click="togglePasswordVisibility" />
                                        </b-input-group-append>
                                    </b-input-group>
                                    <small class="text-danger">{{ errors[0] }}</small>
                                </validation-provider>
                            </b-form-group>

                            <!-- checkbox -->
                            <b-form-group>
                                <b-form-checkbox id="remember-me" v-model="status" name="checkbox-1"> Remember Me </b-form-checkbox>
                            </b-form-group>

                            <!-- submit buttons -->
                            <b-button type="submit" variant="primary" block :disabled="invalid"> Sign in </b-button>
                        </b-form>
                    </validation-observer>

                    <b-card-text class="text-center mt-2">
                        <span>New on our platform? </span>
                        <b-link :to="{ name: 'auth-register' }">
                            <span>&nbsp;Create an account</span>
                        </b-link>
                    </b-card-text>

                    <!-- divider -->
                    <div class="divider my-2">
                        <div class="divider-text">or</div>
                    </div>

                    <!-- social buttons -->
                    <div class="auth-footer-btn d-flex justify-content-center">
                        <b-button variant="facebook" href="javascript:void(0)">
                            <feather-icon icon="FacebookIcon" />
                        </b-button>
                        <b-button variant="twitter" href="javascript:void(0)">
                            <feather-icon icon="TwitterIcon" />
                        </b-button>
                        <b-button variant="google" href="javascript:void(0)">
                            <feather-icon icon="MailIcon" />
                        </b-button>
                        <b-button variant="github" href="javascript:void(0)">
                            <feather-icon icon="GithubIcon" />
                        </b-button>
                    </div>
                </b-col>
            </b-col>
            <!-- /Login-->
        </b-row>
    </div>
</template>

<script>
/* eslint-disable global-require */
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { BRow, BCol, BLink, BFormGroup, BFormInput, BInputGroupAppend, BInputGroup, BFormCheckbox, BCardText, BCardTitle, BImg, BForm, BButton, BAlert, VBTooltip } from "bootstrap-vue";
import useJwt from "@/auth/jwt/useJwt";
import { required, email } from "@validations";
import { togglePasswordVisibility } from "@core/mixins/ui/forms";
import store from "@/store/index";
import { getHomeRouteForLoggedInUser } from "@/auth/utils";

import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
    directives: {
        "b-tooltip": VBTooltip,
    },
    components: {
        BRow,
        BCol,
        BLink,
        BFormGroup,
        BFormInput,
        BInputGroupAppend,
        BInputGroup,
        BFormCheckbox,
        BCardText,
        BCardTitle,
        BImg,
        BForm,
        BButton,
        BAlert,
        ValidationProvider,
        ValidationObserver,
    },
    mixins: [togglePasswordVisibility],
    data() {
        return {
            status: "",
            password: "admin",
            userEmail: "admin@demo.com",
            sideImg: require("@/assets/images/pages/login-v2.svg"),

            // validation rules
            required,
            email,
        };
    },
    computed: {
        passwordToggleIcon() {
            return this.passwordFieldType === "password" ? "EyeIcon" : "EyeOffIcon";
        },
        imgUrl() {
            if (store.state.appConfig.layout.skin === "dark") {
                // eslint-disable-next-line vue/no-side-effects-in-computed-properties
                this.sideImg = require("@/assets/images/pages/login-v2-dark.svg");
                return this.sideImg;
            }
            return this.sideImg;
        },
    },
    methods: {
        signIn() {
            console.log("dddd");
            let data = {
                id: 83,
                name: "Hnojoum Hnojoum",
                bio: null,
                user_name: "hnojoum-hnojoum",
                name_ar: null,
                first_name_length: "7",
                first_name_ar_length: null,
                first_name: "Hnojoum",
                last_name: "Hnojoum",
                first_name_ar: "",
                last_name_ar: "",
                email: "Hnojoum@gmail.com",
                email_verified_at: "2022-02-20T16:55:39.000000Z",
                is_artist: 0,
                is_composer: 0,
                is_active: 1,
                cell_number: null,
                city_id: 3800,
                country_id: 229,
                gender: "male",
                role: "Manager",
                level: "normal",
                created_at: "2022-02-20T16:55:38.000000Z",
                image: "https://cdn.nojoum.app/nojoum-staging/120/LOGO-CIRCLE2.png",
                thumbnail: "https://cdn.nojoum.app/nojoum-staging/120/conversions/LOGO-CIRCLE2-thumbnail.jpg",
                app_thumbnail: "https://cdn.nojoum.app/nojoum-staging/120/conversions/LOGO-CIRCLE2-thumbnail_app.jpg",
                status_follow: "unfollow",
                stories: [
                    { id: 1365, status: "approved", next_id: 1364, previous_id: 1366, created_at: "2023/01/02 16:59:23", view_users_count: 0, likes: 0, is_liked: false, create_time: "1 week ago", views: 0 },
                    { id: 1364, status: "approved", next_id: 1362, previous_id: 1365, created_at: "2023/01/02 16:26:42", view_users_count: 0, likes: 0, is_liked: false, create_time: "1 week ago", views: 0 },
                ],
                have_verify_tick: 0,
                ability: [{ action: "manage", subject: "all" }],
            };
            let accessToken =
                "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5NWViNGM2Zi1lZDkwLTQ4MGUtOTcxMy1iNTIyNTk2NTgzYjAiLCJqdGkiOiI3OWU0MjNlYjljMDQ4ZmJkMzY4NDNhZDcwZDljMDBlODgxZGFhYTIwMjYyYWQyYmExZGFmYWRkODIwOWVhN2ZhZDI2NWQ3MDM0NWY5MDFiMyIsImlhdCI6MTY3MzQ1NjIyOC4zNzM1NSwibmJmIjoxNjczNDU2MjI4LjM3MzU1NSwiZXhwIjoxNzA0OTkyMjI4LjM2NzA3MSwic3ViIjoiODMiLCJzY29wZXMiOltdfQ.QR8h9RQJz5-L2kbA94IK2TRKiezVplgx32jHRxjizE00spQLDpMwK3ZEQ5hfWqEy19l3lL2PPogIAMnJtIEqCB47PDuJMLFYXCaTnMzx6MCNe17oG5Vazt_Jv7myRHrZMDuCy_y68XOWQ7_E10gAvJja__SXEhZ9fWUc4pF6teSoJnISW0mJBdmACxmeveRADLFDS0UwXCo08rqv4-4oiriyY4qmJcYCiV3OP7PYuwwX_8NWFJX5PgyXhLXWwIcwe0BA2JN1h9Q4wJ2LwLzvVY21p83pBhqvCIE4vA35j-LhEy76bh7LRgHFAfz8dU5muv9cOwOvprfkJxdkLC3GBHqJXeJKP5MIUsZOcForn0iW0HBdHD53W3psZAGa_rsuBjBmXUoNLUTikW3mFujxhks__T5q1PvZUzyWPn1XYylgy4WrLD9q5Dg9zR7y3OxuLeRSyqF_ATo3nHEQm3bYYDJ_trh_NFEV4iI7bSnmaSkeyvpGVeSOJMMwr41hR-p3L1C72RWs3OCeSAG4qxFd_Ftw6dT_AHj1sDqNdMImERmTQijfpToClJ-qbgX2HdKJ2uszaRa7AwX4tCcAUZviP6P33_2qJbWn9qODVT1wGc5Ki0gUAF6pOL9kgkhyVZRSYrSuIHfR9X-Sklj7ZTyH4AJx2iAZ7RWriecEVYFIW0A";
            let refreshToken = "eyJhdWQiOiI5NWViNGM2Zi1lZDkwLTQ4MGUtOTcxMy1iNTIyNTk2NTgzYjAiLCJqdGkiOiI3OWU0MjNlYjljMDQ4ZmJkMzY4NDNhZDcwZDljMDBlODgxZGFhYTIwMjYyYWQyYmExZGFmYWRkODIwOWVhN2ZhZDI2NWQ3MDM0NWY5MDFiMyIsImlhdCI6MTY3MzQ1NjIyOC4zNzM1NSwibmJmIjoxNjczNDU2MjI4LjM3MzU1NSwiZXhwIjoxNzA0OTkyMjI4LjM2NzA3MSwic3ViIjoiODMiLCJzY29wZXMiOltdfQ";
            // let loglevel = "silent"
            localStorage.setItem("userData", JSON.stringify(data));
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            localStorage.setItem("refreshToken", refreshToken);
            useJwt.login({
                email: this.userEmail,
                password: this.password,
            });
            // this.$router.replace({ name: "projects-add" });
        },
        // login() {
        //   this.$refs.loginForm.validate().then(success => {
        //     if (success) {
        //       useJwt.login({
        //         email: this.userEmail,
        //         password: this.password,
        //       })
        //         .then(response => {
        //           const { userData } = response.data
        //           useJwt.setToken(response.data.accessToken)
        //           useJwt.setRefreshToken(response.data.refreshToken)
        //           localStorage.setItem('userData', JSON.stringify(userData))
        //           this.$ability.update(userData.ability)

        //           // ? This is just for demo purpose as well.
        //           // ? Because we are showing eCommerce app's cart items count in navbar
        //           this.$store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', userData.extras.eCommerceCartItemsCount)

        //           // ? This is just for demo purpose. Don't think CASL is role based in this case, we used role in if condition just for ease
        //           this.$router.replace(getHomeRouteForLoggedInUser(userData.role))
        //             .then(() => {
        //               this.$toast({
        //                 component: ToastificationContent,
        //                 position: 'top-right',
        //                 props: {
        //                   title: `Welcome ${userData.fullName || userData.username}`,
        //                   icon: 'CoffeeIcon',
        //                   variant: 'success',
        //                   text: `You have successfully logged in as ${userData.role}. Now you can start to explore!`,
        //                 },
        //               })
        //             })
        //         })
        //         .catch(error => {
        //           this.$refs.loginForm.setErrors(error.response.data.error)
        //         })
        //     }
        //   })
        // },
    },
};
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
