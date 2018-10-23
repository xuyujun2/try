const Mock = require('mockjs')
import $ from 'axios'
$.get('http://api/add').then((res)=>{
       console.log(res)
})

Mock.mock('http://api/add',{
	"user|100":[{
		'name':'@name',
		'id|+1':88,
		"age|18-28": 0
	}]
})