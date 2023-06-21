<template>
    <div class="container">
        <b-row>
            <b-table :sticky-header="stickyHeader" :no-border-collapse="noCollapse" responsive :items="items" :fields="fields">
                <template #head(id)>
                    <div class="text-nowrap">Row ID</div>
                </template>

                <template #head()="scope">
                    <div class="text-nowrap">
                        {{ scope.label }}
                    </div>
                </template>

                <template #cell(avatar)="data">
                    <b-avatar class="mr-1" :src="data.value" />
                </template>

                <template #cell(status)="data">
                    <b-badge :variant="status[1][data.value]">
                        {{ status[0][data.value] }}
                    </b-badge>
                </template>

                <template #cell()="data">
                    <span class="text-nowrap">{{ data.value }}</span>
                </template>
                <template #cell(in_out)="data">
                    <!-- {{data.item.In_Out}} -->
                    <feather-icon v-if="data.item.In_Out == 1" icon="ArrowUpIcon" size="21" class="text-success" />
                    <feather-icon v-else-if="data.item.In_Out == 2" icon="ArrowDownIcon" size="21" class="text-danger" />
                </template>
            </b-table>
        </b-row>
        <b-row class="my-1">
            <h4>Inspection Gate</h4>
        </b-row>
        <b-card>
            <b-row class="justify-content-center">
                <b-col class="text-center" cols="3" v-for="item in detailItems" :key="item.id">
                    <div class="text-center m-2">
                        <b-avatar class="avatar" rounded="lg" :variant="item.color">
                            <span class="d-flex align-items-center">
                                <feather-icon :icon="item.feather" size="80" />
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
import { BFormInput, BRow, BCol, BFormGroup, BFormDatepicker, BFormFile, BButton, BAvatar, BCard, BTable, BProgress, BBadge, BFormCheckbox } from "bootstrap-vue";
export default {
    components: {
        BFormCheckbox,
        BTable,
        BProgress,
        BBadge,
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
                    name: "Main Panel",
                    feather: "ActivityIcon",
                    color: "light-success",
                },
                {
                    id: 3,
                    name: "Stock Tracking",
                    feather: "BarChartIcon",
                    color: "light-info",
                },
                {
                    id: 4,
                    name: "Replenishment",
                    feather: "PenToolIcon",
                    color: "light-warning",
                },
                {
                    id: 5,
                    name: "Rebalancing",
                    feather: "ShuffleIcon",
                    color: "light-danger",
                },
                {
                    id: 6,
                    name: "Capacity",
                    feather: "ArchiveIcon",
                    color: "light-success",
                },
                {
                    id: 7,
                    name: "Reports",
                    feather: "ClipboardIcon",
                    color: "light-primary",
                },
                {
                    id: 8,
                    name: "Transporting",
                    feather: "TruckIcon",
                    color: "light-primary",
                },
            ],
            stickyHeader: true,
            noCollapse: false,
            fields: [
                {
                    key: "id",
                    stickyColumn: true,
                    isRowHeader: true,
                    variant: "primary",
                },

                "product_id",
                // { key: "post", stickyColumn: true, variant: "info" },
                "project_id",
                // "email",
                "stock_Ref",
                // "city",
                "quantity",
                // "start_date",
                "action_date",
                // "salary",
                // "status",
                "class",
                "In_Out",
                "Balance",
                { key: "status", label: "Status" },
                {
                    key: "avatar",
                    label: "Avatar",
                },
            ],
            items: [
                {
                    id: 1,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/10-small.png"),
                    product_id: "CO001A",
                    project_id: "Nuclear Power Plant",
                    stock_Ref: "CL1",
                    quantity: "11",
                    action_date: "09/23/2016",
                    class: "AA",
                    In_Out: 1,
                    Balance: "350",
                    status: 2,
                },
                {
                    id: 2,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/1-small.png"),
                    product_id: "CO002A",
                    project_id: "VP12S001",
                    stock_Ref: "CL2",
                    quantity: "12",
                    action_date: "05/20/2018",
                    class: "AB",
                    In_Out: 1,
                    Balance: "410",
                    status: 2,
                },
                {
                    id: 3,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/9-small.png"),
                    product_id: "Helmet",
                    project_id: "VP12S002",
                    stock_Ref: "CL3",
                    quantity: "8",
                    action_date: "03/24/2018",
                    class: "BC",
                    In_Out: 2,
                    Balance: "600",
                    status: 5,
                },
                {
                    id: 4,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/3-small.png"),
                    product_id: "7018E",
                    project_id: "VP12S003",
                    stock_Ref: "CL4",
                    quantity: "5",
                    action_date: "12/03/2017",
                    class: "AC",
                    In_Out: 1,
                    Balance: "280",
                    status: 2,
                },
                {
                    id: 5,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/4-small.png"),
                    product_id: "Safty Glass",
                    project_id: "VP12S004",
                    stock_Ref: "CL5",
                    quantity: "35",
                    action_date: "08/25/2017",
                    class: "EE",
                    In_Out: 1,
                    Balance: "588",
                    status: 2,
                },
                {
                    id: 6,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/5-small.png"),
                    product_id: "AOGW30",
                    project_id: "VP12S005",
                    stock_Ref: "CL6",
                    quantity: "23",
                    action_date: "06/01/2017",
                    class: "EA",
                    In_Out: 1,
                    Balance: "489",
                    status: 1,
                },
                {
                    id: 7,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/7-small.png"),
                    product_id: "Pipe D6",
                    project_id: "VP12S006",
                    stock_Ref: "CL7",
                    quantity: "12",
                    action_date: "10/15/2017",
                    class: "ED",
                    In_Out: 2,
                    Balance: "369",
                    status: 3,
                },
                {
                    id: 8,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/9-small.png"),
                    product_id: "SPA516",
                    project_id: "VP12S007",
                    stock_Ref: "CL8",
                    quantity: "87",
                    action_date: "11/05/2016",
                    class: "FF",
                    In_Out: 2,
                    Balance: "698",
                    status: 3,
                },
                {
                    id: 9,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/2-small.png"),
                    product_id: "CO003A",
                    project_id: "VP12S008",
                    stock_Ref: "CL9",
                    quantity: "43",
                    action_date: "12/29/2018",
                    class: "AD",
                    In_Out: 1,
                    Balance: "500",
                    status: 5,
                },
                {
                    id: 10,
                    // eslint-disable-next-line global-require
                    avatar: require("@/assets/images/avatars/6-small.png"),
                    product_id: "CO004A",
                    project_id: "VP12S009",
                    stock_Ref: "CL10",
                    quantity: "22",
                    action_date: "04/19/2019",
                    salary: "$15939.52",
                    In_Out: 1,
                    Balance: "320",
                    status: 2,
                },
            ],
            status: [
                {
                    1: "InProgress",
                    2: "Delivered",
                    3: "Rejected",
                    4: "Denied",
                    5: "Approved",
                },
                {
                    1: "light-primary",
                    2: "light-success",
                    3: "light-danger",
                    4: "light-warning",
                    5: "light-info",
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
    width: 120px;
    height: 120px;
}
</style>
