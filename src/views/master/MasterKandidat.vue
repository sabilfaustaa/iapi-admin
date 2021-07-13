<template>
  <div>
    <CRow>
      <CCol>
        <CNav fill variant="tabs" class="mb-4">
          <CNavItem class="active">Dewan Pengurus Nasional</CNavItem>
          <CNavItem>Dewan Pengurus Wilayah</CNavItem>
          <CNavItem>Dewan Pengurus Anggota Madya</CNavItem>
          <CNavItem>Dewan Pengawas</CNavItem>
        </CNav>
      </CCol>
    </CRow>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Kandidat Dewan Pengurus Nasional</h5>
          </CCol>
          <CCol class="text-right">
            <input
              id="fileImport"
              type="file"
              hidden
              @change="(e)=>this.previewFiles(e)"
            >
            <CButton class="text-success mr-2 shadow" @click="chooseFilesImport()"><CIcon name="cil-description" class="mr-1"/>Import Excel</CButton>
            <input
              id="fileExport"
              type="file"
              hidden
            >
            <CButton class="text-success shadow" @click="chooseFilesExport()"><CIcon name="cil-description" class="mr-1"/>Export to Excel</CButton>
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
            <CInput
              class="w-16 mr-3"
              placeholder="Cari"
            />
            <div>
              <CButton color="success" to="/data-master/tambah-kandidat"><CIcon name="cil-plus"/><span class="ml-1">Tambah</span></CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>Nomor Urut</td>
                  <td>Foto</td>
                  <td>Nama Lengkap</td>
                  <td>Status Pencalonan</td>
                  <td>Status</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr 
                  class="text-center"
                  v-for="(data, index) in tables"
                  :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ tables[index].noUrut}}</td>
                  <td>
                    <img :src="tables[index].foto" class="c-avatar-img" alt="img-user">
                  </td>
                  <td>{{ tables[index].namaLengkap}}</td>
                  <td>{{ tables[index].statusPencalonan}}</td>
                  <td>{{ tables[index].status}}</td>
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
  </div>
</template>

<script>
export default {
  name: 'MasterKandidat',
  tables: [
    
  ]
}
</script>
<script>
export default {
  name: 'MasterKandidat',
  data () {
    return {
      currentPage: 1,
      nama: 'Dadan Kusna',
      tables: [
        {
          noUrut: '1',
          foto: 'img/avatars/1.jpg',
          namaLengkap: 'Dadan Kusna',
          statusPencalonan: 'Dewan Pengurus Nasional',
          status: false
        },
        {
          noUrut: '2',
          foto: 'img/avatars/2.jpg',
          namaLengkap: 'Dadan Suhendar',
          statusPencalonan: 'Dewan Pengurus Nasional',
          status: true
        },
        {
          noUrut: '3',
          foto: 'img/avatars/3.jpg',
          namaLengkap: 'Dadan Ahmad',
          statusPencalonan: 'Dewan Pengurus Nasional',
          status: false
        },
        {
          noUrut: '4',
          foto: 'img/avatars/4.jpg',
          namaLengkap: 'Dadan Junaedi',
          statusPencalonan: 'Dewan Pengurus Nasional',
          status: false
        },
        {
          noUrut: '5',
          foto: 'img/avatars/5.jpg',
          namaLengkap: 'Dadan Supratman',
          statusPencalonan: 'Dewan Pengurus Nasional',
          status: true
        },
      ]
    }
  },
  methods:{
    chooseFilesImport: function() {
      document.getElementById("fileImport").click();
    },
    chooseFilesExport: function() {
      document.getElementById("fileExport").click();
    }
  }
}
</script>

<style scoped>
.cselect {
  width: 4rem;
}
.c-avatar-img {
  width: 30px;
  margin-top: -5px;
}
/* .active {
  color: blue;
  font-weight: 700;
  border-bottom: 3px solid blue;
} */
</style>