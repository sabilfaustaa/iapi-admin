<template>
  <div class="">
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Laporan Suara Masuk</h5>
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
            <div class="d-flex mr-3">
              <label class="align-middle pr-3 py-2">Jadwal</label>
              <CSelect
                :options="['Jadwal Pemira']"
              />
            </div>
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
                  <td>Nama Lengkap</td>
                  <td>Kota</td>
                  <td>Tipe Pemilihan</td>
                  <td>Lokasi Pemilihan</td>
                  <td>Jadwal</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>1</td>
                  <td>Annisa Ardiyanti</td>
                  <td>Bandung</td>
                  <td>VFH</td>
                  <td>Jl Moch. Toha</td>
                  <td>Jadwal Pemira</td>
                  <td>Voted</td>
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