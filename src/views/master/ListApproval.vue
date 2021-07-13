<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Voters</h5>
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
                  <td>Tanggal Lahir</td>
                  <td>Umur</td>
                  <td>Kategori Anggota</td>
                  <td>Jenis Pemilihan</td>
                  <td>Status</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>001</td>
                  <td>Muhamad Sabil</td>
                  <td>dadan123@gmail.com</td>
                  <td>10-06-1980</td>
                  <td>45</td>
                  <td>Profesional</td>
                  <td>VFH</td>
                  <td>Ditolak</td>
                  <td>
                    <button class="border-0 bg-transparent">
                      <img src="img/icons/eye.svg" alt="">
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>002</td>
                  <td>Muhamad Sabil</td>
                  <td>dadan123@gmail.com</td>
                  <td>10-06-1980</td>
                  <td>45</td>
                  <td>Profesional</td>
                  <td>VFH</td>
                  <td>Ditolak</td>
                  <td>
                    <button class="border-0 bg-transparent">
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
  name: 'ListApproval'
}
</script>
