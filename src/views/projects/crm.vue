<template>
    <div class="container">
        <b-row class="justify-content-center my-1">
            <h4>Customer Comunication</h4>
        </b-row>
        <b-row class="justify-content-center">
            <b-col class="text-center" cols="5">
                <b-card>
                    <div class="m-2">
                        <b-avatar class="avatar ml-2" rounded="lg" variant="light-warning">
                            <span class="d-flex align-items-center">
                                <feather-icon icon="BarChartIcon" size="50" />
                            </span>
                        </b-avatar>
                        <b-avatar class="avatar ml-2" rounded="lg" variant="light-success">
                            <span class="d-flex align-items-center">
                                <feather-icon icon="BoxIcon" size="50" />
                            </span>
                        </b-avatar>
                        <b-avatar class="avatar ml-2" rounded="lg" variant="light-danger">
                            <span class="d-flex align-items-center">
                                <feather-icon icon="ApertureIcon" size="50" />
                            </span>
                        </b-avatar>
                    </div>
                    <b-button variant="success" href="http://rezapoursabet.ir"> Go to Crm </b-button>
                </b-card>
            </b-col>
        </b-row>
    </div>
</template>
<script>
import vSelect from "vue-select";
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BAvatar, BCard } from "bootstrap-vue";
export default {
    components: {
        BCard,
        BAvatar,
        BFormInput,
        BFormGroup,
        BRow,
        BCol,
        BFormDatepicker,
        vSelect,
        BFormFile,
        BButton,
    },
    data() {
        return {};
    },
    methods: {
        submit() {
            console.log(this.endDate);
        },
        toPainting(item) {
            console.log(item);
            this.$router.push({ name: `${item.to}` });
        },
    },
};
</script>
<style scoped>
#line {
    width: 100px;
    height: 20px;
    border-top: 1px solid #ccc;
    position: absolute;
    bottom: 20px;
    right: -10px;
}
.avatar {
    width: 70px;
    height: 70px;
}
</style>
