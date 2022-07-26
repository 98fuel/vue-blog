<template>
	<div class="sidebar">
		<div class="author-img">
			<router-link to="/">
				<el-avatar :size="40" src="https://img.zburu.com/author.png" @error="errorHandler">
					<img src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png" />
				</el-avatar>
			</router-link>
		</div>
		<el-menu :default-active="this.$router.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
			:collapse="isCollapse" router>
			<el-menu-item index="/">
				<i class="el-icon-s-home"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-menu-item index="/about">
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
	height: 100vh;
	border: 1px solid #eee;
	background: #fff;
	padding-top: 30px;
	box-shadow: 0px 1px 2px 1px rgb(0 0 0 / 10%);
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

@media(max-width:950px) {
	.sidebar {
		padding: 0 20px;
		height: auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	}

	.el-menu {
		display: flex;
		width: 100%;
		flex: 1;
		text-align: right;
	}
}
</style>