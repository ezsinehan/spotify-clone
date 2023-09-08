"use client"

import Modal from "./Modal";
import useUploadModal from "@/hooks/useUploadModal";

const UploadModal = () => {
  const uploadModal = useUploadModal();
  
  const onChange = (open: boolean) => {
    if (!open) {
      uploadModal.onClose();
    }

  }
  return (     
  <Modal
    title="Welcome Back"
    description="Hi"
    isOpen = {uploadModal.isOpen}
    onChange={onChange}
  >
    Upload Content
  </Modal>
  )
}
 
export default UploadModal;