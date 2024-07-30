import { useState, useCallback } from "react";
import toast from "react-hot-toast";
import { Modal, Radio } from "antd";

export const ManageToast = () => {
  const [hasShownSuccessToast, setHasShownSuccessToast] = useState(false);

  const showToast = useCallback(
    (message, type = "success") => {
      if (type === "success") {
        if (!hasShownSuccessToast) {
          toast.success(message);
          setHasShownSuccessToast(true);
        }
      } else if (type === "error") {
        toast.error(message);
      } else {
        toast(message);
      }
    },
    [hasShownSuccessToast]
  );

  const resetSuccessToast = useCallback(() => {
    setHasShownSuccessToast(false);
  }, []);

  return { showToast, resetSuccessToast };
};

export const ModalApprove = ({
  title,
  data,
  isModal = false,
  onSave,
  onCancel,
  onChange,
}) => {
  return (
    <Modal title={title} open={isModal} onOk={onSave} onCancel={onCancel}>
      <Radio.Group
        name="radiogroup"
        value={data?.status}
        onChange={(e) => onChange((a) => ({ ...a, status: e.target.value }))}
      >
        <Radio value="yes">อนุมัติ</Radio>
        <Radio value="no">ไม่อนุมัติ</Radio>
      </Radio.Group>
    </Modal>
  );
};
