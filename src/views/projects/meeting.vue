<template>
    <div class="container">
        <b-row class="my-1">
            <h4>Set a Meeting</h4>
        </b-row>
        <b-row>
            <b-col md="6" xl="4">
                <b-form-group label="Users">
                    <v-select v-model="user" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple label="title" :options="selected" placeholder="Select a User" class="mt-25" />
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4" class="mb-1">
                <b-form-group label="Date">
                    <b-form-datepicker v-model="startDate" local="en" placeholder="Select Meeting Date" class="mb-1" selected-variant="info" />
                </b-form-group>
            </b-col>
            <b-col md="6" xl="4" class="mb-1">
                <b-form-group label="Time">
                    <b-form-timepicker v-model="value" placeholder="select the time of your date" locale="en" />
                </b-form-group>
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-3">
            <b-button variant="relief-primary" @click="submit"> Submit </b-button>
        </b-row>
        <hr />
        <b-row class="my-1">
            <h4>Send a Mail</h4>
        </b-row>
        <b-row  class="justify-content-center mt-3">
            <b-col md="8" xl="8">
                <b-form-group label="Users">
                    <v-select v-model="user" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple label="title" :options="selected" placeholder="Select a User" class="mt-25" />
                </b-form-group>
            </b-col>
            <b-col md="8" xl="8">
                <label for="textarea-default">Write Your Message</label>
                <b-form-textarea id="textarea-default" placeholder="Type ..." rows="3" />
            </b-col>
        </b-row>
        <b-row class="justify-content-center mt-3">
            <b-button variant="relief-primary" @click="submit"> Send </b-button>
        </b-row>
    </div>
</template>
<script>
import vSelect from "vue-select";
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BAvatar, BFormTimepicker, BFormTextarea, BCardText } from "bootstrap-vue";
export default {
    components: {
        BFormTimepicker,
        BAvatar,
        BFormInput,
        BFormGroup,
        BRow,
        BCol,
        BFormDatepicker,
        vSelect,
        BFormFile,
        BButton,
        BFormTextarea,
        BCardText,
    },
    data() {
        return {
            name: "",
            startDate: undefined,
            endDate: "2023-10-12",
            Duration: "1 Year",
            dir: "ltr",
            user: "",
            selected: [{ title: "User 1" }, { title: "User 2" }, { title: "User 3" }],
            filesType: [{ title: "DWG" }, { title: "QCP" }, { title: "BOM" }, { title: "ITP" }, { title: "MTO" }, { title: "MRS" }, { title: "MIV" }, { title: "MOM" }],
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
