<template>
	<view class="user-notice">
		<view class="member-list">
			<view class="member" v-for="(item,index) in data" :key="index">
				<image :src="item.imgUrl" mode=""></image>
				<view class="info">
					<text class="name" v-html="item.name"></text>
					<text class="email" v-html="item.email"></text>
				</view>
				<text class="sendBtn">发消息</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			data: {
				type: Array,
				required: true
			}
		},
		data() {
			return {

			}
		},
		onLoad() {
			console.log(data);
		}
	}
</script>

<style lang="scss">
	// .notice {
	// 	margin-top: 15px;
	// 	display: flex;
	// 	justify-content: space-between;
	// 	align-items: center;
	// 	width: 100%;
	// 	height: 50px;
	// 	background-color: pink;

	.member-list {
		.member {
			margin-top: 15px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;

			image {
				width: 45px;
				height: 45px;
				border-radius: 10px;
			}

			view {
				width: 60%;
				height: 25px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				line-height: 25px;
				font-weight: 400;

				.name {
					font-size: 18px;
				}

				.email {
					font-size: 12px;
				}
			}

			.sendBtn {
				width: 70px;
				height: 30px;
				text-align: center;
				line-height: 30px;
				border-radius: 12px;
				color: #000000;
				background-color: #FFE431;
			}

		}
	}



	// .notice-left {

	// 	image {
	// 		width: 45px;
	// 		height: 45px;
	// 		border-radius: 10px;
	// 	}
	// }

	// .notice-con {
	// 	width: 60%;
	// 	height: 25px;
	// 	display: flex;
	// 	flex-direction: column;
	// 	justify-content: center;
	// 	line-height: 25px;
	// 	font-weight: 400;

	// 	image {
	// 		width: 45px;
	// 		height: 45px;
	// 		border-radius: 10px;
	// 	}

	// 	.name {
	// 		font-size: 18px;
	// 	}

	// 	.email {
	// 		font-size: 12px;
	// 	}
	// }

	// .sendBtn {
	// 	width: 70px;
	// 	height: 30px;
	// 	text-align: center;
	// 	line-height: 30px;
	// 	border-radius: 12px;
	// 	color: #000000;
	// 	background-color: #FFE431;
	// }

	// }
</style>
