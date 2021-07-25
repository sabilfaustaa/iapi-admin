<template>
  <div class="c-app flex-row align-items-center h-full">
    <CContainer fluid class="bg-">
      <CContainer>
        <CRow class="justify-content-center">
          <CCol md="4">
            <CForm class="text-center text-light" @submit.prevent="submit">
              <h1>Sign In</h1>
              <p class="py-2">
                Silakan masuk menggunakan Email & Password Anda yang sudah
                didaftarkan.
              </p>
              <CInput
                class="mb-4"
                type="email"
                placeholder="Email"
                v-model="email"
              >
              </CInput>
              <CInput type="password" placeholder="Password" v-model="password">
              </CInput>
              <CRow class="mb-3">
                <CCol col="6" class="text-left">
                  <CInputCheckbox :label="'ingatkan saya'" :custom="true" />
                </CCol>
                <CCol col="6" class="text-right text-success">
                  <CLink to="/lupa-password" class="text-success"
                    >Forgot password?</CLink
                  >
                </CCol>
              </CRow>
              <CButton type="submit" color="success" class="px-4 w-100"
                >Login</CButton
              >
            </CForm>
          </CCol>
        </CRow>
      </CContainer>
      <CRow>
        <svg
          class="position-absolute top img-fluid svg"
          width="1440"
          height="125"
          viewBox="0 0 1440 125"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 0L59.625 4.69184C120.375 9.38367 239.625 18.7673 360 34.6474C480.375 50.8884 599.625 73.9866 720 78.6785C840.375 83.3703 959.625 69.2948 1080 64.9639C1200.38 60.272 1319.62 64.9639 1380.38 67.1293L1440 69.2948V124.875H1380.38C1319.62 124.875 1200.38 124.875 1080 124.875C959.625 124.875 840.375 124.875 720 124.875C599.625 124.875 480.375 124.875 360 124.875C239.625 124.875 120.375 124.875 59.625 124.875H0V0Z"
            fill="#005EFF"
            fill-opacity="0.1"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 49.95L48 59.94C96 69.93 192 89.91 288 84.915C384 79.92 480 49.95 576 29.97C672 9.99 768 0 864 0C960 0 1056 9.99 1152 27.4725C1248 44.955 1344 69.93 1392 82.4175L1440 94.905V124.875H1392C1344 124.875 1248 124.875 1152 124.875C1056 124.875 960 124.875 864 124.875C768 124.875 672 124.875 576 124.875C480 124.875 384 124.875 288 124.875C192 124.875 96 124.875 48 124.875H0V49.95Z"
            fill="#005EFF"
            fill-opacity="0.2"
          />
        </svg>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async submit() {
      const url = "https://evoting-api.fkrdotid.tech/api/v1";
      const res = await axios.post(url + "/user-login", {
        email: this.email,
        password: this.password,
      });
      localStorage.setItem("tokenAdmin", res.data.data.userToken);

      this.$router.push({ name: "Dashboard" });
    },
  },
};
</script>

<style scoped>
.c-app {
  background-color: #0c2c77;
}
.h-full {
  max-height: 18rem;
  overflow: hidden;
}
.top {
  top: 100%;
  transform: translate(0, -100%);
}
</style>