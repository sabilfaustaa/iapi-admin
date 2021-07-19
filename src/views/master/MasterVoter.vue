<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol sm="2">
            <h5>List Voters</h5>
          </CCol>
          <CCol class="text-right">
            <CButton class="text-success mr-2 shadow" @click="importModal = true"><CIcon name="cil-description" class="mr-1"/>Import Excel</CButton>
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
                class="mr-3 w-5 text-left bg-black">
                <span>Non DPS</span>
                <img src="img/icons/Filter 2.svg" class="ml-5" alt="">
              </CButton>
            </div>
            <CInput
              class="w-16 mr-3"
              placeholder="Cari"
            />
            <div>
              <CButton color="warning" class="text-white mr-2" @click="sendEmailModal = true">
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
                    <input type="checkbox" id="checkAll" @change="checkAll" class="check">
                  </td>
                  <td>No</td>
                  <td>No Reg. IAPI</td>
                  <td class="text-left">Nama Lengkap</td>
                  <td class="text-left">Email</td>
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
                    <input type="checkbox" id="check" @change="check" class="check">
                  </td>
                  <td>{{ index + 1 }}</td>  
                  <td>{{ tables[index].noRegIAPI}}</td>
                  <td class="text-left">{{ tables[index].namaLengkap}}</td>
                  <td class="text-left">{{ tables[index].email}}</td>
                  <td>{{ tables[index].tanggalLahir}}</td>
                  <td>{{ tables[index].umur}}</td>
                  <td>{{ tables[index].kategoriAnggota}}</td>
                  <td>{{ tables[index].jenisPemilihan}}</td>
                  <td>
                    <span v-if="tables[index].status" class="text-success">
                      {{ tables[index].status === true ? 'Verifikasi' : 'Belum Verifikasi'}}
                    </span>
                    <span v-else class="text-danger">
                      {{ tables[index].status === true ? 'Verifikasi' : 'Belum Verifikasi'}}
                    </span>
                  </td>
                  <td>
                    <button class="border-0 bg-transparent" @click="detailsModal = true">
                      <img src="img/icons/eye.svg" alt="">
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-pencil" class="text-primary"></CIcon>
                    </button>
                    <button class="border-0 bg-transparent" @click="deleteModal = true">
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

    <!-- Send Email Modal -->
    <CModal
      title="Konfirmasi"
      size="md"
      :show.sync="sendEmailModal"
    >
      Yakin akan mengirim email ?

      <template #footer>
        <CButton @click="sendEmailModal = false" color="danger">Cancel</CButton>
        <CButton @click="sendEmailModal = false" color="success">Send</CButton>
      </template>
    </CModal>

    <!-- Delete Modal -->
    <CModal
      size="md"
      title="Konfirmasi"
      :show.sync="deleteModal"
    >
      Yakin hapus data baris ini ?
      <template #footer>
        <CButton @click="deleteModal = false" color="danger">Discard</CButton>
        <CButton @click="deleteModal = false" color="success">Accept</CButton>
      </template>
    </CModal>

    <!-- Import File Modal -->
    <CModal
      title="Import Excel"
      centered
      :show.sync="importModal"
    >
      <div class="">
        <label for="btnDownload">Format File Import</label>
        <button class="btn btn-success w-100" id="btnDownload">Download File Import</button>
      </div>
      <div class="mt-3">
        <label for="importExcel">Upload File Excel</label>
        <CInputFile
          custom
          id="importExcel"
        />
      </div>

      <template #footer>
        <CButton @click="importModal = false" color="danger">Cancel</CButton>
        <CButton @click="importModal = false" color="primary">Submit</CButton>
      </template>
    </CModal>

    <!-- Detail Modal -->
    <CModal
      title="Details"
      centered
      :show.sync="detailsModal"
    >
      <table class="table border my-3">
        <tr class="py-3">
          <td class="py-2" width="200px">No Reg. IAPI</td>
          <td>:</td>
          <td class="bold">001</td>
        </tr>
        <tr>
          <td class="py-2">Nama Lengkap</td>
          <td>:</td>
          <td class="bold">Dadan Kusna</td>
        </tr>
        <tr>
          <td class="py-2">Email</td>
          <td>:</td>
          <td class="bold">dadan123@gmail.com</td>
        </tr>
        <tr>
          <td class="py-2">Tanggal Lahir</td>
          <td>:</td>
          <td class="bold">10-06-1980</td>
        </tr>
        <tr>
          <td class="py-2">Umur</td>
          <td>:</td>
          <td class="bold">45 tahun</td>
        </tr>
        <tr>
          <td class="py-2">kategori Anggota</td>
          <td>:</td>
          <td class="bold">Profesional</td>
        </tr>
        <tr>
          <td class="py-2">Jenis Pemilihan</td>
          <td>:</td>
          <td class="bold">
            VFH
          </td>
        </tr>
        <tr>
          <td class="py-2">Status</td>
          <td>:</td>
          <td class="bold">
            Belum Verifikasi
          </td>
        </tr>
      </table>

      <template #footer>
        <div class="">

        </div>
      </template>
    </CModal>
  </div>
</template>

<script>

export default {
  name: 'MasterVoters',
  data () {
    return {
      // currentPage: 1,
      sendEmailModal: false,
      deleteModal: false,
      detailsModal: false,
      importModal: false,
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
        },
      ]
    }
  },
  // mounted() {
  //   this.checkAll();
  // },
  methods:{
    checkAll : function() {
      const a = document.getElementById('checkAll');
      const b = document.querySelectorAll('#check');
      for (let i = 0; i < b.length; i++) {
        if(a.checked === true) {
          b[i].checked = true;
        } else {
          b[i].checked = false;
        }
      }
    },
    check : function() {
      const a = document.getElementById('checkAll');
      const b = document.querySelectorAll('#check');
      for (let i = 0; i < b.length; i++) {
        if(b[i].checked === false) {
          a.checked = false;
        }
      }
    }
  },
}
</script>

<style scoped>
.cselect {
  width: 4rem;
}
.w-5 {
  width: 9rem;
}
.bg-black:hover {
  background-color: #fff;
  color: #000;
}
.bg-black:active {
  background-color: #fff;
}
.bg-black {
  color: #000;
  border-color: #d8dbe0;
  background-color: #fff;
}
.check {
  width: 15px;
  height: 15px;
}
</style>