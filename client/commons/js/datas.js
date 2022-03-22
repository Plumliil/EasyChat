function friends() {
	let furiendsInfo = [{
		id: 0,
		imgUrl: 'p1.jpeg',
		tip: 3,
		name: '老大',
		message: '一种新的文学样式。',
		time: new Date()
	}, {
		id: 1,
		imgUrl: 'p2.jpeg',
		tip: 13,
		name: '老二',
		message: '隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 2,
		imgUrl: 'p3.jpeg',
		tip: 12,
		name: '老三',
		message: '萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 3,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 4,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 5,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 6,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 7,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 8,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 9,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 10,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 11,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 12,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 13,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 14,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 15,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 16,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老六',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, ]
	return furiendsInfo;
}

function searchData() {
	let data = [{
		id: 0,
		imgUrl: 'p1.jpeg',
		tip: 3,
		name: '老大',
		email:'laoda@tt.com',
		message: '一种新的文学样式。',
		time: new Date()
	}, {
		id: 1,
		imgUrl: 'p2.jpeg',
		tip: 13,
		name: '老二',
		email:'laoer@tt.com',
		message: '隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 2,
		imgUrl: 'p3.jpeg',
		tip: 12,
		name: '老三',
		email:'laosan@tt.com',
		message: '萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}, {
		id: 3,
		imgUrl: 'p4.jpeg',
		tip: 10,
		name: '老四',
		email:'laosi@tt.com',
		message: '词是一种诗的别体，萌芽于南朝，是隋唐时兴起的一种新的文学样式。',
		time: new Date()
	}];
	return data;
}

function isFriend(){
	let isFriend=[
		{
			userId:1,
			isFriend:1,
		}
		,{
			userId:1,
			isFriend:2,
		},{
			userId:1,
			isFriend:3,
		},
	]
	return isFriend
}
module.exports = {
	friends,
	searchData,
	isFriend
}
