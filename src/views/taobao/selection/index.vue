<template>
  <div class="container">
    <Breadcrumb :items="['menu.taobao', 'menu.taobao.selection']" />
    <div class="data-container">
      <div class="left-side">
        <div class="panel">
          <h1 class="data1">数据1</h1>
          <a-table :columns="columns" :data="data" />
        </div>
      </div>
      <div class="right-side">
        <h1>Selection</h1>
        <a-date-picker
          v-model:pickerValue="pickerValue"
          default-value="2019-06-03"
          hide-trigger
          style="width: 268px"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const pickerValue = null;
  const rangePickerValue = null;
  console.log(pickerValue);
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
  ];
  const data = [
    {
      key: '1',
      name: 'Jane Doe',
      salary: 23000,
      address: '32 Park Road, London',
      email: 'jane.doe@example.com',
    },
    {
      key: '2',
      name: 'Alisa Ross',
      salary: 25000,
      address: '35 Park Road, London',
      email: 'alisa.ross@example.com',
    },
    {
      key: '3',
      name: 'Kevin Sandra',
      salary: 22000,
      address: '31 Park Road, London',
      email: 'kevin.sandra@example.com',
    },
    {
      key: '4',
      name: 'Ed Hellen',
      salary: 17000,
      address: '42 Park Road, London',
      email: 'ed.hellen@example.com',
    },
    {
      key: '5',
      name: 'William Smith',
      salary: 27000,
      address: '62 Park Road, London',
      email: 'william.smith@example.com',
    },
  ];
</script>

<style scoped lang="less">
  .container {
    display: flex;
    flex-direction: column;
    padding: 0 20px 20px 20px;
  }

  .data-container {
    display: flex;
    flex-direction: row;
  }

  .left-side {
    flex: 1;
    margin-right: 15px;
    background-color: var(--color-bg-2);
    border-radius: 4px;
  }

  .right-side {
    width: auto;
    margin-left: 10px;
    padding-right: 16px;
    padding-bottom: 16px;
    padding-left: 16px;
    background-color: var(--color-bg-2);
    border-radius: 4px;
  }

  .panel {
    padding-right: 32px;
    padding-bottom: 20px;
    padding-left: 32px;
    overflow: auto;
  }
</style>
