<template>
  <bui-sidebar
      :menus="menus"
      :menus-bottom="menus_bottom"
      :sidebar-state="$store.state.sidebarState"
      :user="$store.state.user"
    />
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { title: 'Dashboard', icon: 'dashboard', to: '/' },
        { title: 'Calendars', icon: 'gear', to: '/calendars' }
      ],
      menus_bottom: [
        { title: 'Office', icon: 'logo', href: 'https://office.builderall.com', target: '_blank' }
      ]
    }
  }

}
</script>
