<template>
  <k-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    status-icon
    :rules="rules"
    label-width="auto"
    class="demo-ruleForm"
  >
    <k-form-item label="Password" prop="pass">
      <k-input v-model="ruleForm.pass" type="password" autocomplete="off" />
    </k-form-item>
    <k-form-item label="Confirm" prop="checkPass">
      <k-input
        v-model="ruleForm.checkPass"
        type="password"
        autocomplete="off"
      />
    </k-form-item>
    <k-form-item label="Age" prop="age">
      <k-input v-model.number="ruleForm.age" />
    </k-form-item>
    <k-form-item>
      <k-button type="primary" @click="submitForm(ruleFormRef)"
        >Submit</k-button
      >
      <k-button @click="resetForm(ruleFormRef)">Reset</k-button>
    </k-form-item>
  </k-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'kbt-ui'

const ruleFormRef = ref<FormInstance>()

const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error('Please input the age'))
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error('Please input digits'))
    } else {
      if (value < 18) {
        callback(new Error('Age must be greater than 18'))
      } else {
        callback()
      }
    }
  }, 1000)
}

const validatePass = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password'))
  } else {
    if (ruleForm.checkPass !== '') {
      if (!ruleFormRef.value) return
      ruleFormRef.value.validateField('checkPass', () => null)
    }
    callback()
  }
}
const validatePass2 = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.pass) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const ruleForm = reactive({
  pass: '',
  checkPass: '',
  age: '',
})

const rules = reactive<FormRules<typeof ruleForm>>({
  pass: [{ validator: validatePass, trigger: 'blur' }],
  checkPass: [{ validator: validatePass2, trigger: 'blur' }],
  age: [{ validator: checkAge, trigger: 'blur' }],
})

const submitForm = (formK: FormInstance | undefined) => {
  if (!formK) return
  formK.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formK: FormInstance | undefined) => {
  if (!formK) return
  formK.resetFields()
}
</script>
