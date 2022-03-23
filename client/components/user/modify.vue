<template>
	<view :class="[{modify:true},{modifyAppear:!isModify}]">
		<view class="modify-header">
			<view class="close" @click="cancelModify">取消</view>
			<view class="title" @click="cm">{{modifyData.title}}</view>
			<view class="define" @click="defineModify">确定</view>
		</view>
		<view class="modify-old" :class="[{psdValid:modifyData.type==='password'}]">
			<text v-if="modifyData.type!=='password'">{{modifyData.value}}</text>
			<view v-else>
				<input type="text" value="" v-model="iptPsd" placeholder="请输入原密码..." />
			</view>
		</view>
		<view class="modify-con">
			<textarea v-model="changedData" placeholder="填入新的内容..." />
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			isModify: {
				type: Boolean,
				required: true
			},
			modifyData: {
				type: Object,
				required: true
			}
		},
		data() {
			return {
				changedData: '',
				iptPsd: ''
			}
		},
		onLoad() {
			console.log(prop);
			this.changedData = this.modifyData.value
		},
		methods: {
			cancelModify() {
				this.$emit('cancel', this.isModify)

			},
			defineModify() {
				if (this.iptPsd !== this.modifyData.value) {
					return uni.showModal({
						content: '输入原密码不符,无法修改',
						showCancel: false
					});
				}
				let data = {
					value: this.changedData === '' ? this.modifyData.value : this.changedData,
					type: this.modifyData.type
				}
				this.$emit('define', data);
				this.changedData = '';
			},
			cm() {
				console.log(this.modifyData);
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

		.modify-old {
			width: 343px;
			height: 193px;
			background: #F3F4F6;
			border-radius: 10px;
			margin: auto;
			margin-top: 50px;
			text-indent: 20px;
			line-height: 2;
		}

		.psdValid {
			width: 343px;
			height: 50px;
			background: #F3F4F6;
			border-radius: 10px;
			margin: auto;
			margin-top: 50px;
			text-indent: 20px;
			line-height: 2;

			view {
				input {
					height: 50px;
					border-radius: 10px;
					border: 1px solid black;
				}
			}
		}
	}

	.modifyAppear {
		// top: 100%;
		transition: 1s;
		transform: translateY(-50%);
	}
</style>
