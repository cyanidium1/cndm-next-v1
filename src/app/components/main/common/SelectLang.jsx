import { Select, SelectItem } from "@heroui/react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const options = [
  {
    value: "en",
    label: "En",
  },
  {
    value: "uk",
    label: "Uk",
  },
];

const SelectLang = () => {
  const router = useRouter();
  const localeActive = useLocale();

  const [currentLanguage, setCurrentLanguage] = useState(new Set([]));
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    if (currentLanguage.size === 0) {
      setCurrentLanguage(new Set([localeActive || "en"]));
    }
  }, [localeActive]);

  const onChange = (newValue) => {
    if (newValue) {
      setIsPending(true);
      const language = Array.from(newValue)[0];
      router.replace(`/${language}`);
      setCurrentLanguage(new Set([language]));
      setIsPending(false);
    }
  };

  return (
    <div className="flex w-20 flex-wrap">
      <Select
        selectedKeys={isPending ? "" : currentLanguage}
        onSelectionChange={onChange}
        aria-label="Select Language"
        className="max-w-xs"
      >
        {options.map(({ value, label }) => (
          <SelectItem key={value} value={value}>
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};

export default SelectLang;
