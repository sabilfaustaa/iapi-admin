<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Tambah Jadwal Pemilihan</h5>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Nama Jadwal"
            />
          </CCol>
          <CCol>
            <CInput
              label="Tanggal"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Waktu Mulai"
            />
          </CCol>
          <CCol>
            <CInput
              label="Waktu Selesai"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol sm="6">
            <label for="" class="mb-3">Status</label>
            <CRow>
              <CCol>
                <input type="radio" class="mr-2"/>
                <label for="">Aktif</label>
              </CCol>
              <CCol>
                <input type="radio" class=""/>
                <label for="">Tidak Aktif</label>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        
      </CCardBody>
    </CCard>
    <CRow class="mt-3">
      <CCol class="d-flex justify-content-end pb-4">
        <CButton color="dark" variant="outline" class="ml-auto mr-2" to="/election/jadwal">Kembali</CButton>
        <CButton color="success">Simpan</CButton>
      </CCol>
    </CRow>
  </div>
</template>