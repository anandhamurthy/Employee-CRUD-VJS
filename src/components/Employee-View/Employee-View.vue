<template>
	<div>
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<a class="navbar-brand mx-2" href="#">Employee CRUD APP</a>
			<button
				class="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarText"
				aria-controls="navbarText"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarText">
				<div
					class="d-flex flex-wrap justify-content-end"
					style="width: 100%"
				>
					<button
						@click="goToCreate()"
						class="btn btn-primary btn-sm mx-2"
					>
						Add Employee
					</button>
				</div>
			</div>
		</nav>
		<div class="container">
			<div class="py-4">
				<table class="table border shadow">
					<thead class="thead-dark">
						<tr>
							<th scope="col">#ID</th>
							<th scope="col">Name</th>
							<th scope="col">Username</th>
							<th scope="col">Age</th>
							<th scope="col">Phone Number</th>
							<th scope="col">Email</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(emp,index) in employees" v-bind:key="index">
							<th scope="row">{{emp.id}}</th>
							<td>{{emp.name}}</td>
							<td>{{emp.username}}</td>
							<td>{{emp.age}}</td>
							<td>{{emp.phonenumber}}</td>
							<td>{{emp.emailid}}</td>
							<td>
								<button
									@click="goToView(emp.id)"
									class="btn btn-primary btn-sm mx-2"
								>
									View
								</button>
								<button
									@click="goToUpdate(emp.id)"
									class="btn btn-primary btn-sm mx-2"
								>
									Edit
								</button>
								<button
									@click="Delete(emp.id)"
									class="btn btn-primary btn-sm mx-2"
								>
									Delete
								</button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Create",
		components: {},
		data() {
			return {
				employees: localStorage.getItem('employeeDB') === null | undefined ? [] : JSON.parse(localStorage.getItem('employeeDB'))
			};
		},
		methods: {
			goToCreate() {
				this.$router.push("/create-employee");
			},
			goToView(id) {
				this.$router.push("/view-employee/" + id);
			},
			Delete(id) {
				this.employees = this.employees.filter((ele) => {
					return ele.id != id;
				});
				localStorage.setItem("employeeDB", JSON.stringify(this.employees))
			},
			goToUpdate(id) {
				this.$router.push("/update-employee/" + id);
			},
		},
	};
</script>
