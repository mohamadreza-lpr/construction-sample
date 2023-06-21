<template>
    <div class="row">
        <div class="col-8">
            <b-card>
                <h4 class="mb-4">T2 Storage Tank AG</h4>
                <b-row>
                    <b-col cols="6">
                        <b-form-group label="Part No">
                            <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple :options="partNo" placeholder="Choose Part Number" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Type/Mat">
                            <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple :options="TypeMat" placeholder="Choose Type/Mat" />
                        </b-form-group>
                    </b-col>
                    <b-col cols="6">
                        <b-form-group label="Inspector">
                            <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" multiple :options="Ins" placeholder="Select Inspector" />
                        </b-form-group>
                    </b-col>
                </b-row>
                <div class="justify-content-center">
                    <h4 class="text-center">Method</h4>
                    <b-row>
                        <b-col cols="12">
                            <v-select v-model="methodVal" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="method" placeholder="Select Method" />
                        </b-col>
                    </b-row>
                    <div v-if="methodVal == 'SandBlast'" class="shadowColor">
                        <b-row>
                            <b-col cols="6">
                                <b-form-group label="Pressure Compressor(Bar)">
                                    <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="Pressure" placeholder="Choose.." />
                                </b-form-group>
                            </b-col>
                            <b-col cols="6">
                                <b-form-group label="Girit Type">
                                    <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="Grit" placeholder="Choose.." />
                                </b-form-group>
                            </b-col>
                            <b-col cols="6">
                                <b-form-group label="Girit Size">
                                    <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="GritSize" placeholder="Choose.." />
                                </b-form-group>
                            </b-col>
                            <b-col cols="6">
                                <b-form-group label="AOP">
                                    <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="AOP" placeholder="Choose.." />
                                </b-form-group>
                            </b-col>
                            <b-col cols="6">
                                <b-form-group label="Req.Ra">
                                    <b-form-input placeholder="Write.." />
                                </b-form-group>
                            </b-col>
                        </b-row>
                    </div>
                </div>
                <b-row class="justify-content-center mt-3">
                    <b-button variant="info"> Submit </b-button>
                </b-row>
            </b-card>
        </div>
        <div class="col-4">
            <b-card class="bg-light">
                <h4>Requirment</h4>
                <b-row>
                    <b-col cols="12">
                        <b-form-group label="Ref.">
                            <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="Ref" placeholder="Choose.." />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-form-group label="Standard">
                            <v-select :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="Standard" placeholder="Choose.." />
                        </b-form-group>
                    </b-col>
                    <b-col cols="8">
                        <b-form-group label="ITP">
                            <v-select v-model="itpType" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="Itp" placeholder="Choose.." />
                        </b-form-group>
                    </b-col>
                    <b-col cols="4">
                        <b-form-group label="  ">
                            <v-select class="mt-2" v-model="itpType2" :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'" :options="Itp2" placeholder="Choose.." />
                        </b-form-group>
                    </b-col>
                    <b-col cols="12">
                        <b-badge @click="pushToItp" variant="primary" class="d-block badge-glow p-50"> + </b-badge>
                    </b-col>
                    <b-col cols="12" class="mt-2">
                        <div v-for="item in itpItems" :key="item.id" class="mt-1">
                            <span class="text-primary font-weight-bolder p-1 m-25" variant="light-primary"> {{ item.itp1 }} </span>
                            <span class="text-dark font-weight-bolder p-1" variant="light-danger"> : </span>
                            <span class="text-primary font-weight-bolder p-1 m-25" variant="light-primary"> {{ item.itp2 }} </span>
                        </div>
                    </b-col>
                </b-row>
            </b-card>
        </div>
    </div>
</template>
<script>
import vSelect from "vue-select";
import { BCard, BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BBadge, BAvatar } from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
export default {
    components: {
        BCard,
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
            partNo: ["Co 001", "Co 002", "MC 004", "Po 9008"],
            Ins: ["INS1", "INS2", "INS3", "INS4"],
            TypeMat: ["A515-60", "A515-70", "A203A", "A240-304", "A240-316"],
            method: ["HandWork", "SandBlast", "WaterJet", "ShotBlast", "Chemical"],
            Pressure: [5, 7, 9],
            Grit: ["Sand", "Garnet", "AO", "GB", "Plastic"],
            GritSize: [0.3, 0.7, 1.5, 2, 2.5, 2.8, 3],
            AOP: [30, 45, 60],
            Itp: ["Vendor", "Controctor", "TPA", "Client", "Owner"],
            Itp2: ["H", "S", "SW", "RP", "A"],
            Ref: ["MSO1", "MSO2", "MSO3"],
            Standard: ["ISO850 Sa1", "ISO850 Sa2", "ISO850 Sa2.5", "ISO850 Sa3", "ISO850 St2", "ISO850 St3"],
            itpItems: [],
            itpType: undefined,
            itpType2: undefined,
            methodVal: null,
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
            Id: 1,
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
        pushToItp() {
            this.itpItems.push({ itp1: this.itpType, itp2: this.itpType2, id: this.Id });
            this.Id++;
        },
    },
};
</script>
<style>
.shadowColor {
    /* border: 1px solid rgb(255, 0, 0); */
    box-shadow: 2px 2px 10px rgba(0, 88, 239, 0.254);
    border-radius: 5px;
    padding: 10px;
    margin-top: 30px;
}
</style>
