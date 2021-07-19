<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Tambah Pengguna</h5>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="No Reg. IAPI"
            />
          </CCol>
          <CCol>
            <CInput
              disabled
              label="Nama Lengkap"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              disabled
              label="Email"
            />
          </CCol>
          <CCol>
            <CInput
              type="password"
              label="Password"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Role"
            />
          </CCol>
          <CCol sm="6">
            <label for="" class="mb-3">Status</label>
            <CRow>
              <CCol sm="3">
                <input type="radio" name="status" id="aktif" class="mr-2"/>
                <label for="aktif">Aktif</label>
              </CCol>
              <CCol>
                <input type="radio" name="status" id="nonaktif" class="mr-2"/>
                <label for="nonaktif">Tidak Aktif</label>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <p class="bold">Halaman yang diakses</p>
          </CCol>
        </CRow>
        <CRow class="pb-1">
          <CCol>
            <input type="checkbox" checked disabled class="mr-2">
            <span>Dashboard</span>
          </CCol>
        </CRow>
        <CRow class="py-1">
          <CCol>
            <input type="checkbox" checked disabled class="mr-2">
            <span>Data Master</span>
          </CCol>
        </CRow>
        <CRow class="py-1">
          <CCol>
            <input type="checkbox" checked disabled class="mr-2">
            <span>Election Management</span>
          </CCol>
        </CRow>
        <CRow class="py-1">
          <CCol>
            <input type="checkbox" disabled class="mr-2">
            <span>Report</span>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CRow class="mt-3">
      <CCol class="d-flex justify-content-end pb-4">
        <CButton color="dark" variant="outline" class="ml-auto mr-2" to="/election/jadwal">Kembali</CButton>
        <CButton color="primary" class="mr-2">Reset Password</CButton>
        <CButton color="success" @click="submitModal = true">Simpan</CButton>
      </CCol>
    </CRow>

    <CModal
      title="Konfirmasi"
      size="md"
      :show.sync="submitModal"
    >
      Yakin akan simpan data?

      <template #footer>
        <CButton @click="submitModal = false" color="danger">Cancel</CButton>
        <CButton @click="submitModal = false" color="success">Simpan</CButton>
      </template>
    </CModal>
  </div>
</template>


<script>
export default {
  name: 'MasterVoters',
  data () {
    return {
      resetModal: false,
      submitModal: false,
    }
  }
}
</script>

<style scoped>
.check {
  width: 15px;
  height: 15px;
}
</style>