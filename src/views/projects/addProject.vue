<template>
    <div class="container">
        <b-row class="my-1">
            <h4>Add New Project</h4>
        </b-row>
        <b-row>
            <b-col md="6" xl="4" class="mb-1">
                <!-- basic -->
                <b-form-group label="Project Name">
                    <b-form-input placeholder="Enter Your Project Name" />
                </b-form-group>
            </b-col>

            <b-col md="6" xl="4" class="mb-1">
                <b-form-group label="Start Date">
                    <b-form-datepicker local="en" placeholder="Select Start Date" class="mb-1" selected-variant="info" />
                </b-form-group>
            </b-col>

            <b-col md="6" xl="4" class="mb-1">
                <b-form-group label="End Date">
                    <b-form-datepicker local="en" placeholder="Select End Date" class="mb-1" selected-variant="info" />
                </b-form-group>
            </b-col>

            <b-col md="6" xl="4">
                <b-form-group label="Duration" description="Write the Duration of Your Project">
                    <b-form-input placeholder="Name" />
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <b-form-group label="Users">
                    <v-select v-model="users" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple :options="selected" placeholder="Select the Users Of your Project" @input="chooseClientType" />
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4">
                <div class="row mt-50" v-for="item in clientType" :key="item.id">
                    <feather-icon v-if="users.includes(item.name)" icon="CheckIcon" size="12" class="text-success" />
                    <feather-icon v-else icon="XIcon" size="12" class="text-danger" />
                    <b-badge variant="light-primary">{{ item.name }}</b-badge>
                </div>
            </b-col>
        </b-row>
        <b-row v-for="item in DocumentCount" :key="item.id" class="justify-content-center mt-3">
            <b-col md="4" xl="4">
                <label class="row justify-content-center font-weight-bolder">Select Document Type</label>
                <v-select v-model="docTypes" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="docType" placeholder="Select Document Type" />
            </b-col>
            <b-col md="6" xl="6">
                <label class="row justify-content-center font-weight-bolder"> Please Upload the Files of Your Project </label>
                <b-form-file placeholder="Choose any file or drop it here..." drop-placeholder="Drop file here..." />
            </b-col>
            <b-col md="2" xl="2">
                <b-button @click="addtoDocumentCount" class="mt-2 btn-icon rounded-circle" v-ripple.400="'rgba(234, 84, 85, 0.15)'" variant="flat-danger"> <feather-icon icon="PlusIcon" size="16" class="text-danger" /> </b-button>
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-3">
            <b-button variant="relief-info"> Submit </b-button>
        </b-row>
    </div>
</template>
<script>
import vSelect from "vue-select";
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BBadge, BAvatar } from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
export default {
    components: {
        BAvatar,
        BBadge,
        BFormInput,
        BFormGroup,
        BRow,
        BCol,
        BFormDatepicker,
        vSelect,
        BFormFile,
        BButton,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            users: [],
            dir: "ltr",
            selected: ["Owner", "Client", "MC", "Constractor", "Sub Constroctor", "TPA"],
            clientType: [
                { name: "Owner", status: false, id: 1 },
                { name: "Client", status: false, id: 2 },
                { name: "MC", status: false, id: 3 },
                { name: "Constractor", status: false, id: 4 },
                { name: "Sub Constroctor", status: false, id: 5 },
                { name: "TPA", status: false, id: 6 },
            ],
            docType: ["Bp Drawing", "MRP", "QCD/ITP", "Calculation Book", "Standard", "Instruction", "MS"],
            docTypes: undefined,
            DocumentCount: [{ id: 1 }],
        };
    },
    methods: {
        chooseClientType() {
            console.log(this.users);
        },
        addtoDocumentCount() {
            let x = 1;
            this.DocumentCount.push({ id: x + 1 });
        },
    },
};
</script>
