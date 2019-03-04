/**
 * Created by lonelydawn at 2019/3/4.
 */

import Mock from 'mockjs'
import base from './module/index'

// 拦截请求URL，返回与之匹配的Mock数据
Mock.mock(/\/shenyang\/get/, base)
