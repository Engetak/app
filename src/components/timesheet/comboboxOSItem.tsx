/* "use client"

import * as React from "react"
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { os } from "@/database/OS/database"
import { useComboboxContext } from "./comboboxContext"

export function ComboboxOSItem() {
  const [open, setOpen] = React.useState(false)

  const { activeOS, setActiveOS, activeItem, setActiveItem, activeReference, setActiveReference, activeHours, setActiveHours } = useComboboxContext();

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          disabled={activeOS == "" ? true : false}
          variant="secondary"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {activeOS
            ? os.find((os) => os.name === activeOS)?.items.find((item) => item.desc === activeItem)?.number
            : "Select Item..."
          }
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search Item" className="h-9" />
          <CommandEmpty>No Items found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {os
                .find((osItem) => osItem.name === activeOS)
                ?.items.map((items) => (
                  <CommandItem
                    key={items.number}
                    value={items.desc}
                    onSelect={(currentValue) => {
                      setActiveItem(currentValue === activeItem ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    {items.number + "_" + items.desc}
                  </CommandItem>
                ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
 */