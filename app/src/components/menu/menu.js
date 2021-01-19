import React from "react"
import "./menu.styles.scss"
import {useHistory} from "react-router-dom";

const Menu = ({selected = 0}) => {
    const history = useHistory();

    const goTo = (path) => {
        history.push(path)
    }

    return (
        <div className="menu">
            <div onClick={()=> goTo("/home")} className={`select ${selected === 1 ? "active" : ""}`}>
                <svg className="icon-select" width="39" height="28" viewBox="0 0 39 28" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd"
                          d="M11.4375 24.9062C11.4375 24.5499 11.5791 24.2081 11.8311 23.9561C12.0831 23.7041 12.4249 23.5625 12.7812 23.5625H36.9688C37.3251 23.5625 37.6669 23.7041 37.9189 23.9561C38.1709 24.2081 38.3125 24.5499 38.3125 24.9062C38.3125 25.2626 38.1709 25.6044 37.9189 25.8564C37.6669 26.1084 37.3251 26.25 36.9688 26.25H12.7812C12.4249 26.25 12.0831 26.1084 11.8311 25.8564C11.5791 25.6044 11.4375 25.2626 11.4375 24.9062ZM11.4375 14.1562C11.4375 13.7999 11.5791 13.4581 11.8311 13.2061C12.0831 12.9541 12.4249 12.8125 12.7812 12.8125H36.9688C37.3251 12.8125 37.6669 12.9541 37.9189 13.2061C38.1709 13.4581 38.3125 13.7999 38.3125 14.1562C38.3125 14.5126 38.1709 14.8544 37.9189 15.1064C37.6669 15.3584 37.3251 15.5 36.9688 15.5H12.7812C12.4249 15.5 12.0831 15.3584 11.8311 15.1064C11.5791 14.8544 11.4375 14.5126 11.4375 14.1562ZM11.4375 3.40625C11.4375 3.04987 11.5791 2.70808 11.8311 2.45608C12.0831 2.20407 12.4249 2.0625 12.7812 2.0625H36.9688C37.3251 2.0625 37.6669 2.20407 37.9189 2.45608C38.1709 2.70808 38.3125 3.04987 38.3125 3.40625C38.3125 3.76263 38.1709 4.10442 37.9189 4.35642C37.6669 4.60843 37.3251 4.75 36.9688 4.75H12.7812C12.4249 4.75 12.0831 4.60843 11.8311 4.35642C11.5791 4.10442 11.4375 3.76263 11.4375 3.40625ZM3.375 6.09375C4.08777 6.09375 4.77135 5.8106 5.27535 5.3066C5.77935 4.8026 6.0625 4.11902 6.0625 3.40625C6.0625 2.69348 5.77935 2.0099 5.27535 1.5059C4.77135 1.0019 4.08777 0.71875 3.375 0.71875C2.66223 0.71875 1.97865 1.0019 1.47465 1.5059C0.970646 2.0099 0.6875 2.69348 0.6875 3.40625C0.6875 4.11902 0.970646 4.8026 1.47465 5.3066C1.97865 5.8106 2.66223 6.09375 3.375 6.09375ZM3.375 16.8438C4.08777 16.8438 4.77135 16.5606 5.27535 16.0566C5.77935 15.5526 6.0625 14.869 6.0625 14.1562C6.0625 13.4435 5.77935 12.7599 5.27535 12.2559C4.77135 11.7519 4.08777 11.4688 3.375 11.4688C2.66223 11.4688 1.97865 11.7519 1.47465 12.2559C0.970646 12.7599 0.6875 13.4435 0.6875 14.1562C0.6875 14.869 0.970646 15.5526 1.47465 16.0566C1.97865 16.5606 2.66223 16.8438 3.375 16.8438ZM3.375 27.5938C4.08777 27.5938 4.77135 27.3106 5.27535 26.8066C5.77935 26.3026 6.0625 25.619 6.0625 24.9062C6.0625 24.1935 5.77935 23.5099 5.27535 23.0059C4.77135 22.5019 4.08777 22.2188 3.375 22.2188C2.66223 22.2188 1.97865 22.5019 1.47465 23.0059C0.970646 23.5099 0.6875 24.1935 0.6875 24.9062C0.6875 25.619 0.970646 26.3026 1.47465 26.8066C1.97865 27.3106 2.66223 27.5938 3.375 27.5938Z"
                          fill="white"/>
                </svg>
            </div>

            <div onClick={() => goTo("/profile")} className={`profile ${selected === 2 ? "active" : ""}`}>
                <svg className="icon-profile" width="27" height="29" viewBox="0 0 27 29" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25.6745 23.4275C25.0117 21.8421 24.0499 20.4019 22.8426 19.1873C21.6389 17.9692 20.2131 16.998 18.6439 16.3274C18.6298 16.3203 18.6157 16.3168 18.6017 16.3097C20.7906 14.7129 22.2136 12.112 22.2136 9.17758C22.2136 4.31642 18.3136 0.377808 13.5 0.377808C8.6864 0.377808 4.78634 4.31642 4.78634 9.17758C4.78634 12.112 6.20933 14.7129 8.39829 16.3132C8.38423 16.3203 8.37018 16.3239 8.35612 16.331C6.78205 17.0016 5.36959 17.9632 4.15741 19.1909C2.95123 20.4064 1.98955 21.8463 1.32547 23.4311C0.673078 24.9826 0.321229 26.646 0.288967 28.3313C0.288029 28.3692 0.294607 28.4068 0.308312 28.4421C0.322018 28.4774 0.342574 28.5095 0.368769 28.5366C0.394964 28.5637 0.426269 28.5853 0.460838 28.6C0.495407 28.6147 0.532541 28.6223 0.570053 28.6223H2.67819C2.83279 28.6223 2.95577 28.4981 2.95928 28.3455C3.02955 25.6062 4.11876 23.0408 6.04419 21.0963C8.03639 19.0844 10.6821 17.9774 13.5 17.9774C16.3179 17.9774 18.9636 19.0844 20.9558 21.0963C22.8812 23.0408 23.9704 25.6062 24.0407 28.3455C24.0442 28.5016 24.1672 28.6223 24.3218 28.6223H26.4299C26.4674 28.6223 26.5046 28.6147 26.5391 28.6C26.5737 28.5853 26.605 28.5637 26.6312 28.5366C26.6574 28.5095 26.678 28.4774 26.6917 28.4421C26.7054 28.4068 26.712 28.3692 26.711 28.3313C26.6759 26.6352 26.328 24.9852 25.6745 23.4275ZM13.5 15.2807C11.8873 15.2807 10.3694 14.6455 9.22749 13.4923C8.08558 12.3391 7.45665 10.8063 7.45665 9.17758C7.45665 7.54892 8.08558 6.01605 9.22749 4.86285C10.3694 3.70966 11.8873 3.07451 13.5 3.07451C15.1127 3.07451 16.6306 3.70966 17.7725 4.86285C18.9144 6.01605 19.5433 7.54892 19.5433 9.17758C19.5433 10.8063 18.9144 12.3391 17.7725 13.4923C16.6306 14.6455 15.1127 15.2807 13.5 15.2807Z"
                        fill="white"/>
                </svg>

            </div>
            <div onClick={() => goTo("/new-channel")} className={`add ${selected === 3 ? "active" : ""}`}>
                <svg className="icon-add" width="27" height="29" viewBox="0 0 27 29" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12.3574 28.2109H14.6426C14.8457 28.2109 14.9473 28.1094 14.9473 27.9062V1.09375C14.9473 0.890625 14.8457 0.789062 14.6426 0.789062H12.3574C12.1543 0.789062 12.0527 0.890625 12.0527 1.09375V27.9062C12.0527 28.1094 12.1543 28.2109 12.3574 28.2109Z"
                        fill="white"/>
                    <path
                        d="M0.703125 15.9473H26.2969C26.5 15.9473 26.6016 15.8457 26.6016 15.6426V13.3574C26.6016 13.1543 26.5 13.0527 26.2969 13.0527H0.703125C0.5 13.0527 0.398438 13.1543 0.398438 13.3574V15.6426C0.398438 15.8457 0.5 15.9473 0.703125 15.9473Z"
                        fill="white"/>
                </svg>

            </div>
        </div>
    )
}
export default Menu
