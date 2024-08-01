export interface IUser {
    request_time: string
    actid: string
    access_type: string[]
    uname: string
    prarr: ProductArray[]
    exch_prd: ExchangeProduct[]
    stat: string
    susertoken: string
    email: string
    uid: string
    brnchid: string
    totp_set: string
    m_num: string
    orarr: string[]
    exarr: string[]
    values: string[]
    mws: WatchList[]
    brkname: string
    dmsg: string
    lastaccesstime: string
}

export interface ProductArray {
    prd: string
    s_prdt_ali: string
    exch: string[]
}

export interface ExchangeProduct {
    exch: string
    prds: string[]
}

export interface WatchList {
    "1": IndexList[]
}

export interface IndexList {
    exch: string
    token: string
    tsym: string
    weekly: string
    dname: string
    instname: string
    pp: string
    ls: string
    ti: string
    optt: string
}
