import Vue from 'vue'
import Router from 'vue-router'
import {
	Login,
	Portal,
	NewsList,
	UserList,
	AddNews,
	CompetitionList,
	AddOrEditCompetition,
	CompetitionApply,
	CompetitionScore,
	ScoreDetail,
	CompetitionCategory,
	MeberList,
} from '@/pages'

Vue.use(Router)

var router = new Router({
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			component: Login
		},
		{

			path: '/portal',
			component: Portal,
			children: [
				{
					path: '/',
					redirect: '/competition-list'
				},
				{
					path: '/competition-list',
					component: CompetitionList
				},
				{
					path: '/competition-apply/:id/:name',
					component: CompetitionApply
				},
				{
					path: '/competition-score/:id/:name',
					component: CompetitionScore
				},
				{
					path: '/score-detail/:cpId/:userId/:cpName',
					component: ScoreDetail
				},
				{
					path: '/competition-category',
					component: CompetitionCategory
				},
				{
					path: '/news',
					component: NewsList
				},
                {
                    path:'/memberList',
                    component:MeberList
                },
				{
					path: '/users',
					component: UserList
				},
				{
					path: '/add-news',
					name:'add-news',
					component: AddNews
				},
				{
					path: '/add-competiton/:id/:disabled',
					component: AddOrEditCompetition
				},
				{
					path: '/edit-competiton/:id/:disabled',
					component: AddOrEditCompetition
				},
				{
					path: '/view-competiton/:id/:disabled',
					component: AddOrEditCompetition
				}
			]
		},
		{
			path: '*',
			redirect: '/portal'
		}
	]
})

export default router
