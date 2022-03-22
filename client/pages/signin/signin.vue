<template>
	<view class="signin">
		<view class="top-bar">
			<view class="top-bar-left">
				<image src="../../static/images/commons/cross.png" mode=""></image>
			</view>
			<view class="top-bar-center">
			</view>
			<view class="top-bar-right">
				注册
			</view>
		</view>
		<view class="logo">
			<image src="../../static/images/commons/logo.png" mode=""></image>
		</view>
		<view class="content">
			<text class="tit">登录</text>
			<text class="msg">欢迎来到EasyChat</text>
			<view class="inputs">
				<input class="uname" type="text" value="" placeholder="请输入邮箱"/>
				<input class="pword" type="password" value="" placeholder="请输入密码"/>
			</view>
			<text class="tip">用户名或密码错误</text>
			<button type="default">进入 EasyChat</button>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	.signin{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
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
		
			.top-bar-left {
				flex: 1;
				line-height: 44px;
				image {
					margin-top: 5px;
					width: 20px;
					height: 20px;
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
		.logo{
			margin-top: 120px;
			image{
				width: 96px;
				height: 45.82px;
			}
		}
		.content{
			position: relative;
			width: 100%;
			margin-top: 32px;
			display: flex;
			flex-direction: column;
			text-align: left;
			// text-indent: 20px;
			.tit{
				width: 56px;
				height: 40px;
				font-family: PingFangSC-Medium;
				font-size: 28px;
				color: #272832;
				letter-spacing: 0;
				font-weight: 500;
				margin-left: 25px;
			}
			.msg{
				width: 204px;
				height: 28px;
				font-family: PingFangSC-Regular;
				font-size: 20px;
				color: rgba(39,40,50,0.50);
				letter-spacing: 0;
				font-weight: 400;
				margin-left: 25px;
				margin-top: 10px;
			}
			.inputs{
				width: 100%;
				margin: 20px;
				input{
					width: 95%;
					height: 55px;
					border-bottom: 1px solid gray;
				}
			}
			.tip{
				position: absolute;
				bottom: 80px;
				margin-left: 25px;
				color: #FF5D5B ;
			}
			button{
				width: 260px;
				height: 48px;
				background: #FFE431;
				box-shadow: 0px 25px 16px -18px rgba(255,228,49,0.4);
				border-radius: 24px;
				font-weight: 700;
				margin-top: 50px;
			}
		}
	}
</style>
