import React from "react";
import { CheckCircle2, AlertTriangle, Eye, HelpCircle } from "lucide-react";
import { getVerificationBadgeInfo } from "@/lib/utils";

interface VerificationBadgeProps {
  status: string;
}

export function VerificationBadge({ status }: VerificationBadgeProps) {
  const info = getVerificationBadgeInfo(status);

  const getIcon = () => {
    switch (status) {
      case "official":
      case "confirmed":
        return <CheckCircle2 className="w-3.5 h-3.5" />;
      case "observed":
        return <Eye className="w-3.5 h-3.5" />;
      case "community-reported":
        return <HelpCircle className="w-3.5 h-3.5" />;
      case "speculation":
      default:
        return <AlertTriangle className="w-3.5 h-3.5" />;
    }
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${info.color}`}
    >
      {getIcon()}
      <span>{info.label}</span>
    </span>
  );
}

