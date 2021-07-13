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
                <tr class="text-center">
                  <td>1</td>
                  <td>Booth 1 Sesi 1</td>
                  <td>20-06-2021</td>
                  <td>08:00</td>
                  <td>13.00</td>
                  <td>Jl. Moch Toha Gg. Curug Candung</td>
                  <td>200</td>
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
                <tr class="text-center">
                  <td>1</td>
                  <td>Booth 1 Sesi 1</td>
                  <td>20-06-2021</td>
                  <td>08:00</td>
                  <td>13.00</td>
                  <td>Jl. Moch Toha Gg. Curug Candung</td>
                  <td>200</td>
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
                <tr class="text-center">
                  <td>1</td>
                  <td>Booth 1 Sesi 1</td>
                  <td>20-06-2021</td>
                  <td>08:00</td>
                  <td>13.00</td>
                  <td>Jl. Moch Toha Gg. Curug Candung</td>
                  <td>200</td>
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
                <tr class="text-center">
                  <td>1</td>
                  <td>Booth 1 Sesi 1</td>
                  <td>20-06-2021</td>
                  <td>08:00</td>
                  <td>13.00</td>
                  <td>Jl. Moch Toha Gg. Curug Candung</td>
                  <td>200</td>
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