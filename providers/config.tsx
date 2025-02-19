"use client";

import { Laptop, ShieldAlert, Smartphone } from "lucide-react";
import { motion } from "motion/react";
import type { Session } from "better-auth";
import { formatDistanceToNow } from "date-fns";

import {
  useGetActiveSessionsQuery,
  useGetSessionQuery,
  useResendVerificationEmailMutation,
  useRevokeSessionMutation,
} from "@/lib/endpoints";
import { Badge } from "@/components/ui/badge";
import Loader from "@/components/loader";
import { Button } from "@/components/ui/button";
import { parseUserAgent } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
}

function EachSession({ device }: { device: Session }) {
  const session = useGetSessionQuery();
  const revokeSession = useRevokeSessionMutation();

  const deviceInfo = parseUserAgent(device.userAgent || "");
  const isCurrentDevice = device.token === session.data?.session.token;

  return (
    <div
      key={device.id}
      className="bg-background flex items-center justify-between gap-4 rounded-lg p-3"
    >
      <div className="flex items-start gap-3">
        <span className="text-muted-foreground mt-1 shrink-0">
          {device.userAgent?.includes("Mobile") ? (
            <Smartphone className="h-5 w-5" />
          ) : (
            <Laptop className="h-5 w-5" />
          )}
        </span>
        <div className="flex flex-col gap-0.5">
          <span className="flex items-center gap-2">
            <span className="font-medium">{deviceInfo.os}</span>
            {isCurrentDevice && (
              <Badge variant="secondary" className="text-xs">
                Current device
              </Badge>
            )}
          </span>
          <span className="text-muted-foreground text-sm">
            {deviceInfo.browser}
          </span>
          <span className="text-muted-foreground text-xs">
            Last active:{" "}
            {formatDistanceToNow(device.createdAt, {
              addSuffix: true,
            })}
          </span>
        </div>
      </div>

      <Button
        variant="destructive"
        size="sm"
        className="shrink-0"
        onClick={() => revokeSession.mutate(device.token)}
        disabled={revokeSession.isPending}
      >
        {revokeSession.isPending ? <Loader className="h-4 w-4" /> : "Sign out"}
      </Button>
    </div>
  );
}
