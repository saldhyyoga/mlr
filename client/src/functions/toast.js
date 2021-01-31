import { toast } from 'react-toastify';

const success = (message, url) => {
  url ?
  toast.success(`${message}`, {
    onClose: () => window.location.href=`/${url}`,
    autoClose: 1000
  }) :
  toast.success(`${message}`, {
    autoClose: 1000
  })
}

const error = message => {
  toast.error(`${message}`,{
    autoClose: 1000
  })
}

export { success, error };
