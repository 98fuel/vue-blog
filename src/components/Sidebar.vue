<template>
	<div class="sidebar">
		<el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
			<el-radio-button :label="false"><i class="el-icon-d-arrow-right"></i></el-radio-button>
			<el-radio-button :label="true"><i class="el-icon-d-arrow-left"></i></el-radio-button>
		</el-radio-group>
		<div class="author-img">
			<el-avatar :size="40" src="https://img.zburu.com/author.png" @error="errorHandler">
				<img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
			</el-avatar>
		</div>
		<el-menu default-active="1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
			:collapse="isCollapse">
			<el-menu-item index="1">
				<i class="el-icon-menu"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="2">
				<i class="el-icon-document"></i>
				<span slot="title">关于</span>
			</el-menu-item>
		</el-menu>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isCollapse: true
		};
	},
	methods: {
		handleOpen(key, keyPath) {
			console.log(key, keyPath);
		},
		handleClose(key, keyPath) {
			console.log(key, keyPath);
		},
		errorHandler() {
			return true
		}
	}
}
</script>

<style scoped>
.sidebar {
	position: fixed;
	left: 0;
	top: 0;
	/* width: 300px; */
	height: 100vh;
	border: 1px solid #eee;
}

.sidebar .el-radio-button.is-active {
	display: none;
}

.sidebar .el-radio-button__inner {
	background: none !important;
	border: none !important;
}

.el-menu {
	border: none;
}

.author-img {
	text-align: center;
}
</style>