<template>
	<view class="top-bar">
		<slot name="left" class="top-bar-left"></slot>
		<slot name="center" class="top-bar-center"></slot>
		<slot name="right" class="top-bar-right"></slot>
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
	.top-bar {
		z-index: 999;
		position: fixed;
		top: 0;
		left: 0;
		display: flex;
		justify-content: space-between;
		width: 100%;
		height: 44px;
		
		background: #ffffff;
		padding-top: var(--status-bar-height);
		padding-bottom: 5px;
		border-bottom: 1px solid #F8F8FF;

		.top-bar-left {
			flex: 1;
			margin-left: 20px;
		}

		.top-bar-center {
			flex: 2;
			text-align: center;
		}

		.top-bar-right {
			flex: 1;
			margin-right: 20px;
		}
	}
</style>
