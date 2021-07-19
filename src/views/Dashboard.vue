<template>
  <div>
    <CRow>
      <CCol class="d-flex justify-content-end">
        <div class="d-flex mr-3">
          <label class="align-middle pr-3 py-2">Jadwal</label>
          <CSelect
            :options="['Jadwal Pemira']"
          />
        </div>
      </CCol>
    </CRow>
    <CCard class="border-0 mb-3">
      <CCardBody>
        <CRow>
          <CCol>
            <h5>Statistik</h5>
          </CCol>
        </CRow>
        <CRow class="py-3">
          <CCol lg="3">
            <CRow>
              <CCol sm="2">
                <img src="/img/green.png" class="img-statistik" alt="">
              </CCol>
              <CCol class="d-flex align-items-center ml-3">
                <div style="margin-top: 5px;">
                  <h4 style="line-height: 0.5;" class="text-success">1000</h4>
                  <span class="font-small bold">Pendaftar Terverifikasi</span>
                </div>
              </CCol>
            </CRow>
          </CCol>
          <CCol lg="3">
            <CRow>
              <CCol sm="2">
                <img src="/img/red.png" class="img-statistik" alt="">
              </CCol>
              <CCol class="d-flex align-items-center ml-3">
                <div style="margin-top: 5px;">
                  <h4 style="line-height: 0.5;" class="text-danger">1000</h4>
                  <span class="font-small bold">Pendaftar Belum Terverifikasi</span>
                </div>
              </CCol>
            </CRow>
          </CCol>
          <CCol lg="3">
            <CRow>
              <CCol sm="2" class="ml-4">
                <img src="/img/yellow.png" class="img-statistik" alt="">
              </CCol>
              <CCol class="d-flex align-items-center ml-3">
                <div style="margin-top: 5px;">
                  <h4 style="line-height: 0.5;" class="text-warning">1000</h4>
                  <span class="font-small bold">Non DPS</span>
                </div>
              </CCol>
            </CRow>
          </CCol>
          <CCol lg="3">
            <CRow>
              <CCol sm="2">
                <img src="/img/blue.png" class="img-statistik" alt="">
              </CCol>
              <CCol class="d-flex align-items-center ml-3">
                <div style="margin-top: 5px;">
                  <h4 style="line-height: 0.5;" class="text-primary">1000</h4>
                  <span class="font-small bold">Total Suara Masuk</span>
                </div>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CRow>
      <CCol class="mx-0">
        <CCard class="border-0 mb-3">
          <CCardBody>
            <CRow>
              <CCol class="text-center">
                <h5>Status Pemilihan</h5>
              </CCol>
            </CRow>
            <CRow>
              <CCol class="pt-3 d-flex justify-content-center">
                <!-- <CChartDoughnut
                  class="bg-dark"
                  :datasets="statusPemilihan"
                  :labels="['Vote From Home', 'Vote From Booth']"
                /> -->
                <apexchart width="356" type="donut" :options="optionsStatus" :series="statusPemilihan"></apexchart>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol>
        <CCard class="border-0 mb-3">
          <CCardBody>
            <CRow>
              <CCol class="text-center">
                <h5>Kategori Anggota</h5>
              </CCol>
            </CRow>
            <CRow>
              <CCol class="pt-3 d-flex justify-content-center">
                <!-- <CChartDoughnut
                  class="flex"
                  :datasets="kategoriAnggota"
                  :labels="[
                    'Anggota Nasional',
                    'Anggota Wilayah II',
                    'Anggota Wilayah IV',
                    'Anggota Wilayah I',
                    'Anggota Wilayah III',
                    'Anggota Madya'
                  ]"
                /> -->
                <apexchart width="370" type="donut" :options="optionsKategori" :series="kategoriAnggota"></apexchart>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    <CCard class="border-0 mb-3">
      <CCardBody>
        <CRow class="pb-1">
          <CCol sm="3">
            <h5 class="pt-2">List Voters</h5>
          </CCol>
          <CCol class="d-flex justify-content-end">
            <div class="d-flex mr-3">
              <label class="align-middle pr-3 py-2">Hak Pilih</label>
              <CSelect
                class="w-16"
                :options="['Semua']"
              />
            </div>
            <div class="d-flex">
              <label class="align-middle pr-3 py-2">Status</label>
              <CSelect
                :options="['Semua']"
              />
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <table class="table table-striped table-borderless font-small">
              <thead class="bg-primary">
                <tr class="text-center">
                  <td>No</td>
                  <td>Nama Lengkap</td>
                  <td>Hak Pilih</td>
                  <td>Status</td>
                </tr>
              </thead>
              <tbody>
                <tr 
                  class="text-center"
                  v-for="(data, index) in listVoters"
                  :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ listVoters[index].namaLengkap }}</td>
                  <td>{{ listVoters[index].hakPilih }}</td>
                  <td>{{ listVoters[index].status === true ? 'Verifikasi' : 'Belum Verifikasi'}}</td>
                </tr>
              </tbody>
            </table>
          </CCol>
        </CRow>
        <CRow>
          <CCol class="d-flex justify-content-end">
            <CPagination
              size="sm"
              :active-page.sync="currentPage"
              :pages="3"/>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
    <CCard class="border-0 mb-3">
      <CCardBody>
        <CRow class="pb-1">
          <CCol sm="3">
            <h5 class="pt-2">Peringkat Kandidat</h5>
          </CCol>
          <CCol class="d-flex justify-content-end">
            <div class="d-flex mr-3">
              <label class="align-middle pr-3 py-2">Kategori Kandidat</label>
              <CSelect
                :options="['Dewan Pengawas Nasional']"
              />
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
                  <td>Jadwal</td>
                  <td>Total Suara</td>
                </tr>
              </thead>
              <tbody>
                <tr 
                  class="text-center"
                  v-for="(data, index) in peringkatKandidat"
                  :key="index">
                  <td>{{ index + 1 }}</td>
                  <td>{{ peringkatKandidat[index].noUrut }}</td>
                  <td>
                    <img :src="peringkatKandidat[index].foto" class="c-avatar-img" alt="img-user">
                  </td>
                  <td>{{ peringkatKandidat[index].namaLengkap }}</td>
                  <td>{{ peringkatKandidat[index].statusPencalonan }}</td>
                  <td>{{ peringkatKandidat[index].jadwal}}</td>
                  <td>{{ peringkatKandidat[index].totalSuara}}</td>
                </tr>
              </tbody>
            </table>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>

