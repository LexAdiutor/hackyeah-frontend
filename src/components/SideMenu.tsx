import { useEffect, useState } from "react";

type Props = {
    cookieHash: string | null;
    setCookieHash: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function SideMenu({ cookieHash, setCookieHash }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const [copyDialog, setCopyDialog] = useState<HTMLDialogElement | null>(null);
    const [pasteDialog, setPasteDialog] = useState<HTMLDialogElement | null>(null);
    const [hashInput, setHashInput] = useState<HTMLInputElement | null>(null);

    useEffect(() => {
        const copyDialogEl = document.querySelector("#copyDialog") as HTMLDialogElement;
        setCopyDialog(() => copyDialogEl);
        
        const pasteDialogEl = document.querySelector("#pasteDialog") as HTMLDialogElement;
        setPasteDialog(() => pasteDialogEl);

        const hashInputEl = document.querySelector("#hashInput") as HTMLInputElement;
        setHashInput(() => hashInputEl);
    })

    return (
        <>
            <div className={`flex flex-col gap-4 absolute z-50 top-32 left-0 p-12 transition duration-200 rounded-lg bg-primary ${isOpen ? "translate-x-2" : "-translate-x-48"}`}>
                <button className="btn btn-circle btn-sm absolute top-2 right-2" onClick={() => setIsOpen((prev) => !prev)}>
                    <span className="icon">{isOpen ? "close" : "chevron_right"}</span>
                </button>

                <button className="btn" onClick={() => copyDialog!.showModal() }>Pokaz hash sesji</button>
                <button className="btn" onClick={() => pasteDialog!.showModal() }>Nadpisz hash sesji</button>
            </div>

            <dialog id="copyDialog" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <span className="icon">close</span>
                        </button>
                    </form>
                    <h3 className="text-lg font-bold mb-2">Skopiuj hash sesji</h3>
                    {
                        cookieHash ?
                            <label className="input input-bordered flex items-center gap-2">
                                <p className="grow overflow-x-auto">{cookieHash}</p>
                                <button
                                    onClick={async () => {
                                        await navigator.clipboard.writeText(cookieHash);
                                    }}
                                >
                                    <span className="icon">content_copy</span>
                                </button>
                            </label>
                        :
                            <p>nie posiadasz hasha sesji</p>
                    }
                    
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

            <dialog id="pasteDialog" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            <span className="icon">close</span>
                        </button>
                    </form>
                    <h3 className="text-lg font-bold">Nadpisz hash sesji</h3>
                    <label className="input input-bordered flex items-center gap-2 my-2">
                        <input className="grow overflow-x-auto" id="hashInput" />
                        <button
                            onClick={async () => {
                                if (!hashInput) return;

                                const hash = await navigator.clipboard.readText();
                                hashInput.value = hash
                            }}
                        >
                            <span className="icon">content_copy</span>
                        </button>
                    </label>
                    <div className="modal-action mt-0">
                        <button
                            className="btn"
                            onClick={() => {
                                console.log('asd')
                                setCookieHash(() => hashInput?.value ?? "");
                                pasteDialog?.close();
                            }}
                        >
                            Zapisz
                        </button>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}