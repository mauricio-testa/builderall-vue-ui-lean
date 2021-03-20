<template>
  <bui-navbar
      :sidebar-state="$store.state.sidebarState"
      logo="https://booking.builderall.com/images/images/meta/logo.png"
      @toggle-sidebar="toggleSidebar"
      :user="$store.state.user"
    >
    <template #items-right>
        <bui-icon
          v-b-toggle.bui-notifications
          name="bell"
          size="18"
        />
      </template>

  </bui-navbar>
</template>

<script>
export default {
  methods: {
    toggleSidebar (state) {
      this.$store.commit('toggleSidebar', state)
    }
  }
}
</script>
