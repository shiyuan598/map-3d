<template>
  <el-form
    :model="ruleForm"
    ref="ruleForm"
    label-width="100px"
    class="demo-dynamic"
  >
    <el-form-item
      v-for="(item, index) in ruleForm.fieldArr"
      :label="'值' + item.name"
      :key="'index' + item.name"
      :prop="'arr.' + index + '.value'"
      :rules="{
        required: true,
        message: '属性名称不能为空',
        trigger: ['blur', 'change']
      }"
    >
      <el-input v-model.number="item.value"></el-input>
    </el-form-item>

    <el-form-item
      v-for="(domain, index) in ruleForm.domains"
      :label="'域名' + index"
      :key="index"
      :prop="'domains.' + index + '.value'"
      :rules="[
        { required: true, message: '属性值不能为空', trigger: 'blur' },
        {
          type: 'number',
          message: '该属性必须为数字值',
          trigger: ['change', 'blur']
        }
      ]"
    >
      <el-input v-model.number="domain.value"></el-input>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        arr: [
          {
            name: 1,
            value: 4
          },
          {
            name: 2,
            value: 5
          },
          {
            name: 3,
            value: 6
          }
        ],
        domains: [
          {
            value: "55"
          },
          {
            value: "0"
          },
          {
            value: "ds"
          }
        ]
      }
    };
  }
};
</script>
