<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Booth</h5>
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
              <CButton color="success" to="/election/form-booth"><CIcon name="cil-plus"/><span class="ml-1">Tambah</span></CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>Nama Booth</td>
                  <td>Tanggal</td>
                  <td>Waktu Mulai</td>
                  <td>Waktu Selesai</td>
                  <td>Lokasi</td>
                  <td>Kuota</td>
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
                  <td>{{ tables[index].lokasi}}</td>
                  <td>{{ tables[index].kuota}}</td>
                  <td>
                    <button class="border-0 bg-transparent"  @click="detailsModal = true">
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
      <table class="table border my-3">
        <tr class="py-3">
          <td class="py-2" width="200px">Nama Booth</td>
          <td>:</td>
          <td class="bold">Booth 1 Sesi 1</td>
        </tr>
        <tr>
          <td class="py-2">Tanggal</td>
          <td>:</td>
          <td class="bold">20-06-2021</td>
        </tr>
        <tr>
          <td class="py-2">Waktu Mulai</td>
          <td>:</td>
          <td class="bold">08:00</td>
        </tr>
        <tr>
          <td class="py-2">Waktu Selesai</td>
          <td>:</td>
          <td class="bold">13.00</td>
        </tr>
        <tr>
          <td class="py-2">Lokasi</td>
          <td>:</td>
          <td class="bold">jl. Moch Toha</td>
        </tr>
        <tr>
          <td class="py-2">Kuota</td>
          <td>:</td>
          <td class="bold">200</td>
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
  name: 'Booth',
  data () {
    return {
      currentPage: 1,
      deleteModal: false,
      detailsModal: false,
      tables: [
        {
          namaJadwal: 'Booth 1 Sesi 1',
          tanggal: '20-06-2021',
          waktuMulai: '08:00',
          waktuSelesai: '13.00',
          lokasi: 'jl. Moch Toha',
          kuota: 200,
        },
        {
          namaJadwal: 'Booth 1 Sesi 1',
          tanggal: '20-06-2021',
          waktuMulai: '08:00',
          waktuSelesai: '13.00',
          lokasi: 'jl. Moch Toha',
          kuota: 200,
        },
        {
          namaJadwal: 'Booth 1 Sesi 1',
          tanggal: '20-06-2021',
          waktuMulai: '08:00',
          waktuSelesai: '13.00',
          lokasi: 'jl. Moch Toha',
          kuota: 200,
        },
        {
          namaJadwal: 'Booth 1 Sesi 1',
          tanggal: '20-06-2021',
          waktuMulai: '08:00',
          waktuSelesai: '13.00',
          lokasi: 'jl. Moch Toha',
          kuota: 200,
        },
      ]
    }
  }
}
</script>