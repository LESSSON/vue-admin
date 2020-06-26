<template>
    <el-container>
        <el-header>
            历史病害信息添加 <el-button>返回</el-button>
        </el-header>
        <el-main>
            <el-form :inline="false" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="病害登记编号" prop="id" >
                    <el-input v-model="ruleForm.id" ></el-input>
                </el-form-item>
                <el-form-item label="病毒名称" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label=" 病毒登记时间" prop="time" >
                    <el-input v-model="ruleForm.time" ></el-input>
                </el-form-item>
                <el-form-item label="上报单位-管理所" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label="上报单位-分公司" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label="上报人" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label="病害成因" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label="道路类型" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label="位置桩号" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label="位置方向" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label="维修费用" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
                <el-form-item label="维修方案" prop="name" >
                    <el-input v-model="ruleForm.name" ></el-input>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>


</template>