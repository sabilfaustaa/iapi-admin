<template>
  <div>
    <CCard class="border-0" id="listJadwal">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Jadwal Pemilihan</h5>
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
              <CButton color="success" to="/election/form-jadwal"><CIcon name="cil-plus"/><span class="ml-1">Tambah</span></CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>Nama Jadwal</td>
                  <td>Tanggal</td>
                  <td>Waktu Mulai</td>
                  <td>Waktu Selesai</td>
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
                  <td>{{ tables[index].namaJadwal}}</td>
                  <td>{{ tables[index].tanggal}}</td>
                  <td>{{ tables[index].waktuMulai}}</td>
                  <td>{{ tables[index].waktuSelesai}}</td>
                  <td>
                    <span v-if="tables[index].status" class="text-success">
                      {{ tables[index].status === true ? 'Aktif' : 'Tidak Aktif'}}
                    </span>
                    <span v-else class="text-danger">
                      {{ tables[index].status === true ? 'Aktif' : 'Tidak Aktif'}}
                    </span>
                  </td>
                  <td>
                    <button class="border-0 bg-transparent" @click="detailsModal">
                      <img src="img/icons/eye.svg" alt="">
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-pencil" class="text-primary"></CIcon>
                    </button>
                    <button class="border-0 bg-transparent" @click="deleteModal = true">
                      <CIcon name="cil-trash" class="text-danger"></CIcon>
                    </button>
                    <button class="border-0 bg-transparent">
                      <img src="img/icons/email.svg" alt="">
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
    
    <div class="detail" id="detail" style="display:none">
      <CCard class="border-0" id="tambahKandidat">
        <CCardBody class="p-4">
          <CRow>
            <CCol>
              <h5>Detail Jadwal Pemira</h5>
            </CCol>
          </CRow>
          <CRow>
            <CCol>
              <table class="my-3">
                <tr class="py-3">
                  <td class="py-2" width="200px">Tanggal</td>
                  <td>:</td>
                  <td class="bold">23 Agustus 2021</td>
                </tr>
                <tr>
                  <td class="py-2">Waktu Mulai</td>
                  <td>:</td>
                  <td class="bold">08:00</td>
                </tr>
                <tr>
                  <td class="py-2">Waktu Selesai</td>
                  <td>:</td>
                  <td class="bold">18:00</td>
                </tr>
                <tr>
                  <td class="py-2">Status</td>
                  <td>:</td>
                  <td class="bold">Aktif</td>
                </tr>
              </table>
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
            <CCol class="text-right d-flex justify-content-end">
              <CInput
                class="w-16 mr-3"
                placeholder="Cari"
              />
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
                  </tr>
                </thead>
                <tbody>
                  <tr 
                    class="text-center"
                    v-for="(data, index) in tablesDetail"
                    :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ tablesDetail[index].noUrut }}</td>
                    <td>
                      <img :src="tablesDetail[index].foto" class="c-avatar-img" alt="img-user">
                    </td>
                    <td>{{ tablesDetail[index].namaLengkap }}</td>
                    <td>{{ tablesDetail[index].statusPencalonan }}</td>
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
      <CRow class="mt-3">
        <CCol class="d-flex justify-content-end pb-4">
          <CButton color="dark" variant="outline" class="ml-auto mr-2" @click="back" id="btnBack">Kembali</CButton>
        </CCol>
      </CRow>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booth',
  data () {
    return {
      currentPage: 1,
      deleteModal: false,
      tables: [
        {
          namaJadwal: 'Jadwal Pemira',
          tanggal: '20-06-2021',
          waktuMulai: '08:00',
          waktuSelesai: '13.00',
          status: true
        },
        {
          namaJadwal: 'Jadwal Pemira',
          tanggal: '20-06-2021',
          waktuMulai: '08:00',
          waktuSelesai: '13.00',
          status: true
        },
        {
          namaJadwal: 'Jadwal Pemira',
          tanggal: '20-06-2021',
          waktuMulai: '08:00',
          waktuSelesai: '13.00',
          status: false
        },
        {
          namaJadwal: 'Jadwal Pemira',
          tanggal: '20-06-2021',
          waktuMulai: '08:00',
          waktuSelesai: '13.00',
          status: false
        },
      ],
      tablesDetail: [
        {
          noUrut: '1',
          foto: 'img/avatars/1.jpg',
          namaLengkap: 'Dadan Kusna',
          statusPencalonan: 'Dewan Pengurus Nasional',
        },
        {
          noUrut: '2',
          foto: 'img/avatars/2.jpg',
          namaLengkap: 'Dadan Suhendar',
          statusPencalonan: 'Dewan Pengurus Nasional',
        },
        {
          noUrut: '3',
          foto: 'img/avatars/3.jpg',
          namaLengkap: 'Dadan Ahmad',
          statusPencalonan: 'Dewan Pengurus Nasional',
        },
        {
          noUrut: '4',
          foto: 'img/avatars/4.jpg',
          namaLengkap: 'Dadan Junaedi',
          statusPencalonan: 'Dewan Pengurus Nasional',
        },
        {
          noUrut: '5',
          foto: 'img/avatars/5.jpg',
          namaLengkap: 'Dadan Supratman',
          statusPencalonan: 'Dewan Pengurus Nasional',
        },
      ]
    }
  },
  methods: {
    detailsModal: function() {
      document.getElementById('detail').style.display = 'block'
      document.getElementById('listJadwal').style.display = 'none'
    },
    back: function() {
      document.getElementById('detail').style.display = 'none'
      document.getElementById('listJadwal').style.display = 'block'
    },
  }
}
</script>

<style scoped>
.c-avatar-img {
  width: 30px;
  margin-top: -5px;
}
</style>