import Canvas from "@/components/canvas";
import Image from "next/image";

export default function Home() {
    return (
        <section>
            <div className="mt-4 absolute top-0 z-[250] w-full flex justify-center">
                <div className="flex items-center gap-3 text-slate-400">
                    <Image
                        src='/logo.svg'
                        alt="Logo"
                        width={200}
                        height={200}
                    />
                    |
                    <p className="text-sm">By <span className="font-semibold">Vinojan</span></p>
                </div>
            </div>
            <Canvas />
        </section>
    );
}
