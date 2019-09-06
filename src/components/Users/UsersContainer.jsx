import {connect} from "react-redux";
import {
    follow, setCurrentPage,
    unfollow,
    toggleFollowingProgress, getUserThunkCreator
} from "../../redux/users-reducer";
import React from "react";
import Users from "./Users";
import preloader from "../../assets/img/ball-triangle-1.svg"
import {withAuthRedirect} from "../../HOC/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUserThunkCreator(this.props.currentPage, this.props.pageSize)

        /*this.props.toggleIsFetching(true);
        userAPI.getUsers().then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        });*/
    }

    onPageChanged = (pageNumber) => {
        this.props.getUserThunkCreator(pageNumber, this.props.pageSize)

        /*this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });*/
    }

    render() {
        return <>
            {this.props.isFetching ? <img src={preloader}  alt=''/> : null}
        <Users totalCount={this.props.totalCount}
               pageSize={this.props.pageSize}
               currentPage={this.props.currentPage}
               users={this.props.users}
               onPageChanged={this.onPageChanged}
               unfollow={this.props.unfollow}
               follow={this.props.follow}
               followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}
            

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalCount: state.usersPage.totalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default withAuthRedirect(connect(mapStateToProps,
    {follow, unfollow, setCurrentPage,  toggleFollowingProgress, getUserThunkCreator})(UsersContainer))