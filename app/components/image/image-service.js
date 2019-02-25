import Image from '../../models/images.js'

// @ts-ignore
const _imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
});

let _state = {
	images: []
}

let _subscribers = {
	images: []
}

function setState(prop, value) {
	_state[prop] = value
	_subscribers[prop].forEach(fn => fn())
}

export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}
	get images() {
		return _state.images
	}
	getImages() {
		_imgApi.get()
			.then(res => {
				let image = new Image(res.data)
				setState('images', image)
			})
	}
}
