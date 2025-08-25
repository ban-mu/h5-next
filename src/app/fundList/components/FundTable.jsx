import { useEffect, useRef } from "react";
import BScroll from 'better-scroll';
import { tableHeadUn } from '../constant'
import style from './FundTable.module.scss'

const FundTable = ({ list }) => {
  const headerRef = useRef(null);
  const bodyRef = useRef(null);
  const headerScroll = useRef(null);
  const bodyScroll = useRef(null);


  useEffect(() => {
    if (headerRef.current) {
      headerScroll.current = new BScroll(headerRef.current, {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false,
        bounce: false,
        probeType: 3
      })
      // if (!headerScroll.current) {
      // } else {
      //   headerScroll.current.refresh();
      // }
    }
    if (bodyRef.current) {
      bodyScroll.current = new BScroll(bodyRef.current, {
        startX: 0,
        click: true,
        scrollX: true,
        scrollY: false,
        bounce: false,
        probeType: 3
      })
      // if (!bodyScroll.current) {
      // } else {
      //   bodyScroll.current.refresh();
      // }
    }
    return () => {
      headerScroll.current?.destroy()
      bodyScroll.current?.destroy()
    }
  }, []);
  useEffect(() => {
    if (headerScroll.current) {
      headerScroll.current.refresh();
    }
    if (bodyScroll.current) {
      bodyScroll.current.refresh();
    }
  }, [list])
  return (
    <div className={style.tableWrapper}>
      <section ref={headerRef} className={style.headerSection}>
        <div className={style.tableHead}>
          <div className={`${style.headerRow} ${style.row}`}>
            <div className={`${style.cell} ${style.headerCell} ${style.fixCell}`}>
              <span>产品名称</span>
            </div>
            {
              tableHeadUn.map((item, index) => (
                <div
                  key={index}
                  className={`${style.cell} ${style.headerCell} ${style.movableCell}`}
                  style={{
                    width: `${item.sortWidth}px`
                  }}
                >
                  <span>{item.label}</span>
                </div>
              ))
            }
          </div>
        </div>
      </section>
      <section className={style.bodySection}>
        <div className={style.bodyWrap}>
          <div ref={bodyRef} className={style.tableBody}>
            <div className={style.tableBodyContainer}>
              <div>
                {
                  list.map((item, index) => (
                    <div
                      key={`${item.prdtCode}${index}`}
                      className={`${style.row} ${style.bodyRow}`}
                    >
                      <div className={`${style.cell} ${style.columnCell} ${style.fixCell}`}>
                        <div>{item.prdtAbbr}</div>
                      </div>
                      {
                        tableHeadUn.map((item2, index2) => (
                          <div
                            key={`${index}${item2.key}${index2}`}
                            className={`${style.cell} ${style.columnCell} ${style.movableCell}`}
                            style={{
                              width: `${item2.sortWidth}px`
                            }}
                          >
                            <div>{item[item2.key]}</div>
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default FundTable;
