<template>
  <div>
    <div id="tambahJadwal">
    <CCard class="border-0" >
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Tambah Jadwal Pemilihan</h5>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Nama Jadwal"
            />
          </CCol>
          <CCol>
            <CInput
              type="date"
              label="Tanggal"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
            type="time"
              label="Waktu Mulai"
            />
          </CCol>
          <CCol>
            <CInput
            type="time"
              label="Waktu Selesai"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol sm="6">
            <label for="" class="mb-3">Status</label>
            <CRow>
              <CCol sm="3">
                <input type="radio" name="status" id="aktif" class="mr-2"/>
                <label for="aktif">Aktif</label>
              </CCol>
              <CCol>
                <input type="radio" name="status" id="nonaktif" class="mr-2"/>
                <label for="nonaktif">Tidak Aktif</label>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    </div>

    <CCard class="border-0" style="display:none" id="tambahKandidat">
      <CCardBody class="p-4">
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
                  <td>
                    <input type="checkbox" id="checkAll" @change="checkAll" class="check">
                  </td>
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
                  v-for="(data, index) in tables"
                  :key="index">
                  <td>
                    <input type="checkbox" id="check" @change="check" class="check">
                  </td>
                  <td>{{ index + 1 }}</td>
                  <td>{{ tables[index].noUrut }}</td>
                  <td>
                    <img :src="tables[index].foto" class="c-avatar-img" alt="img-user">
                  </td>
                  <td>{{ tables[index].namaLengkap }}</td>
                  <td>{{ tables[index].statusPencalonan }}</td>
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
        <CButton color="dark" variant="outline" class="ml-auto mr-2" id="btnBackPage" to="/election/jadwal">Kembali</CButton>
        <CButton color="dark" variant="outline" class="ml-auto mr-2" @click="back" id="btnBack" style="display:none">Kembali</CButton>
        <CButton color="success" @click="btnNext" id="btnNext">Lanjut</CButton>
        <CButton color="success" style="display:none" id="btnSimpan">Simpan</CButton>
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentPage: 1,
      tables: [
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
    btnNext : function() {
      document.getElementById('tambahKandidat').style.display = 'block';
      document.getElementById('tambahJadwal').style.display = 'none';
      document.getElementById('btnBackPage').style.display = 'none';
      document.getElementById('btnBack').style.display = 'block';
      document.getElementById('btnSimpan').style.display = 'block';
      document.getElementById('btnNext').style.display = 'none';
    },
    back : function() {
      document.getElementById('tambahKandidat').style.display = 'none';
      document.getElementById('tambahJadwal').style.display = 'block';
      document.getElementById('btnBackPage').style.display = 'block';
      document.getElementById('btnBack').style.display = 'none';
      document.getElementById('btnSimpan').style.display = 'none';
      document.getElementById('btnNext').style.display = 'block';
    },
    checkAll : function() {
      const a = document.getElementById('checkAll');
      const b = document.querySelectorAll('#check');
      for (let i = 0; i < b.length; i++) {
        if(a.checked === true) {
          b[i].checked = true;
        } else {
          b[i].checked = false;
        }
      }
    },
    check : function() {
      const a = document.getElementById('checkAll');
      const b = document.querySelectorAll('#check');
      for (let i = 0; i < b.length; i++) {
        if(b[i].checked === false) {
          a.checked = false;
        }
      }
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