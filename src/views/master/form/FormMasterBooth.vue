<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Tambah Booth</h5>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              disabled
              label="ID Booth"
            />
          </CCol>
          <CCol>
            <CInput
              label="Nama Booth"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CTextarea
              label="Lokasi"
              rows="3"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
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
        
      </CCardBody>
    </CCard>
    <CRow class="mt-3">
      <CCol class="d-flex justify-content-end pb-4">
        <CButton color="dark" variant="outline" class="ml-auto mr-2" to="/data-master/master-booth">Kembali</CButton>
        <CButton color="success">Simpan</CButton>
      </CCol>
    </CRow>
  </div>
</template>