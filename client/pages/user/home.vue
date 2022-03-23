<template>
	<view class="home">
		<top-bar class="topBar">
			<template #left>
				<image class="back" src="../../static/images/commons/toLeft.png" mode=""></image>
			</template>
			<template #center>
				<view class="tit"><text>详细</text></view>
			</template>
		</top-bar>


		<view class="main">
			<view class="top">
				<view class="item">
					<view class="item-left"><text>头像</text></view>
					<view class="item-cen">
						<!-- <image src=".. /../static/images/index/p2.jpeg" mode="">
						</image> -->
						<image-cropper :src="tempFilePath" @confirm="confirm" @cancel="cancel"></image-cropper>
						<image :src="cropFilePath" @tap="upload" class="meslist_img"></image>
					</view>
					<view class="toRight">
						<image src=".. /../static/images/commons/toRight.png" mode="">
						</image>
					</view>
				</view>
				<view class="item">
					<view class="item-left"><text>签名</text></view>
					<view class="item-cen">
						<text>{{userInfo.uname}}</text>
					</view>
					<view class="toRight" @click="modifyMe('签名',userInfo.uname)">
						<image src=".. /../static/images/commons/toRight.png" mode="">
						</image>
					</view>
				</view>
				<view class="item">
					<view class="item-left"><text>注册</text></view>
					<view class="item-cen">
						<text>2019-12-22 13:32:45</text>
					</view>
					<view class="toRight">
						<image src=".. /../static/images/commons/toRight.png" mode="">
						</image>
					</view>
				</view>
			</view>
			<view class="mid">
				<view class="item">
					<view class="item-left"><text>昵称</text></view>
					<view class="item-cen">
						<text>{{userInfo.name}}</text>
					</view>
					<view class="toRight" @click="modifyMe('昵称',userInfo.name,'name')">
						<image src=".. /../static/images/commons/toRight.png" mode="">
						</image>
					</view>
				</view>
				<view class="item">
					<view class="item-left"><text>性别</text></view>
					<view class="item-cen">
						<picker :value="index" :range="sexArr" @change="bindSexChange">
							<text class="uni-input">{{sexArr[index]}}</text>
						</picker>
					</view>
					<view class="toRight">
						<image src=".. /../static/images/commons/toRight.png" mode="">
						</image>
					</view>
				</view>
				<view class="item">
					<view class="item-left"><text>生日</text></view>
					<view class="item-cen">
						<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindBtdChange">
							<text>{{date}}</text>
						</picker>
					</view>
					<view class="toRight">
						<image src=".. /../static/images/commons/toRight.png" mode="">
						</image>
					</view>
				</view>

			</view>
			<view class="bottom">
				<view class="item">
					<view class="item-left"><text>密码</text></view>
					<view class="item-cen">
						<text>*******</text>
					</view>
					<view class="toRight">
						<image src=".. /../static/images/commons/toRight.png" mode="">
						</image>
					</view>
				</view>

			</view>
		</view>
		<modify :isModify="isModify" :modifyDate="modifyDate" @cancel="cancelModify" @define="defineModify">

		</modify>
		<bottom-bar class="bottomBar">
			<template #center>
				<button class="tit" type="default">退出应用</button>
			</template>
		</bottom-bar>
	</view>
</template>

