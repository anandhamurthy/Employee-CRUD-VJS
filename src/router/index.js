import Vue from "vue";
import VueRouter from "vue-router";
import View from "../components/Employee-View/Employee-View.vue";
import Create from "../components/Employee-Create/Employee-Create.vue";
import Update from "../components/Employee-Update/Employee-Update.vue";
import Single_View from "../components/Employee-Single-View/Employee-Single-View.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "View",
		component: View,
	},
	{
		path: "/employees",
		name: "View",
		component: View,
	},
	{
		path: "/create-employee",
		name: "Create",
		component: Create,
	},
	{
		path: "/update-employee/:id",
		name: "Update",
		component: Update,
	},
	{
		path: "/view-employee/:id",
		name: "Single-View",
		component: Single_View,
	},
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes,
});

export default router;
