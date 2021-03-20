<template>
  <div>
    <TheNavbar />

    <TheSidebar />

    <TheNotifications />

    <bui-container :sidebar-state="$store.state.sidebarState">
      <router-view />
    </bui-container>
  </div>
</template>

<script>

import TheNavbar from './components/layout/TheNavbar'
import TheSidebar from './components/layout/TheSidebar'
import TheNotifications from './components/layout/TheNotifications'

export default {
  components: {
    TheNavbar,
    TheSidebar,
    TheNotifications
  }
}
</script>
