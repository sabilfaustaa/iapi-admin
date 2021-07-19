<template>
  <CHeader fixed with-subheader light>
    <CToggler
      in-header
      class="ml-3 d-lg-none"
      @click="$store.commit('toggleSidebarMobile')"
    />
    <!-- <CToggler
      in-header
      class="ml-3 d-md-down-none"
      @click="$store.commit('toggleSidebarDesktop')"
    /> -->
    <CHeaderBrand class="mx-auto d-lg-none" to="/">
      <!-- <CIcon name="logo" height="48" alt="Logo"/> -->
      <div class="c-sidebar-brand-full">
        <img src="img/logo/image 3.png" class="logo">
        <span class="ml-2">E-voting</span>
      </div>
    </CHeaderBrand>
    <CHeaderNav class="d-md-down-none mr-auto">
      <CBreadcrumbRouter class="border-0 mb-0"/>
    </CHeaderNav>
    <CHeaderNav class="mr-4">
      <CHeaderNavItem class="d-md-down-none mr-1">
        <CHeaderNavLink>
          <CIcon name="cil-search"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <CHeaderNavItem class="d-md-down-none mr-1">
        <CHeaderNavLink>
          <CIcon name="cil-bell"/>
        </CHeaderNavLink>
      </CHeaderNavItem>
      <TheHeaderDropdownAccnt/>
    </CHeaderNav>
  </CHeader>
</template>

<script>
import TheHeaderDropdownAccnt from './TheHeaderDropdownAccnt'

export default {
  name: 'TheHeader',
  components: {
    TheHeaderDropdownAccnt
  }
}
</script>
