export default [
    {
        header: "App",
    },
    {
        title: "Dashboard",
        icon: "HomeIcon",
        route: "home",
    },
    {
        title: "Modules",
        icon: "LayersIcon",
        children: [
            {
                title: "Audit Managment",
                children: [
                    {
                        header: "Quality Control",
                    },
                    {
                        title: "Create New Project",
                        route: "projects-add",
                    },
                    {
                        title: "Project List/Status",
                        route: "projects-list",
                    },
                    {
                        title: "Project Analyse",
                    },
                    {
                        header: "Others",
                    },
                    {
                        title: "QAM",
                    },
                    {
                        title: "HSM",
                    },
                ],
            },
            {
                title: "CAPA",
                route: "projects-capa",
            },
            {
                title: "RMA",
                children: [
                    {
                        title: "Dashboard",
                    },
                    {
                        title: "Import",
                    },
                    {
                        title: "Inventory",
                        route: "projects-rma-inventory",
                    },
                    {
                        title: "Export",
                    },
                ],
            },
            {
                title: "Customer Comunication",
                route: "crm",
            },
            {
                title: "DCU",
            },
            {
                title: "NCRM",
            },
            {
                title: "CMU",
            },
            {
                title: "ERP",
            },
            {
                title: "DMU",
            },
            {
                title: "Incident&Injury Managment",
            },
            {
                title: "JSA",
            },
            {
                title: "SDS",
            },
            {
                title: "MOC",
            },
            {
                title: "Meeting Managment",
            },
            {
                title: "SRI",
            },
            {
                title: "TMU",
            },
        ],
    },
    {
        title: "Users",
        icon: "UserIcon",
        children: [
            {
                title: "Users List",
                route: "users-list",
            },
            {
                title: "Create User",
                route: "users-create",
            },
        ],
    },
    {
        title: "Meetings",
        icon: "UsersIcon",
        route: "projects-meeting",
    },
    {
        title: "Contact",
        icon: "PhoneCallIcon",
        route: "projects-contact",
    },
    // {
    //     title: "Projects",
    //     icon: "LayersIcon",
    //     children: [
    //         {
    //             title: "Create New Project",
    //             route: "projects-add",
    //         },
    //         {
    //             title: "Project Details",
    //             children: [
    //                 {
    //                     title: "Project Stages",
    //                     route: "projects-detail",
    //                 },
    //             ],
    //         },
    //     ],
    // },
];
