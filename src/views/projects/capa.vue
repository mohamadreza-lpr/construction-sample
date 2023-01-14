<template>
    <div class="container">
        <b-row class="my-1">
            <h4>Add New CAPA</h4>
        </b-row>
        <b-row>
            <b-col md="6" xl="4" class="mb-1">
                <!-- basic -->
                <b-form-group label="Project Name">
                    <b-form-input v-model="name" placeholder="Enter Your Project Name" />
                </b-form-group>
            </b-col>

            <b-col md="6" xl="4" class="mb-1">
                <b-form-group label="Start Date">
                    <b-form-datepicker v-model="startDate" local="en" placeholder="Select Start Date" class="mb-1" selected-variant="info" />
                </b-form-group>
            </b-col>

            <b-col md="6" xl="4" class="mb-1">
                <b-form-group label="End Date">
                    <b-form-datepicker v-model="endDate" local="en" placeholder="Select End Date" class="mb-1" selected-variant="info" />
                </b-form-group>
            </b-col>

            <b-col md="6" xl="4">
                <b-form-group label="Duration" description="Write the Duration of Your Project">
                    <b-form-input v-model="Duration" placeholder="duration" />
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Users">
                    <v-select v-model="user" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple label="title" :options="selected" placeholder="Select the Users Of your Project" />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-3">
            <b-col md="3">
                <label class="row justify-content-center font-weight-bolder"> Choose the File Format </label>
                <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple label="title" :options="filesType" placeholder="Select.." />
            </b-col>
            <b-col class="mt-2" md="8" xl="4">
                <b-form-file placeholder="Choose the file" drop-placeholder="Drop file here..." />
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-3">
            <b-button variant="relief-info" @click="submit"> Edit </b-button>
        </b-row>
        <hr />
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
</template>
<script>
import vSelect from "vue-select";
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BAvatar } from "bootstrap-vue";
export default {
    components: {
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
            name: "",
            startDate: "",
            endDate: "",
            Duration: "",
            dir: "ltr",
            user: "",
            selected: [{ title: "User 1" }, { title: "User 2" }, { title: "User 3" }],
            filesType: [{ title: "DWG" }, { title: "QCP" }, { title: "BOM" }, { title: "ITP" }, { title: "MTO" }, { title: "MRS" }, { title: "MIV" }, { title: "MOM" }],
            detailItems: [
                {
                    id: 1,
                    name: "Identification",
                    feather: "ActivityIcon",
                    color: "light-success",
                },
                {
                    id: 3,
                    name: "Evaluation",
                    feather: "BarChartIcon",
                    color: "light-info",
                },
                {
                    id: 4,
                    name: "Investication",
                    feather: "BookIcon",
                    color: "light-warning",
                },
                {
                    id: 5,
                    name: "Appropriate Resolation Plan",
                    feather: "CheckIcon",
                    color: "light-danger",
                },
                {
                    id: 6,
                    name: "Implementation",
                    feather: "CodesandboxIcon",
                    color: "light-success",
                },
                {
                    id: 7,
                    name: "Effectivness Check",
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
</style>
