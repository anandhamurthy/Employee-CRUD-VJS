<template>
	<div class="p-5 container-fluid">
		<div class="d-flex justify-content-start align-items-center">
			<i class="fas fa-school"></i>
			<h3 class="m-2 text-dark">Update Employee</h3>
		</div>

		<div class="row align-items-center">
			<div class="p-2 d-md-block col-lg-6 mx-auto">
				<div class="shadow border-0 card p-4">
					<div class="card-body">
						<h4 class="text-dark mb-3">Update Employee Details</h4>

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
								v-model="name"
								class="shadow rounded-right border-0 form-control"
								placeholder="Employee Name"
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
								v-model="phonenumber"
								class="shadow rounded-right border-0 form-control"
								placeholder="Employee Phone Number"
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
								v-model="age"
								class="shadow rounded-right border-0 form-control"
								placeholder="Age"
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
								v-model="emailid"
								class="shadow rounded-right border-0 form-control"
								placeholder="Email ID"
							/>
						</div>
						<div class="row">
							<div class="col-6">
								<button
									type="button"
									@click.prevent="updateEmployee()"
									class="shadow border-0 rounded-0 btn btn-primary px-4"
								>
									Update Employee
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
		components: {},
		data() {
			return {
				
				employee_details: JSON.parse(localStorage.getItem('employeeDB')).find((ele)=> {
					return ele.id == this.$route.params.id;
				}),
				username: "",
				name: "",
				age: "",
				phonenumber: "",
				emailid: "",
				employees: JSON.parse(localStorage.getItem('employeeDB'))
			};
		},
		created(){
			this.setItems();
		},
		methods: {
			updateEmployee() {
				var emp_details  = {
					username: this.username,
					id: this.$route.params.id,
					name: this.name,
					age: this.age,
					phonenumber: this.phonenumber,
					emailid: this.emailid
				}

				console.log(this.$route.params.id);

				for (let i = 0; i < this.employees.length; i++) {

					if (this.employees[i].id == this.$route.params.id) {
						this.employees[i] = emp_details;
					}
				}

				localStorage.setItem("employeeDB", JSON.stringify(this.employees))
			},	
			setItems() {
				this.username = this.employee_details.username;
				this.emailid = this.employee_details.emailid;
				this.phonenumber = this.employee_details.phonenumber;
				this.age = this.employee_details.age;
				this.name = this.employee_details.name;
			},	
		},
	};
</script>
