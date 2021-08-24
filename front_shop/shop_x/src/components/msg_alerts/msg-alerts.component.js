
import Swal from 'sweetalert2'

const Message =(msg,type)=> Swal.fire({
    type:type,
    title:msg
});

export default Message;