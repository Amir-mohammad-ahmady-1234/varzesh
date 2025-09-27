'use client'
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { mockSupportTickets } from "../../../mocks/mock-data";
import { SupportTicket } from "../../../types/adminPanelTypes";

export function useTicketStates() {
  const params = useParams();
  const router = useRouter();
  const ticketId = params.id as string;
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [ticket, setTicket] = useState<SupportTicket | null>(
    mockSupportTickets.find((t) => t.id === ticketId) ?? null
  );

  //   const [loading, setLoading] = useState(false);
  const [replyMessage, setReplyMessage] = useState("");
  const [internalNote, setInternalNote] = useState("");
  const [showInternalNote, setShowInternalNote] = useState(false);

  useEffect(() => {
    // Auto scroll to bottom when new messages arrive
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [ticket?.messages]);

  return {
    params,
    router,
    ticketId,
    messagesEndRef,
    ticket,
    setTicket,
    replyMessage,
    setReplyMessage,
    internalNote,
    setInternalNote,
    showInternalNote,
    setShowInternalNote,
  };
}
