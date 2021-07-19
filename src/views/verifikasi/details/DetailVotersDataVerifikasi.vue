<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Detail Voters</h5>
          </CCol>
        </CRow>
        <CRow class="pt-3">
          <CCol sm="2" class="d-flex">
            <div class="">
              <img src="img/default-user.png" class="w-7" alt="">
              <p class="text-center pt-2">Foto 1</p>
            </div>
          </CCol>
          <CCol sm="2" class="d-flex">
            <div class="">
              <img src="img/default-user.png" class="w-7" alt="">
              <p class="text-center pt-2">Foto 2</p>
            </div>
          </CCol>
          <CCol sm="2" class="d-flex">
            <div class="">
              <img src="img/default-user.png" class="w-7" alt="">
              <p class="text-center pt-2">Foto 3</p>
            </div>
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
                <td class="py-2">Izin AP</td>
                <td>:</td>
                <td class="bold">00/11/22-001</td>
              </tr>
              <tr>
                <td class="py-2">kategori Anggota</td>
                <td>:</td>
                <td class="bold">Profesional</td>
              </tr>
              <tr>
                <td class="py-2">Nama KAP</td>
                <td>:</td>
                <td class="bold">
                  KAP Dadan & Rekan
                </td>
              </tr>
              <tr>
                <td class="py-2">Alamat KAP</td>
                <td>:</td>
                <td class="bold">Jl. Kemayoran no.123 Jakarta</td>
              </tr>
              <tr>
                <td class="py-2">Kota</td>
                <td>:</td>
                <td class="bold">Jakarta</td>
              </tr>
            </table>
          </CCol>
          <CCol>
            <table class="my-3">
              <tr class="py-3">
                <td class="py-2" width="200px">Korwil KAP</td>
                <td>:</td>
                <td class="bold">Wilayah I</td>
              </tr>
              <tr>
                <td class="py-2">Alamat Rumah Sesuai KTP</td>
                <td>:</td>
                <td class="bold">Jl. Soekarnohatta No. 22 Jakarta</td>
              </tr>
              <tr>
                <td class="py-2">Alamat Domisili</td>
                <td>:</td>
                <td class="bold">Jl. Soekarnohatta No. 22 Jakarta</td>
              </tr>
              <tr>
                <td class="py-2">Kota Domisili</td>
                <td>:</td>
                <td class="bold">Jakarta</td>
              </tr>
              <tr>
                <td class="py-2">Wilayah Domisili</td>
                <td>:</td>
                <td class="bold">Wilayah I</td>
              </tr>
              <tr>
                <td class="py-2">Status Iuran</td>
                <td>:</td>
                <td class="bold">Lunas</td>
              </tr>
              <tr>
                <td class="py-2">Hak Pilih</td>
                <td>:</td>
                <td class="bold">Dewan Pengawas</td>
              </tr>
              <tr>
                <td class="py-2">Lokasi Booth</td>
                <td>:</td>
                <td class="bold">Booth I</td>
              </tr>
              <tr>
                <td class="py-2">Nama KAP</td>
                <td>:</td>
                <td class="bold">08:00</td>
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
        <CButton color="dark" variant="outline" class="ml-auto mr-2" to="/verifikasi-data">Kembali</CButton>
        <CButton color="danger" class="mr-2">Tolak</CButton>
        <CButton color="success">Simpan</CButton>
      </CCol>
    </CRow>
  </div>
</template>

<style scoped>
.w-7 {
  width: 7.5rem;
}
</style>