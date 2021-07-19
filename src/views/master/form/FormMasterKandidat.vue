<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Tambah Calon Kandidat</h5>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol sm="2">
            <img class="c-avatar-img" id="imgUser" src="img/default-user.png"  alt="">
          </CCol>
          <CCol sm="2" class="d-flex align-items-center">
            <CButton class="bg-primary text-white" @click="modalUploadShow"><CIcon name="cil-cloud-download"/><span class="ml-1">Upload Foto</span></CButton>
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Nomor Urut"
            />
          </CCol>
          <CCol>
            <CInput
              label="Nama Lengkap"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="Nomor KTP"
            />
          </CCol>
          <CCol>
            <CInput
              label="Nomor Izin AP"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="No. Reg. Anggota IAPI"
            />
          </CCol>
          <CCol>
            <CInput
              type="email"
              label="Email"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="No. HP"
            />
          </CCol>
          <CCol>
            <CTextarea
              rows="3"
              label="Alamat KAP/Instansi"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CInput
              label="No. Telepon Kantor"
            />
          </CCol>
          <CCol>
            <CInput
              label="Status Pencalonan"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol>
            <CTextarea
              label="Visi"
              rows="6"
            />
          </CCol>
          <CCol>
            <CTextarea
              label="Misi"
              rows="6"
            />
          </CCol>
        </CRow>
        <CRow class="mt-3">
          <CCol sm="6">
            <label for="" class="mb-3">Status</label>
            <CRow>
              <CCol sm="3">
                <input type="radio" id="aktif" name="status" class="mr-2"/>
                <label for="aktif">Aktif</label>
              </CCol>
              <CCol>
                <input type="radio" id="nonaktif" name="status" class="mr-2"/>
                <label for="nonaktif">Tidak Aktif</label>
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        
      </CCardBody>
    </CCard>
    <CRow class="mt-3">
      <CCol class="d-flex justify-content-end pb-4">
        <CButton color="dark" variant="outline" class="ml-auto mr-2" to="/data-master/master-kandidat">Kembali</CButton>
        <CButton color="success">Simpan</CButton>
      </CCol>
    </CRow>

    <!-- Upload Photo Modal -->
    <CModal
      size="md"
      centered
      title="Upload Foto"
      :show.sync="uploadModal"
    >
      <CRow>
        <CCol class="d-flex justify-content-center">
          <CButton color="primary" @click="modalDouble" class="p-5 w-100">
            <CIcon name="cil-trash"></CIcon>
            Take Photo
            
          </CButton>
        </CCol>
        <CCol class="d-flex justify-content-center">
          <input type="file" hidden>
          <CButton color="success" class="p-5 w-100">
            <CIcon name="cil-trash"></CIcon>
            Upload Photo
          </CButton>
        </CCol>
      </CRow>
      <template #footer>
        <div class=""></div>
      </template>
    </CModal>

    <!-- Take Photo Modal -->
    <CModal
      size="md"
      centered
      title="Upload Foto"
      :show.sync="takePhotoModal"
    >
      <CRow>
        <CCol>
          <CRow>
            <CCol class="d-flex justify-content-center mb-3">
              <div >
                <vue-web-cam
                    ref="webcam"
                    id="cam"
                    class="img-preview"
                    :device-id="deviceId"
                    @started="onStarted"
                    @stopped="onStopped"
                    @error="onError"
                    @cameras="onCameras"
                    @camera-change="onCameraChange"
                />
                <img :src="img" id="imgPreview" style="display: none" class="img-preview" alt="">
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol class="d-flex justify-content-center">
              <CButton color="danger" id="btnReset" @click="resetImg" style="display:none" class="mr-3">
                <!-- <CIcon name="cil-trash"></CIcon> -->
                Reset
              </CButton>
              <CButton color="primary" id="btnSave" @click="saveChange" style="display:none" class="mr-3">
                <!-- <CIcon name="cil-trash"></CIcon> -->
                Save
              </CButton>
              <input type="file" hidden>
              <CButton color="warning text-white" id="btnCapture" @click="onCapture">
                <!-- <CIcon name="cil-trash"></CIcon> -->
                Capture
              </CButton>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
      <template #footer>
        <div class=""></div>
      </template>
    </CModal>
  </div>
</template>

<script>
import { WebCam } from "vue-web-cam";
export default {
  name: 'MasterKandidat',
  components: {
      "vue-web-cam": WebCam
  },
  data () {
    return {
      uploadModal: false,
      takePhotoModal: false,
      img: null,
      camera: null,
      deviceId: null,
      devices: []
    }
  },
  computed: {
    device: function() {
      return this.devices.find(n => n.deviceId === this.deviceId);
    }
  },
  watch: {
      camera: function(id) {
        this.deviceId = id;
      },
      devices: function() {
        // Once we have a list select the first one
        const [first, ...tail] = this.devices;
        if (first) {
          this.camera = first.deviceId;
          this.deviceId = first.deviceId;
        }
      }
  },
  methods: {
    modalDouble() {
      this.uploadModal = false,
      this.takePhotoModal = true
    },
    modalUploadShow() {
      document.getElementById('btnSave').style.display = 'none';
      document.getElementById('btnReset').style.display = 'none';
      document.getElementById('imgPreview').style.display = 'none';
      document.getElementById('cam').style.display = 'block';
      document.getElementById('btnCapture').style.display = 'block';
      this.uploadModal = true;
    },
    resetImg() {
      this.img = null;
      document.getElementById('btnSave').style.display = 'none';
      document.getElementById('btnReset').style.display = 'none';
      document.getElementById('imgPreview').style.display = 'none';
      document.getElementById('cam').style.display = 'block';
      document.getElementById('btnCapture').style.display = 'block';
    },
    saveChange() {
      this.takePhotoModal = false;
      document.getElementById('imgUser').src = this.img;
    },
    onCapture() {
      this.img = this.$refs.webcam.capture();
      document.getElementById('btnSave').style.display = 'block';
      document.getElementById('btnReset').style.display = 'block';
      document.getElementById('imgPreview').style.display = 'block';
      document.getElementById('cam').style.display = 'none';
      document.getElementById('btnCapture').style.display = 'none';
    },
    onError(error) {
      console.log("On Error Event", error);
    },
    onCameras(cameras) {
      this.devices = cameras;
      console.log("On Cameras Event", cameras);
    },
    onCameraChange(deviceId) {
      this.deviceId = deviceId;
      this.camera = deviceId;
      console.log("On Camera Change Event", deviceId);
    }
  }
}
</script>

<style scoped>
.w-icon {
  width: 3rem
}
.c-avatar-img {
  width: 9rem;
  height: 9rem;
  object-fit: cover
}
.img-preview {
  width: 280px;
  height: 280px;
  object-fit: cover;
  border-radius: 100%;
}
</style>
