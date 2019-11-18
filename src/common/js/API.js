var basUrl='/api'
// var basUrl=''

//登录接口
var login=basUrl+'/login'

//退出登录
var exit=basUrl+'/exit'

//管理员接口
var addManage=basUrl+'/addManage'     //添加
var findManage=basUrl+'/findManage'   //查询
var delManage=basUrl+'/delManage'      //删除
var updateManage=basUrl+'/updateManage'    //更新

var changePassManage=basUrl+'/changePassManage'   //修改密码

//首页轮播图
var addBanner=basUrl+'/addBanner'  
var banner=basUrl+'/banner'  //获取
var delBanner=basUrl+'/delBanner'

//家教banner
var addTeacherBanner=basUrl+'/addTeacherBanner'  
var teacherBanner=basUrl+'/teacherBanner'  //获取
var delTeacherBanner=basUrl+'/delTeacherBanner'

//家教类型
var addTeacherType=basUrl+'/addTeacherType'  
var teacherType=basUrl+'/teacherType'  //获取
var delTeacherType=basUrl+'/delTeacherType'
var updateTeacherType=basUrl+'/updateTeacherType'    //更新

//家教排行
var addTeacherTop=basUrl+'/addTeacherTop'  
var teacherTop=basUrl+'/teacherTop'  //获取
var delTeacherTop=basUrl+'/delTeacherTop'
var updateTeacherTop=basUrl+'/updateTeacherTop'    //更新

//水站
var addWater=basUrl+'/addWater'  
var findWater=basUrl+'/findWater'  //获取
var delWater=basUrl+'/delWater'
var updateWater=basUrl+'/updateWater'    //更新

//水站评论
var addComment=basUrl+'/addComment'  
var findComment=basUrl+'/findComment'  //获取
var delComment=basUrl+'/delComment'

//维修
var addRepair=basUrl+'/addRepair'  
var findRepair=basUrl+'/findRepair'  //获取
var delRepair=basUrl+'/delRepair'
var updateRepair=basUrl+'/updateRepair'    //更新

//维修评论
var addRepairComment=basUrl+'/addRepairComment'  
var findRepairComment=basUrl+'/findRepairComment'  //获取
var delRepairComment=basUrl+'/delRepairComment'

//家政轮播图
var addHomeBanner=basUrl+'/addHomeBanner'  
var homeBanner=basUrl+'/homeBanner'  //获取
var delHomeBanner=basUrl+'/delHomeBanner'

//家政员工信息
var addHomeWorker=basUrl+'/addHomeWorker'  
var findHomeWorker=basUrl+'/findHomeWorker'  //获取
var delHomeWorker=basUrl+'/delHomeWorker'
var updateHomeWorker=basUrl+'/updateHomeWorker'    //更新

//证书与服务类型

var getHomeType=basUrl+'/getHomeType'   //获取家政服务

//
export default{
    login,
    exit,
    addManage,
    findManage,
    delManage,
    updateManage,
    changePassManage,
    addBanner,
    banner,
    delBanner,
    addTeacherBanner,
    teacherBanner,
    delTeacherBanner,
    addTeacherType,
    teacherType,
    delTeacherType,
    updateTeacherType,
    addTeacherTop,
    teacherTop,
    delTeacherTop,
    updateTeacherTop,
    addWater,
    findWater,
    delWater,
    updateWater,
    addComment,
    findComment,
    delComment,
    addRepair,
    findRepair,
    delRepair,
    updateRepair,
    addRepairComment,
    findRepairComment,
    delRepairComment,
    addHomeBanner,
    homeBanner,
    delHomeBanner,
    addHomeWorker,
    findHomeWorker,
    delHomeWorker,
    updateHomeWorker,
    
    getHomeType
}