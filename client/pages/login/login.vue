<template>
	<view class="login">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/images/commons/toLeft.png" mode=""></image>
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
					<input type="text" :value="uname" placeholder="请取个名字" />
					<text class="tip" v-if="isName">用户名已存在</text>
				</view>
				<view class="uemail">
					<input type="email" :value="uemail" placeholder="请输入邮箱" />
					<text class="tip" v-if="isEmail">邮箱已存在</text>
				</view>
				<view class="pword">
					<input type="password" :value="pword" placeholder="在这里输入密码" />
					<image class="tip" src="../../static/images/sigin_login/valid.png" mode=""></image>
					<image class="tip" src="../../static/images/sigin_login/invalid.png" mode=""></image>
					<!-- <text class="tip" v-if="isLook">👀</text> -->
				</view>
			</view>
			<button type="default">进入 EasyChat</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				uname: 'xxx',
				uemail: 'xxx',
				pword: 'xxx',
				isName:true,
				isEmail:true,
				isLook:false,
			}
		},
		onLoad() {
			this.getUserData()
		},
		methods:{
			getUserData(){
				console.log(111);
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
						// display: none;
						color: red;
						background-color: pink;
						width: 20px;
						height: 20px;
					}
				}

			}

			button {

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

				&:active {
					width: 260px;
					height: 48px;
					background: #FFE431;
					box-shadow: 0px 25px 16px -18px rgba(255, 228, 49, 0.4);
					border-radius: 24px;
					font-weight: 700;
				}
			}
		}
	}
</style>
