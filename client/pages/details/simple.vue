<template>
	<view class="simple">
		<top-bar class="topBar">
			<template #left>
				<image class="back" src="../../static/images/commons/toLeft.png" mode=""></image>
				<!-- <text class="barLeft">
					< 
				</text> -->
			</template>
			<template #right>
				<image class="more" src="../../static/images/commons/more.png" mode=""></image>
				<!-- <text class="barRight">...</text> -->
			</template>
		</top-bar>
		<view class="main">
			<view class="img">
				<image src="../../static/images/index/p3.jpeg" mode="">
					<text class="tip">♀</text>
				</image>
			</view>

			<text class="name">左左左表妹</text>
			<text class="uname">昵称:左左</text>
			<text class="info">
				夜，结束了一天的喧嚣后安静下来，伴随着远处路灯那微弱的光。风，毫无预兆地席卷整片旷野，撩动人的思绪万千。
			</text>
			<button type="default" class="addBtn">addBtn</button>
		</view>
	</view>
</template>

<script>
	import topBar from '../../components/bar/top-bar.vue';
	export default {
		components: {
			topBar
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">

	.simple {
		// height: 100%;

		.topBar {
			.back {
				width: 26px;
				height: 26px;
				line-height: 50px;
				margin-left: 20px;
			}

			.more {
				width: 26px;
				height: 26px;
				margin-right: 30px;
			}
		}

		// .bgImg{
		// 	position: absolute;
		// 	width: 100%;
		// 	height: 100%;
		// 	// height: auto;
		// }
		.main {
			flex: 1;
			margin-top: 100px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			// background: url(../../static/images/index/p3.jpeg);
			// background-repeat: no-repeat;
			// background-attachment: fixed;
			// background-size: cover;
			.img {
				position: relative;
				width: 100%;
				display: flex;
				justify-content: center;

				image {
					width: 200px;
					height: 200px;
					border: 3px solid rgba(255, 255, 255, 1);
					border-radius: 24px;
				}

				.tip {
					position: absolute;
					width: 32px;
					height: 32px;
					background: #FF5D5B;
					border-radius: 18px;
					color: white;
					bottom: 10px;
					right: 26%;
					line-height: 32px;
					text-align: center;
				}
			}

			.name {
				width: 126px;
				height: 37px;
				font-family: PingFangSC-Regular;
				font-size: 26px;
				color: #272832;
				letter-spacing: -0.89px;
				font-weight: 400;
				padding: 10px 0;
			}

			.uname {
				width: 95px;
				height: 20px;
				font-family: PingFangSC-Regular;
				font-size: 14px;
				color: #272832;
				letter-spacing: -0.48px;
				font-weight: 400;
				text-align: center;
				padding: 10px 0;
			}

			.info {
				width: 276px;
				height: 85px;
				font-family: PingFangSC-Light;
				font-size: 14px;
				color: #272832;
				letter-spacing: -0.48px;
				line-height: 24px;
				font-weight: 200;
			}

			.addBtn {
				position: absolute;
				bottom: 50px;
				width: 342px;
				height: 40px;
				background: #FFE431;
				border-radius: 5px;
				line-height: 40px;
			}
		}
	}
</style>
