<template>
    <div class="container">
        <b-row class="my-1">
            <h4>Projects List</h4>
        </b-row>
        <b-card>
            <b-row>
                <b-table striped responsive :items="items" :fields="fields" class="mb-0">
                    <template #cell(name)="data">
                        <span class="font-weight-bolder">{{ data.item.name }}</span>
                    </template>
                    <template #cell(start_date)="data">
                        <b-badge variant="light-secondary"> {{ data.item.start_date }} </b-badge>
                    </template>
                    <template #cell(end_date)="data">
                        <b-badge variant="light-secondary"> {{ data.item.end_date }} </b-badge>
                    </template>
                    <template #cell(action)="data">
                        <b-button @click="toDetail(data)" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="flat-danger" class="btn-icon"> More <feather-icon icon="ChevronsRightIcon" /> </b-button>
                    </template>
                    <template #cell(status)="data">
                        <b-badge v-if="data.item.color == 'green'" variant="success" class="badge-glow">{{ data.item.status }}</b-badge>
                        <b-badge v-else-if="data.item.color == 'red'" variant="danger" class="badge-glow">{{ data.item.status }}</b-badge>
                        <b-badge v-else-if="data.item.color == 'orange'" variant="warning" class="badge-glow">{{ data.item.status }}</b-badge>
                    </template>
                </b-table>
            </b-row>
        </b-card>
    </div>
</template>
<script>
import vSelect from "vue-select";
import Ripple from "vue-ripple-directive";
import { BFormInput, BTable, BCard, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BBadge } from "bootstrap-vue";
export default {
    components: {
        BBadge,
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
                    name: "T2 Storage Tank AG",
                    start_date: "1/9/2022",
                    end_date: "12/10/2023",
                    status: "75%",
                    color: "green",
                    description: "There is nothing to say",
                },
                {
                    name: "SS12B",
                    start_date: "11/8/2020",
                    end_date: "10/02/2025",
                    status: "20%",
                    color: "red",
                    description: "There is nothing to say",
                },
                {
                    name: "F1 FilterUnit C6",
                    start_date: "11/8/2020",
                    end_date: "10/02/2025",
                    status: "58%",
                    color: "orange",
                    description: "There is nothing to say",
                },
            ],
            dir: "ltr",
            selected: [{ title: "User 1" }, { title: "User 2" }, { title: "User 3" }],
        };
    },
    methods: {
        toDetail(data) {
            this.$router.push({ name: "projects-detail" });
        },
    },
};
</script>
