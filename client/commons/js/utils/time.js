export default {
	dateTime(t) {
		let old = new Date(t);
		let now = new Date();
		// old
		let d = old.getTime();
		let h = old.getHours();
		let m = old.getMinutes();
		let Y = old.getFullYear();
		let M = old.getMonth()+1;
		let D = old.getDate();
		// now
		let nd = now.getTime();
		let nh = now.getHours();
		let nm = now.getMinutes();
		let nY = now.getFullYear();
		let nM = now.getMonth()+1;
		let nD = now.getDate();
		if (D === nD && M === nM && Y === nY) {
			// 当天的时间
			h = h > 10 ? h : '0' + h;
			m = m > 10 ? m : '0' + m;
			return h + ':' + m
		}
		// 昨天时间
		else if (D + 1 === nD && M + 1 === nM && Y + 1 === nY) {
			// 当天的时间
			h = h > 10 ? h : '0' + h;
			m = m > 10 ? m : '0' + m;
			return '昨天' + h + ':' + m
		} else {
			return Y + '/' + M + '/' + D; 
		}

	}
}
