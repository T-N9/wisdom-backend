export default {
	name : 'activities',
	title : 'Activities',
	type : 'document',
	fields : [
		{
			name : 'title',
			title : 'Title',
			type : 'string'
		},
		{
			name : 'link',
			title : 'Link',
			type : 'string'
		},
		{
			name : 'image',
			title : 'Image',
			type : 'image',
			options : {
				hotspot : true,
			}
		}
	]
}