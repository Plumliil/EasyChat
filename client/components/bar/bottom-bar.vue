<template>
	<view class="bottom-bar">
		<slot name="left" class="bar-left"></slot>
		<slot name="center" class="bar-center"></slot>
		<slot name="right" class="bar-right"></slot>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		}
	}
</script>

<style lang="scss">
	.bottom-bar {
		z-index: 999;
		position: fixed;
		bottom: 10px;
		left: 0;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 44px;
		padding-right: $uni-spacing-col-base;
		padding-left: $uni-spacing-col-base;
		padding-top: var(--status-bar-height);
		padding-bottom: 20px;
		background: none;
		border: none;

		.left {
			flex: 1;
			margin-left: 20px;
		}

		.center {
			flex: 2;
			text-align: center;
		}

		.bar-right {
			flex: 1;
			margin-right: 20px;
		}
	}
</style>
