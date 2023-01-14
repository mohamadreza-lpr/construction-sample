<template>
    <div class="container">
        <b-row class="my-1">
            <h4>Inspection Gate</h4>
        </b-row>
        <b-card>
            <b-row class="justify-content-center">
                <b-col class="text-center" cols="3" v-for="item in detailItems" :key="item.id">
                    <div class="text-center m-2">
                        <b-avatar class="avatar" rounded="lg" :variant="item.color">
                            <span class="d-flex align-items-center">
                                <feather-icon :icon="item.feather" size="50" />
                            </span>
                        </b-avatar>
                    </div>
                    <span> {{ item.name }} </span>
                </b-col>
            </b-row>
        </b-card>
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
        return {
            detailItems: [
                {
                    id: 1,
                    name: "Material and Equipment",
                    feather: "ActivityIcon",
                    color: "light-success",
                },
                {
                    id: 3,
                    name: "Fabrication",
                    feather: "BarChartIcon",
                    color: "light-info",
                },
                {
                    id: 4,
                    name: "Surface Prepration and Painting",
                    feather: "PenToolIcon",
                    color: "light-warning",
                },
                {
                    id: 5,
                    name: "Testing",
                    feather: "CheckIcon",
                    color: "light-danger",
                },
                {
                    id: 6,
                    name: "Instalation and Asembling",
                    feather: "CodesandboxIcon",
                    color: "light-success",
                },
                {
                    id: 7,
                    name: "Preshipping Inspection",
                    feather: "ClipboardIcon",
                    color: "light-primary",
                },
            ],
        };
    },
    methods: {
        submit() {
            console.log(this.endDate);
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
