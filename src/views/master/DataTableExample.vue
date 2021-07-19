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
                <img src="img/icons/Filter 2.svg" class="ml-4" alt="">
              </CButton>
            </div>
            <CInput
              class="w-16 mr-3"
              placeholder="Cari"
            />
            <div>
              <CButton color="warning" disabled class="text-white mr-2" @click="sendEmailModal = true">
                Kirim Email
              </CButton>
              <CButton color="success" to="/data-master/tambah-voters"><CIcon name="cil-plus"/><span class="ml-1">Tambah</span></CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol id="a">
            <template #checkbox>
              <td>
                <input type="checkbox">
              </td>
            </template>
            <CDataTable
              class="text-center table-borderless font-small"
              striped
              :items-per-page-select="{options: [1, 2, 3]}"
              :fields="fields"
              :items="tables"
              :items-per-page="6"
              :pagination="{ doubleArrows: false, align: 'end', size: 'sm' }"
            >
              <template #status="data">
                <td>
                  {{ data.item.status === true ? 'Verifikasi' : 'Belum Verifikasi'}}
                </td>
              </template>
              <template #action>
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
              </template>
            </CDataTable>
          </CCol>
        </CRow>
        <!-- <div style="margin-top: -35px;">
          <span class="font-small">Showing 5 to 10 of 20 entries</span>
        </div> -->
      </CCardBody>
    </CCard>

    <!-- Send Email Modal -->
    <CModal
      title="Konfirmasi"
      size="lg"
      :show.sync="sendEmailModal"
    >
      Apakah anda yakin akan mengirim email kepada ... ?
    </CModal>

    <!-- Delete Modal -->
    <CModal
      title="Konfirmasi"
      size="lg"
      :show.sync="deleteModal"
    >
      Apakah anda yakin akan menghapus data ?
    </CModal>

    <!-- Import File Modal -->
    <CModal
      title="Import Excel"
      centered
      :show.sync="importModal"
    >
      <div class="">
        <label for="btnDownload">Format File Import</label>
        <button class="btn btn-primary w-100" id="btnDownload">Download File Import</button>
      </div>
      <div class="mt-3">
        <label for="importExcel">Upload File Excel</label>
        <CInputFile
          custom
          id="importExcel"
        />
      </div>
    </CModal>
  </div>
</template>

<script>

export default {
  name: 'DataTableExample',
  data () {
    return {
      currentPage: 1,
      fields: [
        { key: 'checkbox' },
        { key: 'noRegIAPI' },
        { key: 'namaLengkap', _classes: 'text-left' },
        { key: 'email', _classes: 'text-left' },
        { key: 'tanggalLahir' },
        { key: 'umur' },
        { key: 'kategoriAnggota' },
        { key: 'email' },
        { key: 'jenisPemilihan' },
        { key: 'status' },
        { 
          key: 'action', 
          label: 'aksi', 
        }
      ],
      sendEmailModal: false,
      deleteModal: false,
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
  mounted() {
    this.tes();
  },
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
    },
    tes : function() {
      const a = document.getElementById('a');
      console.log(a);
    },
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
</style>