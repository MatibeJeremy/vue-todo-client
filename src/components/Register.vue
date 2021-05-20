<template>
  <div class="account-pages mt-5 mb-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card" style="border-radius: 20px; background-color: #2c3e50">

            <div class="text-center account-logo-box">
              <p style="padding-top:15px; font-family:monospace; font-size: 20px; font-weight: bold; color:darkgray">Sign Up</p>
            </div>

            <div v-if="error" class="alert alert-danger" style="margin: 15px">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span>
                              <b> Failed - </b> {{errorMessage}}</span>
            </div>

            <div v-if="success" class="alert alert-success" style="margin:15px">
              <button type="button" aria-hidden="true" class="close">×</button>
              <span>
                           <b> Success - </b> {{successMessage}} </span>
            </div>

            <div class="card-body">
              <div style="padding:10px; color: darkgray" v-if="loading">
                Loading...
              </div>

              <form @submit.prevent="register">
                <div class="form-group">
                  <label for="name" style="color:darkgray; font-size:12px; float: left">Name</label>
                  <input class="form-control" type="text" name="name" v-model="name" required="" placeholder="Name">
                </div>

                <div class="form-group">
                  <label for="email" style="color:darkgray; font-size:12px; float: left">Email</label>
                  <input class="form-control" type="email" name="email" v-model="email" required="" placeholder="Email">
                </div>

                <div class="form-group">
                  <label for="password" style="color:darkgray; font-size:12px; float: left">Password</label>
                  <input class="form-control" type="password" v-model="password" required="" id="password" placeholder="Password">
                </div>

                <div class="form-group account-btn text-center mt-2">
                  <div class="col-12">
                    <button class="btn width-md btn-bordered btn-danger waves-effect waves-light" type="submit">Register</button>
                  </div>
                </div>

                <div class="row mt-5">
                  <div class="col-sm-12 text-center">
                    <p class="text-muted">Already have account?<router-link to="Signin" class="text-primary ml-1"><b>Sign In</b></router-link></p>
                  </div>
                </div>
              </form>

            </div>
            <!-- end card-body -->
          </div>
          <!-- end card -->

        </div>
        <!-- end col -->
      </div>
      <!-- end row -->
    </div>
    <!-- end container -->
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Register',
  components: {

  },
  data(){
    return {
      loading: false,
      name : "",
      email : "",
      password : "",
      error: null,
      errorMessage: null,
      success: null,
      successMessage: null

    }
  },
  methods:{

    register() {
      this.loading = true
      axios.post('auth/register', {
        name: this.name,
        email: this.email,
        password: this.password
      }).then(response => {
        console.log(response)
        this.loading = false
        this.success = true
        this.successMessage = 'Check your emails.(Ensure you check the spam folder as well.)'
        setTimeout( () => this.$router.push({ path: '/Signin'}), 5000);
      }).catch(error => {
        console.log(error)
        this.loading = false
        this.error = true
        this.errorMessage = 'Try again with Different Data'
        location.reload()
      });
    }
  }
}
</script>

