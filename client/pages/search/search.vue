<template>
	<view class="search">
		<top-bar class="searchBar">
			<template #center>
				<view class="search_left">
					<input type="text" value="" @input="search" />
					<image src="../../static/images/search/search.png" mode=""></image>
				</view>
			</template>
			<template #right>
				<view class="search_right" @tap="back">
					取消
				</view>
			</template>
		</top-bar>
		<view class="main">
			<view class="users">
				<text class="tit" v-if="userArr.length>0">用户</text>
				<member :data="userArr" class="mumber">
					<template #right="{item}">
						<text class="sendBtn" v-if="item.tip===1">发消息</text>
						<text class="addBtn" v-else>加好友</text>
					</template>
				</member>
			</view>
			<view class="groups">
				<text class="tit" v-if="groupsArr.length>0">群组</text>
				<member :data="userArr" class="mumber" msgCon="email">
					<template #right="{item}">
						<text class="sendBtn" v-if="item.tip===1">发消息</text>
						<text class="addBtn" v-else>加好友</text>
					</template>
				</member>
			</view>
		</view>
	</view>
</template>

<script>
	import topBar from '../../components/bar/top-bar.vue';
	import member from '../../components/user/member.vue';
	import datas from '../../commons/js/datas.js'
	export default {
		components: {
			topBar,
			member
		},
		data() {
			return {
				userArr: [],
				groupsArr: [],
				data: []
			};
		},
		onLoad() {
			this.data = datas.searchData();
			this.data.forEach(item => {
				item.imgUrl = '../../static/images/index/' + item.imgUrl;
			})
		},
		methods: {
			back() {
				uni.navigateBack({
					datel: 1
				})
			},
			// 关键词获取
			search(e) {
				this.userArr = [];
				let seachVal = e.detail.value;
				this.searchUser(seachVal)
			},
			// 好友查询
			searchUser(value) {
				let arr = datas.searchData();
				let valExp = new RegExp(value, 'g')
				arr.forEach(item => {
					item.imgUrl = '../../static/images/index/' + item.imgUrl;
					if (item.name.search(value) !== -1 || item.email.search(value) !== -1) {
						this.isFriends(item);
						item.name = item.name.replace(valExp, `<span style="color:#4AAAFF">${value}</span>`)
						item.email = item.email.replace(valExp, `<span style="color:#4AAAFF">${value}</span>`)
						this.userArr.push(item)
						this.groupsArr.push(item)
					}
				})
				console.log(this.userArr);
			},
			// 判断是否为好友
			isFriends(friend) {
				let tip = 0;
				let arr = datas.isFriend();
				arr.forEach(item => {
					if (item.isFriend === friend.id) {
						tip = 1;
					}
				});
				friend.tip = tip;
				console.log(friend.tip);
			}
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
					text-indent: 10px;
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
			margin-top: 80px;
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.users,
			.groups {
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				text-align: left;
				.tit {
					position: relative;
					left: 0;
					width: 43px;
					height: 30px;
					font-family: PingFangSC-Semibold;
					font-size: 22px;
					color: #272832;
					letter-spacing: -0.75px;
					font-weight: 700;
					padding-bottom: 10px;
				}

				.mumber {
					.sendBtn {
						width: 70px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						border-radius: 12px;
						color: #000000;
						background-color: #FFE431;
					}

					.addBtn {
						width: 70px;
						height: 30px;
						text-align: center;
						line-height: 30px;
						border-radius: 12px;
						color: #4AAAFF;
						background-color: rgba(74, 170, 255, 0.10);
						;
					}
				}
			}
		}
	}
</style>
