import {sendMessageActionCreator} from "../../redux/dialogsReducer";
import Dialog from "./Dialog";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
let mapStateToStore = (state) => {
    return{
        dialogsPage: state.dialogsPage,
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addMessage: (newMessage) => dispatch(sendMessageActionCreator(newMessage)),
    }
}

export default compose(
    connect(mapStateToStore,mapDispatchToProps),
    withAuthRedirect)
(Dialog)
