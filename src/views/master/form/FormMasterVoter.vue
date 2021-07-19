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
            <CInput
              type="date"
              label="Tanggal Lahir"
            />
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
            <CTextarea
              label="Alamat KAP"
              rows="3"
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
            <CTextarea
              rows="3"
              label="Alamat Rumah Sesuai KTP"
            />
          </CCol>
          <CCol>
            <CTextarea
              rows="3"
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
              label="Longitude"
            />
          </CCol>
          <CCol>
            <CInput
              label="Latitude"
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
              <CCol sm="4">
                <input type="radio" id="fromBooth" @click="checkRadio(0)" checked name="jenisPemilihan" class="mr-2"/>
                <label for="fromBooth">Vote From Booth</label>
              </CCol>
              <CCol>
                <input type="radio" id="fromVfh" @click="checkRadio(1)" name="jenisPemilihan" class="mr-2"/>
                <label for="fromVfh">Vote From Home</label>
              </CCol>
            </CRow>
          </CCol>
          <CCol>
            <label for="" class="mb-3">Status Voter</label>
            <CRow>
              <CCol sm="4">
                <input type="radio" id="dps" name="statusVoters" class="mr-2"/>
                <label for="dps">DPS</label>
              </CCol>
              <CCol>
                <input type="radio" id="nondps" name="statusVoters" class="mr-2"/>
                <label for="nondps">Non DPS</label>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow class="mt-3" id="booth">
          <CCol sm="6">
            <CSelect
              label="Lokasi Booth Pemilihan"
            />
          </CCol>
          <CCol sm="6">
            <CSelect
              label="Jam Pemilihan"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3" id="vfh" style="display: none;">
          <CCol sm="6">
            <label for="uploadFileVFH" class="mb-3">Upload Form VFH</label>
            <CInputFile
              id="uploadFileVFH"
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

    <!-- Send Email Modal -->
    <CModal
      title="Konfirmasi"
      size="md"
      :show.sync="largeModal"
    >
      Yakin akan mengirim email ?

      <template #footer>
        <CButton @click="largeModal = false" color="danger">Cancel</CButton>
        <CButton @click="largeModal = false" color="success">Send</CButton>
      </template>
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
  },
  methods : {
    checkRadio : function (a) {
      if (a == 0) {
        document.getElementById('booth').style.display = "flex"
        document.getElementById('vfh').style.display = "none"
      } else {
        document.getElementById('booth').style.display = "none"
        document.getElementById('vfh').style.display = "flex"
      }

    }
  }
}
</script>