<script>
	import topBar from '../../components/bar/top-bar.vue';
	import bottomBar from '../../components/bar/bottom-bar.vue';
	import ImageCropper from "@/components/ling-imgcropper/ling-imgcropper.vue";
	import modify from '../../components/user/modify.vue';
	export default {
		components: {
			topBar,
			bottomBar,
			ImageCropper,
			modify,
		},
		data() {
			const currentDate = this.getDate({
				format: true
			})
			return {
				userInfo:{
					img:'',
					uname:'wazsaaaaaaaaaaaaaaaaaaaaaaaa',
					name:'ls',
					registe:new Date(),
					sex:'男',
					birthday:'2001-06-21',
					email:'xxxx@tt.com',
					tel:'1221331241',
					password:'*********'
				},
				sexArr: ['男', '女', '未知'],
				index: 0,
				date: currentDate,
				// 图片剪裁
				tempFilePath: "",
				cropFilePath: ".. /../static/images/index/p2.jpeg",
				// 修改
				modifyDate: '',
				isModify: false,
				// modTitle:'',
				// modDate:''
			}
		},
		computed: {
			startDate() {
				return this.getDate('start');
			},
			endDate() {
				return this.getDate('end');
			}
		},
		methods: {
			back() {
				uni.navigateBack({
					delta: 1
				})
			},
			bindSexChange: function(e) {
				this.index = e.target.value
			},
			bindBtdChange: function(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();

				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			// 图片剪裁
			upload() {
				uni.chooseImage({
					count: 1, //默认9
					sizeType: ["original", "compressed"], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ["album"], //从相册选择
					success: (res) => {
						this.tempFilePath = res.tempFilePaths.shift();
					},
				});
			},
			confirm(e) {
				this.tempFilePath = "";
				// 图片地址
				this.cropFilePath = e.detail.tempFilePath;

				// #ifdef APP-PLUS||MP
				//除了H5端返回base64数据外，其他端都是返回临时地址，所以你要判断base64还是临时文件名，（用条件编译APP-PLUS||MP执行编译。）
				//按我这里是先上传裁剪得来的临时文件地址然后得到临时文件名，
				//待活你要判断是H5还是其他端传给后端类型参数让后端判断执行何种情况代码就OK了

				uni.uploadFile({
					url: "后端地址上传图片接口地址",
					filePath: this.cropFilePath,
					name: "file",
					fileType: "image",
					//formData:{},传递参数
					success: (uploadFileRes) => {
						var backstr = uploadFileRes.data;
						//自定义操作
					},

					fail(e) {
						console.log("this is errormes " + e.message);
					},
				});

				// #endif
			},
			cancel() {
				console.log("canceled");
				this.tempFilePath = "";
			},
			// 修改
			modifyMe(title,date,type) {
				// this.modTitle=title;
				// this.modDate=date;
				this.modifyDate={
					type:type,
					title:title,
					date:date
				}
				this.isModify = true;
			},
			cancelModify() {
				this.isModify = false;

			},
			defineModify(data,type) {
				this.isModify = false;
				console.log(data);
			}
		}
	}
</script>

<style lang="scss">
	.home {
		display: flex;
		flex-direction: column;
		justify-content: center;

		.topBar {
			background: none;
			text-align: center;

			.back {
				width: 16px;
				height: 16px;
				margin-top: 7px;
				margin-left: 20px;
			}

			.tit {
				position: absolute;
				left: 45%;

				text {
					width: 39px;
					height: 28px;
					font-size: 20px;
					color: #272832;
					letter-spacing: -0.69px;
					font-weight: 400;
				}
			}
		}

		.main {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			margin-top: 100px;

			.top,
			.mid,
			.bottom {
				width: 100%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-bottom: 1px solid rgba(128, 128, 128, 0.6);

				.item {
					width: 100%;
					display: flex;
					justify-content: center;
					align-items: center;
					margin-bottom: 5px;

					.item-left {
						flex: 1;
						text-align: center;

						text {
							width: 31px;
							height: 22px;
							font-family: PingFangSC-Regular;
							font-size: 16px;
							color: #272832;
							letter-spacing: -0.55px;
							font-weight: 700;
						}
					}

					.item-cen {
						flex: 5;
						height: 55px;
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;

						image {
							width: 54px;
							height: 54px;
							border-radius: 10px;
							margin: auto;
							margin-top: 3px;
						}

						text {
							width: 279px;
							height: 22px;
							font-family: PingFangSC-Regular;
							font-size: 16px;
							color: rgba(39, 40, 50, 0.60);
							letter-spacing: -0.55px;
							font-weight: 400;
							line-height: 55px;
						}
					}

					.toRight {
						flex: 1;
						text-align: right;

						image {
							width: 14px;
							height: 14px;
							opacity: 0.3;
							padding-right: 15px;
						}
					}
				}

			}
		}

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
			transform: translateY(-100%);
		}

		.bottomBar {
			text-align: center;
			line-height: 40px;

			.tit {
				width: 70%;
				font-size: 18px;
				color: #FF5D5B;
				font-weight: 400;
				line-height: 40px;
				background: none;
				border: none;
			}
		}
	}
</style>
