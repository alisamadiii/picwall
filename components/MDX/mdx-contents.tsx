/* eslint-disable */

"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { useMDXComponent } from "next-contentlayer2/hooks";
import Image from "next/image";

import { cn } from "@/lib/utils";
import TechIcons from "./tech-icons";
import CopyButton from "./copy-button";
import { PREVIEWS } from "@/__registry__";

const components = {
  h1: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className="group hover:text-primary-hover mb-8 flex scroll-m-12 items-center gap-2 text-3xl font-bold [&_a]:text-inherit [&_code]:text-[21px] [&+p]:mt-0!"
      {...props}
    >
      {children}

      <svg
        viewBox="0 0 16 16"
        height="0.7em"
        width="0.7em"
        className="hidden group-hover:block"
      >
        <g strokeWidth="1.2" fill="none" stroke="currentColor">
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
          ></path>
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
          ></path>
        </g>
      </svg>
    </h1>
  ),
  h2: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="group hover:text-primary-hover [&_a:hover]:text-primary-hover mt-12 mb-6 flex w-full scroll-m-12 items-center gap-2 text-2xl font-medium [&_a]:text-inherit [&_code]:text-[21px] [&+p]:mt-0!"
      {...props}
    >
      {children}
      <svg
        viewBox="0 0 16 16"
        height="0.6em"
        width="0.6em"
        className="hidden group-hover:block"
      >
        <g strokeWidth="1.2" fill="none" stroke="currentColor">
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
          ></path>
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
          ></path>
        </g>
      </svg>
    </h2>
  ),
  h3: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="group hover:text-primary-hover [&_a:hover]:text-primary-hover mt-[1.6rem] mb-[0.6rem] flex scroll-m-12 items-center gap-2 text-xl font-medium [&_a]:text-inherit [&_code]:text-[21px] [&+p]:mt-0!"
      {...props}
    >
      {children}
      <svg
        viewBox="0 0 16 16"
        height="0.6em"
        width="0.6em"
        className="hidden group-hover:block"
      >
        <g strokeWidth="1.2" fill="none" stroke="currentColor">
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
          ></path>
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
          ></path>
        </g>
      </svg>
    </h3>
  ),
  h4: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h4
      className="group hover:text-primary-hover [&_a:hover]:text-primary-hover mt-[1.6rem] mb-[0.6rem] flex scroll-m-12 items-center gap-2 font-medium [&_a]:text-inherit [&_code]:text-[21px] [&+p]:mt-0!"
      {...props}
    >
      {children}
      <svg
        viewBox="0 0 16 16"
        height="0.6em"
        width="0.6em"
        className="hidden group-hover:block"
      >
        <g strokeWidth="1.2" fill="none" stroke="currentColor">
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M8.995,7.005 L8.995,7.005c1.374,1.374,1.374,3.601,0,4.975l-1.99,1.99c-1.374,1.374-3.601,1.374-4.975,0l0,0c-1.374-1.374-1.374-3.601,0-4.975 l1.748-1.698"
          ></path>
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            d="M7.005,8.995 L7.005,8.995c-1.374-1.374-1.374-3.601,0-4.975l1.99-1.99c1.374-1.374,3.601-1.374,4.975,0l0,0c1.374,1.374,1.374,3.601,0,4.975 l-1.748,1.698"
          ></path>
        </g>
      </svg>
    </h4>
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <p className="my-5" {...props} />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="my-5 scroll-m-20 pl-8 text-base leading-7" {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="relative my-2 flex items-center before:absolute before:top-3 before:h-px before:w-[6.8px] before:-translate-x-5 before:bg-[#888]"
      {...props}
    />
  ),
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className="border-code bg-code rounded-md px-[0.25rem] py-[0.12rem] text-sm"
      {...props}
    ></code>
  ),
  blockquote: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <blockquote
      className="border-wrapper rounded-md p-[22.4px] text-sm [&_code]:text-xs [&_li]:block [&_li]:text-sm [&_p]:my-0"
      {...props}
    ></blockquote>
  ),
  table: ({ className, ...props }: React.HTMLAttributes<HTMLTableElement>) => (
    <table
      className={cn(
        "[&_a>code]: [&_a>code:hover]:text-opacity-70 [&_a>code]:text-primary! my-8 w-full text-sm [&_code]:text-[12.25px] [&>thead]:hidden",
        className
      )}
      {...props}
    />
  ),
  tr: ({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className={cn("border-t-wrapper-2 h-[41px]", className)} {...props} />
  ),
  th: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className={cn("px-4 py-2 text-left font-bold", className)} {...props} />
  ),
  td: ({ className, ...props }: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className={cn("px-4 py-2 text-left", className)} {...props} />
  ),
  // START - Code Syntax Highlighter
  figure: ({
    children,
    className,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {}) => {
    const [showCopyButton, setShowCopyButton] = useState(false);
    const figureRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (!figureRef.current?.querySelector("figcaption")) {
        setShowCopyButton(true);
      }
    }, [figureRef.current]);

    return (
      <figure
        ref={figureRef}
        className={cn(
          "group bg-light relative my-4 max-h-[400px] w-full overflow-auto rounded-md shadow-sm **:data-line:px-[20px] dark:border dark:bg-neutral-900 [&_code]:rounded-none [&_code]:border-none [&_code]:bg-transparent! [&_code]:px-0 [&_code]:py-[20px] [&_code]:text-[13px]"
        )}
        {...props}
      >
        {showCopyButton && (
          <CopyButton
            value={figureRef.current?.querySelector("pre")?.textContent || ""}
            className="sticky top-2 right-2 left-2 mb-[-32px] ml-auto hidden group-hover:flex"
          />
        )}

        {children}
      </figure>
    );
  },
  figcaption: ({
    className,
    children,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {}) => {
    const copyTextRef = useRef<HTMLPreElement>(null);
    const [_, setIsMounted] = useState(false);

    useEffect(() => {
      if (copyTextRef.current) {
        setIsMounted(true);
      }
    }, []);

    return (
      <figcaption
        ref={copyTextRef}
        className="sticky top-0 left-0 flex h-[48px] items-center gap-2 border-b bg-inherit pr-3 pl-4 text-[13px]"
        {...props}
      >
        <TechIcons
          // @ts-ignore
          name={props["data-language"]}
          className=""
        />
        <span className="inline-block grow">
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                copyTextRef.current?.querySelector("span")
                  ?.textContent as string
              )
            }
            className="hover:opacity-80 active:scale-95"
            title="Copy"
          >
            {children}
          </button>
        </span>
        {copyTextRef.current && (
          <CopyButton
            value={copyTextRef.current?.nextElementSibling?.textContent || ""}
          />
        )}
      </figcaption>
    );
  },
  pre: ({ className, ...props }: React.HTMLAttributes<HTMLPreElement> & {}) => {
    return (
      <>
        <pre {...props} />
      </>
    );
  },
  // END - Code Syntax Highlighter
  a: ({ className, ...props }: React.ComponentProps<typeof Link>) => (
    <Link
      className={cn(
        "text-primary hover:text-primary-hover font-medium",
        className
      )}
      {...props}
    />
  ),
  img: ({ className, alt, ...props }: React.ComponentProps<typeof Image>) => (
    <Image
      className={cn("my-8 rounded-md", className)}
      width={800}
      height={800}
      alt={alt}
      {...props}
    />
  ),
  Preview: ({
    name,
    className,
  }: React.HTMLAttributes<HTMLDivElement> & { name?: string }) => {
    try {
      if (!name) {
        return <div className="text-red-500">No name provided</div>;
      }

      const Component = PREVIEWS[name as keyof typeof PREVIEWS].component;

      return (
        <div
          className={cn(
            "min-h-60 rounded-lg p-8 shadow-sm dark:border",
            className
          )}
        >
          <Component />
        </div>
      );
    } catch (error) {
      return <div className="text-red-500">Component not found</div>;
    }
  },
};

export function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}
