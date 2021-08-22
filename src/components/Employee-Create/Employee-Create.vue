<template>
	<div class="p-5 container-fluid">
		<div class="d-flex justify-content-start align-items-center">
			<i class="fas fa-school"></i>
			<h3 class="m-2 text-dark">Create Employee</h3>
		</div>

		<div class="row align-items-center">
			<div class="p-2 d-md-block col-lg-6 mx-auto">
				<div class="shadow border-0 card p-4">
					<div class="card-body">
						<h4 class="text-dark mb-3">Add Employee Details</h4>

						<div class="input-group mb-3">
							<span
								class="shadow rounded-left border-0 input-group-text bg-white"
								id="basic-addon1"
							>
								<i class="fas fa-book-open"></i>
							</span>
							<input
								type="text"
								v-model="username"
								class="shadow rounded-right border-0 form-control"
								placeholder="Employee User Name"
							/>
						</div>
						<div class="input-group mb-3">
							<span
								class="shadow rounded-left border-0 input-group-text bg-white"
								id="basic-addon1"
							>
								<i class="fas fa-book-open"></i>
							</span>
							<input
								type="text"
								class="shadow rounded-right border-0 form-control"
								placeholder="Employee Name"
								v-model="name"
							/>
						</div>
						<div class="input-group mb-3">
							<span
								class="shadow rounded-left border-0 input-group-text bg-white"
								id="basic-addon1"
							>
								<i class="fas fa-chalkboard-teacher"></i>
							</span>
							<input
								type="text"
								class="shadow rounded-right border-0 form-control"
								placeholder="Employee Phone Number"
								v-model="phonenumber"
							/>
						</div>

						<div class="input-group mb-3">
							<span
								class="shadow rounded-left border-0 input-group-text bg-white"
								id="basic-addon1"
							>
								<i class="far fa-clock"></i>
							</span>
							<input
								type="text"
								class="shadow rounded-right border-0 form-control"
								placeholder="Age"
								v-model="age"
							/>
						</div>

						<div class="input-group mb-3">
							<span
								class="shadow rounded-left border-0 input-group-text bg-white"
								id="basic-addon1"
							>
								<i class="far fa-clock"></i>
							</span>
							<input
								type="text"
								class="shadow rounded-right border-0 form-control"
								placeholder="Email ID"
								v-model="emailid"
							/>
						</div>

						<div class="row">
							<div class="col-6">
								<button
									type="button"
									@click.prevent="addEmployee()"
									class="shadow border-0 rounded-0 btn btn-primary px-4"
								>
									Add Employee
								</button>
							</div>
						</div>
					</div>
				</div>
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
				username: "",
				name: "",
				age: "",
				phonenumber: "",
				emailid: "",
				employees: localStorage.getItem('employeeDB') === null | undefined ? [] : JSON.parse(localStorage.getItem('employeeDB'))
			};
		},
		methods: {
			addEmployee() {
				var employee = {
					username: this.username,
					id: Date.now(),
					name: this.name,
					age: this.age,
					phonenumber: this.phonenumber,
					emailid: this.emailid
				}
				this.employees.push(...this.employees, employee);
				localStorage.setItem("employeeDB", JSON.stringify(this.employees))
				this.$router.push("/");
			},

			
		},
	};
</script>
