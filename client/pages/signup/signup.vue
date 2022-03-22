<template>
	<view class="login">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/images/commons/toLeft.png" mode="" @tap="toSignin()"></image>
			</view>
			<view class="top-bar-center">
			</view>
			<view class="top-bar-right">
				<image src="../../static/images/commons/cross.png" mode=""></image>
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/commons/logo.png" mode=""></image>
		</view>
		<view class="content">
			<text class="msg">注册</text>
			<view class="inputs">
				<view class="uname">
					<input id="name" type="text" v-model="uname" placeholder="请取个名字" @input="checkData" />
					<text class="tip" v-if="!isName">用户名已存在</text>
				</view>
				<view class="uemail">
					<input id="email" type="email" v-model="uemail" placeholder="请输入邮箱" @blur="emailValid()" @input="checkData" />
					<text class="tip" v-if="!isEmail">邮箱错误|已存在</text>
				</view>
				<view class="pword">
					<input :type="type" v-model="pword" placeholder="在这里输入密码" @input="checkData" />
					<text class="tip" v-if="!isLook" @click="look()">👀</text>
					<text class="tip" v-else @click="look()">〰</text>
				</view>
			</view>
			<button type="default" :class="[{btn:true},{subBtn:isSub}]" @click="subData()">进入 EasyChat</button>
		</view>
	</view>
</template>

<script>
	import valid from '../../commons/js/utils/validate.js'
	export default {
		data() {
			return {
				type: 'password',
				uname: '',
				uemail: '',
				pword: '',
				isName: true, // 是否可用
				isEmail: true, // // 是否可用
				isLook: false, // 密码是否可见
				isSub: false, // 是否满足提交条件
				isEmploy:true,
				nameEpy:false, // 用户名是否被占用
				emailEpy:false, // 邮箱是否被占用
			}
		},
		onLoad() {},
		watch: {

		},
		methods: {
			look() {
				// password show 
				this.isLook = !this.isLook;
				this.type = this.isLook ? 'text' : 'password';
			},
			emailValid() {
				this.isEmail = valid.emailValid(this.uemail);
			},
			// 检查数据并改变按钮样式
			// 用户名检查
			// 邮箱检查
			checkData(e) {
				if (!this.uname || !this.uemail || !this.pword) return this.isSub = false;
				this.isSub = true;
				console.log(e);
			},
			checkUserState(){
				if(this.isName&&this.isEmail&&this.pword.length>5){}
			},
			subData() {
				if (!this.isSub) return;
				let userData = {
					name: this.uname,
					email: this.uemail,
					password: this.pword
				}
				console.log(userData);
			},
			// 跳转
			toSignin() {
				uni.navigateBack({
					delta: 1
				})
			}

		}
	}
</script>

<style lang="scss">
	.login {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.top-bar {
			position: fixed;
			top: 0;
			left: 0;
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 44px;
			background: #ffffff;
			padding-right: $uni-spacing-col-base;
			padding-left: $uni-spacing-col-base;
			padding-top: var(--status-bar-height);
			border-bottom: 1px solid black;

			image {
				width: 20px;
				height: 20px;
				margin-top: 10px;
			}

			.top-bar-left {
				flex: 1;
				line-height: 44px;

				image {
					margin-top: 5px;
					border-radius: 8px;
				}
			}

			.top-bar-right {
				flex: 1;
				display: flex;
				flex-direction: row-reverse;
				margin-right: 30px;
				font-weight: 800;
				line-height: 44px;
			}
		}

		.logo {
			margin-top: 150px;
			image {
				width: 96px;
				height: 45.82px;
			}
		}

		.content {
			position: relative;
			width: 100%;
			margin-top: 32px;
			display: flex;
			flex-direction: column;
			justify-content: center;

			// align-items: center;
			// text-align: left;
			.msg {
				width: 60px;
				height: 40px;
				padding: 20px;
				font-family: PingFangSC-Medium;
				font-size: 30px;
				color: #272832;
				letter-spacing: 0;
				font-weight: 500;

			}

			.inputs {
				width: 94%;
				margin: 0 auto;

				// margin: 20px;
				input {
					width: 95%;
					height: 55px;
					border-bottom: 1px solid gray;
				}

				view {
					position: relative;
					display: flex;
					justify-content: center;
					align-items: center;

					.tip {
						position: absolute;
						top: 20px;
						right: 20px;
						height: 20px;
						font-family: PingFangSC-Medium;
						font-size: 14px;
						color: #FF5D5B;
						letter-spacing: 0;
						font-weight: 500;
					}
				}

				// .uname {
				// 	.tip {
				// 		display: none;
				// 	}
				// }

				// .uemail {
				// 	.tip {
				// 		display: none;
				// 	}
				// }

				.pword {
					.tip {
						color: black;
					}
				}

			}

			.btn {

				margin-top: 50px;
				width: 260px;
				height: 48px;
				background: rgba(39, 40, 50, 0.20);
				border-radius: 24px;
				font-family: PingFangSC-Medium;
				font-size: 16px;
				color: #FFFFFF;
				letter-spacing: 0;
				font-weight: 500;


			}

			.subBtn {
				width: 260px;
				height: 48px;
				background: #FFE431;
				box-shadow: 0px 25px 16px -18px rgba(255, 228, 49, 0.4);
				border-radius: 24px;
				font-weight: 700;
			}
		}
	}
</style>
