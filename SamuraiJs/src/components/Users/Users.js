import React from "react";
import Paginator from '../common/paginator/Paginator'
import User from './User'


let Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, followingInProgress, unfollow, follow}) => {
    return<>
            <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                       currentPage={currentPage} onPageChanged={onPageChanged}/>
            {users.map(u => <User key={u.id} followingInProgress={followingInProgress} unfollow={unfollow}
                                  follow={follow} user={u}/>)}
        </>
}
export default Users