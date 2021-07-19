<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Log Activity</h5>
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
            
            <h5 class="mt-2">Filter</h5>
            <CInput
              class="w-10 mx-3"
              type="date"
            />
            <span class="font-small mt-2">s/d</span>
            <CInput
              class="w-10 mx-3"
              type="date"
            />
            <div>
              <CButton color="success">Terapkan</CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>Tanggal</td>
                  <td>User</td>
                  <td>Role</td>
                  <td>Menu</td>
                  <td>Sub Menu</td>
                  <td>Activity</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>1</td>
                  <td>10-06-2021, 10:00</td>
                  <td>Muhamad Sabil</td>
                  <td>Admin</td>
                  <td>Data Master</td>
                  <td>Master Voters</td>
                  <td>Tambah Data Voters</td>
                  <td>
                    <button class="border-0 bg-transparent" @click="detailsModal = true">
                      <img src="img/icons/eye.svg" alt="">
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

    <!-- Detail Modal -->
    <CModal
      title="Details"
      centered
      :show.sync="detailsModal"
    >
      <table class="table border my-3">
        <tr class="py-3">
          <td class="py-2" width="200px">Tanggal</td>
          <td>:</td>
          <td class="bold">10-06-2021, 10:00</td>
        </tr>
        <tr>
          <td class="py-2">User</td>
          <td>:</td>
          <td class="bold">Muhamad Sabil</td>
        </tr>
        <tr>
          <td class="py-2">Role</td>
          <td>:</td>
          <td class="bold">Admin</td>
        </tr>
        <tr>
          <td class="py-2">Menu</td>
          <td>:</td>
          <td class="bold">Data Master</td>
        </tr>
        <tr>
          <td class="py-2">Sub Menu</td>
          <td>:</td>
          <td class="bold">Master Voters</td>
        </tr>
        <tr>
          <td class="py-2">Activity</td>
          <td>:</td>
          <td class="bold">Tambah Data Voters</td>
        </tr>
      </table>

      <template #footer>
        <div class="">

        </div>
      </template>
    </CModal>
  </div>
</template>

<script>
export default {
  name: 'LogActivity',
  data () {
    return {
      currentPage: 1,
      detailsModal: false,
    }
  }
}
</script>

