import Image from "next/image";

export default function Header() {
    return (
        <header>
            <Image
                src="/icons/logo-large.svg"
                alt="Typing Speed Test"
                width={240}
                height={24}
            />
        </header>
    );
}
