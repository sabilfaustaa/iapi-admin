<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Detail Voters</h5>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="my-3">
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
                <td class="py-2">File</td>
                <td>:</td>
                <td class="bold">
                  form-vfh.pdf
                </td>
              </tr>
            </table>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CTextarea
              label="Alasan Ditolak"
              rows="6"
            />
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CRow class="mt-3">
      <CCol class="d-flex justify-content-end pb-4">
        <CButton color="dark" variant="outline" class="ml-auto mr-2" to="/vfh-approval">Kembali</CButton>
        <CButton color="danger" class="mr-2">Tolak</CButton>
        <CButton color="success">Simpan</CButton>
      </CCol>
    </CRow>
  </div>
</template>