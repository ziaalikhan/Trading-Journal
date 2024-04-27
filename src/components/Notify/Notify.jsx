import Swal from "sweetalert2"

export const Notify = (type, message, title) => {
    return Swal.fire(
        title,
        message,
        type
    )
}