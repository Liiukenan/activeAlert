let ipUrl = null; //接口
if(process.env.NEXT_PUBLIC_DOMAIN_ENV==="production"){
    ipUrl="http://127.0.0.1:7001"
}else {
    ipUrl="http://128.0.0.1:7005"
}
let servicePath = {
  getArticleList: ipUrl + "/getArticleList", //首页接口
};
export default servicePath;