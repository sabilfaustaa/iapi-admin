<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Pengguna</h5>
          </CCol>
          <CCol class="text-right">
            <CButton class="text-success mr-2 shadow"><CIcon name="cil-description" class="mr-1"/>Import Excel</CButton>
            <CButton class="text-success shadow"><CIcon name="cil-description" class="mr-1"/>Export to Excel</CButton>
          </CCol>
        </CRow>
        <CRow class="my-3">
          <CCol class="d-flex">
            <small class="align-middle pr-3 py-2 font-small">Show</small>
            <CSelect
              class="cselect"
              :options="[1,2,3,4,5,6,7,8,9,10]"
            />
            <small class="align-middle px-2 py-2 font-small">entries</small>
          </CCol>
          <CCol md="9" class="text-right d-flex justify-content-end">
            <CInput
              class="w-16 mr-3"
              placeholder="Cari"
            />
            <div>
              <CButton color="success" to="/user/form-user"><CIcon name="cil-plus"/><span class="ml-1">Tambah</span></CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>No Reg. IAPI</td>
                  <td>Nama Lengkap</td>
                  <td>Email</td>
                  <td>Role</td>
                  <td>Status</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>1</td>
                  <td>001</td>
                  <td>Muhamad Sabil</td>
                  <td>dadan123@gmail.com</td>
                  <td>Super Admin</td>
                  <td>Aktif</td>
                  <td>
                    <button class="border-0 bg-transparent">
                      <img src="img/icons/eye.svg" alt="">
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-pencil" class="text-primary"></CIcon>
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-trash" class="text-danger"></CIcon>
                    </button>
                  </td>
                </tr>
                <tr class="text-center">
                  <td>2</td>
                  <td>002</td>
                  <td>Muhamad Sabil</td>
                  <td>dadan123@gmail.com</td>
                  <td>Admin</td>
                  <td>Aktif</td>
                  <td>
                    <button class="border-0 bg-transparent">
                      <img src="img/icons/eye.svg" alt="">
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-pencil" class="text-primary"></CIcon>
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-trash" class="text-danger"></CIcon>
                    </button>
                  </td>
                </tr>
                <tr class="text-center">
                  <td>3</td>
                  <td>003</td>
                  <td>Muhamad Sabil</td>
                  <td>dadan123@gmail.com</td>
                  <td>Admin</td>
                  <td>Aktif</td>
                  <td>
                    <button class="border-0 bg-transparent">
                      <img src="img/icons/eye.svg" alt="">
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-pencil" class="text-primary"></CIcon>
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-trash" class="text-danger"></CIcon>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <span class="font-small">Showing 5 to 10 of 20 entries</span>
          </CCol>
          <CCol class="d-flex justify-content-end">
            <CPagination
              size="sm"
              :active-page.sync="currentPage"
              :pages="3"/>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>

    <CModal
      title="Konfirmasi"
      size="lg"
      :show.sync="largeModal"
    >
      Apakah anda yakin akan mengirim pesan kepada {{nama}} ?
    </CModal>
  </div>
</template>

<script>
export default {
  name: 'MasterVoters',
  data () {
    return {
      currentPage: 1,
      largeModal: false,
      nama: 'Muhamad Sabil'
    }
  }
}
</script>

<style scoped>
.cselect {
  width: 4rem;
}
</style>