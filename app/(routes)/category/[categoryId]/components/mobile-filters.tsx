"use client";

import { useState } from "react";
import { Color, Size } from "@/types";
import Button from "@/components/ui/button";
import { Plus, X } from "lucide-react/dist/esm/icons";
import { Dialog } from "@headlessui/react";
import IconButton from "@/components/ui/icon-button";

interface MobileFiltersProps {
    sizes: Size[];
    colors: Color[];
}

const MobileFilters: React.FC<MobileFiltersProps> = ({
    sizes,
    colors
}) => {
    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);


    return (
        <>
            <Button onClick={onOpen} className="flex items-center gap-x-2 lg:hidden">
                Filters
                <Plus size={20} />
            </Button>

            <Dialog open={open} as="div" className="relative z-40 lg:hidden" onClose={onClose}>
                {/* Background */}
                <div className="fixed inset-0 bg-black bg-opacity-25" />

                {/* Dialog Position */}
                <div className="fixed inst-0 z-40 flex">
                    <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl" >
                    {/* Close button */}
                    <div className="flex items-center justify-end px-4">

                    </div>
                    </Dialog.Panel>
                </div>
            </Dialog>
        </>
    );
}

export default MobileFilters;