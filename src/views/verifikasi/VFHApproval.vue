<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List VFH Approval</h5>
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
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>No Reg. IAPI</td>
                  <td>Nama Lengkap</td>
                  <td>Email</td>
                  <td>Tanggal Lahir</td>
                  <td>Umur</td>
                  <td>Kategori Anggota</td>
                  <td>File</td>
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
                  <td>{{ tables[index].noRegIAPI}}</td>
                  <td>{{ tables[index].namaLengkap}}</td>
                  <td>{{ tables[index].email}}</td>
                  <td>{{ tables[index].tanggalLahir}}</td>
                  <td>{{ tables[index].umur}}</td>
                  <td>{{ tables[index].kategoriAnggota}}</td>
                  <td>{{ tables[index].file}}</td>
                  <td>{{ tables[index].status === true ? 'Verifikasi' : 'Belum Verifikasi'}}</td>
                  <td>
                    <CButton class="border-0 bg-transparent" to="/vfh-approval/detail">
                      <img src="img/icons/eye.svg" alt="">
                    </CButton>
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
  name: 'VFHApproval',
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
          file: 'form-vfh.pdf',
          status: false
        },
        {
          noRegIAPI: '002',
          namaLengkap: 'Dadan Kusnandar',
          email: 'dadan123@gmail.com',
          tanggalLahir: '10-06-1980',
          umur: '45',
          kategoriAnggota: 'Profesional',
          file: 'form-vfh.pdf',
          status: false
        },
        {
          noRegIAPI: '003',
          namaLengkap: 'Dadan Koswara',
          email: 'dadankos123@gmail.com',
          tanggalLahir: '10-06-1980',
          umur: '42',
          kategoriAnggota: 'Lanjutan',
          file: 'form-vfh.pdf',
          status: true
        }
      ]
    }
  }
}
</script>
