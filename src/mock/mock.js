import Mock from 'mockjs'
import dataUser from './dataUser.json'
import data from './data.json'
import dataTab from './dataTab.json'
Mock.mock('/login',{code:0,data:dataUser})
Mock.mock('/reqcategorys',{code:0,data:data})
Mock.mock('/tab',{code:0,data:dataTab})
