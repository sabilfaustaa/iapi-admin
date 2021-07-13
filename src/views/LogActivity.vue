<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Log Activity</h5>
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
            
            <h5 class="mt-2">Filter</h5>
            <CInput
              class="w-10 mx-3"
              placeholder="DD/MM/YYYY"
            />
            <span class="font-small mt-2">s/d</span>
            <CInput
              class="w-10 mx-3"
              placeholder="DD/MM/YYYY"
            />
            <div>
              <CButton color="success">Terapkan</CButton>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>Tangga</td>
                  <td>User</td>
                  <td>Role</td>
                  <td>Menu</td>
                  <td>Sub Menu</td>
                  <td>Activity</td>
                  <td>Aksi</td>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td>1</td>
                  <td>10-06-2021, 10:00</td>
                  <td>Muhamad Sabil</td>
                  <td>Admin</td>
                  <td>Data Master</td>
                  <td>Master Voters</td>
                  <td>Tambah Data Voters</td>
                  <td>
                    <button class="border-0 bg-transparent">
                      <CIcon name="cil-description" class="text-warning"></CIcon>
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