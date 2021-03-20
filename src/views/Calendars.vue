<template>
  <bui-page
    title="Calendars"
    subtitle="Welcome to a Builderall application!"
  >
    <template #page-header-right>
      <b-button
        variant="primary"
        class="ml-auto"
        to="/create"
      >
        <bui-icon
          name="plus"
          white
          :size="18"
        />
        New calendar
      </b-button>
    </template>
    <bui-alert
      index="alert-01"
      content="Welcome!"
    />

    <b-tabs>
      <b-tab active title="My calendars">
        <b-row class="bui-card-container">
          <b-col
            v-for="calendar in calendars"
            :key="calendar.id"
            sm="12"
            md="6"
            lg="4"
          >
           <CalendarCard
              :calendar="calendar"
              @destroy="destroy"
           >
            <template>
              <bui-icon name="open-blank" size="18" class="rtl-mirror"></bui-icon>
            </template>

            <template #admin>
              <b-button variant="success">
                <bui-icon name="gear" size="18" white></bui-icon>
                admin</b-button>
            </template>

            <template #subscribers="data">
              <b-badge>{{ data.data }}</b-badge>

              Subcribers
            </template>
           </CalendarCard>
          </b-col>
        </b-row>
      </b-tab>
      <b-tab title="Shared">
        <b-row class="bui-card-container">
          <b-col
            v-for="calendar in calendars"
            :key="calendar.id"
            sm="12"
            md="6"
            lg="4"
          >
           <CalendarCard
              :calendar="calendar"
              @destroy="destroy"
           />
          </b-col>
        </b-row>
      </b-tab>
    </b-tabs>
    <bui-modal-confirm ref="modal" />
  </bui-page>
</template>

<script>
import CalendarCard from '../components/CalendarCard'
export default {
  components: {
    CalendarCard
  },
  data () {
    return {
      calendars: [
        { id: 1, title: 'Cabeleireiro', subscribers: 20 },
        { id: 2, title: 'Tatuador', subscribers: 0 },
        { id: 3, title: 'Consultoria', subscribers: 4 },
        { id: 4, title: 'Coaching', subscribers: 6 },
        { id: 5, title: 'Academia', subscribers: 20 },
        { id: 6, title: 'Show do Baitaca', subscribers: 20 },
        { id: 7, title: 'Mentoria', subscribers: 250 },
        { id: 8, title: 'Esteticista', subscribers: 27 },
        { id: 9, title: 'Missas', subscribers: 20 }
      ]
    }
  },

  methods: {
    destroy (calendar) {
      this.$refs.modal.show({
        iconName: 'trash',
        title: 'Do you really want to delete?' + calendar.title,
        message: "If I were you I wouldn't do that ...",
        okVariant: 'danger',
        okTitle: 'Delete',
        cancelVariant: 'default',
        cancelTitle: 'Cancel',
        data: calendar,
        onSuccess: (calendar) => {
          console.log(calendar)
          const index = this.calendars.indexOf(calendar)
          this.calendars.splice(index, 1)
          this.$bvToast.toast('Excluido com sucesso')
        },
        onCancel: (data) => alert('cancel deleting id ' + data.id)
      })
      console.log('destroy', calendar)
    }
  }
}
</script>
