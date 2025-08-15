"use client";
import { useEffect } from 'react';
import { Button, Flex } from 'antd';
import { queryResearch } from '@/api';
import styles from "./page.module.scss"

export default function Page() {
  useEffect(() => {
    queryResearch().then((res) => {
      console.log(res)
    })
    // queryLive({
    //   activityId: '10003615',
    //   languageType: 1,
    // }).then((res) => {
    //   console.log(res)
    // })
  }, [])
  return (
    <>
      <Flex gap="small" wrap>
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
      </Flex>
      <div className={styles.btn}>按钮</div>
    </>
  )
}