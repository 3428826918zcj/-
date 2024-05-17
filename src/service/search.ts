import http from "./http";
import to from "await-to-js";

// 获取默认搜索关键词
export const getDefaultKey = async () => {
  const [err, res] = await to(http.post<Res.getDefaultKey>("/search/default"));
  if (err) throw new Error("请求失败");
  return res.data.data.realkeyword;
};
/*
export const getDefaultKey = () =>
  http.post<Res.getDefaultKey>("/search/default");
*/

// 搜索指定关键字
interface SearchResultParams {
  keywords: string;
  limit?: number;
  offset?: number;
  type?: string;
}
/*
export const searchResult = (params: SearchResultParams) =>
  http.get<Res.searchResult>("/cloudsearch", { params });
*/
export const searchResult = async (params: SearchResultParams) => {
  const [err, res] = await to(
    http.get<Res.searchResult>("/cloudsearch", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.result.songs;
};
//所有的榜单
//获取所有的榜单
export const allRanking = async () => {
  const [err, res] = await to(http.post<Res.getAllRank>("/toplist/detail"));
  if (err) throw new Error("请求失败");
  return res.data.list.slice(0, 4);
};
//说有榜单内容仔要
export const rangk = async () => {
  const [err, res] = await to(http.post<Res.getAllRank>("/toplist/detail"));
  if (err) throw new Error("请求失败");
  return res.data.list.slice(0, 3);
};
export const rangkAll = async () => {
  const [err, res] = await to(http.post<Res.getAllRank>("/toplist"));
  if (err) throw new Error("请求失败");
  return res.data.list;
};

//榜单详情
interface idre {
  id: number;
  s?: number;
}
export const rangkInfor = async (params: idre) => {
  const [err, res] = await to(
    http.get<Res.RootObject>("/playlist/detail", { params })
  );
  if (err) throw new Error("请求失败");
  return res.data.playlist;
};
