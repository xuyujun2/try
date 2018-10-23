import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationTypes from './mutation-types'
import * as actionTypes from './action-types'

Vue.use(Vuex)

import $ from 'axios'

export default new Vuex.Store({
  state: {
    title: '',
    keywords:JSON.parse(sessionStorage.getItem('userInfo')),
    toplist: {
      home: {},
      latest: {},
    },
    listItem:{}
  },

  mutations: {
    [mutationTypes.CHANGETITLE](state, payload) {
      state.title = payload
    },
    [mutationTypes.CHANGEKEYWORDS](state, payload) {
      state.keywords = payload
      sessionStorage.setItem('userInfo',JSON.stringify(payload));
    },
    [mutationTypes.CHANGELIST](state, payload) {
      state.listItem = payload
    },
    [mutationTypes.SETDATA](state, payload) {
      state.toplist = payload
    }
  },

  actions: {
    [actionTypes.GETDATA]({commit}) {
      const home = $.get('/v2/site/home')
        .then((result) => {
          return result
        })
      const latest = $.get('/v2/repo/latest')
        .then((result) => {
          return result
        })
      Promise.all([home, latest])
        .then((result) => {
          console.log(result[1])
          commit(mutationTypes.SETDATA, {
            home: result[0].data.recorepos,
            latest: result[1].data
          })
        })
    }
  }
})
