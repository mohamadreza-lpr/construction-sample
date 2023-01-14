<template>
    <div>
        <b-row>
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
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile } from "bootstrap-vue";
export default {
    components: {
        apexchart: VueApexCharts,
        BFormInput,
        BFormGroup,
        BRow,
        BCol,
        BFormDatepicker,
        vSelect,
        BFormFile,
    },
    data() {
        return {
            series: [
                {
                    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
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
                        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
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
                    categories: ["South Korea", "Canada", "United Kingdom", "Netherlands", "Italy", "France", "Japan", "United States", "China", "India"],
                },
                yaxis: {
                    labels: {
                        show: false,
                    },
                },
                title: {
                    text: "Custom DataLabels",
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
