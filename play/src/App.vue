<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, ref } from 'vue'
import { EgToggle } from '@easy-work/base'
import { EgDatePicker, EgForm, EgFormItem, EgInput, EgSelect, EgTimePicker } from '@easy-work/element'
import {
  EgDatePicker as AEgDatePicker,
  EgForm as AEgForm,
  EgFormItem as AEgFormItem,
  EgInput as AEgInput,
  EgSelect as AEgSelect,
  EgTimePicker as AEgTimePicker,
} from '@easy-work/antv'
const toggle = ref(false)
const text = ref('')

const value = ref('')
const valueArr = ref([])
const date = ref('')

const options = [
  {
    value: '1',
    label: 'Option1',
  },
  {
    value: '2',
    label: 'Option2',
  },
  {
    value: '3',
    label: 'Option3',
  },
  {
    value: '4',
    label: 'Option4',
  },
  {
    value: '5',
    label: 'Option5',
  },
]

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}

const formState = reactive({
  username: '',
  password: '',
  remember: true,
})
const onFinish = (values) => {
  console.log('Success:', values)
}

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo)
}
</script>

<template>
  <button @click="toggle = !toggle">
    toggle
  </button>
  el-Form:
  <ElForm
    label-width="100px"
    style="max-width: 460px"
  >
    <ElFormItem label="文本框">
      <EgInput v-model="text" :toggle="toggle" />
    </ElFormItem>
    <ElFormItem label="下拉框--单选">
      <EgSelect v-model="value" class="m-2" placeholder="Select" :toggle="toggle">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </EgSelect>
    </ElFormItem>
    <ElFormItem label="下拉框--多选">
      <EgSelect v-model="valueArr" class="m-2" placeholder="Select" :toggle="toggle" multiple>
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </EgSelect>
    </ElFormItem>
  </ElForm>
  eg-form:
  <EgForm :model="form" label-width="120px" :toggle="toggle">
    <EgFormItem label="Activity name">
      <EgInput v-model="form.name" />
    </EgFormItem>
    <EgFormItem label="Activity zone">
      <EgSelect v-model="form.region" placeholder="please select your zone">
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
      </EgSelect>
    </EgFormItem>
    <EgFormItem label="Activity zone mutiple" :toggle="!toggle">
      <EgSelect v-model="form.region" placeholder="please select your zone" mutiple>
        <el-option label="Zone one" value="shanghai" />
        <el-option label="Zone two" value="beijing" />
        <template #content>
          我是item控制的
        </template>
      </EgSelect>
    </EgFormItem>
    <EgFormItem label="Activity time">
      <el-col :span="11">
        <EgDatePicker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
      <el-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <EgTimePicker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </el-col>
    </EgFormItem>
    <EgFormItem label="Instant delivery">
      <el-switch v-model="form.delivery" />
    </EgFormItem>
    <EgFormItem label="Activity type">
      <el-checkbox-group v-model="form.type">
        <el-checkbox label="Online activities" name="type" />
        <el-checkbox label="Promotion activities" name="type" />
        <el-checkbox label="Offline activities" name="type" />
        <el-checkbox label="Simple brand exposure" name="type" />
      </el-checkbox-group>
    </EgFormItem>
    <EgFormItem label="Resources">
      <el-radio-group v-model="form.resource">
        <el-radio label="Sponsor" />
        <el-radio label="Venue" />
      </el-radio-group>
    </EgFormItem>
    <EgFormItem label="Activity form">
      <el-input v-model="form.desc" type="textarea" />
    </EgFormItem>
    <EgFormItem>
      <el-button type="primary" @click="onSubmit">
        Create
      </el-button>
      <el-button>Cancel</el-button>
    </EgFormItem>
  </EgForm>
  antv-form:
  <AEgForm
    :toggle="toggle"
    :model="formState"
    name="basic"
    :label-col="{ span: 8 }"
    :wrapper-col="{ span: 16 }"
    autocomplete="off"
    @finish="onFinish"
    @finishFailed="onFinishFailed"
  >
    <AEgFormItem
      label="Username"
      name="username"
      :rules="[{ required: true, message: 'Please input your username!' }]"
    >
      <AEgInput v-model:value="formState.username" />
    </AEgFormItem>

    <AEgFormItem label="Activity zone">
      <AEgSelect
        v-model:value="form.region" placeholder="please select your zone" :options="[{
          label: 'Zone one12333345',
          value: 'shanghai1',
        }, {
          label: 'Zone two',
          value: 'beijing',
        }]"
      />
    </AEgFormItem>
    <AEgFormItem label="Activity date time">
      <div style="display: flex;">
        <AEgDatePicker v-model:value="form.date1" /> <span style="margin:0 8px">~</span>
        <AEgTimePicker v-model:value="form.date2" />
      </div>
    </AEgFormItem>

    <AEgFormItem :wrapper-col="{ offset: 8, span: 16 }">
      <a-button type="primary" html-type="submit">
        Submit
      </a-button>
    </AEgFormItem>
  </AEgForm>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
