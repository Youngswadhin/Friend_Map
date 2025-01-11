import { useId } from "react";
import { Label } from "../../components/ui/label";
import MultipleSelector, { Option } from "../../components/ui/multiselect";

interface SelectFieldProps {
  value: Option[];
  onChange: (value: Option[]) => void;
  title?: string;
  className?: string;
  placeholder?: string;
  options: { label: string; value: string }[];
  error?: string;
  errorEnabled?: boolean;
  flex?: number;
  name?: string;
}

const SelectField: React.FC<SelectFieldProps> = ({
  value,
  onChange,
  title = "Select frameworks",
  className = "",
  placeholder = "Select frameworks",
  options,
  error,
  errorEnabled = false,
  flex,
}) => {
  const id = useId();

  return (
    <div className="space-y-2" style={{ flex }}>
      <Label htmlFor={id}>{title}</Label>
      <MultipleSelector
        className={className}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        emptyIndicator={<p className="text-center text-sm">No results found</p>}
      />
      {errorEnabled && error && <p className="text-red-600 text-sm">{error}</p>}
      <p
        className="mt-2 text-xs text-muted-foreground"
        role="region"
        aria-live="polite"
      >
        Inspired by{" "}
        <a
          className="underline hover:text-foreground"
          href="https://shadcnui-expansions.typeart.cc/docs/multiple-selector"
          target="_blank"
          rel="noopener nofollow"
        >
          shadcn/ui expansions
        </a>
      </p>
    </div>
  );
};

export default SelectField;
