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
                    <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple label="title" :options="selected" placeholder="Select the Users Of your Project" />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-3">
            <b-col md="12" xl="4">
                <label class="row justify-content-center font-weight-bolder"> Please Upload the Files of Your Project </label>
                <b-form-file placeholder="Choose any file or drop it here..." drop-placeholder="Drop file here..." />
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-3">
            <b-button variant="relief-info"> Submit </b-button>
        </b-row>
    </div>
</template>
<script>
import vSelect from "vue-select";
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton } from "bootstrap-vue";
export default {
    components: {
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
            dir: "ltr",
            selected: [{ title: "User 1" }, { title: "User 2" }, { title: "User 3" }],
        };
    },
};
</script>
