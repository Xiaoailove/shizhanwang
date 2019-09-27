import {
  RECEIVE_CATEGORYS,
  RECEIVE_SEARCHDATA,
  RECEIVE_SEARCHRESULT,
  RECEIVE_TAB
} from './mutation-type'
export default{
  [RECEIVE_CATEGORYS](state,categorys){
    state.categorys=categorys
  },
  [RECEIVE_SEARCHDATA](state,searchData){
    state.searchData=searchData
  },
  [RECEIVE_SEARCHRESULT](state,searchResult){
    state.searchResult=searchResult
  },
  [RECEIVE_TAB](state,getTab){
    state.getTabs=getTab
  }
}