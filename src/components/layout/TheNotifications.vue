<template>
  <bui-notifications
    :notifications="notifications"
    @shown="fetchNotifications"
  />
</template>

<script>
export default {
  data () {
    return {
      notifications: [],
      loading: false
    }
  },

  methods: {
    fetchNotifications () {
      this.loading = true
      const vm = this

      fetch('https://bucket.services.builderall.com/notification/list?q=b2ZmaWNlLmFsbC5icjtvZmZpY2UuYWN0aXZlLmJyO29mZmljZS5mcmFuY2hpc2UuYnI7MjI1MzUwMmI0NTYyZGFkNDhjMmM3NDY4MWM0NTlkZDE=')
        .then(res => res.json())
        .then(function (res) {
          vm.notifications = res
        })
        .finally(() => {
          vm.loading = false
        })
    }
  }
}
</script>
