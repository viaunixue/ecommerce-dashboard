"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
    const storeModal = useStoreModal();

    return(
        <Modal
            title = "가게 생성하기"
            description="제품과 카테고리를 관리하기 위한 새로운 스토어 추가하기"
            isOpen= {storeModal.isOpen}
            onClose={storeModal.onClose}
        >
            Future Create Store Form
        </Modal>
    );
}