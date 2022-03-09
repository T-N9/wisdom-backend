export default {
	name : 'courses',
	title : 'Courses',
	type : 'document',
	fields : [
		{
			name : 'title',
			title : 'Title',
			type : 'string'
		},
		{
			name : 'slug',
			title : 'Slug',
			type : 'slug',
			options : {
				source : 'title',
				maxLength : 96
			}
		},
		{
			name : 'description',
			title : 'Description',
			type : 'string'
		},
		{
			name : 'avatar',
			title : 'Avatar',
			type : 'image',
			options : {
				hotspot : true,
			}
		}
	]
}