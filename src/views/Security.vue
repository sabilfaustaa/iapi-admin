<template>
  <div>
    <CCard class="border-0">
      <CCardBody class="p-4">
        <CRow>
          <CCol>
            <h5>Voting Result Encryption</h5>
          </CCol>
        </CRow>
        <CRow class="mt-4">
          <CCol>
            <label for="input-code">Encryption Code</label>
            <div class="d-flex">
              <CInput id="input-code" class="w-100 mr-3"/>
              <div>
                <CButton color="success">Submit</CButton>
              </div>
            </div>
          </CCol>
        </CRow>
      </CCardBody>
    </CCard>
  </div>
</template>