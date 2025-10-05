import React from "react";
import { Briefcase, Mail, Phone, User } from "lucide-react";

export default function ContentReference({
  name,
  position,
  phone,
  email,
}: {
  name?: string;
  position?: string;
  phone?: string;
  email?: string;
}) {
  return (
    <div className="text-sm font-semibold">
      <div className="flex items-center gap-2">
        <User className="h-4 w-4 text-[#1e56a0]" />
        <span className="text-[#1e56a0]">{name}</span>
      </div>
      <div className="flex items-center gap-2">
        <Briefcase className="h-4 w-4 text-[#1e56a0]" />
        <span className="">{position}</span>
      </div>
      <div className="flex items-center gap-2">
        <Phone className="h-4 w-4 text-[#1e56a0]" />
        <span className="">{phone}</span>
      </div>
      <div className="flex items-center gap-2">
        <Mail className="h-4 w-4 text-[#1e56a0]" />
        <span className="">{email}</span>
      </div>
    </div>
  );
}
