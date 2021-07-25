<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>List Pengguna</h5>
          </CCol>
          <CCol class="text-right">
            <CButton
              class="text-success mr-2 shadow"
              @click="importModal = true"
              ><CIcon name="cil-description" class="mr-1" />Import
              Excel</CButton
            >
            <CButton class="text-success shadow"
              ><CIcon name="cil-description" class="mr-1" />Export to
              Excel</CButton
            >
          </CCol>
        </CRow>
        <CRow class="my-3">
          <CCol class="d-flex">
            <small class="align-middle pr-3 py-2 font-small">Show</small>
            <CSelect
              class="cselect"
              :options="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"
            />
            <small class="align-middle px-2 py-2 font-small">entries</small>
          </CCol>
          <CCol md="9" class="text-right d-flex justify-content-end">
            <CInput class="w-16 mr-3" placeholder="Cari" />
            <div>
              <CButton color="success" to="/users/form-user"
                ><CIcon name="cil-plus" /><span class="ml-1"
                  >Tambah</span
                ></CButton
              >
            </div>
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
                  <td>Role</td>
                  <td>Status</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="text-center"
                  v-for="(data, index) in tables"
                  :key="index"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ tables[index].noRegIAPI }}</td>
                  <td>{{ tables[index].namaLengkap }}</td>
                  <td>{{ tables[index].email }}</td>
                  <td>{{ tables[index].role }}</td>
                  <td>
                    {{
                      tables[index].status === true ? "Aktif" : "Tidak Aktif"
                    }}
                  </td>
                  <td>
                    <button
                      class="border-0 bg-transparent"
                      @click="detailsModal = true"
                    >
                      <img src="img/icons/eye.svg" alt="" />
                    </button>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-pencil" class="text-primary"></CIcon>
                    </button>
                    <button
                      class="border-0 bg-transparent"
                      @click="deleteModal = true"
                    >
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
            <CPagination size="sm" :active-page.sync="currentPage" :pages="3" />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>

    <!-- Delete Modal -->
    <CModal size="md" title="Konfirmasi" :show.sync="deleteModal">
      Yakin hapus data baris ini ?
      <template #footer>
        <CButton @click="deleteModal = false" color="danger">Discard</CButton>
        <CButton @click="deleteModal = false" color="success">Accept</CButton>
      </template>
    </CModal>

    <!-- Import File Modal -->
    <CModal title="Import Excel" centered :show.sync="importModal">
      <div class="">
        <label for="btnDownload">Format File Import</label>
        <button class="btn btn-success w-100" id="btnDownload">
          Download File Import
        </button>
      </div>
      <div class="mt-3">
        <label for="importExcel">Upload File Excel</label>
        <CInputFile custom id="importExcel" />
      </div>

      <template #footer>
        <CButton @click="importModal = false" color="danger">Cancel</CButton>
        <CButton @click="importModal = false" color="primary">Submit</CButton>
      </template>
    </CModal>

    <!-- Detail Modal -->
    <CModal title="Details" centered :show.sync="detailsModal">
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
          <td class="py-2">Role</td>
          <td>:</td>
          <td class="bold">Super Admin</td>
        </tr>
        <tr>
          <td class="py-2">Status</td>
          <td>:</td>
          <td class="bold">Aktif</td>
        </tr>
      </table>

      <template #footer>
        <div class=""></div>
      </template>
    </CModal>
  </div>
</template>

<script>
export default {
  name: "UserManagement",
  data() {
    return {
      currentPage: 1,
      detailsModal: false,
      deleteModal: false,
      importModal: false,
      nama: "Muhamad Sabil",
      tables: [
        {
          noRegIAPI: "001",
          namaLengkap: "Dadan Kusna",
          email: "dadan123@gmail.com",
          role: "Super Admin",
          status: true,
        },
        {
          noRegIAPI: "002",
          namaLengkap: "Dadan Kusna",
          email: "dadan123@gmail.com",
          role: "Admin",
          status: true,
        },
        {
          noRegIAPI: "003",
          namaLengkap: "Dadan Kusna",
          email: "dadan123@gmail.com",
          role: "Admin",
          status: false,
        },
        {
          noRegIAPI: "004",
          namaLengkap: "Dadan Kusna",
          email: "dadan123@gmail.com",
          role: "Admin",
          status: true,
        },
      ],
    };
  },
};
</script>

<style scoped>
.cselect {
  width: 4rem;
}
</style>