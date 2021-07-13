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
        <CRow class="mt-3">
          <CCol>
            <p class="bold">Halaman yang diakses</p>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <span>Dashboard</span>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CRow class="mt-3">
      <CCol class="d-flex justify-content-end pb-4">
        <CButton color="dark" variant="outline" class="ml-auto mr-2" to="/election/jadwal">Kembali</CButton>
        <CButton color="primary" class="mr-2">Reset Password</CButton>
        <CButton color="success">Simpan</CButton>
      </CCol>
    </CRow>
  </div>
</template>