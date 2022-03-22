<template>
	<view class="search">
		<top-bar class="searchBar">
			<template #center>
				<view class="search_left">
					<input type="text" value="" />
					<image src="../../static/images/search/search.png" mode=""></image>
				</view>
			</template>
			<template #right>
				<view class="search_right">
					取消
				</view>
			</template>
		</top-bar>
		<view class="main">
			<view class="users">
				<text class="tit">用户</text>
				<view class="member-list">
					<view class="member">
						<image src="../../static/images/index/p4.jpeg" mode=""></image>
						<text>消息</text>
						<view>
							发消息
						</view>
					</view>
				</view>
			</view>
			<view class="groups">
				<text class="tit">群组</text>
				<view class="member-list">
					<view class="member">
						<image src="../../static/images/index/p4.jpeg" mode=""></image>
						<text>消息</text>
						<view>
							发消息
						</view>
					</view>
				</view>
			</view>
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
	.search {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.searchBar {
			.search_left {
				position: relative;
				width: 300px;
				height: 30px;
				background: #F3F4F6;
				border-radius: 5px;
				margin-left: 10px;

				input {
					height: 30px;
					width: 275px;
					text-align: left;
				}

				image {
					position: absolute;
					width: 20px;
					height: 20px;
					top: 5px;
					right: 5px;
				}
			}
			.search_right {
				margin-right: 30px;
				line-height: 30px;
			}
		}

		.main {
			margin-top: 100px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
		
			.users,
			.groups{
				width: 95%;
				display: flex;
				justify-content: center;
				flex-direction: column;
				.tit{
					width: 43px;
					height: 30px;
					font-family: PingFangSC-Semibold;
					font-size: 22px;
					color: #272832;
					letter-spacing: -0.75px;
					font-weight: 700;
				}
				.member-list{
					.member{
						margin-top: 15px;
						display: flex;
						justify-content: space-between;
						align-items: center;
						width: 100%;
						image{
							width: 45px;
							height: 45px;
							border-radius: 10px;
						}
						text{
							width: 70px;
							height: 25px;
							font-family: PingFangSC-Regular;
							font-size: 18px;
							color: #272832;
							letter-spacing: -0.62px;
							line-height: 25px;
							font-weight: 400;
						}
						view{
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
			}

			.groups {
				margin-top: 20px;
			}
		}
	}
</style>
