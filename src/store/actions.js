import {RECEIVE_CATEGORYS,RECEIVE_SEARCHDATA,RECEIVE_SEARCHRESULT,RECEIVE_TAB} from './mutation-type'
import {reqCategorys,reqSearchData,reqSearchResult,reqTab} from '../api'
export default{
 async reqCategorys({commit}){
    const result=await reqCategorys()
    //console.log(result)
    if(result.code==0){
      const categorys=result.data
      commit(RECEIVE_CATEGORYS,categorys)
    }
  },
 async reqSearchData({commit}){
    const result=await reqSearchData()
    //console.log(result)
    if(result.code==200){
      const searchData=result.data.hotKeywordVOList
      //console.log(searchData)
      commit(RECEIVE_SEARCHDATA,searchData)
    }
  },
 async reqSearchResultM({commit},keywordPrefix){
    const result=await reqSearchResult(keywordPrefix)
    console.log(result)
    if(result.code==200){
      const searchResult=result.data
      //console.log(searchResult)
      commit(RECEIVE_SEARCHRESULT,searchResult)
    }
  },
  async getTab({commit}){
    const result=await reqTab()
    //console.log(result)
    if(result.code==0){
      const getTab=result.data
      //console.log(getTab)
      commit(RECEIVE_TAB,getTab)
    }
  }
}