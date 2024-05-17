interface Song {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: { id: number; name: string; tns: string[]; alias: undefined[] }[];
  alia: undefined[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt: object;
  cf: string;
  al: {
    id: number;
    name: string;
    picUrl: string;
    tns: undefined[];
    pic_str: string;
    pic: number;
  };
  dt: number;
  h: { br: number; fid: number; size: number; vd: number; sr: number };
  m: { br: number; fid: number; size: number; vd: number; sr: number };
  l: { br: number; fid: number; size: number; vd: number; sr: number };
  sq: { br: number; fid: number; size: number; vd: number; sr: number };
  hr: object;
  a: object;
  cd: string;
  no: number;
  rtUrl: object;
  ftype: number;
  rtUrls: undefined[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData: object;
  tagPicList: object;
  resourceState: boolean;
  version: number;
  songJumpInfo: object;
  entertainmentTags: object;
  single: number;
  noCopyrightRcmd: object;
  rtype: number;
  rurl: object;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  privilege: {
    id: number;
    fee: number;
    payed: number;
    st: number;
    pl: number;
    dl: number;
    sp: number;
    cp: number;
    subp: number;
    cs: boolean;
    maxbr: number;
    fl: number;
    toast: boolean;
    flag: number;
    preSell: boolean;
    playMaxbr: number;
    downloadMaxbr: number;
    maxBrLevel: string;
    playMaxBrLevel: string;
    downloadMaxBrLevel: string;
    plLevel: string;
    dlLevel: string;
    flLevel: string;
    rscl: object;
    freeTrialPrivilege: {
      resConsumable: boolean;
      userConsumable: boolean;
      listenType: number;
      cannotListenReason: number;
    };
    rightSource: number;
    chargeInfoList: {
      rate: number;
      chargeUrl: object;
      chargeMessage: object;
      chargeType: number;
    }[];
  };
}
namespace Res {
  interface getDefaultKey {
    code: number;
    message: object;
    data: {
      showKeyword: string;
      styleKeyword: { keyWord: string; descWord: object };
      realkeyword: string;
      searchType: number;
      action: number;
      alg: string;
      gap: number;
      source: object;
      bizQueryInfo: string;
      logInfo: object;
      imageUrl: object;
      trp_type: object;
      trp_id: object;
    };
  }
  interface searchResult {
    result: {
      searchQcReminder: object;
      songs: Song[];
      songCount: number;
    };
    code: number;
  }
  //歌单
  interface getAllRank {
    code: number;
    list: List[];
  }
  //歌单详情
  interface RootObject {
    code: number;
    relatedVideos?: any;
    playlist: Playlist;
    urls?: any;
    privileges: Privilege[];
    sharedPrivilege?: any;
    resEntrance?: any;
    fromUsers?: any;
    fromUserCount: number;
    songFromUsers?: any;
  }
}

interface Track {
  first: string;
  second: string;
}
interface List {
  subscribers: any[];
  subscribed?: any;
  creator?: any;
  artists?: any;
  tracks: Track[];
  updateFrequency: string;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  coverText?: any;
  titleImageUrl?: any;
  coverImageUrl?: any;
  iconImageUrl?: any;
  englishTitle?: any;
  opRecommend: boolean;
  recommendInfo?: any;
  socialPlaylistCover?: any;
  tsSongCount: number;
  updateTime: number;
  trackCount: number;
  commentThreadId: string;
  trackUpdateTime: number;
  specialType: number;
  highQuality: boolean;
  cloudTrackCount: number;
  totalDuration: number;
  subscribedCount: number;
  trackNumberUpdateTime: number;
  privacy: number;
  playCount: number;
  coverImgId: number;
  coverImgUrl: string;
  newImported: boolean;
  anonimous: boolean;
  adType: number;
  createTime: number;
  ordered: boolean;
  description: string;
  status: number;
  tags: any[];
  userId: number;
  name: string;
  id: number;
  coverImgId_str: string;
  toplistType: string;
}

//歌单详情
interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail?: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}
interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}
interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags?: any;
  experts?: any;
  djStatus: number;
  vipType: number;
  remarkName?: any;
  authenticationTypes: number;
  avatarDetail: AvatarDetail;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}
interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}
interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}
interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
interface Hr {
  br: number;
  fid: number;
  size: number;
  vd: number;
  sr: number;
}
interface Track {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia?: string[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt?: any;
  cf: string;
  al: Al;
  dt: number;
  h: H;
  m: M;
  l: L;
  sq: Sq;
  hr: Hr;
  a?: any;
  cd: string;
  no: number;
  rtUrl?: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
  tagPicList?: any;
  resourceState: boolean;
  version: number;
  songJumpInfo?: any;
  entertainmentTags?: any;
  awardTags?: any;
  single: number;
  noCopyrightRcmd?: any;
  alg?: any;
  displayReason?: any;
  rtype: number;
  rurl?: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
}
interface TrackId {
  id: number;
  v: number;
  t: number;
  at: number;
  alg?: any;
  uid: number;
  rcmdReason: string;
  sc?: any;
  f?: any;
  sr?: any;
  dpr?: any;
  ratio: number;
}
interface Playlist {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description: string;
  tags: any[];
  updateFrequency?: any;
  backgroundCoverId: number;
  backgroundCoverUrl?: any;
  titleImage: number;
  titleImageUrl?: any;
  detailPageTitle?: any;
  englishTitle?: any;
  officialPlaylistType?: any;
  copied: boolean;
  relateResType?: any;
  coverStatus: number;
  subscribers: Subscriber[];
  subscribed: boolean;
  creator: Creator;
  tracks: Track[];
  videoIds?: any;
  videos?: any;
  trackIds: TrackId[];
  bannedTrackIds?: any;
  mvResourceInfos?: any;
  shareCount: number;
  commentCount: number;
  remixVideo?: any;
  newDetailPageRemixVideo?: any;
  sharedUsers?: any;
  historySharedUsers?: any;
  gradeStatus: string;
  score?: any;
  algTags?: any;
  distributeTags: any[];
  trialMode: number;
  displayTags?: any;
  playlistType: string;
  toplistType: string;
}

interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType: number;
  cannotListenReason: number;
  playReason?: any;
}

interface ChargeInfoList {
  rate: number;
  chargeUrl?: any;
  chargeMessage?: any;
  chargeType: number;
}

interface Privilege {
  id: number;
  fee: number;
  payed: number;
  realPayed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  pc?: any;
  toast: boolean;
  flag: number;
  paidBigBang: boolean;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl?: any;
  freeTrialPrivilege: FreeTrialPrivilege;
  rightSource: number;
  chargeInfoList: ChargeInfoList[];
}
