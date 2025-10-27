"use client";

import { Search } from "lucide-react"
import { Input } from "../ui/input"
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useSearchParams } from "next/navigation";
import { useRouter, usePathname } from "next/navigation";
import qs from "query-string";

export const SearchInput = () => {
  const [value, setValue] = useState("");

  //debounce
  const debouncedValue = useDebounce(value);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentTags = searchParams.getAll("tags");
  const currentQuery = searchParams.get("query");

  useEffect(() => {
    if (debouncedValue === currentQuery) return;
    if (!debouncedValue && !currentQuery) return;

    const url = qs.stringifyUrl({
      url: pathname,
      query: {
        
        tags: currentTags,
        query: debouncedValue,
      },
    }, {
      skipEmptyString: true,
      skipNull: true
    });

    router.push(url);

  }, [currentQuery, currentTags, debouncedValue, pathname, router]);

  return (
    <div className="flex-1 max-w-[400px] relative">
      <Input
        className="h-9 pl-9 peer"
        placeholder="Search a Course"
        onChange={({ target }) => setValue(target.value)}
      />
      <Search
        className="absolute top-1/2 -translate-y-1/2 left-3 text-muted-foreground peer-focus:text-primary transition-all"
        size={16}
      />
    </div>
  )
}