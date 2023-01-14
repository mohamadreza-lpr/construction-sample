export default [
    {
        path: "/projects/add",
        name: "projects-add",
        component: () => import("@/views/projects/addProject.vue"),
    },
    {
        path: "/projects/list",
        name: "projects-list",
        component: () => import("@/views/projects/projectList.vue"),
    },
    {
        path: "/projects/detail",
        name: "projects-detail",
        component: () => import("@/views/projects/projectDetail.vue"),
    },
    {
        path: "/projects/detail/inspection-gate",
        name: "projects-detail-inspectiongate",
        component: () => import("@/views/projects/inspectionGate.vue"),
    },
    {
        path: "/projects/detail/capa",
        name: "projects-capa",
        component: () => import("@/views/projects/capa.vue"),
    },
    {
        path: "/projects/rma/inventory",
        name: "projects-rma-inventory",
        component: () => import("@/views/projects/inventory.vue"),
    },
    {
        path: "/projects/contact",
        name: "projects-contact",
        component: () => import("@/views/projects/contact.vue"),
    },
    {
        path: "/projects/meeting",
        name: "projects-meeting",
        component: () => import("@/views/projects/meeting.vue"),
    },
];