<script>
// import { CChartDoughnut } from '@coreui/vue-chartjs'
import VueApexCharts from 'vue-apexcharts'
export default {
  name: 'Dashboard',
  components: { 
    apexchart: VueApexCharts,
  },
  data () {
    return {
      statusPemilihan: [44, 55],
      kategoriAnggota: [44, 55, 41, 17, 15, 20],
      optionsStatus: {
        labels: ['Vote From Home', 'Vote From Booth'],
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      optionsKategori: {
        labels: [
          'Anggota Nasional', 
          'Anggota Wilayah II',
          'Anggota Wilayah IV',
          'Anggota Wilayah I',
          'Anggota Wilayah III',
          'Anggota Madya',
        ],
        dataLabels: {
          enabled: false,
        },
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
      peringkatKandidat: [
        {
          noUrut: '1',
          foto: 'img/avatars/1.jpg',
          namaLengkap: 'Dadan Kusna',
          statusPencalonan: 'Dewan Pengurus Nasional',
          jadwal: 'Jadwal Pemira',
          totalSuara: '500',
        },
        {
          noUrut: '1',
          foto: 'img/avatars/2.jpg',
          namaLengkap: 'Dadan Kusna',
          statusPencalonan: 'Dewan Pengurus Nasional',
          jadwal: 'Jadwal Pemira',
          totalSuara: '500',
        },
        {
          noUrut: '1',
          foto: 'img/avatars/3.jpg',
          namaLengkap: 'Dadan Kusna',
          statusPencalonan: 'Dewan Pengurus Nasional',
          jadwal: 'Jadwal Pemira',
          totalSuara: '500',
        },
        {
          noUrut: '1',
          foto: 'img/avatars/4.jpg',
          namaLengkap: 'Dadan Kusna',
          statusPencalonan: 'Dewan Pengurus Nasional',
          jadwal: 'Jadwal Pemira',
          totalSuara: '500',
        },
        {
          noUrut: '1',
          foto: 'img/avatars/5.jpg',
          namaLengkap: 'Dadan Kusna',
          statusPencalonan: 'Dewan Pengurus Nasional',
          jadwal: 'Jadwal Pemira',
          totalSuara: '500',
        },
        {
          noUrut: '1',
          foto: 'img/avatars/6.jpg',
          namaLengkap: 'Dadan Kusna',
          statusPencalonan: 'Dewan Pengurus Nasional',
          jadwal: 'Jadwal Pemira',
          totalSuara: '500',
        },
      ],
      listVoters: [
        {
          namaLengkap: 'Dadan Kusna',
          hakPilih: 'Anggota Biasa Bekerja di Wilayah I',
          status: false
        },
        {
          namaLengkap: 'Dadan Kusna',
          hakPilih: 'Anggota Biasa Bekerja di Wilayah I',
          status: false
        },
        {
          namaLengkap: 'Dadan Kusna',
          hakPilih: 'Anggota Biasa Bekerja di Wilayah I',
          status: false
        },
        {
          namaLengkap: 'Dadan Kusna',
          hakPilih: 'Anggota Biasa Bekerja di Wilayah I',
          status: false
        },
        {
          namaLengkap: 'Dadan Kusna',
          hakPilih: 'Anggota Biasa Bekerja di Wilayah II',
          status: false
        },
        {
          namaLengkap: 'Dadan Kusna',
          hakPilih: 'Anggota Biasa Bekerja di Wilayah I',
          status: true
        },
        {
          namaLengkap: 'Dadan Kusna',
          hakPilih: 'Anggota Biasa Bekerja di Wilayah IV',
          status: true
        },
        {
          namaLengkap: 'Dadan Kusna',
          hakPilih: 'Anggota Biasa Bekerja di Wilayah I',
          status: true
        },
      ]
    }
  },
  // computed: {

  // }
}
</script>

<style scoped>
.img-statistik {
  height: 3rem;
  width: 3rem;
  color: #b31449;
}
.w-13 {
  width: 14rem;
}
.c-avatar-img {
  width: 30px;
  margin-top: -5px;
}
</style>