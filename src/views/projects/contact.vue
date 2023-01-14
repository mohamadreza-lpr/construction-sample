<template>
    <div class="container">
        <b-row class="my-1">
            <h4>Contact List</h4>
        </b-row>
        <b-card>
            <b-row>
                <b-table striped responsive :items="items" :fields="fields" class="mb-0">
                    <template #cell(action)="data">
                        <b-button @click="toDetail(data)" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="flat-danger" class="btn-icon">
                            More <feather-icon icon="ChevronsRightIcon" />
                        </b-button>
                    </template>
                </b-table>
            </b-row>
        </b-card>
    </div>
</template>
<script>
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import { BFormInput, BTable, BCard, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton } from "bootstrap-vue";
export default {
    components: {
        BTable,
        BFormInput,
        BFormGroup,
        BCard,
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
            fields: [
                "name",
                "Position",
                "Email",
                "PhoneNumber",
            ],
            items: [
                {
                    name: "Mohamadreza Laalpoor",
                    Position: "Manager",
                    Email: "Mlaalpoor@yahoo.com",
                    PhoneNumber: "09106808052",
                },
                {
                    name: "Ali Samani",
                    Position: "Engineer",
                    Email: "samani@yahoo.com",
                    PhoneNumber: "09136680805",
                },
                {
                    name: "vahid ahmadi",
                    Position: "Engineer",
                    Email: "v.ahmadi@yahoo.com",
                    PhoneNumber: "09124508152",
                },
                {
                    name: "saman velayati",
                    Position: "Driver",
                    Email: "saman@gmail.com",
                    PhoneNumber: "09116108052",
                },
            ],
            dir: "ltr",
            selected: [{ title: "User 1" }, { title: "User 2" }, { title: "User 3" }],
        };
    },
    methods:{
        toDetail(data){
            this.$router.push({name:"projects-detail"})
        }
    }
};
</script>
