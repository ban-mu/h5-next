import $http from '@/utils/request';
// import { config } from "@/config";
// const baseurl = config.apiBaseUrl;


export function queryFundList(data) {
  return  $http.post('/inst_plat_app/fund/selectFund', data);
}

export const queryResearch = (data = {}) => {
  return $http.post(`/inst_plat_pc/pcIndex/queryResearchModuleData`, data);
  // return $http.post(`${baseurl}/inst_plat_pc/pcIndex/queryResearchModuleData`, data);
  // return $http.post('/inst_plat_pc/pcIndex/queryResearchModuleData', {
  //   method: "POST",
  //   baseURL: config.apiBaseUrl,
  //   data: {
  //     ...data
  //   }
  // })
  // return request.post('/inst_plat_pc/pcIndex/queryResearchModuleData', data);

}
// export function queryLive(data) {
//   return request.post('/inst_plat_pc/roadShow/queryRoadshowDetailForPc', data);
// }