<template>
  <div>
    <CRow>
      <CCol>
        <!-- <CNav fill variant="tabs" class="mb-4">
          <CNavItem class="active">Dewan Pengurus Nasional</CNavItem>
          <CNavItem>Dewan Pengurus Wilayah</CNavItem>
          <CNavItem>Dewan Pengurus Anggota Madya</CNavItem>
          <CNavItem>Dewan Pengawas</CNavItem>
        </CNav> -->
        <ul class="nav nav-pills nav-justified border-bottom mb-4">
          <li class="nav-item">
            <a class="nav-link active" @click="activePage(0)" aria-current="page">Dewan Pengurus Nasional</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="activePage(1)">Dewan Pengurus Wilayah</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="activePage(2)">Dewan Pengurus Anggota Madya</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="activePage(3)">Dewan Pengawas</a>
          </li>
        </ul>
      </CCol>
    </CRow>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Kandidat {{header}}</h5>
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
                  <td>{{ tables[index].noUrut }}</td>
                  <td>
                    <img :src="tables[index].foto" class="c-avatar-img" alt="img-user">
                  </td>
                  <td>{{ tables[index].namaLengkap }}</td>
                  <td>{{ tables[index].statusPencalonan }}</td>
                  <td>{{ tables[index].status === true ? 'Verifikasi' : 'Belum Verifikasi'}}</td>
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

    <!-- Detail Modal -->
    <CModal
      title="Details"
      centered
      :show.sync="detailsModal"
    >
      <div class="d-flex justify-content-center">
        <img src="img/avatars/1.jpg" class="c-avatar-img" style="width: 6rem;" alt="">
      </div>
      <table class="table border my-3">
        <tr class="py-3">
          <td class="py-2" width="200px">No Urut</td>
          <td>:</td>
          <td class="bold">1</td>
        </tr>
        <tr>
          <td class="py-2">Nama Lengkap</td>
          <td>:</td>
          <td class="bold">Dadan Kusna</td>
        </tr>
        <tr>
          <td class="py-2">Status Pencalonan</td>
          <td>:</td>
          <td class="bold">Dewan Pengurus Nasional</td>
        </tr>
        <tr>
          <td class="py-2">Status</td>
          <td>:</td>
          <td class="bold">Belum Verifikasi</td>
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
  name: 'MasterKandidat',
  data () {
    return {
      currentPage: 1,
      nama: 'Dadan Kusna',
      header: 'Dewan Pengurus Nasional',
      importModal: false,
      detailsModal: false,
      deleteModal: false,
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
    activePage: function (x) {
      const a = document.querySelectorAll('.nav-link');
      for (let i = 0; i < a.length; i++) {
        if(a[i].classList.contains('active')) {
          a[i].classList.remove('active');
        }
        if(x == 1) {
          a[1].classList.add('active');
          this.header = a[1].textContent;
        } else if ( x == 2 ) {
          a[2].classList.add('active');
          this.header = a[2].textContent;
        } else if ( x == 3 ) {
          a[3].classList.add('active');
          this.header = a[3].textContent;
        } else {
          a[0].classList.add('active');
          this.header = a[0].textContent;
        }
      }
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
.active {
  color: blue !important;
  font-weight: 700;
  border-bottom: 3px solid blue;
  background: transparent !important;
  border-radius: 0 !important;
}
.nav-link {
  cursor: pointer !important;
}
</style>