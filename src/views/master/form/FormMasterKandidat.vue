<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Tambah Calon Kandidat</h5>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol sm="2">
            <img src="img/default-user.png" class="c-avatar-img" alt="">
          </CCol>
          <CCol sm="2" class="d-flex align-items-center">
            <CButton class="bg-primary text-white"><CIcon name="cil-cloud-download"/><span class="ml-1">Upload Foto</span></CButton>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Nomor Urut"
            />
          </CCol>
          <CCol>
            <CInput
              label="Nama Lengkap"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Nomor KTP"
            />
          </CCol>
          <CCol>
            <CInput
              label="Nomor Izin AP"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="No. Reg. Anggota IAPI"
            />
          </CCol>
          <CCol>
            <CInput
              type="email"
              label="Email"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="No. HP"
            />
          </CCol>
          <CCol>
            <CInput
              label="Alamat KAP/Instansi"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="No. Telepon Kantor"
            />
          </CCol>
          <CCol>
            <CInput
              label="Status Pencalonan"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CTextarea
              label="Visi"
              rows="6"
            />
          </CCol>
          <CCol>
            <CTextarea
              label="Misi"
              rows="6"
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