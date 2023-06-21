<template>
    <div class="row">
        <b-col class="text-center" cols="4">
            <b-card>
                <div class="text-center m-2" @click="toSpDetail">
                    <b-avatar class="avatar" rounded="lg" variant="light-danger">
                        <span class="d-flex align-items-center">
                            <feather-icon icon="BarChartIcon" size="50" />
                        </span>
                    </b-avatar>
                </div>
                <span> Surface Preprtion </span>
            </b-card>
        </b-col>
        <b-col class="text-center" cols="4">
            <b-card>
                <div class="text-center m-2">
                    <b-avatar class="avatar" rounded="lg" variant="light-warning">
                        <span class="d-flex align-items-center">
                            <feather-icon icon="ApertureIcon" size="50" />
                        </span>
                    </b-avatar>
                </div>
                <span> Painting </span>
            </b-card>
        </b-col>
        <b-col class="text-center" cols="4">
            <b-card>
                <div class="text-center m-2">
                    <b-avatar class="avatar" rounded="lg" variant="light-info">
                        <span class="d-flex align-items-center">
                            <feather-icon icon="BoxIcon" size="50" />
                        </span>
                    </b-avatar>
                </div>
                <span> P&P </span>
            </b-card>
        </b-col>
    </div>
</template>
<script>
import Chart from "chart.js";
import vSelect from "vue-select";
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BAvatar, BBadge, BMedia, BCard } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import AppTimeline from "@core/components/app-timeline/AppTimeline.vue";
import AppTimelineItem from "@core/components/app-timeline/AppTimelineItem.vue";
export default {
    components: {
        BCard,
        BMedia,
        BBadge,
        BAvatar,
        BFormInput,
        BFormGroup,
        BRow,
        BCol,
        BFormDatepicker,
        vSelect,
        BFormFile,
        BButton,
        apexchart: VueApexCharts,
        AppTimeline,
        AppTimelineItem,
    },
    data() {
        return {
            cardAllowed: false,
            name: "Project A",
            startDate: "2022-9-1",
            endDate: "2023-10-12",
            Duration: "1 Year",
            dir: "ltr",
            user: "User 1",
            selected: [{ title: "User 1" }, { title: "User 2" }, { title: "User 3" }],
            filesType: [{ title: "DWG" }, { title: "QCP" }, { title: "BOM" }, { title: "ITP" }, { title: "MTO" }, { title: "MRS" }, { title: "MIV" }, { title: "MOM" }],
        };
    },
    mounted() {},
    methods: {
        submit() {
            console.log(this.endDate);
        },
        toSpDetail(item) {
            this.$router.push({ name: "sp-detail" });
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
.dangerSign {
    margin-top: -60px;
    margin-right: -30px;
}
.dangerCard {
    width: 150px;
    height: 60px;
    margin-top: -80px;
    margin-left: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: aliceblue;
}
</style>
