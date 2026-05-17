"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "./BookingModal";

interface BookingButtonProps {
  label?: React.ReactNode;
  modalTitle: string;
  service?: string;
  vehicle?: string;
  from?: string;
  to?: string;
  className?: string;
  style?: React.CSSProperties;
  variant?: "default" | "outline" | "ghost" | "link" | "destructive" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
  asText?: boolean;
}

export function BookingButton({
  label = "Book Now",
  modalTitle,
  service,
  vehicle,
  from,
  to,
  className,
  style,
  variant,
  size,
  asText = false,
}: BookingButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {asText ? (
        <button type="button" onClick={() => setOpen(true)} className={className} style={style}>
          {label}
        </button>
      ) : (
        <Button onClick={() => setOpen(true)} className={className} style={style} variant={variant} size={size}>
          {label}
        </Button>
      )}
      <BookingModal
        isOpen={open}
        onClose={() => setOpen(false)}
        title={modalTitle}
        service={service}
        vehicle={vehicle}
        from={from}
        to={to}
      />
    </>
  );
}
