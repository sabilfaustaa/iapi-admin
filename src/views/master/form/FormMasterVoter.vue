<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Voters</h5>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="No. Reg. IAPI"
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
              type="email"
              label="Email"
            />
          </CCol>
          <CCol>
            <CRow>
              <CCol>
                <CInput
                  type="date"
                  label="Tanggal Lahir"
                />
              </CCol>
              <CCol sm="4">
                <CInput
                  label="Umur"
                  disabled
                />
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Izin AP"
            />
          </CCol>
          <CCol>
            <CSelect
              label="Kategori Anggota"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Nama KAP"
            />
          </CCol>
          <CCol>
            <CInput
              label="Alamat KAP"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Kota"
            />
          </CCol>
          <CCol>
            <CInput
              label="Korwil KAP"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Alamat Rumah Sesuai KTP"
            />
          </CCol>
          <CCol>
            <CInput
              label="Alamat Domisili"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Kota Domisili"
            />
          </CCol>
          <CCol>
            <CInput
              label="Wilayah Domisili"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Status Iuran Keanggotaan s/d Tahun 2021"
            />
          </CCol>
          <CCol>
            <CInput
              label="Hak Pilih"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <label for="" class="mb-3">Jenis Pemilihan</label>
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
          <CCol>
            <CSelect
              label="Status"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CSelect
              label="Lokasi Booth Pemilihan"
            />
          </CCol>
          <CCol>
            <CSelect
              label="Jam Pemilihan"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol sm="6">
            <label for="" class="mb-3">Upload Form VFH</label>
            <CInputFile
              custom
            />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CRow class="mt-3">
      <CCol class="d-flex justify-content-end pb-4">
        <CButton color="dark" variant="outline" class="ml-auto mr-2" to="/data-master/master-voters">Kembali</CButton>
        <CButton color="warning" class="mr-2 text-white" @click="largeModal = true"> Kirim Email </CButton>
        <CButton color="success">Simpan</CButton>
      </CCol>
    </CRow>

    <CModal
      title="Konfirmasi"
      size="lg"
      :show.sync="largeModal"
    >
      Apakah anda yakin akan mengirim pesan kepada Dadan Koswara ?
    </CModal>
  </div>
</template>

<script>
export default {
  name: 'FormMasterVoters',
  data () {
    return {
      largeModal: false,
    }
  }
}
</script>