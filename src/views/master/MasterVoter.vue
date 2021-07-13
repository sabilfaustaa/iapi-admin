<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Voters</h5>
          </CCol>
          <CCol class="text-right">
            <input
              id="fileImport"
              type="file"
              hidden
              @change="(e)=>this.previewFiles(e)"
            >
            <CButton class="text-success mr-2 shadow" @click="chooseFilesImport()"><CIcon name="cil-description" class="mr-1"/>Import Excel</CButton>
            <CButton class="text-success shadow"><CIcon name="cil-description" class="mr-1"/>Export to Excel</CButton>
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
            <div>
              <CButton
                color="dark"
                variant="outline"
                class="mr-3 w-5 text-left">
                <span>Non DPS</span>
                <img src="img/icons/Filter 2.svg" class="ml-5" alt="">
              </CButton>
            </div>
            <CInput
              class="w-16 mr-3"
              placeholder="Cari"
            />
            <div>
              <CButton color="warning" class="text-white mr-2" @click="largeModal = true">
                Kirim Email
              </CButton>
              <CButton color="success" to="/data-master/tambah-voters"><CIcon name="cil-plus"/><span class="ml-1">Tambah</span></CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>
                    <CInputCheckbox
                      :custom="true"
                      id="checkAll"
                    />
                  </td>
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
                <tr
                  class="text-center"
                  v-for="(data, index) in tables"
                  :key="index">
                  <td>
                    <CInputCheckbox
                      :custom="true"
                    />
                  </td>
                  <td>{{ index + 1 }}</td>
                  <td>{{ tables[index].noRegIAPI}}</td>
                  <td>{{ tables[index].namaLengkap}}</td>
                  <td>{{ tables[index].email}}</td>
                  <td>{{ tables[index].tanggalLahir}}</td>
                  <td>{{ tables[index].umur}}</td>
                  <td>{{ tables[index].kategoriAnggota}}</td>
                  <td>{{ tables[index].jenisPemilihan}}</td>
                  <td>{{ tables[index].status === true ? 'Verifikasi' : 'Belum Verifikasi'}}</td>
                  <td>
                    <button class="border-0 bg-transparent">
                      <img src="img/icons/eye.svg" alt="">
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-pencil" class="text-primary"></CIcon>
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-trash" class="text-danger"></CIcon>
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
import XLSX from '../../../node_modules/xlsx/dist/xlsx.full.min.js'
var reader = new FileReader()
export default {
  name: 'MasterVoters',
  data () {
    return {
      currentPage: 1,
      largeModal: false,
      nama: 'Dadan Kusna',
      tables: [
        {
          noRegIAPI: '001',
          namaLengkap: 'Dadan Kusna',
          email: 'dadan123@gmail.com',
          tanggalLahir: '10-06-1980',
          umur: '45',
          kategoriAnggota: 'Profesional',
          jenisPemilihan: 'VFH',
          status: false
        },
        {
          noRegIAPI: '002',
          namaLengkap: 'Dadan Kusnandar',
          email: 'dadan123@gmail.com',
          tanggalLahir: '10-06-1980',
          umur: '45',
          kategoriAnggota: 'Profesional',
          jenisPemilihan: 'VFH',
          status: false
        },
        {
          noRegIAPI: '003',
          namaLengkap: 'Dadan Koswara',
          email: 'dadankos123@gmail.com',
          tanggalLahir: '10-06-1980',
          umur: '42',
          kategoriAnggota: 'Lanjutan',
          jenisPemilihan: 'VFH',
          status: true
        }
      ]
    }
  },
  methods:{
    previewFiles(e) {
      // var files = e.target.files, f = files[0];
      
      reader.onload = function (e) {
        var data = e.target.result
        var workbook = XLSX.read(data, { type: 'binary' })
        let sheetName = workbook.SheetNames[0]
        let worksheet = workbook.Sheets[sheetName]
        let rowObject = XLSX.utils.sheet_to_row_object_array(worksheet)
        const finalJsonData = JSON.stringify(rowObject, undefined, 4)
        console.log(finalJsonData)
      }
      // reader.readAsBinaryString(this.worksheet)
    },
    chooseFilesImport: function() {
      document.getElementById("fileImport").click();
    }
  }
}
</script>

<style scoped>
.cselect {
  width: 4rem;
}
.w-5 {
  width: 9rem;
}
</style>