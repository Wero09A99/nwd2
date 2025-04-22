import {toast} from "react-toastify";

const useTostifyNotifications = () => {

    const notifySuccess = ( content: string ) => {
        toast.success(content, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const notifyError = ( content: string ) => {
        toast.error(content, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    return {
        notifySuccess,
        notifyError
    }
}

export default useTostifyNotifications;