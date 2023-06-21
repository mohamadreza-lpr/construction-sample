<template>
    <div class="container">
        <b-row class="my-1">
            <h4 class="font-weight-colder">Project</h4>
            <h6 class="ml-1 mt-25">T2 Storage Tank AG</h6>
        </b-row>
        <b-row class="mb-4">
            <div class="col-8 mr-4">
                <apexchart type="rangeBar" height="550" :options="chartOptions" :series="series"></apexchart>
                <b-row class="justify-content-end">
                    <div class="col-2"></div>
                    <div class="col-2"></div>
                    <div class="col-2"></div>
                    <div class="col-3 dangerSign">
                        <b-badge pill variant="danger" class="badge-glow" @click="cardAllowed = !cardAllowed"><feather-icon icon="AlertTriangleIcon" size="30" /></b-badge>
                        <div class="dangerCard" v-if="cardAllowed"></div>
                    </div>
                    <div class="col-2"></div>
                </b-row>
            </div>
            <div class="col-3 ml-4">
                <b-row>
                    <h4>Upcoming Tasks</h4>
                </b-row>

                <b-row>
                    <app-timeline>
                        <app-timeline-item title="USER 1" subtitle="All milestones are completed" time="few minutes ago" variant="success" />

                        <app-timeline-item title="USER 2" subtitle="You are just one step away from your goal" time="3 minutes ago" variant="info" />

                        <app-timeline-item title="USER 3" subtitle="Only 30 minutes left to finish milestone" time="21 minutes ago" variant="warning" />

                        <app-timeline-item title="TPA" subtitle="New event has been added to your schedule" time="36 minutes ago" />
                    </app-timeline>
                </b-row>
                <b-row class="">
                    <b-row class="justify-content-center my-1">
                        <h4>Comments</h4>
                    </b-row>
                    <app-timeline>
                        <!-- 12 INVOICES HAVE BEEN PAID -->
                        <app-timeline-item variant="secondary" icon="UserIcon">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6>Client Meeting</h6>
                                <small class="text-muted">45 min ago</small>
                            </div>
                            <p>Project meeting with john @10:15am.</p>
                            <b-media>
                                <template #aside>
                                    <b-avatar :src="require('@/assets/images/avatars/12-small.png')" />
                                </template>
                                <h6>John Doe (Client)</h6>
                                <p>CEO of Infibeam</p>
                            </b-media>
                        </app-timeline-item>

                        <!-- INTERVIEW SCHEDULE -->
                        <app-timeline-item variant="warning" icon="UserIcon">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6>Interview Schedule</h6>
                                <small class="text-muted">03:00 PM</small>
                            </div>
                            <p>Have to interview Katy Turner for the developer job.</p>
                            <div class="d-flex flex-sm-row flex-column justify-content-between align-items-start">
                                <b-media>
                                    <template #aside>
                                        <b-avatar :src="require('@/assets/images/avatars/1-small.png')" />
                                    </template>
                                    <h6>Katy Turner</h6>
                                    <span class="text-muted">Javascript Developer</span>
                                </b-media>
                                <div>
                                    <feather-icon icon="MessageSquareIcon" class="mr-1" />
                                    <feather-icon icon="PhoneCallIcon" />
                                </div>
                            </div>
                        </app-timeline-item>
                    </app-timeline>
                </b-row>
            </div>
        </b-row>
        <!-- <hr /> -->
        <div class="row mt-4">
            <div class="col-9">
                <b-row class="justify-content-center">
                    <b-col class="text-center" cols="3" v-for="item in detailItems" :key="item.id">
                        <div class="text-center m-2" @click="toInspectionGate(item)">
                            <b-avatar @click="toInspectionGate(item)" class="avatar" rounded="lg" :variant="item.color">
                                <span class="d-flex align-items-center">
                                    <feather-icon :icon="item.feather" size="50" />
                                </span>
                            </b-avatar>
                        </div>
                        <span> {{ item.name }} </span>
                    </b-col>
                </b-row>
            </div>
            <div class="col-3">
                <h4>Project Details</h4>
                <b-row class="p-1">
                    <b-avatar variant="light-primary" rounded="sm">
                        <feather-icon icon="CalendarIcon" size="17" />
                    </b-avatar>
                    <span class="font-weight-bolder m-50">Starting Time:</span>
                    <span class="m-50">2020/05/06</span>
                </b-row>
                <b-row class="p-1">
                    <b-avatar variant="light-danger" rounded="sm">
                        <feather-icon icon="CalendarIcon" size="17" />
                    </b-avatar>
                    <span class="font-weight-bolder m-50">End Time:</span>
                    <span class="m-50">2020/10/06</span>
                </b-row>
                <b-row class="p-1">
                    <b-avatar variant="light-info" rounded="sm">
                        <feather-icon icon="CalendarIcon" size="17" />
                    </b-avatar>
                    <span class="font-weight-bolder m-50">Duration:</span>
                    <span class="m-50">5 Mounths</span>
                </b-row>
                <b-row class="p-1">
                    <b-avatar variant="light-success" rounded="sm">
                        <feather-icon icon="ChevronRightIcon" size="17" />
                    </b-avatar>
                    <span class="font-weight-bolder m-50">DIC:</span>
                    <span class="m-50">User 6</span>
                </b-row>
                <b-row class="p-1">
                    <b-avatar variant="light-success" rounded="sm">
                        <feather-icon icon="UsersIcon" size="17" />
                    </b-avatar>
                    <span class="font-weight-bolder m-50">Participant:</span>
                    <span class="m-50"><b-badge variant="primary" class="badge-glow ml-25"> Client </b-badge><b-badge variant="primary" class="badge-glow ml-25"> MC </b-badge><b-badge variant="primary" class="badge-glow ml-25"> Owner </b-badge></span>
                </b-row>
                <b-row class="p-1">
                    <b-avatar variant="light-success" rounded="sm">
                        <feather-icon icon="LayersIcon" size="17" />
                    </b-avatar>
                    <span class="font-weight-bolder m-50">Participant:</span>
                    <span class="m-50"><b-badge variant="info" class="badge-glow ml-25"> DWG </b-badge><b-badge variant="info" class="badge-glow ml-25"> ITP </b-badge></span>
                </b-row>
            </div>
        </div>
    </div>
