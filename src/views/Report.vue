<template>
  <div>
    <CRow>
      <CCol>
        <CNav fill variant="tabs" class="mb-4">
          <CNavItem class="active">Dewan Pengurus Nasional</CNavItem>
          <CNavItem>Dewan Pengurus Wilayah</CNavItem>
          <CNavItem>Dewan Pengurus Anggota Madya</CNavItem>
          <CNavItem>Dewan Pengawas</CNavItem>
        </CNav>
      </CCol>
    </CRow>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Laporan Suara Kandidat</h5>
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
              <CButton class="text-success shadow"><CIcon name="cil-description" class="mr-1"/>Export to Excel</CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>Nomor Urut</td>
                  <td>Foto</td>
                  <td>Nama Lengkap</td>
                  <td>Status Pencalonan</td>
                  <td>Total Suara</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>1</td>
                  <td>1</td>
                  <td>
                    <img src="img/avatars/1.jpg" class="c-avatar-img" alt="img-user">
                  </td>
                  <td>Muhamad Sabil</td>
                  <td>Dewan Pengurus Nasional</td>
                  <td>200</td>
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
  </div>
</template>

<style scoped>
.cselect {
  width: 4rem;
}
.c-avatar-img {
  width: 30px;
  margin-top: -5px;
}
/* .active {
  color: blue;
  font-weight: 700;
  border-bottom: 3px solid blue;
} */
</style>