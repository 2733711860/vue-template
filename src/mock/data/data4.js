import Mock from 'mockjs'

export const getWordImage = {
	code: 0,
	msg: '查询成功',
	data: {
		'list|10': [
			{
				userImage: 'https://picsum.photos/40/40?image=' + '@natural(0, 1000)',
				title: '@ctitle(8)',
				desc: '@cparagraph',
				image: 'https://picsum.photos/375/200?image=' + '@natural(0, 1006)',
				thumbs: '@natural(0, 1000)',
				noThumbs: '@natural(0, 1000)',
				meThumbs: false,
				meNoThumbs: false,
				meLike: '@boolean'
			}
		]
	}
}