</template>
<script>
import Chart from "chart.js";
import vSelect from "vue-select";
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BAvatar, BBadge, BMedia } from "bootstrap-vue";
import VueApexCharts from "vue-apexcharts";
import AppTimeline from "@core/components/app-timeline/AppTimeline.vue";
import AppTimelineItem from "@core/components/app-timeline/AppTimelineItem.vue";
export default {
    components: {
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
            detailItems: [
                {
                    id: 1,
                    name: "PIM",
                    feather: "ActivityIcon",
                    color: "light-success",
                    status: false,
                },
                {
                    id: 2,
                    name: "MRP",
                    feather: "ApertureIcon",
                    color: "light-dark",
                    status: false,
                },
                {
                    id: 3,
                    name: "Calculation Document",
                    feather: "BarChartIcon",
                    color: "light-info",
                    status: false,
                },
                {
                    id: 4,
                    name: "Inspection Gate",
                    feather: "BoxIcon",
                    color: "light-warning",
                    status: true,
                },
                {
                    id: 5,
                    name: "Packing",
                    feather: "ChromeIcon",
                    color: "light-danger",
                    status: false,
                },
                {
                    id: 6,
                    name: "RN",
                    feather: "CodesandboxIcon",
                    color: "light-success",
                    status: false,
                },
                {
                    id: 7,
                    name: "Final Book",
                    feather: "BookOpenIcon",
                    color: "light-primary",
                    status: false,
                },
            ],
            series: [
                {
                    data: [
                        {
                            x: "INS",
                            y: [new Date("2019-03-25").getTime(), new Date("2019-03-27").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "IG4",
                            y: [new Date("2019-03-21").getTime(), new Date("2019-03-25").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "IG3",
                            y: [new Date("2019-03-17").getTime(), new Date("2019-03-20").getTime()],
                            fillColor: "#ff0000",
                        },
                        {
                            x: "IG2",
                            y: [new Date("2019-03-14").getTime(), new Date("2019-03-16").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "IG1",
                            y: [new Date("2019-03-12").getTime(), new Date("2019-03-13").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "CD",
                            y: [new Date("2019-03-10").getTime(), new Date("2019-03-11").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "QCs",
                            y: [new Date("2019-03-07").getTime(), new Date("2019-03-09").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "ENG",
                            y: [new Date("2019-03-07").getTime(), new Date("2019-03-09").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "MRP",
                            y: [new Date("2019-03-07").getTime(), new Date("2019-03-09").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "PIM",
                            y: [new Date("2019-03-05").getTime(), new Date("2019-03-07").getTime()],
                            fillColor: "#0cb312",
                        },
                        {
                            x: "M1",
                            y: [new Date("2019-02-27").getTime(), new Date("2019-03-04").getTime()],
                            fillColor: "#0cb312",
                        },
                    ],
                },
            ],
            chartOptions: {
                chart: {
                    height: 350,
                    type: "rangeBar",
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                        distributed: true,
                        dataLabels: {
                            hideOverflowingLabels: false,
                        },
                    },
                },
                dataLabels: {
                    enabled: false,
                    // formatter: function (val, opts) {
                    // var label = opts.w.globals.labels[opts.dataPointIndex];
                    // var a = moment(val[0]);
                    // var b = moment(val[1]);
                    // var diff = b.diff(a, "days");
                    // return label + ": " + diff + (diff > 1 ? " days" : " day");
                    // return opts
                    // },

                    style: {
                        colors: ["#f3f4f5", "#fff"],
                    },
                },
                xaxis: {
                    type: "datetime",
                },
                yaxis: {
                    show: false,
                },
                grid: {
                    row: {
                        colors: ["#f3f4f5", "#fff"],
                        opacity: 1,
                    },
                },
            },
        };
    },
    mounted() {},
    methods: {
        submit() {
            console.log(this.endDate);
        },
        toInspectionGate(item) {
            if (item.status == true) {
                this.$router.push({ name: "projects-detail-inspectiongate" });
            }
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
