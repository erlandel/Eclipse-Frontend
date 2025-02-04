import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import { ReactNode } from "react";

interface DropdownItemProps {
  key: string;
  label: string;
  description?: string;
  shortcut?: string;
  startContent?: ReactNode;
  isDanger?: boolean;
  onClick?: () => void;
}

interface CustomDropdownProps {
  buttonContent: ReactNode;
  items: DropdownItemProps[];
}

export default function CustomDropdown({ buttonContent, items }: CustomDropdownProps) {
  return (
    <Dropdown className="min-w-40">
      <DropdownTrigger>
        <div className="flex items-center cursor-pointer">
          {buttonContent}
        </div>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu">
        {items.map((item) => (
          <DropdownItem
            key={item.key}
            shortcut={item.shortcut}
            description={item.description}
            startContent={item.startContent}
            className={item.isDanger ? "text-danger" : ""} // Usando className para el color del texto
            color={item.isDanger ? "danger" : undefined} // Asignando el color de NextUI si es peligroso
            onClick={item.onClick}
          >
            {item.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
}
