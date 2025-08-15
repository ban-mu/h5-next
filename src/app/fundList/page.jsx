"use client";
import { useEffect, useState } from 'react';
import { queryFundList } from '@/api';
import style from './page.module.scss';
import TabBar from "./components/TabBar";

const tabs = ["股票型", "债券型", "混合型"];

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  let pageNum = 1;
  const loadMore = () => {
    pageNum = 2;
    getList(pageNum);
  }
  const getList = (num = pageNum) => {
    return new Promise((resolve) => {
      queryFundList({
        pageNum: num,
        pageSize: 20,
        sortName: 'rateYear1',
        sortOrder: 'desc'
      }).then((res) => {
        console.log(res)
        resolve(res);
      })
    })
  }
  useEffect(() => {
    getList(1);
  }, [])
  return (
    <>
      <TabBar tabs={tabs} onChange={setActiveTab} />
      <div className={style.btn} onClick={loadMore}>
        <span>按钮1</span>
      </div>
    </>
  )
}