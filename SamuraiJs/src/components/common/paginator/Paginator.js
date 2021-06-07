import styles from './Paginator.module.css'
import React, {useState} from 'react'

const Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    const [minPage, setMinPage] = useState(0)
    const [maxPage, setMaxPage] = useState(minPage+8)
    const [clickbleMin, setClickbleMin] = useState(true)
    const [clickbleMax, setClickbleMax] = useState(false)
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let visiblePages = pages.slice(minPage, maxPage)
    let prevPages = () => {
        setMinPage(prevState => prevState - 1)
        setMaxPage(prevState => prevState - 1)
        if (minPage === 1) {
            setClickbleMin(true)
        } else setClickbleMin(false)
        setClickbleMax(false)
    }
    let nextPages = () => {
        setMinPage(prevState => prevState + 1)
        setMaxPage(prevState => prevState + 1)
        if (maxPage === pages.length - 1) {
            setClickbleMax(true)
        } else setClickbleMax(false)
        setClickbleMin(false)
    }
    return <div className={styles.pageBlock}>
        <button onClick={prevPages} disabled={clickbleMin}>&larr;</button>
        {visiblePages.map((p, index) => <span key={index}
                                              className={currentPage === p ? styles.selectedPage : undefined}
                                              onClick={() => onPageChanged(p)}>{p}</span>)}
        <button onClick={nextPages} disabled={clickbleMax}>&rarr;</button>
    </div>
}
let PaginatorMemo = React.memo(Paginator)
export default PaginatorMemo