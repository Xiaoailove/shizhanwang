import Mock from 'mockjs'
import dataUser from './dataUser.json'
Mock.mock('/login',{code:0,data:dataUser})