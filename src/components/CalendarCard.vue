<template>
  <b-card
    no-body
    class="bui-card-item"
  >
    <template #header>
      <b-card-title class="d-flex justify-content-between">
        {{ calendar.title }}
        <b-form-checkbox switch></b-form-checkbox>
      </b-card-title>
    </template>

    <b-card-body>
      <slot name="subscribers" :data="calendar.subscribers">
        {{ calendar.subscribers }} subscribers
      </slot>

    </b-card-body>

    <b-card-footer>
      <slot name="admin">
      <b-button variant="secondary">
        Admin
      </b-button>
      </slot>
      <div class="card-footer-right">
        <span>
          <slot>
            Infos here
          </slot>
        </span>
        <b-dropdown
          no-caret
          left
          dropleft
          lazy
          variant="link"
          :popper-opts="{ positionFixed: true, eventsEnabled: true }"
          toggle-class="text-decoration-none p-0"
        >
          <template #button-content>
            <bui-icon
              name="three-dots-vertical"
              :size="13"
            />
          </template>

          <b-dropdown-item>
            <bui-icon
              name="gear"
              :size="20"
            />
            <span> Manage </span>
          </b-dropdown-item>
          <b-dropdown-item>
            <bui-icon
              name="pencil"
              :size="20"
            />
            <span> Rename </span>
          </b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item @click="$emit('destroy', calendar)">
            <bui-icon
              name="trash"
              :size="20"
            />
            <span> Delete </span>
          </b-dropdown-item>
        </b-dropdown>
      </div>
    </b-card-footer>
  </b-card>
</template>

<script>
export default {
  props: {
    calendar: Object
  }
}
</script>
