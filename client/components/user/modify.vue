<template>
	<view :class="[{modify:true},{modifyAppear:!isModify}]">
		<view class="modify-header">
			<view class="close" @click="cancelModify">取消</view>
			<view class="title">{{title}}</view>
			<view class="define" @click="defineModify">确定</view>
		</view>
		<view class="modify-con">
			<textarea value="" placeholder="修改内容" v-model="modifyDate" />
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isModify: {
				type: Boolean,
				required: true,
				default: false
			},
			title:{
				type:String,
				required:true,
				default:'修改'
			}
		},
		data() {
			return {
				modifyDate: '',
				// isModify: false
			}
		},
		onLoad() {
			console.log(props);
		},
		methods: {
			cancelModify() {
				// this.isModify = false;
				this.$emit('cancel', this.isModify)


			},
			defineModify() {
				this.$emit('define', this.modifyDate)
				// this.isModify = false;
			}
		}
	}
</script>

<style lang="scss">
	.modify {
		z-index: 1000;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #FFFFFF;
		transition: 1s;

		.modify-header {
			width: 100%;
			height: 44px;
			padding-top: 40px;
			padding-bottom: 10px;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-bottom: 1px solid rgba(128, 128, 128, 0.3);

			.close {
				width: 31px;
				height: 22px;
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #272832;
				letter-spacing: -0.55px;
				font-weight: 500;
				margin-left: -10px;
			}

			.title {
				width: 78px;
				height: 28px;
				font-family: PingFangSC-Regular;
				font-size: 20px;
				color: #272832;
				letter-spacing: -0.69px;
				font-weight: 700;
				text-align: center;
			}

			.define {
				width: 31px;
				height: 22px;
				font-family: PingFangSC-Regular;
				font-size: 16px;
				color: #4AAAFF;
				letter-spacing: -0.55px;
				font-weight: 500;
			}
		}

		.modify-con {
			width: 343px;
			height: 193px;
			background: #F3F4F6;
			border-radius: 10px;
			margin: auto;
			margin-top: 50px;

			textarea {
				text-indent: 20px;
				line-height: 2;
			}
		}
	}

	.modifyAppear {
		// top: 100%;
		transition: 1s;
		transform: translateY(-50%);
	}
</style>
