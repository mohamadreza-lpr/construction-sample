<template>
    <div class="container">
        <b-row class="my-1">
            <h4>Projects List</h4>
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
                "start_date",
                "end_date",
                "status",
                "description",
                {
                    key: "action",
                    label: "action",
                },
            ],
            items: [
                {
                    name: "Project A",
                    start_date: "1/9/2022",
                    end_date: "12/10/2023",
                    status: "75%",
                    description: "There is nothing to say",
                },
                {
                    name: "Project B",
                    start_date: "11/8/2020",
                    end_date: "10/02/2025",
                    status: "20%",
                    description: "There is nothing to say",
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
