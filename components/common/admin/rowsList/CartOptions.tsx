"use client";
import React, { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { TbStatusChange } from "react-icons/tb";

import Button from "../../Button";

interface Props {
  id: number;
  onDelete?: (formData: FormData) => Promise<unknown>;
  onUpdate?: (formData: FormData) => Promise<unknown>;
  onChangeStatus?: (formData: FormData) => Promise<unknown>;
}

export default function CartOptions({
  id,
  onDelete,
  onUpdate,
  onChangeStatus,
}: Props) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex items-center gap-2 flex-shrink-0">
      {/* <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleQuickReply(id.toString());
        }}
        className="cursor-pointer"
      >
        <MdReply className="w-4 h-4" />
      </Button>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          handleTicketClick(id.toString());
        }}
        className="cursor-pointer"
      >
        <MdVisibility className="w-4 h-4" />
      </Button> */}

      {onUpdate && (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => setIsEditing((p) => !p)}
          className="cursor-pointer"
        >
          <MdEdit className="w-4 h-4" />
        </Button>
      )}

      {onChangeStatus && (
        <form action={onChangeStatus} className="inline-flex">
          <input type="hidden" name="id" value={id} />
          <Button
            size="sm"
            variant="ghost"
            type="submit"
            className="cursor-pointer"
          >
            <TbStatusChange className="w-4 h-4" />
          </Button>
        </form>
      )}

      {onDelete && (
        <form action={onDelete} className="inline-flex">
          <input type="hidden" name="id" value={id} />
          <Button
            size="sm"
            variant="ghost"
            type="submit"
            className="cursor-pointer"
          >
            <MdDelete className="w-4 h-4" />
          </Button>
        </form>
      )}

      {/* <Button
        size="sm"
        variant="ghost"
        onClick={() => {
          // Handle more options
        }}
        className="cursor-pointer"
      >
        <MdMoreVert className="w-4 h-4" />
      </Button> */}

      {isEditing && onUpdate && (
        <form action={onUpdate} className="flex items-center gap-2 ml-2">
          <input type="hidden" name="id" value={id} />
          <input
            name="title"
            placeholder="عنوان"
            className="border rounded px-2 py-1 text-sm bg-transparent"
          />
          <input
            name="summary"
            placeholder="خلاصه"
            className="border rounded px-2 py-1 text-sm bg-transparent"
          />
          <Button
            size="sm"
            variant="outline"
            type="submit"
            className="cursor-pointer"
          >
            ذخیره
          </Button>
        </form>
      )}
    </div>
  );
}
