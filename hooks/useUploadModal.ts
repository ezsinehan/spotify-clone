import { create } from "zustand";


interface useUploadModal {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void; 
}

const useUploadModal = create<useUploadModal>((set) => ({
  isOpen: false,
  onOpen: () => set({isOpen: true}),
  onClose: () => set({isOpen: false}),
}))

export default useUploadModal;