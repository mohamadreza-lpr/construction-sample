<template>
    <div>
        <b-row class="justify-content-center">
            <b-col cols="4">
                <b-card>
                    <h4 class="text-center my-1">Upcoming Tasks</h4>
                    <app-timeline>
                        <app-timeline-item title="Goal Achieved" subtitle="All milestones are completed" time="few minutes ago" variant="success" />

                        <app-timeline-item title="Last milestone remain" subtitle="You are just one step away from your goal" time="3 minutes ago" variant="info" />

                        <app-timeline-item title="Your are running low on time" subtitle="Only 30 minutes left to finish milestone" time="21 minutes ago" variant="warning" />

                        <app-timeline-item title="Client Meeting" subtitle="New event has been added to your schedule" time="36 minutes ago" />

                        <app-timeline-item title="Product Design" subtitle="Product design added in workflow" time="1 hour ago" variant="secondary" />
                    </app-timeline>
                </b-card>
            </b-col>
            <b-col cols="4">
                <b-card>
                    <h4 class="text-center my-1">Critical actions</h4>
                    <app-timeline>
                        <app-timeline-item title="Goal Achieved" subtitle="All milestones are completed" icon="AwardIcon" time="few minutes ago" variant="success" />

                        <app-timeline-item title="Last milestone remain" subtitle="You are just one step away from your goal" icon="InfoIcon" time="3 minutes ago" variant="info" />

                        <app-timeline-item title="Your are running low on time" subtitle="Only 30 minutes left to finish milestone" icon="ClockIcon" time="21 minutes ago" variant="warning" />

                        <app-timeline-item title="Client Meeting" subtitle="New event has been added to your schedule" icon="UserIcon" time="36 minutes ago" />

                        <app-timeline-item title="Product Design" subtitle="Product design added in workflow" icon="GridIcon" time="1 hour ago" variant="success" />
                    </app-timeline>
                </b-card>
            </b-col>
            <b-col cols="4">
                <b-card>
                    <h4 class="text-center my-1">Latest</h4>
                    <app-timeline>
                        <!-- 12 INVOICES HAVE BEEN PAID -->
                        <app-timeline-item icon="DollarSignIcon">
                            <div class="d-flex flex-sm-row flex-column flex-wrap justify-content-between mb-1 mb-sm-0">
                                <h6>12 Invoices have been paid</h6>
                                <small class="text-muted">12 min ago</small>
                            </div>
                            <p>Invoices have been paid to the company.</p>
                            <p>
                                <b-img :src="require('@/assets/images/icons/pdf.png')" height="auto" width="20" class="mr-1" />
                                <span class="align-bottom">invoice.pdf</span>
                            </p>
                        </app-timeline-item>

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
                        <app-timeline-item variant="warning" icon="MapPinIcon">
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
                </b-card>
            </b-col>
        </b-row>
        <b-row class="mt-4">
            <b-col cols="6">
                <apexchart type="bar" height="380" :options="chartOptions" :series="series"></apexchart>
            </b-col>
            <b-col cols="6">
                <apexchart type="line" height="350" :options="chartOptions1" :series="series1"></apexchart>
            </b-col>
        </b-row>
    </div>
</template>

<script>
import vSelect from "vue-select";
import VueApexCharts from "vue-apexcharts";
import { BAvatar, BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BCard, BMedia, BImg } from "bootstrap-vue";
import AppTimeline from "@core/components/app-timeline/AppTimeline.vue";
import AppTimelineItem from "@core/components/app-timeline/AppTimelineItem.vue";
export default {
    components: {
        BAvatar,
        BImg,
        BMedia,
        BCard,
        apexchart: VueApexCharts,
        BFormInput,
        BFormGroup,
        BRow,
        BCol,
        BFormDatepicker,
        vSelect,
        BFormFile,
        AppTimeline,
        AppTimelineItem,
    },
    data() {
        return {
            series: [
                {
                    data: [10, 35, 58, 60, 70, 71, 36, 89, 95, 100],
                },
            ],
            chartOptions: {
                chart: {
                    type: "bar",
                    height: 380,
                },
                plotOptions: {
                    bar: {
                        barHeight: "100%",
                        distributed: true,
                        horizontal: true,
                        dataLabels: {
                            position: "bottom",
                        },
                    },
                },
                colors: ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B", "#2b908f", "#f9a3a4", "#90ee7e", "#f48024", "#69d2e7"],
                dataLabels: {
                    enabled: true,
                    textAnchor: "start",
                    style: {
                        colors: ["#fff"],
                    },
                    formatter: function (val, opt) {
                        // return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
                        return val + "%";
                    },
                    offsetX: 0,
                    dropShadow: {
                        enabled: true,
                    },
                },
                stroke: {
                    width: 1,
                    colors: ["#fff"],
                },
                xaxis: {
                    categories: ["T2 Storage Tank AG", "SS12B", "F1 Filterunit C6", "Project4", "Project5", "Project6", "Project7", "Project8", "Project9", "Project10"],
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
                title: {
                    text: "Project Name and Overview",
                    align: "center",
                    floating: true,
                },
                subtitle: {
                    text: "Category Names as DataLabels inside bars",
                    align: "center",
                },
                tooltip: {
                    theme: "dark",
                    x: {
                        show: false,
                    },
                    y: {
                        title: {
                            formatter: function () {
                                return "";
                            },
                        },
                    },
                },
            },
            series1: [
                {
                    name: "TEAM A",
                    type: "column",
                    data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                    name: "TEAM B",
                    type: "area",
                    data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                    name: "TEAM C",
                    type: "line",
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
            ],
            chartOptions1: {
                chart: {
                    height: 350,
                    type: "line",
                    stacked: false,
                },
                stroke: {
                    width: [0, 2, 5],
                    curve: "smooth",
                },
                plotOptions: {
                    bar: {
                        columnWidth: "50%",
                    },
                },

                fill: {
                    opacity: [0.85, 0.25, 1],
                    gradient: {
                        inverseColors: false,
                        shade: "light",
                        type: "vertical",
                        opacityFrom: 0.85,
                        opacityTo: 0.55,
                        stops: [0, 100, 100, 100],
                    },
                },
                labels: ["01/01/2003", "02/01/2003", "03/01/2003", "04/01/2003", "05/01/2003", "06/01/2003", "07/01/2003", "08/01/2003", "09/01/2003", "10/01/2003", "11/01/2003"],
                markers: {
                    size: 0,
                },
                xaxis: {
                    type: "datetime",
                },
                yaxis: {
                    title: {
                        text: "Points",
                    },
                    min: 0,
                },
                tooltip: {
                    shared: true,
                    intersect: false,
                    y: {
                        formatter: function (y) {
                            if (typeof y !== "undefined") {
                                return y.toFixed(0) + " points";
                            }
                            return y;
                        },
                    },
                },
            },
        };
    },
};
</script>

<style></style>
