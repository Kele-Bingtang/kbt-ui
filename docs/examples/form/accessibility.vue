<template>
  <k-form label-position="left" label-width="auto" style="max-width: 600px">
    <k-space fill>
      <k-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </k-alert>
      <k-form-item label="Full Name">
        <k-input v-model="formAccessibility.fullName" />
      </k-form-item>
    </k-space>
    <k-space fill>
      <k-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br />
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </k-alert>
      <k-form-item label="Your Information">
        <k-row :gutter="20">
          <k-col :span="12">
            <k-input
              v-model="formAccessibility.firstName"
              label="First Name"
              placeholder="First Name"
            />
          </k-col>
          <k-col :span="12">
            <k-input
              v-model="formAccessibility.lastName"
              label="Last Name"
              placeholder="Last Name"
            />
          </k-col>
        </k-row>
      </k-form-item>
    </k-space>
  </k-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})
</script>
