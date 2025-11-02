import type { ReactNode } from "react";

import { toast as sonnerToast } from "sonner";

type ToastVariant = "default" | "destructive" | "success" | "info" | "warning" | "loading";

interface ToastOptions {
  title?: ReactNode;
  description?: ReactNode;
  variant?: ToastVariant;
  duration?: number;
}

const resolveMessage = (title?: ReactNode, description?: ReactNode) => {
  if (title) return title;
  return description ?? "";
};

const toast = ({ title, description, variant = "default", duration }: ToastOptions) => {
  const message = resolveMessage(title, description);
  const options = {
    description: title ? description : undefined,
    duration,
  };

  switch (variant) {
    case "destructive":
      return sonnerToast.error(message, options);
    case "success":
      return sonnerToast.success(message, options);
    case "info":
      return sonnerToast.info(message, options);
    case "warning":
      return sonnerToast.warning(message, options);
    case "loading":
      return sonnerToast.loading(message, options);
    default:
      return sonnerToast(message, options);
  }
};

const useToast = () => ({
  toast,
  dismiss: sonnerToast.dismiss,
});

export { useToast, toast };
