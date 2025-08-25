"use client";
import { useEffect, useState } from 'react';
import { queryFundList } from '@/api';
import style from './page.module.scss';
import TabBar from "./components/TabBar";
import FundTable from "./components/FundTable";


export default function Page() {
  const [list, setList] = useState([]);
  let tabId = '';
  const setActiveTab = (val) => {
    tabId = val.id;
    getList();
  }
  let pageNum = 1;
  const loadMore = () => {
    pageNum = 2;
    getList(pageNum);
  }
  const getList = (num = pageNum) => {
    const paraList = [
      {
        fieldName: 'fcategory',
        patternType: '1',
        values: tabId ? [tabId] : []
      }
    ]
    return new Promise((resolve) => {
      queryFundList({
        pageNum: num,
        pageSize: 20,
        sortName: 'rateYear1',
        sortOrder: 'desc',
        reqStr: JSON.stringify(paraList)
      }).then((res) => {
        console.log(res)
        if (res.code === '0' && res.resultData) {
          const rs = res.resultData;
          const list = rs.prdtNavList || [];
          setList(list);
        }
        resolve(res);
      })
    })
  }
  useEffect(() => {
    getList(1);
  }, [])
  return (
    <div className={style.fundWrap}>
      <TabBar onChange={setActiveTab} />
      <div style={{height: 'calc(100vh - 44px)'}}>
        <FundTable list={list}></FundTable>
      </div>
    </div>
  )
}